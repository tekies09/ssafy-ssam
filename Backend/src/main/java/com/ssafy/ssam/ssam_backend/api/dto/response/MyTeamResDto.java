package com.ssafy.ssam.ssam_backend.api.dto.response;

import com.ssafy.ssam.ssam_backend.api.dto.request.MyTeamPlayerReqDto;
import com.ssafy.ssam.ssam_backend.domain.entity.MyTeam;
import com.ssafy.ssam.ssam_backend.domain.entity.MyTeamPlayer;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class MyTeamResDto {
    @ApiModelProperty(value = "나만의 팀 아이디")
    private Long myTeamId;
    @ApiModelProperty(value = "나만의 팀 이름")
    private String myTeamName;
    @ApiModelProperty(value = "나만의 팀 선수 리스트")
    private List<MyTeamPlayerResDto> myTeamPlayerResDtoList;

    public MyTeamResDto(MyTeam myTeam){
        this.myTeamId=myTeam.getMyTeamId();
        this.myTeamName=myTeam.getMyTeamName();
    }

    public MyTeamResDto (Long myTeamId, String myTeamName, List<MyTeamPlayerResDto> list){
        this.myTeamId=myTeamId;
        this.myTeamName=myTeamName;
        this.myTeamPlayerResDtoList = list;
    }
}
