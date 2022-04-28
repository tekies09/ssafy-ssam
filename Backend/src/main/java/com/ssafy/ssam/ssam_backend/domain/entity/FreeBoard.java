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
public class FreeBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long freeBoardId;

    @Column
    private String fbTitle;

    @Column
    private String fbContent;

    @Column
    private LocalDateTime fbWriteTime;

    @Column
    private LocalDateTime fbUpdateTime;

    @ManyToOne
    @JoinColumn(name="userId")
    private User author;
}
