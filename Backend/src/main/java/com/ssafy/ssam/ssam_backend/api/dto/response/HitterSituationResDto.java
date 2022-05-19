package com.ssafy.ssam.ssam_backend.api.dto.response;

import com.ssafy.ssam.ssam_backend.domain.entity.HitterSituationStatus;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;


import java.math.BigDecimal;

@Getter
@NoArgsConstructor
public class HitterSituationResDto {
    @ApiModelProperty(value = "선수이름")
    private String name;
    @ApiModelProperty(value = "연도")
    private String years;

    @ApiModelProperty(value = "주자없음")
    private BigDecimal noRunner;
    @ApiModelProperty(value = "1루")
    private BigDecimal firB;
    @ApiModelProperty(value = "2루")
    private BigDecimal secB;
    @ApiModelProperty(value = "3루")
    private BigDecimal thrB;
    @ApiModelProperty(value = "1,2루")
    private BigDecimal firAndSecB;
    @ApiModelProperty(value = "1,3루")
    private BigDecimal firAndThrB;
    @ApiModelProperty(value = "2,3루")
    private BigDecimal secAndThrB;
    @ApiModelProperty(value = "만루")
    private BigDecimal fullyB;
    @ApiModelProperty(value = "주자있음")
    private BigDecimal runner;
    @ApiModelProperty(value = "득점권")
    private BigDecimal risp;//runners in scoring position

    public HitterSituationResDto(HitterSituationStatus hitterSituationStatus){
        this.name = hitterSituationStatus.getPlayer().getPlayerName();
        this.years = hitterSituationStatus.getYears();
        this.noRunner = hitterSituationStatus.getNoRunner();
        this.firB = hitterSituationStatus.getFirB();
        this.secB = hitterSituationStatus.getSecB();
        this.thrB = hitterSituationStatus.getThrB();
        this.firAndSecB = hitterSituationStatus.getFirAndSecB();
        this.secAndThrB = hitterSituationStatus.getSecAndThrB();
        this.fullyB = hitterSituationStatus.getFullyB();
        this.runner = hitterSituationStatus.getRunner();
        this.risp = hitterSituationStatus.getRisp();
    }
}
