package com.ssafy.ssam.ssam_backend.api.dto.request;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
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
	@JsonProperty("title")
	@ApiModelProperty(value = "토론 게시판 작성 제목")
	private String fbTitle;
	
	@JsonProperty("content")
	@ApiModelProperty(value = "토론 게시판 작성 내용")
	private String fbContent;
	
	// 테스트용
	public FreeBoard toEntity() {
		return FreeBoard
				.builder()
				.fbTitle(fbTitle)
				.fbContent(fbContent)
				.fbWriteTime(LocalDateTime.now())
				.fbUpdateTime(LocalDateTime.now())
				.build();
	}
	
	public FreeBoard toEntity(User user) {
		return FreeBoard
				.builder()
				.author(user)
				.fbTitle(fbTitle)
				.fbContent(fbContent)
				.fbWriteTime(LocalDateTime.now())
				.fbUpdateTime(LocalDateTime.now())
				.build();
	}
}
