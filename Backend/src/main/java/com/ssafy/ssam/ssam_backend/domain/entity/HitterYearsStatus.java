package com.ssafy.ssam.ssam_backend.domain.entity;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor
//@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class HitterYearsStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hitterYearsSId;

    @ManyToOne
    @JoinColumn(name ="teamId")
    private Team team;

    @ManyToOne
    @JoinColumn(name="playerId")
    private Player player;

    @Column
    private String years;

    //타율
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal avg_rt;

    //게임수
    @Column
    private int g_cn;

    //타석
    @Column
    private int pa_cn;

    //타수
    @Column
    private int ab_cn;

    //득점
    @Column
    private int r_cn;

    //안타
    @Column
    private int h_cn;

    //2루타
    @Column
    private int h2_cn;

    //3루타
    @Column
    private int h3_cn;

    //홈런
    @Column
    private int hr_cn;

    //루타
    @Column
    private int tb_cn;

    //타점
    @Column
    private int rbi_cn;

    //희생번트
    @Column
    private int sac_cn;

    //희생플라이
    @Column
    private int sf_cn;

    //볼넷
    @Column
    private int bb_cn;

    //고의4구
    @Column
    private int ibb_cn;

    //사구
    @Column
    private int hbp_cn;

    //3진
    @Column
    private int so_cn;

    //병살
    @Column
    private int gdp_cn;

    //장타율
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal slg_rt;

    //출루율
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal obp_rt;

    //출루율+장타율
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal ops_rt;

    //멀티히트
    @Column
    private int mh_cn;

    //득점권타율
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal risp_rt;

    //대타타율
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal phba_rt;

    //장타
    @Column
    private int xbh_cn;

    //땅볼
    @Column
    private int go_cn;

    //뜬공
    @Column
    private int ao_cn;

    //땅볼/뜬공
    @Column(columnDefinition = "decimal(5,2)")
    private BigDecimal goao_rt;

    //결승타
    @Column
    private int gwrbi_cn;

    //볼넷/삼진
    @Column(columnDefinition = "decimal(5,2)")
    private BigDecimal bbk_rt;

    //투구수/타석
    @Column(columnDefinition = "decimal(5,2)")
    private BigDecimal ppa_rt;

    //순수 장타율
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal isop_rt;

    //추정득점
    @Column(columnDefinition = "decimal(5,1)")
    private BigDecimal xr_rt;

    //(1.8x출루율+장타율)/4
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal gpa_rt;
}
