package com.ssafy.ssam.ssam_backend.api.dto.request;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
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
public class NoticeBoardCreateReqDto {

    @NotNull
    @ApiModelProperty(value = "공지사항 게시판 작성 제목")
    private String title;

    @NotNull
    @ApiModelProperty(value = "공지사항 게시판 작성 내용")
    private String content;

    @NotNull
    @ApiModelProperty(value = "공지사항 게시판 작성자")
    private long userId;

    // 테스트용
    public Notice toEntity() {
        return Notice
                .builder()
                .nTitle(title)
                .nContent(content)
                .nWriteTime(LocalDateTime.now())
                .nUpdateTime(LocalDateTime.now())
                .build();
    }

    public Notice toEntity(User user) {
        return Notice
                .builder()
                .author(user)
                .nTitle(title)
                .nContent(content)
                .nWriteTime(LocalDateTime.now())
                .nUpdateTime(LocalDateTime.now())
                .build();
    }
}
