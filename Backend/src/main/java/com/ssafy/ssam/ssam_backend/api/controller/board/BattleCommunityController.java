package com.ssafy.ssam.ssam_backend.api.controller.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.ssam.ssam_backend.api.dto.request.SaveBattleBoardReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.BaseResponseBody;
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
@RequestMapping("/api/battle")
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
	public ResponseEntity<Page<BattleBoard>> getBattleBoardList(
			@RequestParam(value="title", required = false)
			@Parameter(name = "title", description="글 제목") String title,
			@RequestParam(value="page", defaultValue = "0")
			@Parameter(name = "page", description="몇 페이지 가져올건지") int page,
			@RequestParam(value="limit", defaultValue = "5")
			@Parameter(name = "limit", description="페이지 당 몇 개 가져올건지") int limit,
			@RequestParam(value="nickname", required = false)
			@Parameter(name = "nickname", description="글을 쓴 유저 아이디") String nickname
			) {
		Page<BattleBoard> responseDto = battleService.getBattleCommunityList(page, limit, title, nickname);
		return ResponseEntity.status(200).body(responseDto);
	}
	
	@DeleteMapping("/{boardId}")
	@Operation(summary="배틀 커뮤니티 게시판 삭제하기", description="해당 글 번호를 가진 글을 삭제한다.")
	public ResponseEntity<BaseResponseBody> deleteBattleBoard(@PathVariable Long boardId) {
		battleService.deleteBattleBoard(boardId);
		return ResponseEntity.status(200).body(new BaseResponseBody(200, "Success"));
	}
	
	@PostMapping("/post")
	@Operation(summary="배틀 커뮤니티 게시판 작성하기", description="")
	public ResponseEntity<BaseResponseBody> postBattleBoard(
			@RequestParam(value = "author", defaultValue="1")
			@Parameter(name = "author", description="작성자") Long author,
			@RequestBody SaveBattleBoardReqDto requestDto) {
		battleService.saveBattleBoard(author, requestDto);
		return ResponseEntity.status(200).body(new BaseResponseBody(200, "게시글 작성 성공"));
	}
}
