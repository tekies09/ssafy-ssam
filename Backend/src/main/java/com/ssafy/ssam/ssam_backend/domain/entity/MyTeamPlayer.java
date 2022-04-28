package com.ssafy.ssam.ssam_backend.domain.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
//@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class MyTeamPlayer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long myTeamPlayerId;

    @ManyToOne
    @JoinColumn(name="myTeamId")
    private MyTeam myTeam;

    @ManyToOne
    @JoinColumn(name="playerId")
    private Player player;

    @Column
    private int backNumber;

    @Column
    private String battingOrder;

    @Column
    private String defencePosition;


}
