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
public class Notice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long noticeId;

    @Column
    private String nTitle;

    @Column
    private String nContent;

    @Column
    private LocalDateTime nWriteTime;

    @Column
    private LocalDateTime nUpdateTime;

    @ManyToOne
    @JoinColumn(name="userId")
    private User author;

}
