package com.ssafy.ssam.ssam_backend.api.dto.response;

import java.time.LocalDateTime;

import com.ssafy.ssam.ssam_backend.domain.entity.FreeBoard;

import io.swagger.annotations.ApiModel;
import lombok.Getter;

@Getter
@ApiModel("FreeCommunityBoardListResponse")
public class FreeBoardResDto extends BaseResponseBody {

	private Long freeBoardId;
	private String fbContent;
	private String fbTitle;
	private LocalDateTime fbUpdateTime;
	private LocalDateTime fbWriteTime;
	private String username;
	private String nickname;
	
	public FreeBoardResDto(Integer statusCode, String message, FreeBoard board) {
		this.message=message;
		this.statusCode = statusCode;
		this.freeBoardId = board.getFreeBoardId();
		this.fbTitle = board.getFbTitle();
		this.fbContent = board.getFbContent();
		this.fbUpdateTime = board.getFbUpdateTime();
		this.fbWriteTime = board.getFbWriteTime();
		this.username = board.getAuthor().getUsername();
		this.nickname = board.getAuthor().getNickname();
	}
}
