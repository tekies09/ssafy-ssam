package com.ssafy.ssam.ssam_backend.api.dto.response;

import com.ssafy.ssam.ssam_backend.domain.entity.PitcherDaysStatus;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;


import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class PitcherDaysDetailResDto {

    @ApiModelProperty(value = "선수 이름")
    private String name;
    @ApiModelProperty(value = "팀")
    private String team;
    @ApiModelProperty(value = "상대팀")
    private String opponentTeam;
    @ApiModelProperty(value = "날짜")
    private LocalDate date;

    //경기평균자책점
    @ApiModelProperty(value = "경기 평균자책점")
    private BigDecimal era1_rt;

    //누적평균자책점
    @ApiModelProperty(value = "누적 평균자책점")
    private BigDecimal era2_rt;

    //타자수
    @ApiModelProperty(value = "타자수")
    private int tbf_cn;

    //이닝 1/3 이닝 0.3 으로 표현 , 2/3 = 0.6
    @ApiModelProperty(value = "이닝수 " ,notes = "1/3이닝 : 0.3 , 2/3이닝 : 0.6")
    private BigDecimal ip_cn;

    //피안타
    @ApiModelProperty(value = "피안타")
    private int h_cn;

    //홈런
    @ApiModelProperty(value = "홈런")
    private int hr_cn;

    //볼넷
    @ApiModelProperty(value = "볼넷")
    private int bb_cn;

    //사구
    @ApiModelProperty(value = "사구")
    private int hbp_cn;

    //삼진
    @ApiModelProperty(value = "삼진")
    private int so_cn;

    //실점
    @ApiModelProperty(value = "실점")
    private int r_cn;

    //자책점
    @ApiModelProperty(value = "자책점")
    private int er_cn;


    public  PitcherDaysDetailResDto (PitcherDaysStatus pitcherDaysStatus){
        this.name = pitcherDaysStatus.getPlayer().getPlayerName();
        this.date = pitcherDaysStatus.getDate();
        this.team = pitcherDaysStatus.getTeam().getTeamName();
        this.opponentTeam = pitcherDaysStatus.getOpponent().getTeamName();
        this.era1_rt = pitcherDaysStatus.getEra1_rt();
        this.era2_rt = pitcherDaysStatus.getEra2_rt();
        this.tbf_cn = pitcherDaysStatus.getTbf_cn();
        this.ip_cn = pitcherDaysStatus.getIp_cn();
        this.h_cn= pitcherDaysStatus.getH_cn();
        this.hr_cn= pitcherDaysStatus.getHr_cn();
        this.bb_cn= pitcherDaysStatus.getBb_cn();
        this.hbp_cn= pitcherDaysStatus.getHbp_cn();
        this.so_cn = pitcherDaysStatus.getSo_cn();
        this.r_cn = pitcherDaysStatus.getR_cn();
        this.er_cn = pitcherDaysStatus.getEr_cn();
    }
}
