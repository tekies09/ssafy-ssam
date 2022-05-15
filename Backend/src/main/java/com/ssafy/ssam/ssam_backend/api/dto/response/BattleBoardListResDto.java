package com.ssafy.ssam.ssam_backend.api.dto.response;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;

import com.ssafy.ssam.ssam_backend.domain.RoleType;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
public class BattleBoardListResDto extends BaseResponseBody {
	
	@ApiModelProperty(name = "배틀 커뮤니티 글 리스트")
	List<RefactorBoardDto> battleBoardList = new ArrayList<>();
	
	@NoArgsConstructor
	@Getter
	public class RefactorBoardDto {
		private Long battleBoardId;
		private String username;
		private String nickname;
		private String bbTitle;
		private LocalDateTime bbWriteTime;
		private LocalDateTime bbUpdateTime;
		private RoleType role;
		
		public RefactorBoardDto(BattleBoard board) {
			this.battleBoardId = board.getBattleBoardId();
			this.bbTitle = board.getBbTitle();
			this.nickname = board.getAuthor().getNickname();
			this.username = board.getAuthor().getUsername();
			this.bbUpdateTime = board.getBbUpdateTime();
			this.bbWriteTime = board.getBbWriteTime();
			this.role = board.getAuthor().getRole();
		}
	}
	
	
	public BattleBoardListResDto(Integer statusCode, String message, Page<BattleBoard> boardList) {
		this.statusCode = statusCode;
		this.message = message;
		
		// 불필요한 정보 제거(ex: 유저의 비밀번호, 이름 등)
		for(BattleBoard board : boardList) {
			RefactorBoardDto refactorBoard = new RefactorBoardDto(board);
			battleBoardList.add(refactorBoard);
		}
	}
}
