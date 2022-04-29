package com.ssafy.ssam.ssam_backend.domain.entity;

import com.ssafy.ssam.ssam_backend.domain.PlayerState;
import com.ssafy.ssam.ssam_backend.domain.PlayerType;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
//@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long playerId;

    @Column
    private String playerName;

    @Column
    private int birthYear;

    @Column
    private int debutYear;

    @Column
    private String graudate;

    @Enumerated(EnumType.STRING)
    private PlayerState is_retired;

    @Column
    private String payroll;

    @Enumerated(EnumType.STRING)
    private PlayerType from_abroad;




}
