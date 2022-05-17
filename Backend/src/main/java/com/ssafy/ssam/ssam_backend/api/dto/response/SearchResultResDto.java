package com.ssafy.ssam.ssam_backend.api.dto.response;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SearchResultResDto {

    @ApiModelProperty(value = "선수이름")
    private String name;
    @ApiModelProperty(value = "연도별 기록 id")
    private Long statusId;
    @ApiModelProperty(value = "타자 or 투수")
    private String pitcherOrHitter;
    @ApiModelProperty(value = "연도")
    private String year;


}
