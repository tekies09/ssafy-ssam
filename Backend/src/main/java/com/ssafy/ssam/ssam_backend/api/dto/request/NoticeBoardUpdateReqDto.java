package com.ssafy.ssam.ssam_backend.api.dto.request;
import java.time.LocalDateTime;

import com.ssafy.ssam.ssam_backend.domain.entity.FreeBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.Notice;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import com.sun.istack.NotNull;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class NoticeBoardUpdateReqDto {
    @NotNull
    @ApiModelProperty(value = "공지사항 게시판 글 번호")
    private long boardId;

    @NotNull
    @ApiModelProperty(value = "공지사항 게시판 작성 제목")
    private String title;

    @NotNull
    @ApiModelProperty(value = "공지사항 게시판 작성 내용")
    private String content;


    public Notice toEntity(Notice board) {
        return Notice
                .builder()
                .noticeId(boardId)
                .author(board.getAuthor())
                .nTitle(title)
                .nContent(content)
                .nWriteTime(board.getNWriteTime())
                .nUpdateTime(LocalDateTime.now())
                .build();
    }
}
