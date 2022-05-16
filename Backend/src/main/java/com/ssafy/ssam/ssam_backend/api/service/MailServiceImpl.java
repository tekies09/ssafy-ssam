package com.ssafy.ssam.ssam_backend.api.service;


import com.ssafy.ssam.ssam_backend.domain.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Service
public class MailServiceImpl implements MailService {
    @Async("mailExecutor")
    public void sending(User entity, String type) throws Exception {
        String UserEmail = entity.getEmail();
        String Username  = entity.getUsername();
        String Nickname = entity.getNickname();
        String password = entity.getPassword();

        String findtype ="";
        String result= "";
        if(type.equals("id")){
            findtype="아이디";
            result = Username;
        }
        else if(type.equals("pw")){
            findtype="패스워드";
            result = password;
        }

        //넣을 내용 템플릿
        String template = "안녕하세요 " + Nickname + "님 \n"+
                "SSAM 사이트의 등록된 계정 정보는 다음과 같습니다. \n"+
                findtype + " : " + result + "\n"+
                "이용해주셔서 감사합니다.";




        String to = UserEmail;
        String subject = "SSAM : " + type + " 정보 조회 안내 ";
        String msg =template;
        String from ="moontek09@gmail.com";
        String frompassword ="hanlimshare1!";

        Properties props = new Properties();
        props.setProperty("mail.transport.protocol", "smtp");
        props.setProperty("mail.host", "smtp.gmail.com");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.port", "465");
        props.put("mail.debug", "true");
        props.put("mail.smtp.socketFactory.port", "465");
        props.put("mail.smtp.socketFactory.class","javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.socketFactory.fallback", "false");
        Session session = Session.getDefaultInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(from,frompassword);
                    }
                });
        Transport transport = session.getTransport();
        InternetAddress addressFrom = new InternetAddress(from);

        MimeMessage message = new MimeMessage(session);
        message.setSender(addressFrom);
        message.setSubject(subject,"utf-8");
        message.setText(msg,"utf-8","html");
        message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

        transport.connect();
        Transport.send(message);
        transport.close();

    }
    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public void sendMail(User entity, String type) {

        String UserEmail = entity.getEmail();
        String Username  = entity.getUsername();
        String Nickname = entity.getNickname();
        String password = entity.getPassword();

        String findtype ="";
        String result= "";
        if(type.equals("id")){
            findtype="아이디";
            result = Username;
        }
        else if(type.equals("pw")){
            findtype="패스워드";
            result = password;
        }

        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

        //수신인
        simpleMailMessage.setTo(UserEmail);

        //제목
        simpleMailMessage.setSubject("SSAM : " + type + " 정보 조회 안내 ");

        //넣을 내용 템플릿
        String template = "안녕하세요 " + Nickname + "님 \n"+
                "SSAM 사이트의 등록된 계정 정보는 다음과 같습니다. \n"+
                findtype + " : " + result + "\n"+
                "이용해주셔서 감사합니다.";

        //담아주기
        simpleMailMessage.setText(template);

        System.out.println("why ?? : 한글 왜안됨");
        //전송
        System.out.print(UserEmail+"에게 " +template);
        javaMailSender.send(simpleMailMessage);

    }
}
