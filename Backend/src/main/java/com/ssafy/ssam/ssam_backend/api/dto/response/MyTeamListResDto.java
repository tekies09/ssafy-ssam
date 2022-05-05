package com.ssafy.ssam.ssam_backend.api.dto.response;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class MyTeamListResDto extends BaseResponseBody{

    @ApiModelProperty(value = "유저의 나만의 팀 리스트")
    List<MyTeamResDto> myTeamList;

    public MyTeamListResDto(Integer statusCode , String message){
        super(statusCode,message);
    }
    public MyTeamListResDto(Integer statusCode, String message, List<MyTeamResDto> list){
        super(statusCode,message);
        this.myTeamList=list;
    }

}
