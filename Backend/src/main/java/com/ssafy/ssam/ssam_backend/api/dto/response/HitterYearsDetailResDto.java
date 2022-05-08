package com.ssafy.ssam.ssam_backend.api.dto.response;

import com.ssafy.ssam.ssam_backend.domain.entity.HitterYearsStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class HitterYearsDetailResDto {

    private String team;
    private String name;
    private String year;
    //타율
    private BigDecimal avg_rt;
    //게임수
    private int g_cn;

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

    //루타
    private int tb_cn;

    //타점
    private int rbi_cn;

    //희생번트
    private int sac_cn;

    //희생플라이
    private int sf_cn;

    //볼넷
    private int bb_cn;

    //고의4구
    private int ibb_cn;

    //사구
    private int hbp_cn;

    //3진
    private int so_cn;

    //병살
    private int gdp_cn;

    //장타율
    private BigDecimal slg_rt;

    //출루율
    private BigDecimal obp_rt;

    //출루율+장타율
    private BigDecimal ops_rt;

    //멀티히트
    private int mh_cn;

    //득점권타율
    private BigDecimal risp_rt;

    //대타타율
    private BigDecimal phba_rt;

    //장타
    private int xbh_cn;

    //땅볼
    private int go_cn;

    //뜬공
    private int ao_cn;

    //땅볼/뜬공
    private BigDecimal goao_rt;

    //결승타
    private int gwrbi_cn;

    //볼넷/삼진
    private BigDecimal bbk_rt;

    //투구수/타석
    private BigDecimal ppa_rt;

    //순수 장타율
    private BigDecimal isop_rt;

    //추정득점
    private BigDecimal xr_rt;

    //(1.8x출루율+장타율)/4
    private BigDecimal gpa_rt;

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
        this.sac_cn= hitterYearsStatus.getSac_cn();
        this.sf_cn= hitterYearsStatus.getSf_cn();
        this.bb_cn= hitterYearsStatus.getBb_cn();
        this.ibb_cn= hitterYearsStatus.getIbb_cn();
        this.hbp_cn = hitterYearsStatus.getHbp_cn();
        this.so_cn= hitterYearsStatus.getSo_cn();
        this.gdp_cn = hitterYearsStatus.getGdp_cn();
        this.slg_rt= hitterYearsStatus.getSlg_rt();
        this.obp_rt= hitterYearsStatus.getObp_rt();
        this.ops_rt= hitterYearsStatus.getOps_rt();
        this.mh_cn= hitterYearsStatus.getMh_cn();
        this.risp_rt= hitterYearsStatus.getRisp_rt();
        this.phba_rt= hitterYearsStatus.getPhba_rt();
        this.xbh_cn= hitterYearsStatus.getXbh_cn();
        this.go_cn= hitterYearsStatus.getGo_cn();
        this.ao_cn= hitterYearsStatus.getAo_cn();
        this.goao_rt= hitterYearsStatus.getGoao_rt();
        this.gwrbi_cn= hitterYearsStatus.getGwrbi_cn();
        this.bbk_rt= hitterYearsStatus.getBbk_rt();
        this.ppa_rt= hitterYearsStatus.getPpa_rt();
        this.isop_rt= hitterYearsStatus.getIsop_rt();
        this.xr_rt= hitterYearsStatus.getXr_rt();
        this.gpa_rt= hitterYearsStatus.getGpa_rt();

    }

}
