package com.ssafy.ssam.ssam_backend.api.dto.request;

import java.time.LocalDateTime;

import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.MyTeam;
import com.sun.istack.NotNull;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class BattleBoardUpdateReqDto {
	
	@NotNull
	@ApiModelProperty(value = "배틀 게시판 글 제목")
	private String bbTitle;
	
	@NotNull
	@ApiModelProperty(value = "배틀 게시판 작성 유저")
	private long myTeamId;
	
	@NotNull
	@ApiModelProperty(value = "배틀 게시판 글 번호")
	private long battleBoardId;

	
	public BattleBoardUpdateReqDto(long boardId, String title, long myTeamId) {
		this.bbTitle = title;
		this.battleBoardId = boardId;
		this.myTeamId = myTeamId;
	}
	
	public BattleBoard toEntity(BattleBoard board, MyTeam myTeam) {
		return BattleBoard
                .builder()
                .battleBoardId(this.battleBoardId)
                .bbTitle(this.bbTitle)
                .author(board.getAuthor())
                .myTeam(myTeam)
                .bbWriteTime(board.getBbWriteTime())
                .bbUpdateTime(LocalDateTime.now())
                .build();
	}
	
}
