package com.ssafy.ssam.ssam_backend.domain.entity;

import com.ssafy.ssam.ssam_backend.domain.GameState;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor
//@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class ScheduleAndScore {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long scheduleId;

    @ManyToOne
    @JoinColumn(name="home_teamId")
    private Team homeTeam;

    @ManyToOne
    @JoinColumn(name="away_teamId")
    private Team awayTeam;

    @Column
    private LocalDate date;

    @Column
    private int homeScore;

    @Column
    private int awayScore;

    @Column
    private String broadcasting;

    @Column
    private String stadium;

    @Enumerated(EnumType.STRING)
    private GameState gameState;

}
