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
public class HitterDaysStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hitterDaysSId;

    @ManyToOne
    @JoinColumn(name ="teamId")
    private Team team;

    @ManyToOne
    @JoinColumn(name ="oppo_teamId")
    private Team opponent;

    @ManyToOne
    @JoinColumn(name="playerId")
    private Player player;

    @Column
    private LocalDate date;

    //이번게임 타율
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal avg1_rt;

    //누적 타율
    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal avg2_rt;

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

    //타점
    @Column
    private int rbi_cn;

    //도루
    @Column
    private int sb_cn;

    //도루실패
    @Column
    private int cs_cn;

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



}
