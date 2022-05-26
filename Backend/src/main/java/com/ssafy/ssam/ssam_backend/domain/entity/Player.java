package com.ssafy.ssam.ssam_backend.domain.entity;

import com.ssafy.ssam.ssam_backend.domain.PlayerState;
import com.ssafy.ssam.ssam_backend.domain.PlayerType;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long playerId;

    @Column
    private String playerName;

    @Column
    private LocalDate birthYear;

    @Column
    private String heightAndWeight;

    @Column
    private String graudate;

    @Enumerated(EnumType.STRING)
    private PlayerState state;

    @Column
    private String payroll;

    @Enumerated(EnumType.STRING)
    private PlayerType playerType;

}
