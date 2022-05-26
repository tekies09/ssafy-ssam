package com.ssafy.ssam.ssam_backend.api.dto.request;

import com.ssafy.ssam.ssam_backend.domain.entity.User;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserUpdateRequestDto {

    @ApiModelProperty(value = "유저 닉네임")
    private String nickname;

    @Builder
    public UserUpdateRequestDto(User entity) {
        this.nickname = entity.getNickname();
    }
}
