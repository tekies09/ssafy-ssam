package com.ssafy.ssam.ssam_backend.api.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PlayerInfoResultResDto extends BaseResponseBody{

    PlayerInfoResDto playerInfoResDto;

    public PlayerInfoResultResDto(Integer statusCode, String message){
        super(statusCode, message);
    }
    public PlayerInfoResultResDto(Integer statusCode, String message,PlayerInfoResDto playerInfoResDto){
        super(statusCode, message);
        this.playerInfoResDto=playerInfoResDto;
    }


}
