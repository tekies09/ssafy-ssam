package com.ssafy.ssam.ssam_backend.api.dto.response;

import com.ssafy.ssam.ssam_backend.domain.entity.PitcherSituationStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Getter
@NoArgsConstructor
public class PitcherSituationResDto {

    private String name;

    private String years;


    private BigDecimal noRunner;

    private BigDecimal firB;

    private BigDecimal firAndSecB;

    private BigDecimal fullyB;

    private BigDecimal firAndThrB;

    private BigDecimal secB;

    private BigDecimal secAndThrB;

    private BigDecimal thrB;

    private BigDecimal runner;

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
