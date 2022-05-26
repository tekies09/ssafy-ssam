package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.request.UserCreateRequestDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.UserLoginRequestDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.UserUpdateRequestDto;
import com.ssafy.ssam.ssam_backend.domain.entity.User;

import java.util.Map;

public interface UserService {

    public boolean DeleteUser(String username);
    public boolean CreateUser( UserCreateRequestDto requestDto);
    public boolean UpdateUser(String username, UserUpdateRequestDto requestDto);
    public boolean DuplicateUsernameCheck(String username);
    public boolean DuplicateNicknameCheck(String nickname);
    public boolean DuplicateEmailCheck(String email);
    public Map<String,Object> LoginUser(UserLoginRequestDto requestDto);
    public User loadUserByUsername(String username);
    public User FindUserByUsername(String username);
    public boolean FindUsernameByEmail(String email) throws Exception;
    public boolean FindUserPasswordByEmailAndUsername(String email,String username) throws Exception;
    public long FindUserIdByUsername(String username);
}
