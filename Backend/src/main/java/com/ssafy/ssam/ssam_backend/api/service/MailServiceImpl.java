package com.ssafy.ssam.ssam_backend.api.service;


import com.ssafy.ssam.ssam_backend.domain.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Properties;

@Service
public class MailServiceImpl implements MailService {

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

        //전송
        javaMailSender.send(simpleMailMessage);

    }
}
