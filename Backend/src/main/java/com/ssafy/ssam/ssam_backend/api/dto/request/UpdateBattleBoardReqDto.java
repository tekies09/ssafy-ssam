package com.ssafy.ssam.ssam_backend.api.dto.request;

import java.time.LocalDateTime;

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
	@ApiModelProperty(value = "배틀 게시판 글쓴이")
	private User user;
	
	@ApiModelProperty(value = "업로드한 나만의 팀 아이디")
	private MyTeam myTeam;
	
	public LocalDateTime bbUpdateTime;
	
	@Builder
	public UpdateBattleBoardReqDto(BattleBoard battleBoard) {
		this.battleBoardId = battleBoard.getBattleBoardId();
		this.bbTitle = battleBoard.getBbTitle();
		this.myTeam = battleBoard.getMyTeam();
		this.bbUpdateTime = battleBoard.getBbUpdateTime();
		this.user = battleBoard.getAuthor();
	}
	
	public BattleBoard toEntity() {
		return BattleBoard
                .builder()
                .battleBoardId(battleBoardId)
                .bbTitle(bbTitle)
                .author(user)
                .myTeam(myTeam)
                .bbUpdateTime(bbUpdateTime)
                .build();
	}
}
