package com.ssafy.ssam.ssam_backend.api.dto.request;

import com.ssafy.ssam.ssam_backend.domain.entity.FreeBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.Reply;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class ReplyCreateReqDto {

    @NotNull
    private Long freeBoardId;

    @NotNull
    private String content;

    @NotNull
    private Long userId;

    public ReplyCreateReqDto(String content, Long freeBoardId, Long userId) {
        this.content = content;
        this.freeBoardId = freeBoardId;
        this.userId = userId;
    }

    public Reply toEntity(User user, FreeBoard freeBoard) {
        return Reply.builder()
                .freeBoard(freeBoard)
                .author(user)
                .content(content)
                .fbWriteTime(LocalDateTime.now())
                .fbUpdateTime(LocalDateTime.now())
                .build();
    }
}
