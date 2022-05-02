package com.ssafy.ssam.ssam_backend.api.service;


import com.ssafy.ssam.ssam_backend.api.dto.request.UserCreateRequestDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.UserLoginRequestDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.UserUpdateRequestDto;
import com.ssafy.ssam.ssam_backend.api.repository.UserRepository;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService, UserDetailsService {

    private final UserRepository userRepository;
    @Override
    public boolean DeleteUser(String username) {
        return false;
    }

    @Override
    public boolean CreateUser(String username, UserCreateRequestDto requestDto) {
        return false;
    }

    @Override
    public boolean UpdateUser(String username, UserUpdateRequestDto requestDto) {
        return false;
    }

    @Override
    public boolean DuplicateUsernameCheck(String username) {
        return false;
    }

    @Override
    public boolean DuplicateNicknameCheck(String nickname) {
        return false;
    }

    @Override
    public User LoginUser(UserLoginRequestDto requestDto) {
        String username = requestDto.getUsername();
        String password = requestDto.getPassword();
        User entity = userRepository.findUserByUsername(username);

        //계정존재X
        if(entity==null) return null;
        //비밀번호일치 X
        if(!entity.getPassword().equals(password)) return null;
        return entity;
    }

    @Override
    public User FindUserByUsername(String username) {
        return null;
    }

    @Override
    public User FindUsernameByEmail(String email) {
        return null;
    }

    @Override
    public User FindUserPasswordByEmailAndUsername(String email, String username) {
        return null;
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findUserByUsername(username);
    }
}
