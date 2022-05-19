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
public class PitcherDaysStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pitcherDaysSId;

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

    @Column
    private String pitchType;

    @Column
    private String result;

    //경기평균자책점
    @Column(columnDefinition = "decimal(7,3)")
    private BigDecimal era1_rt;

    //누적평균자책점
    @Column(columnDefinition = "decimal(7,3)")
    private BigDecimal era2_rt;

    //타자수
    @Column
    private int tbf_cn;

    //이닝 1/3 이닝 0.3 으로 표현 , 2/3 = 0.6
    @Column(columnDefinition = "decimal(7,1)")
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




}
