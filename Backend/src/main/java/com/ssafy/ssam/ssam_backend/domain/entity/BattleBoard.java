package com.ssafy.ssam.ssam_backend.domain.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
//@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class BattleBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long battleBoardId;

    @ManyToOne
    @JoinColumn(name="userId")
    private User author;

    @ManyToOne
    @JoinColumn(name="myTeamId")
    private MyTeam myTeam;

    @Column
    private String bbTitle;

    @Column
    private LocalDateTime bbWriteTime;

    @Column
    private LocalDateTime bbUpdateTime;

}
