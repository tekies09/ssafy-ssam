package com.ssafy.ssam.ssam_backend.domain.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long replyId;

    @ManyToOne
    @JoinColumn(name="freeBoardId")
    private FreeBoard freeBoard;

    @ManyToOne
    @JoinColumn(name="userId")
    private User author;

    @Column
    private String content;

    @Column
    private LocalDateTime fbWriteTime;

    @Column
    private LocalDateTime fbUpdateTime;

    // 댓글 내용 및 수정시간 업데이트
    public void update(String content) {
        this.content = content;
        this.fbUpdateTime = LocalDateTime.now();
    }

}
