package com.ssafy.ssam.ssam_backend.api.dto.request;


import com.ssafy.ssam.ssam_backend.domain.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;


@Getter
@NoArgsConstructor
public class UserLoginRequestDto {
    private String username;
    private String password;

    @Builder
    public UserLoginRequestDto(User entity) {
        this.username= entity.getUsername();
        this.password = entity.getPassword();
    }
}
