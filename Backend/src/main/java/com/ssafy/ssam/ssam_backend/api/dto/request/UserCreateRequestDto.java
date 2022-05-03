package com.ssafy.ssam.ssam_backend.api.dto.request;

import com.ssafy.ssam.ssam_backend.domain.RoleType;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@NoArgsConstructor
public class UserCreateRequestDto {
    private long userId;
    private String username;
    private String password;
    private String email;
    private RoleType role;
    private LocalDateTime joined_date;
    private String nickname;

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
