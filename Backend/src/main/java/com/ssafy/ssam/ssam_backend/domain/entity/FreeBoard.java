package com.ssafy.ssam.ssam_backend.domain.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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

    @OneToMany(mappedBy = "freeBoard", cascade = CascadeType.ALL)
    private List<Reply> replies = new ArrayList<>();

    public void createReply(Reply reply) {
        this.replies.add(reply);
    }
}
