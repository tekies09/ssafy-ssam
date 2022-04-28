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
public class PitcherSituationStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pitcherSitSId;

    @Column
    private BigDecimal noRunner;

    @Column
    private BigDecimal firB;

    @Column
    private BigDecimal firAndSecB;

    @Column
    private BigDecimal fullyB;

    @Column
    private BigDecimal firAndThrB;

    @Column
    private BigDecimal secB;

    @Column
    private BigDecimal secAndThrB;

    @Column
    private BigDecimal thrB;

    @Column
    private BigDecimal runner;

    @Column
    private BigDecimal risp;//runners in scoring position

    @ManyToOne
    @JoinColumn(name="playerId")
    private Player player;

}
