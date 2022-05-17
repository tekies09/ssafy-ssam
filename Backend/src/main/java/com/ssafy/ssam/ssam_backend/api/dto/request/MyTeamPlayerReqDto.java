package com.ssafy.ssam.ssam_backend.api.dto.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MyTeamPlayerReqDto {

    @ApiModelProperty(value = "DB에 등록된 myteamplayer id")
    private Long myTeamPlayerId;
    @ApiModelProperty(value = "연도별 선수 기록의 id", notes = "투수인지 타자인지는 밑에서 판단")
    private Long statusId;
    @ApiModelProperty(value = "선수 등번호")
    private int backNumber;
    @ApiModelProperty(value = "타순")
    private String battingOrder;
    @ApiModelProperty(value = "수비 포지션")
    private String defensePosition;
    @ApiModelProperty(value="투수 or 타자")
    private String pitcherOrHitter;

}
