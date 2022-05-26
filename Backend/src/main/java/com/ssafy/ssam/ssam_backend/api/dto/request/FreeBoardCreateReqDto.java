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
public class FreeBoardCreateReqDto {
	
	@NotNull
	@ApiModelProperty(value = "토론 게시판 작성 제목")
	private String title;
	
	@NotNull
	@ApiModelProperty(value = "토론 게시판 작성 내용")
	private String content;
	
	@NotNull
	@ApiModelProperty(value = "토론 게시판 작성자")
	private long userId;
	
	// 테스트용
	public FreeBoard toEntity() {
		return FreeBoard
				.builder()
				.fbTitle(title)
				.fbContent(content)
				.fbWriteTime(LocalDateTime.now())
				.fbUpdateTime(LocalDateTime.now())
				.build();
	}
	
	public FreeBoard toEntity(User user) {
		return FreeBoard
				.builder()
				.author(user)
				.fbTitle(title)
				.fbContent(content)
				.fbWriteTime(LocalDateTime.now())
				.fbUpdateTime(LocalDateTime.now())
				.build();
	}
}
