package com.ssafy.ssam.ssam_backend.api.service;


import com.ssafy.ssam.ssam_backend.api.dto.request.UserCreateRequestDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.UserLoginRequestDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.UserUpdateRequestDto;
import com.ssafy.ssam.ssam_backend.api.repository.UserRepository;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService, UserDetailsService {

    private final UserRepository userRepository;
    private final MailService mailService;
    @Override
    @Transactional
    public boolean DeleteUser(String username) {
        User entity = userRepository.findUserByUsername(username);
        try {
            userRepository.delete(entity);
        }
        catch (Exception e){
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean CreateUser(UserCreateRequestDto requestDto) {
        try {
            userRepository.save(requestDto.toEntity());
        }
        catch (Exception e){
            return false;
        }

        return true;
    }

    @Override
    @Transactional
    public boolean UpdateUser(String username, UserUpdateRequestDto requestDto) {
        User entity = userRepository.findUserByUsername(username);
        try {
            entity.update(requestDto.getNickname());
        }
        catch (Exception e){
            return false;
        }

        return true;
    }

    @Override
    public boolean DuplicateUsernameCheck(String username) {
        User entity = userRepository.findUserByUsername(username);

        if(entity==null) return true;

        return false;
    }

    @Override
    public boolean DuplicateNicknameCheck(String nickname) {
        User entity = userRepository.findUserByNickname(nickname);

        if(entity==null) return true;
        return false;
    }

    @Override
    public boolean DuplicateEmailCheck(String email) {
        User entity = userRepository.findUserByEmail(email);

        if(entity==null) return true;
        return false;
    }

    @Override
    public Map<String,Object> LoginUser(UserLoginRequestDto requestDto) {
        String username = requestDto.getUsername();
        String password = requestDto.getPassword();
        User entity = userRepository.findUserByUsername(username);
        Map<String, Object> map = new HashMap<>();
        String result = "Success";
        //계정존재X
        if(entity==null){
            result = "NotExistAccount";
        }
        //비밀번호일치 X
        else if(!entity.getPassword().equals(password)){
            result = "NotMatchAccount";
        }
        else {
            map.put("user",entity);
        }
        map.put("result",result);
        return map;
    }

    @Override
    public User FindUserByUsername(String username) {
        return null;
    }

    @Override
    public boolean FindUsernameByEmail(String email) throws Exception{
        User entity = userRepository.findUserByEmail(email);
        System.out.println(email);
        if(entity!=null) {
            mailService.sending(entity,"id");
        }
        return true;
    }

    @Override
    public boolean FindUserPasswordByEmailAndUsername(String email, String username) throws Exception {
        User entity = userRepository.findUserByEmailAndUsername(email,username);
        if(entity!=null){
            mailService.sending(entity,"pw");
        }
        return true;
    }

    @Override
    public long FindUserIdByUsername(String username) {
        User entity = userRepository.findUserByUsername(username);
        return entity.getUserId();
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findUserByUsername(username);
    }
}
