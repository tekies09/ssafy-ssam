package com.ssafy.ssam.ssam_backend.api.dto.request;

import com.ssafy.ssam.ssam_backend.domain.RoleType;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class UserCreateRequestDto {
    private long userId;
    @ApiModelProperty(value = "유저 아이디")
    private String username;
    @ApiModelProperty(value = "유저 비밀번호")
    private String password;
    @ApiModelProperty(value = "유저 이메일")
    private String email;
    @ApiModelProperty(value = "닉네임")
    private String nickname;
    @ApiModelProperty(value = "유저 역할")
    private RoleType role;
    @ApiModelProperty(value = "가입날짜")
    private LocalDateTime joined_date;


    @Builder
    public UserCreateRequestDto(User entity) {
        this.username = entity.getUsername();
        this.password = entity.getPassword();
        this.email = entity.getEmail();
        this.role = RoleType.USER;
        this.nickname = entity.getNickname();
        this.joined_date =  LocalDateTime.now();
    }

    public User toEntity(){
        return User.builder().username(username).password(password).email(email).role(RoleType.USER).nickname(nickname).joined_date(LocalDateTime.now()).build();
    }
}
