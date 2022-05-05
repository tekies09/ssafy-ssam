package com.ssafy.ssam.ssam_backend.api.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class MyTeamPlayerListResDto extends BaseResponseBody{
    MyTeamResDto myTeamResDto;
    public MyTeamPlayerListResDto(Integer statusCode , String message){
        super(statusCode,message);
    }
    public MyTeamPlayerListResDto(Integer statusCode, String message, MyTeamResDto myTeam){
        super(statusCode,message);
        this.myTeamResDto = myTeam;
    }
}
