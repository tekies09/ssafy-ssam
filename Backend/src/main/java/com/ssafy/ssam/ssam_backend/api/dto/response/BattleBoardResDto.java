package com.ssafy.ssam.ssam_backend.api.dto.response;


import java.time.LocalDateTime;
import java.util.List;

import com.ssafy.ssam.ssam_backend.domain.RoleType;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;

import io.swagger.annotations.ApiModel;
import lombok.Getter;

@Getter
@ApiModel("BattleCommunityBoardListResponse")
public class BattleBoardResDto extends BaseResponseBody {
	
	private Long battleBoardId;
	private String username;
	private String nickname;
	private String bbTitle;
	private LocalDateTime bbWriteTime;
	private LocalDateTime bbUpdateTime;
	private RoleType role;
	private String teamName;
	private List<MyTeamPlayerResDto> myTeamPlayerList;
	
	public BattleBoardResDto(Integer statusCode, String message, BattleBoard board, List<MyTeamPlayerResDto> myTeamPlayerList, String teamName) {
		this.message = message;
		this.statusCode = statusCode;
		this.battleBoardId = board.getBattleBoardId();
		this.bbTitle = board.getBbTitle();
		this.nickname = board.getAuthor().getNickname();
		this.username = board.getAuthor().getUsername();
		this.bbUpdateTime = board.getBbUpdateTime();
		this.bbWriteTime = board.getBbWriteTime();
		this.role = board.getAuthor().getRole();
		this.teamName = teamName;
		this.myTeamPlayerList = myTeamPlayerList;
	}
	
	public BattleBoardResDto(Integer statusCode, String message, BattleBoard board) {
		this.message = message;
		this.statusCode = statusCode;
		this.battleBoardId = board.getBattleBoardId();
		this.bbTitle = board.getBbTitle();
		this.nickname = board.getAuthor().getNickname();
		this.username = board.getAuthor().getUsername();
		this.bbUpdateTime = board.getBbUpdateTime();
		this.bbWriteTime = board.getBbWriteTime();
		this.role = board.getAuthor().getRole();
	}
}
