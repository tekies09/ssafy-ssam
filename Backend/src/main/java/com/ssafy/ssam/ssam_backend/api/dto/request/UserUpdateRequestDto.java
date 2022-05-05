package com.ssafy.ssam.ssam_backend.api.dto.request;

import com.ssafy.ssam.ssam_backend.domain.RoleType;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class UserUpdateRequestDto {

    private String password;
    private String email;
    private String nickname;

    @Builder
    public UserUpdateRequestDto(User entity) {
        this.email = entity.getEmail();
        this.password = entity.getPassword();
        this.nickname = entity.getNickname();
    }
}
