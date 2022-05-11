package com.ssafy.ssam.ssam_backend.api.dto.response;


import java.time.LocalDateTime;

import com.ssafy.ssam.ssam_backend.domain.RoleType;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
@ApiModel("BattleCommunityBoardListResponse")
public class BattleBoardRes extends BaseResponseBody {
	
	public BattleBoardRes(Integer statusCode, String message) {
		super(statusCode, message);
	}

	public BattleBoardRes(Integer statusCode) {
		super(statusCode);
	}

	public BattleBoardRes() {
		super();
	}

//	@ApiModelProperty(name = "배틀 커뮤니티 글 리스트")
//	List<BattleBoard> battleCommunityList = new ArrayList<>();
	
	private Long battleBoardId;
	private String username;
	private String nickname;
	private String bbTitle;
	private LocalDateTime bbWriteTime;
	private LocalDateTime bbUpdateTime;
	private RoleType role;
	
	public BattleBoardRes(Integer statusCode, String message, BattleBoard board) {
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

//	public static BattleBoardRes of(Integer statusCode, String message, List<BattleBoard> battleCommunityList) {
//		BattleBoardRes res = new BattleBoardRes();
//		res.setMessage(message);
//		res.setStatusCode(statusCode);
//		for(BattleBoard battleBoard : battleCommunityList) {
//			res.battleCommunityList.add(battleBoard);
//		}
//		
//		return res;
//	}
	
}
