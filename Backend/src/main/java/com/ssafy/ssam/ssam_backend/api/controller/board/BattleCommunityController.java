package com.ssafy.ssam.ssam_backend.api.controller.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.ssam.ssam_backend.api.dto.request.BattleBoardCreateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.BattleBoardUpdateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.BaseResponseBody;
import com.ssafy.ssam.ssam_backend.api.dto.response.BattleBoardListResDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.BattleBoardResDto;
import com.ssafy.ssam.ssam_backend.api.service.BattleCommunityService;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/battle")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(value = "배틀 커뮤니티 API", tags = "배틀 커뮤니티")
public class BattleCommunityController {
	private final BattleCommunityService battleService;
	
	@Autowired
	public BattleCommunityController(BattleCommunityService battleService) {
		super();
		this.battleService = battleService;
	}
	
	@GetMapping("/list")
	@ApiResponses({
		@ApiResponse(responseCode = "200", description = "OK"),
		@ApiResponse(responseCode = "400", description = "BAD REQUEST"),
		@ApiResponse(responseCode = "404", description = "찾을 수 없는 페이지입니다."),
		@ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
	})
	@Operation(summary="배틀 커뮤니티 게시판 가져오기", description="게시판의 정보와 유저가 등록한 나만의 팀 정보를 불러온다.")
	public ResponseEntity<BattleBoardListResDto> getBattleBoardList(
			@RequestParam(value="title", required = false)
			@Parameter(name = "title", description="글 제목") String title,
			@RequestParam(value="page", defaultValue = "0")
			@Parameter(name = "page", description="몇 페이지 가져올건지") int page,
			@RequestParam(value="limit", defaultValue = "5")
			@Parameter(name = "limit", description="페이지 당 몇 개 가져올건지") int limit,
			@RequestParam(value="nickname", required = false)
			@Parameter(name = "nickname", description="글을 쓴 유저 아이디") String nickname
			) {
		BattleBoardListResDto responseDto = battleService.getBattleCommunityList(page, limit, title, nickname);
		return ResponseEntity.status(200).body(responseDto);
	}
	
	@GetMapping("{boardId}")
	@Operation(summary="배틀 커뮤니티 게시판 특정 글 가져오기", description = "특정 번호의 글 내용을 전부 가져온다.")
	public ResponseEntity<BattleBoardResDto> getBattleBoard(@PathVariable Long boardId) {
		BattleBoardResDto responseDto = battleService.getBattleBoard(boardId);
		return ResponseEntity.status(200).body(responseDto);
	}
	
	@DeleteMapping("/delete/{boardId}")
	@Operation(summary="배틀 커뮤니티 게시판 삭제하기", description="해당 글 번호를 가진 글을 삭제한다.")
	public ResponseEntity<BaseResponseBody> deleteBattleBoard(@PathVariable Long boardId) {
		battleService.deleteBattleBoard(boardId);
		return ResponseEntity.status(200).body(new BaseResponseBody(200, "Success"));
	}
	
	@PostMapping("/post")
	@Operation(summary="배틀 커뮤니티 게시판 작성하기", description="")
	public ResponseEntity<BaseResponseBody> postBattleBoard(
			@RequestParam(value = "author", defaultValue="1")
			@Parameter(name = "author", description="작성자") long author,
			@RequestParam(value = "bbTitle", defaultValue="")
			@Parameter(name = "bbTitle", description="작성자") String bbTitle,
			@RequestParam(value = "myTeamId", required = false)
			@Parameter(name = "myTeamId", description="나만의 팀 번호") long myTeamId
			) {
		battleService.saveBattleBoard(author, myTeamId, new BattleBoardCreateReqDto(bbTitle));
		return ResponseEntity.status(200).body(new BaseResponseBody(200, "게시글 작성 성공"));
	}
	
	@PutMapping("/update")
	@Operation(summary="배틀 커뮤니티 게시판 글 수정", description="")
	public ResponseEntity<BaseResponseBody> updateBattleBoard(
			@RequestParam(value = "battleBoardId", required=false)
			@Parameter(name = "battleBoardId", description="수정 게시판 번호")long battleBoardId,
			@RequestParam(value = "bbTitle", required=false)
			@Parameter(name = "bbTitle", description="게시판 수정 제목") String bbTitle,
			@RequestParam(value = "myTeamId", required=false)
			@Parameter(name = "myTeamId", description="나만의 팀 번호") long myTeamId
			) {
		
		battleService.updateBattleBoard(battleBoardId, bbTitle, myTeamId);
		return ResponseEntity.status(200).body(new BaseResponseBody(200, "게시글 수정 성공"));
	}
	
	@GetMapping("/allcount")
	@Operation(summary="배틀 커뮤니티 게시판 전체 개수", description="배틀 커뮤니티 게시판 DB에 저장된 글의 개수를 모두 리턴해줍니다.")
	public ResponseEntity<Long> countBattleBoard(){
		return ResponseEntity.status(200).body(battleService.getBattleBoardAllCount());
	}

}
