package com.ssafy.ssam.ssam_backend.api.dto.request;

import java.time.LocalDateTime;

import com.ssafy.ssam.ssam_backend.domain.entity.FreeBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import com.sun.istack.NotNull;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class FreeBoardUpdateReqDto {
	
	@NotNull
	@ApiModelProperty(value = "토론 게시판 글 번호")
	private long boardId;
	
	@NotNull
	@ApiModelProperty(value = "토론 게시판 작성 제목")
	private String title;
	
	@NotNull
	@ApiModelProperty(value = "토론 게시판 작성 내용")
	private String content;

	
	public FreeBoard toEntity(FreeBoard board) {
		return FreeBoard
				.builder()
				.freeBoardId(boardId)
				.author(board.getAuthor())
				.fbTitle(title)
				.fbContent(content)
				.fbWriteTime(board.getFbWriteTime())
				.fbUpdateTime(LocalDateTime.now())
				.build();
	}
}
