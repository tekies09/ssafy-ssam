package com.ssafy.ssam.ssam_backend.domain.entity;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Getter
@NoArgsConstructor
//@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class PitcherYearsStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pitcherYearsSId;

    @ManyToOne
    @JoinColumn(name ="teamId")
    private Team team;

    @ManyToOne
    @JoinColumn(name="playerId")
    private Player player;

    @Column
    private String years;

    //평균자책점
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal era_rt;

    //경기
    @Column
    private int g_cn;

    //승리
    @Column
    private int w_cn;

    //패배
    @Column
    private int l_cn;

    //세이브
    @Column
    private int sv_cn;

    //홀드
    @Column
    private int hld_cn;

    //승률
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal wpct_rt;

    //이닝 1/3 이닝 0.3 으로 표현 , 2/3 = 0.6
    @Column(columnDefinition = "decimal(5,1)")
    private BigDecimal ip_cn;

    //피안타
    @Column
    private int h_cn;

    //홈런
    @Column
    private int hr_cn;

    //볼넷
    @Column
    private int bb_cn;

    //사구
    @Column
    private int hbp_cn;

    //삼진
    @Column
    private int so_cn;

    //실점
    @Column
    private int r_cn;

    //자책점
    @Column
    private int er_cn;

    //이닝당 출루허용률
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal whip_rt;

    //완투
    @Column
    private int cg_cn;

    //완봉
    @Column
    private int sho_cn;

    //퀄리티 스타트
    @Column
    private int qs_cn;

    //블론세이브
    @Column
    private int bsv_cn;

    //타자수
    @Column
    private int tbf_cn;

    //투구수
    @Column
    private int np_cn;

    //피안타율
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal avg_rt;

    //2루타
    @Column
    private int h2_cn;

    //3루타
    @Column
    private int h3_cn;

    //희생번트
    @Column
    private int sac_cn;

    //희생플라이
    @Column
    private int sf_cn;

    //고의4구
    @Column
    private int ibb_cn;

    //폭투
    @Column
    private int wp_cn;

    //보크
    @Column
    private int bk_cn;

    //선발
    @Column
    private int gs_cn;

    //선발승
    @Column
    private int wgs_cn;

    //구원승
    @Column
    private int wgr_cn;

    //종료
    @Column
    private int gf_cn;

    //세이브기회
    @Column
    private int svo_cn;

    //터프세이브
    @Column
    private int ts_cn;

    //병살
    @Column
    private int gdp_cn;

    //땅볼
    @Column
    private int go_cn;

    //뜬공
    @Column
    private int ao_cn;

    //땅볼/뜬공
    @Column(columnDefinition = "decimal(5,2)")
    private BigDecimal goao_rt;

    //인플레이타구타율
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal babip_rt;

    //투구수/경기
    @Column(columnDefinition = "decimal(5,1)")
    private BigDecimal pg_rt;

    //투구수/이닝
    @Column(columnDefinition = "decimal(5,1)")
    private BigDecimal pip_rt;

    //9이닝당 삼진
    @Column(columnDefinition = "decimal(5,2)")
    private BigDecimal k9_rt;

    //9이닝당 볼넷
    @Column(columnDefinition = "decimal(5,2)")
    private BigDecimal bb9_rt;

    //삼진/볼넷
    @Column(columnDefinition = "decimal(5,2)")
    private BigDecimal kbb_rt;

    //피출루율
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal obp_rt;

    //피장타율
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal slg_rt;

    //피출루율+피장타율
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal ops_rt;

}
