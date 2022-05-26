package com.ssafy.ssam.ssam_backend.domain.entity;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PitcherSituationStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pitcherSitSId;

    @Column
    private String years;

    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal noRunner;

    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal firB;

    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal firAndSecB;

    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal fullyB;

    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal firAndThrB;

    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal secB;

    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal secAndThrB;

    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal thrB;

    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal runner;

    @Column(columnDefinition = "decimal(5,3)")
    private BigDecimal risp;//runners in scoring position

    @ManyToOne
    @JoinColumn(name="playerId")
    private Player player;

}
