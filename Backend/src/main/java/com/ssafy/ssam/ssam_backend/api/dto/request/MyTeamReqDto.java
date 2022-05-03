package com.ssafy.ssam.ssam_backend.api.dto.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class MyTeamReqDto {

    @ApiModelProperty(value = "유저 아이디")
    private Long userId;
    @ApiModelProperty(value = "나만의 팀 아이디")
    private Long myTeamId;
    @ApiModelProperty(value = "나만의 팀 이름")
    private String myTeamName;
    @ApiModelProperty(value = "나만의 팀 선수 리스트")
    private List<MyTeamPlayerReqDto> myTeamPlayerReqDtoList;


}
