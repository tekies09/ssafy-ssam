package com.ssafy.ssam.ssam_backend.api.dto.response;

import com.ssafy.ssam.ssam_backend.domain.RoleType;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor
public class UserResponseDto {

    private long userId;
    private String username;
    private String password;
    private String email;
    private RoleType role;
    private LocalDateTime joined_date;
    private String nickname;


    public UserResponseDto(User entity) {
        this.userId= entity.getUserId();
        this.username= entity.getUsername();
        this.password= entity.getPassword();
        this.email= entity.getEmail();
        this.role = entity.getRole();
        this.joined_date= entity.getJoined_date();
        this.nickname= entity.getNickname();
    }
}
