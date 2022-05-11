package com.ssafy.ssam.ssam_backend.api.dto.response;

import com.ssafy.ssam.ssam_backend.domain.entity.PitcherYearsStatus;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.math.BigDecimal;

@Getter
@NoArgsConstructor
public class PitcherYearsDetailResDto {
    @ApiModelProperty(value = "팀")
    private String team;
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

    //이닝당 출루허용률
    @ApiModelProperty(value = "이닝당 출루허용률")
    private BigDecimal whip_rt;

    //완투
    @ApiModelProperty(value = "완투")
    private int cg_cn;

    //완봉
    @ApiModelProperty(value = "완봉")
    private int sho_cn;

    //퀄리티 스타트
    @ApiModelProperty(value = "퀄리티 스타트")
    private int qs_cn;

    //블론세이브
    @ApiModelProperty(value = "블론세이브")
    private int bsv_cn;

    //타자수
    @ApiModelProperty(value = "타자수")
    private int tbf_cn;

    //투구수
    @ApiModelProperty(value = "투구수")
    private int np_cn;

    //피안타율
    @ApiModelProperty(value = "피안타율")
    private BigDecimal avg_rt;

    //2루타
    @ApiModelProperty(value = "2루타")
    private int h2_cn;

    //3루타
    @ApiModelProperty(value = "3루타")
    private int h3_cn;

    //희생번트
    @ApiModelProperty(value = "희생번트")
    private int sac_cn;

    //희생플라이
    @ApiModelProperty(value = "희생플라이")
    private int sf_cn;

    //고의4구
    @ApiModelProperty(value = "고의4구")
    private int ibb_cn;

    //폭투
    @ApiModelProperty(value = "폭투")
    private int wp_cn;

    //보크
    @ApiModelProperty(value = "보크")
    private int bk_cn;

    //선발
    @ApiModelProperty(value = "선발")
    private int gs_cn;

    //선발승
    @ApiModelProperty(value = "선발 승")
    private int wgs_cn;

    //구원승
    @ApiModelProperty(value = "구원 승")
    private int wgr_cn;

    //종료
    @ApiModelProperty(value = "종료")
    private int gf_cn;

    //세이브기회
    @ApiModelProperty(value = "세이브 기회")
    private int svo_cn;

    //터프세이브
    @ApiModelProperty(value = "터프세이브")
    private int ts_cn;

    //병살
    @ApiModelProperty(value = "병살")
    private int gdp_cn;

    //땅볼
    @ApiModelProperty(value = "땅볼")
    private int go_cn;

    //뜬공
    @ApiModelProperty(value = "뜬공")
    private int ao_cn;

    //땅볼/뜬공
    @ApiModelProperty(value = "땅볼 / 뜬공 비율")
    private BigDecimal goao_rt;

    //인플레이타구타율
    @ApiModelProperty(value = "인플레이 타구율")
    private BigDecimal babip_rt;

    //투구수/경기
    @ApiModelProperty(value = "투구수 / 경기 비율")
    private BigDecimal pg_rt;

    //투구수/이닝
    @ApiModelProperty(value = "투구수 / 이닝 비율")
    private BigDecimal pip_rt;

    //9이닝당 삼진
    @ApiModelProperty(value = "0이닝당 삼진 비율")
    private BigDecimal k9_rt;

    //9이닝당 볼넷
    @ApiModelProperty(value = "9이닝당 볼넷 비율")
    private BigDecimal bb9_rt;

    //삼진/볼넷
    @ApiModelProperty(value = "삼진 / 볼넷 비율")
    private BigDecimal kbb_rt;

    //피출루율
    @ApiModelProperty(value = "피출루율")
    private BigDecimal obp_rt;

    //피장타율
    @ApiModelProperty(value = "피장타율")
    private BigDecimal slg_rt;

    //피출루율+피장타율
    @ApiModelProperty(value = "피출루율 + 피장타율")
    private BigDecimal ops_rt;

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
        this.whip_rt = pitcherYearsStatus.getWhip_rt();
        this.cg_cn = pitcherYearsStatus.getCg_cn();
        this.sho_cn = pitcherYearsStatus.getSho_cn();
        this.qs_cn = pitcherYearsStatus.getQs_cn();
        this.bsv_cn = pitcherYearsStatus.getBsv_cn();
        this.tbf_cn = pitcherYearsStatus.getTbf_cn();
        this.np_cn = pitcherYearsStatus.getNp_cn();
        this.avg_rt = pitcherYearsStatus.getAvg_rt();
        this.h2_cn= pitcherYearsStatus.getH2_cn();
        this.h3_cn = pitcherYearsStatus.getH3_cn();
        this.sac_cn = pitcherYearsStatus.getSac_cn();
        this.sf_cn = pitcherYearsStatus.getSf_cn();
        this.ibb_cn = pitcherYearsStatus.getIbb_cn();
        this.wp_cn = pitcherYearsStatus.getWp_cn();
        this.bk_cn = pitcherYearsStatus.getBk_cn();
        this.gs_cn = pitcherYearsStatus.getGs_cn();
        this.wgs_cn = pitcherYearsStatus.getWgs_cn();
        this.wgr_cn = pitcherYearsStatus.getWgr_cn();
        this.gf_cn = pitcherYearsStatus.getGf_cn();
        this.svo_cn = pitcherYearsStatus.getSvo_cn();
        this.ts_cn = pitcherYearsStatus.getTs_cn();
        this.gdp_cn = pitcherYearsStatus.getGdp_cn();
        this.go_cn = pitcherYearsStatus.getGo_cn();
        this.ao_cn = pitcherYearsStatus.getAo_cn();
        this.goao_rt = pitcherYearsStatus.getGoao_rt();
        this.babip_rt = pitcherYearsStatus.getBabip_rt();
        this.pg_rt = pitcherYearsStatus.getPg_rt();
        this.pip_rt = pitcherYearsStatus.getPip_rt();
        this.k9_rt = pitcherYearsStatus.getK9_rt();
        this.bb9_rt = pitcherYearsStatus.getBb9_rt();
        this.kbb_rt = pitcherYearsStatus.getKbb_rt();
        this.obp_rt = pitcherYearsStatus.getObp_rt();
        this.slg_rt = pitcherYearsStatus.getSlg_rt();
        this.ops_rt = pitcherYearsStatus.getOps_rt();

    }

}
