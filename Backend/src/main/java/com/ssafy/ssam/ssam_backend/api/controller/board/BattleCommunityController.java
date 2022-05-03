package com.ssafy.ssam.ssam_backend.api.controller.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.ssam.ssam_backend.api.service.BattleCommunityService;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;

import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("api/battle")
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
	public ResponseEntity<List<BattleBoard>> showBattleCommunityList(
			@PathVariable(name = "title")
			@Parameter(name = "title", description="글 제목") String title, @PathVariable int page, @PathVariable int limit, @PathVariable String userid
			) {
		List<BattleBoard> responseDto = battleService.getBattleCommunityList(page, limit, title, userid);
		return ResponseEntity.status(200).body(responseDto);
	}
}
