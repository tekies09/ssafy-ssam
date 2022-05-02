package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.request.UserCreateRequestDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.UserLoginRequestDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.UserUpdateRequestDto;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.User;

import java.util.List;

public interface UserService {

    public boolean DeleteUser(String username);
    public boolean CreateUser(String username, UserCreateRequestDto requestDto);
    public boolean UpdateUser(String username, UserUpdateRequestDto requestDto);
    public boolean DuplicateUsernameCheck(String username);
    public boolean DuplicateNicknameCheck(String nickname);
    public User LoginUser(UserLoginRequestDto requestDto);
    public User FindUserByUsername(String username);
    public User FindUsernameByEmail(String email);
    public User FindUserPasswordByEmailAndUsername(String email,String username);
}
