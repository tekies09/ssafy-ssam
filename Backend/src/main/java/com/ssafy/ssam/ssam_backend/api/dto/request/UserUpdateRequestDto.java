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
public class UserUpdateRequestDto {

    @ApiModelProperty(value = "유저 아이디")
    private String nickname;
    @ApiModelProperty(value = "유저 비밀번호")
    private String password;
    @ApiModelProperty(value = "유저 이메일")
    private String email;


    @Builder
    public UserUpdateRequestDto(User entity) {
        this.email = entity.getEmail();
        this.password = entity.getPassword();
        this.nickname = entity.getNickname();
    }
}
