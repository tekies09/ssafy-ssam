package com.ssafy.ssam.ssam_backend.api.dto.response;

import com.ssafy.ssam.ssam_backend.domain.entity.HitterDaysStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class HitterDaysDetailResDto {

    private String name;

    private String team;

    private String opponentTeam;

    private LocalDate date;

    //이번게임 타율
    private BigDecimal avg1_rt;

    //누적 타율
    private BigDecimal avg2_rt;

    //타석
    private int pa_cn;

    //타수
    private int ab_cn;

    //득점
    private int r_cn;

    //안타
    private int h_cn;

    //2루타
    private int h2_cn;

    //3루타
    private int h3_cn;

    //홈런
    private int hr_cn;

    //타점
    private int rbi_cn;

    //도루
    private int sb_cn;

    //도루실패
    private int cs_cn;

    //볼넷
    private int bb_cn;

    //사구
    private int hbp_cn;

    //3진
    private int so_cn;

    //병살
    private int gdp_cn;

    public HitterDaysDetailResDto(HitterDaysStatus hitterDaysStatus){
        this.name= hitterDaysStatus.getPlayer().getPlayerName();
        this.team = hitterDaysStatus.getTeam().getTeamName();
        this.opponentTeam = hitterDaysStatus.getOpponent().getTeamName();
        this.date= hitterDaysStatus.getDate();
        this.avg1_rt= hitterDaysStatus.getAvg1_rt();
        this.avg2_rt = hitterDaysStatus.getAvg2_rt();
        this.pa_cn = hitterDaysStatus.getPa_cn();
        this.ab_cn = hitterDaysStatus.getAb_cn();
        this.r_cn = hitterDaysStatus.getR_cn();
        this.h_cn= hitterDaysStatus.getH_cn();
        this.h2_cn = hitterDaysStatus.getH2_cn();
        this.h3_cn = hitterDaysStatus.getH3_cn();
        this.hr_cn = hitterDaysStatus.getHr_cn();
        this.rbi_cn = hitterDaysStatus.getRbi_cn();
        this.sb_cn= hitterDaysStatus.getSb_cn();
        this.cs_cn = hitterDaysStatus.getCs_cn();
        this.bb_cn= hitterDaysStatus.getBb_cn();
        this.hbp_cn = hitterDaysStatus.getHbp_cn();
        this.so_cn = hitterDaysStatus.getSo_cn();
        this.gdp_cn = hitterDaysStatus.getGdp_cn();
    }

}
