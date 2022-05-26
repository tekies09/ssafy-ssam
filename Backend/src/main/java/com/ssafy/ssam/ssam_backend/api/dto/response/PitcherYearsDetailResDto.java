package com.ssafy.ssam.ssam_backend.api.dto.response;

import com.ssafy.ssam.ssam_backend.domain.entity.PitcherYearsStatus;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Getter
@NoArgsConstructor
public class PitcherYearsDetailResDto {
    @ApiModelProperty(value = "팀")
    private String team;
    @ApiModelProperty(value = "선수 id")
    private Long playerId;
    @ApiModelProperty(value = "이 기록 id")
    private Long statusId;
    @ApiModelProperty(value = "선수 이름")
    private String name;
    @ApiModelProperty(value = "연도")
    private String year;

    //평균자책점
    @ApiModelProperty(value = "평균자책점")
    private BigDecimal era_rt;

    //경기
    @ApiModelProperty(value = "경기 수")
    private int g_cn;

    //승리
    @ApiModelProperty(value = "승리 수")
    private int w_cn;

    //패배
    @ApiModelProperty(value = "패배 수")
    private int l_cn;

    //세이브
    @ApiModelProperty(value = "세이브 수")
    private int sv_cn;

    //홀드
    @ApiModelProperty(value = "홀드 수")
    private int hld_cn;

    //승률
    @ApiModelProperty(value = "승률")
    private BigDecimal wpct_rt;

    //이닝 1/3 이닝 0.3 으로 표현 , 2/3 = 0.6
    @ApiModelProperty(value = "이닝 수", notes = "1/3이닝 0.3 , 2/3이닝 0.6")
    private BigDecimal ip_cn;

    //피안타
    @ApiModelProperty(value = "피안타 수")
    private int h_cn;

    //홈런
    @ApiModelProperty(value = "홈런 수")
    private int hr_cn;

    //볼넷
    @ApiModelProperty(value = "볼넷 수")
    private int bb_cn;

    //사구
    @ApiModelProperty(value = "사구")
    private int hbp_cn;

    //삼진
    @ApiModelProperty(value = "삼진 수")
    private int so_cn;

    //실점
    @ApiModelProperty(value = "실점")
    private int r_cn;

    //자책점
    @ApiModelProperty(value = "자책점")
    private int er_cn;



    //완투
    @ApiModelProperty(value = "완투")
    private int cg_cn;

    //완봉
    @ApiModelProperty(value = "완봉")
    private int sho_cn;



    //타자수
    @ApiModelProperty(value = "타자수")
    private int tbf_cn;



    //삼진/볼넷
    @ApiModelProperty(value = "삼진 / 볼넷 비율")
    private BigDecimal kbb_rt;


    public PitcherYearsDetailResDto(PitcherYearsStatus pitcherYearsStatus){
        this.name = pitcherYearsStatus.getPlayer().getPlayerName();
        this.team = pitcherYearsStatus.getTeam().getTeamName();
        this.year = pitcherYearsStatus.getYears();
        this.era_rt = pitcherYearsStatus.getEra_rt();
        this.g_cn = pitcherYearsStatus.getG_cn();
        this.w_cn = pitcherYearsStatus.getW_cn();
        this.l_cn = pitcherYearsStatus.getL_cn();
        this.sv_cn = pitcherYearsStatus.getSv_cn();
        this.hld_cn = pitcherYearsStatus.getHld_cn();
        this.wpct_rt = pitcherYearsStatus.getWpct_rt();
        this.ip_cn = pitcherYearsStatus.getIp_cn();
        this.h_cn = pitcherYearsStatus.getH_cn();
        this.hr_cn = pitcherYearsStatus.getHr_cn();
        this.bb_cn = pitcherYearsStatus.getBb_cn();
        this.hbp_cn = pitcherYearsStatus.getHbp_cn();
        this.so_cn = pitcherYearsStatus.getSo_cn();
        this.r_cn = pitcherYearsStatus.getR_cn();
        this.er_cn = pitcherYearsStatus.getEr_cn();

        this.cg_cn = pitcherYearsStatus.getCg_cn();
        this.sho_cn = pitcherYearsStatus.getSho_cn();

        this.tbf_cn = pitcherYearsStatus.getTbf_cn();

        this.kbb_rt = pitcherYearsStatus.getKbb_rt();
        this.playerId = pitcherYearsStatus.getPlayer().getPlayerId();
        this.statusId = pitcherYearsStatus.getPitcherYearsSId();

    }

}
