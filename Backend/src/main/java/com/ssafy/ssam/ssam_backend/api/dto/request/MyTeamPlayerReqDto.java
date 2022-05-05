package com.ssafy.ssam.ssam_backend.api.dto.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MyTeamPlayerReqDto {

    @ApiModelProperty(value = "DB에 등록된 myteamplayer id")
    private Long myTeamPlayerId;
    @ApiModelProperty(value = "DB에 등록된 선수 id")
    private Long playerId;
    @ApiModelProperty(value = "선수 등번호")
    private int backNumber;
    @ApiModelProperty(value = "타순")
    private String battingOrder;
    @ApiModelProperty(value = "수비 포지션")
    private String defensePosition;


}
