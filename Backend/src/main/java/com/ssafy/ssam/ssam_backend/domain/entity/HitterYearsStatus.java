package com.ssafy.ssam.ssam_backend.domain.entity;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Getter
@NoArgsConstructor
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

    //도루
    @Column
    private int sb_cn;

    //도루실패
    @Column int cs_cn;


    //볼넷
    @Column
    private int bb_cn;


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

    //실책
    @Column
    private int e_cn;
}
