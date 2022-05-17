package com.ssafy.ssam.ssam_backend.api.dto.response;

import com.ssafy.ssam.ssam_backend.domain.entity.Reply;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class ReplyResDto {

    private Long replyId;
    private String nickname;
    private String content;
    private LocalDateTime fbWriteTime;
    private LocalDateTime fbUpdateTime;

    public ReplyResDto(Reply reply) {
        this.replyId = reply.getReplyId();
        this.nickname = reply.getAuthor().getNickname();
        this.content = reply.getContent();
        this.fbWriteTime = reply.getFbWriteTime();
        this.fbUpdateTime = reply.getFbUpdateTime();
    }
}
