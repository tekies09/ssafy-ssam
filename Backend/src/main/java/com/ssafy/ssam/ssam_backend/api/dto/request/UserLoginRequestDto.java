package com.ssafy.ssam.ssam_backend.api.dto.request;


import com.ssafy.ssam.ssam_backend.domain.entity.User;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;


@Getter
@NoArgsConstructor
public class UserLoginRequestDto {
    @ApiModelProperty(value = "유저 아이디")
    private String username;
    @ApiModelProperty(value = "유저 비밀번호")
    private String password;

    @Builder
    public UserLoginRequestDto(User entity) {
        this.username= entity.getUsername();
        this.password = entity.getPassword();
    }
}
