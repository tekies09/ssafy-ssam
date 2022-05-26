package com.ssafy.ssam.ssam_backend.domain.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long teamId;

    @Column
    private String teamName;

    @Column
    private int foundingYear;

    @Column
    private String homeTown;

}
