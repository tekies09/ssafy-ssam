package com.ssafy.ssam.ssam_backend.api.dto.response;

import com.ssafy.ssam.ssam_backend.domain.RoleType;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class UserUpdateDto {

    private String email;
    private String nickname;


    public UserUpdateDto(User entity) {
        this.email= entity.getEmail();
        this.nickname= entity.getNickname();
    }
}
