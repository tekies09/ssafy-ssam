package com.ssafy.ssam.ssam_backend.api.dto.response;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.ssafy.ssam.ssam_backend.domain.entity.FreeBoard;

import com.ssafy.ssam.ssam_backend.domain.entity.Notice;
import io.swagger.annotations.ApiModel;
import lombok.Getter;

@Getter
@ApiModel("NoticeBoardListResponse")
public class NoticeBoardResDto extends BaseResponseBody{
    private Long noticeBoardId;
    private String nContent;
    private String nTitle;
    private LocalDateTime nUpdateTime;
    private LocalDateTime nWriteTime;
    private String username;
    private String nickname;

    public NoticeBoardResDto(Integer statusCode, String message, Notice board) {
        this.message=message;
        this.statusCode = statusCode;
        this.noticeBoardId = board.getNoticeId();
        this.nTitle = board.getNTitle();
        this.nContent = board.getNContent();
        this.nUpdateTime = board.getNUpdateTime();
        this.nWriteTime = board.getNWriteTime();
        this.username = board.getAuthor().getUsername();
        this.nickname = board.getAuthor().getNickname();

    }
}
