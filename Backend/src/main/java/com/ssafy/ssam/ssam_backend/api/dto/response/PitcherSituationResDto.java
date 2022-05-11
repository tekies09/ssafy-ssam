package com.ssafy.ssam.ssam_backend.api.dto.response;

import com.ssafy.ssam.ssam_backend.domain.entity.PitcherSituationStatus;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Getter
@NoArgsConstructor
public class PitcherSituationResDto {
    @ApiModelProperty(value = "선수 이름")
    private String name;
    @ApiModelProperty(value = "연도")
    private String years;

    @ApiModelProperty(value = "주자없음")
    private BigDecimal noRunner;
    @ApiModelProperty(value = "1루")
    private BigDecimal firB;
    @ApiModelProperty(value = "1,2루")
    private BigDecimal firAndSecB;
    @ApiModelProperty(value = "만루")
    private BigDecimal fullyB;
    @ApiModelProperty(value = "1,3루")
    private BigDecimal firAndThrB;
    @ApiModelProperty(value = "2루")
    private BigDecimal secB;
    @ApiModelProperty(value = "2,3루")
    private BigDecimal secAndThrB;
    @ApiModelProperty(value = "3루")
    private BigDecimal thrB;
    @ApiModelProperty(value = "주자있음")
    private BigDecimal runner;
    @ApiModelProperty(value = "득점권")
    private BigDecimal risp;//runners in scoring position

    public PitcherSituationResDto(PitcherSituationStatus pitcherSituationStatus){
        this.name= pitcherSituationStatus.getPlayer().getPlayerName();
        this.years = pitcherSituationStatus.getYears();
        this.noRunner= pitcherSituationStatus.getNoRunner();
        this.firB = pitcherSituationStatus.getFirB();
        this.firAndSecB = pitcherSituationStatus.getFirAndSecB();
        this.fullyB = pitcherSituationStatus.getFullyB();
        this.firAndThrB = pitcherSituationStatus.getFirAndThrB();
        this.secB = pitcherSituationStatus.getSecB();
        this.secAndThrB = pitcherSituationStatus.getSecAndThrB();
        this.thrB = pitcherSituationStatus.getThrB();
        this.runner = pitcherSituationStatus.getRunner();
        this.risp = pitcherSituationStatus.getRisp();
    }
}
