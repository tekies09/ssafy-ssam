package com.ssafy.ssam.ssam_backend.api.dto.request;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.MyTeam;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import com.sun.istack.NotNull;

import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UpdateBattleBoardReqDto {
	
	@NotNull
	@ApiModelProperty(value = "배틀 게시판 글 아이디")
	private long battleBoardId;
	
	@NotNull
	@ApiModelProperty(value = "배틀 게시판 글 제목")
	private String bbTitle;
	
	@NotNull
	@ApiModelProperty(value = "배틀 게시판 작성 유저")
	private User user;
	
	@NotNull
	@ApiModelProperty(value = "배틀 게시판 작성 시간")
	public LocalDateTime bbWriteTime;

	
	@Builder
	public UpdateBattleBoardReqDto(BattleBoard battleBoard) {
		this.battleBoardId = battleBoard.getBattleBoardId();
		this.bbTitle = battleBoard.getBbTitle();
		this.user = battleBoard.getAuthor();
		this.bbWriteTime = battleBoard.getBbWriteTime();
	}
	
	public BattleBoard toEntity() {
		return BattleBoard
                .builder()
                .battleBoardId(battleBoardId)
                .bbTitle(bbTitle)
                .bbUpdateTime(LocalDateTime.now())
                .build();
	}
	
	public BattleBoard toEntity(MyTeam myTeam, String bbTitle) {
		return BattleBoard
                .builder()
                .battleBoardId(battleBoardId)
                .bbTitle(bbTitle)
                .author(user)
                .myTeam(myTeam)
                .bbWriteTime(bbWriteTime)
                .bbUpdateTime(LocalDateTime.now())
                .build();
	}
}
