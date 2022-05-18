package com.ssafy.ssam.ssam_backend.domain.entity;

import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
//@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class Reply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long replyId;

    @ManyToOne
    @JoinColumn(name="freeBoardId")
    @OnDelete(action = OnDeleteAction.CASCADE)
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
