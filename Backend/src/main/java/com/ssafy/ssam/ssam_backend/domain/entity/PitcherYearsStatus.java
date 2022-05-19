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

    //완투
    @Column
    private int cg_cn;

    //완봉
    @Column
    private int sho_cn;

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

    //타자수
    @Column
    private int tbf_cn;

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


    //삼진/볼넷
    @Column(columnDefinition = "decimal(5,2)")
    private BigDecimal kbb_rt;


}
