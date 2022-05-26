package com.ssafy.ssam.ssam_backend.domain.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MyTeam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long myTeamId;

    @Column
    private String myTeamName;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @Builder.Default
    @OneToMany( mappedBy = "myTeam",cascade = CascadeType.REMOVE)
    private List<MyTeamPlayer> myTeamPlayerList = new ArrayList<>();
}
