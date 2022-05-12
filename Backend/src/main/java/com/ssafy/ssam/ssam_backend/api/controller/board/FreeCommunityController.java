package com.ssafy.ssam.ssam_backend.api.controller.board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.ssafy.ssam.ssam_backend.api.dto.request.FreeBoardCreateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.BaseResponseBody;
import com.ssafy.ssam.ssam_backend.api.dto.response.FreeBoardResDto;
import com.ssafy.ssam.ssam_backend.api.service.FreeCommunityService;
import com.ssafy.ssam.ssam_backend.domain.entity.FreeBoard;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponses;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/free")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(value = "토론 커뮤니티 API", tags = "토론 커뮤니티")
public class FreeCommunityController {
	
	private final FreeCommunityService freeCommunityService;
	
	@Autowired
	public FreeCommunityController(FreeCommunityService freeCommunityService) {
		super();
		this.freeCommunityService = freeCommunityService;
	}
	
	@GetMapping("/list")
	@ApiResponses({})
	@Operation(summary="토론 게시판 글 목록 가져오기")
	public ResponseEntity<Page<FreeBoard>> getFreeBoardList(
			@RequestParam(value = "page", defaultValue = "0")
			@Parameter(name="page", description = "몇 번째 페이지 가져올건지") int page,
			@RequestParam(value="limit", defaultValue = "5")
			@Parameter(name = "limit", description="페이지 당 몇 개 가져올건지") int limit,
			@RequestParam(value="title", required = false)
			@Parameter(name = "title", description="글 제목") String title,
			@RequestParam(value="username", required = false)
			@Parameter(name = "username", description="글을 쓴 유저 아이디") String username
			) {
		Page<FreeBoard> responseDto = freeCommunityService.getFreeBoardList(page, limit, title, username);
		return ResponseEntity.status(200).body(responseDto);
	}
	
	@GetMapping("{boardId}")
	@Operation(summary="토론 커뮤니티 게시판 특정 글 가져오기", description = "특정 번호의 글 내용을 전부 가져온다.")
	public ResponseEntity<FreeBoardResDto> getFreeBoard(@PathVariable Long boardId) {
		FreeBoardResDto responseDto = freeCommunityService.getFreeBoard(boardId);
		return ResponseEntity.status(200).body(responseDto);
	}
	
	@GetMapping("/allcount")
	@Operation(summary="토론 게시판 글 전체 개수 가져오기", description = "토론 게시판에 작성된 전체 글의 개수를 가져옵니다.")
	public ResponseEntity<Long> getFreeBoardCount() {
		long count = freeCommunityService.getFreeBoardAllCount();
		return ResponseEntity.status(200).body(count);
	}
	
	@PostMapping("/post")
	@Operation(summary="토론 게시판 글 작성하기")
	public ResponseEntity postFreeBoard(
			@RequestBody FreeBoardCreateReqDto requestDto
			) {
		
		return ResponseEntity.status(200).body(requestDto.toEntity());
	}
	
	@DeleteMapping("/delete/{boardId}")
	@Operation(summary = "토론 게시판 글 삭제하기")
	public ResponseEntity<BaseResponseBody> deleteFreeBoard(@PathVariable Long boardId) {
		freeCommunityService.deleteFreeBoard(boardId);
		return ResponseEntity.status(200).body(new BaseResponseBody(200, "토론 게시판 글 삭제 성공"));
	}
}
