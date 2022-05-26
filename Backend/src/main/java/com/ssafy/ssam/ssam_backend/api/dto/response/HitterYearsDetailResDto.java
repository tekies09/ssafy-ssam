package com.ssafy.ssam.ssam_backend.api.dto.response;

import com.ssafy.ssam.ssam_backend.domain.entity.HitterYearsStatus;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Getter
@NoArgsConstructor
public class HitterYearsDetailResDto {

    @ApiModelProperty(value = "팀")
    private String team;
    @ApiModelProperty(value = "선수 playerID")
    private Long playerId;
    @ApiModelProperty(value = "이 기록 id")
    private Long statusId;
    @ApiModelProperty(value = "선수 이름")
    private String name;
    @ApiModelProperty(value = "연도")
    private String year;
    //타율
    @ApiModelProperty(value = "타율")
    private BigDecimal avg_rt;
    //게임수
    @ApiModelProperty(value = "게임 수")
    private int g_cn;

    //타석
    @ApiModelProperty(value = "타석")
    private int pa_cn;

    //타수
    @ApiModelProperty(value = "타수")
    private int ab_cn;

    //득점
    @ApiModelProperty(value = "득점")
    private int r_cn;

    //안타
    @ApiModelProperty(value = "안타")
    private int h_cn;

    //2루타
    @ApiModelProperty(value = "2루타")
    private int h2_cn;

    //3루타
    @ApiModelProperty(value = "3루타")
    private int h3_cn;

    //홈런
    @ApiModelProperty(value = "홈런")
    private int hr_cn;

    //루타
    @ApiModelProperty(value = "?루타")
    private int tb_cn;

    //타점
    @ApiModelProperty(value = "타점")
    private int rbi_cn;

    //도루
    @ApiModelProperty(value = "도루")
    private int sb_cn;

    //도루실패
    @ApiModelProperty(value = "도루실패")
    private int cs_cn;

    //볼넷
    @ApiModelProperty(value = "볼넷")
    private int bb_cn;



    //사구
    @ApiModelProperty(value = "사구")
    private int hbp_cn;

    //3진
    @ApiModelProperty(value = "3진")
    private int so_cn;

    //병살
    @ApiModelProperty(value = "병살")
    private int gdp_cn;

    //장타율
    @ApiModelProperty(value = "장타율")
    private BigDecimal slg_rt;

    //실책
    @ApiModelProperty(value = "실책")
    private int e_cn;

    public HitterYearsDetailResDto(HitterYearsStatus hitterYearsStatus){
        this.team = hitterYearsStatus.getTeam().getTeamName();
        this.name = hitterYearsStatus.getPlayer().getPlayerName();
        this.year = hitterYearsStatus.getYears();
        this.avg_rt =hitterYearsStatus.getAvg_rt();
        this.g_cn = hitterYearsStatus.getG_cn();
        this.pa_cn=hitterYearsStatus.getPa_cn();
        this.ab_cn=hitterYearsStatus.getAb_cn();
        this.r_cn = hitterYearsStatus.getR_cn();
        this.h_cn = hitterYearsStatus.getH_cn();
        this.h2_cn = hitterYearsStatus.getH2_cn();
        this.h3_cn = hitterYearsStatus.getH3_cn();
        this.hr_cn= hitterYearsStatus.getHr_cn();
        this.tb_cn = hitterYearsStatus.getTb_cn();
        this.rbi_cn= hitterYearsStatus.getRbi_cn();

        this.bb_cn= hitterYearsStatus.getBb_cn();

        this.hbp_cn = hitterYearsStatus.getHbp_cn();
        this.so_cn= hitterYearsStatus.getSo_cn();
        this.gdp_cn = hitterYearsStatus.getGdp_cn();
        this.slg_rt= hitterYearsStatus.getSlg_rt();
        this.sb_cn = hitterYearsStatus.getSb_cn();
        this.cs_cn= hitterYearsStatus.getCs_cn();
        this.e_cn= hitterYearsStatus.getE_cn();
        this.playerId = hitterYearsStatus.getPlayer().getPlayerId();
        this.statusId = hitterYearsStatus.getHitterYearsSId();


    }

}
