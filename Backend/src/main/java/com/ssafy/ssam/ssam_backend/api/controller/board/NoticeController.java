package com.ssafy.ssam.ssam_backend.api.controller.board;

import com.ssafy.ssam.ssam_backend.api.dto.request.NoticeBoardCreateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.NoticeBoardUpdateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.BaseResponseBody;
import com.ssafy.ssam.ssam_backend.api.dto.response.NoticeBoardResDto;
import com.ssafy.ssam.ssam_backend.api.service.NoticeService;
import com.ssafy.ssam.ssam_backend.domain.entity.Notice;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponses;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/notice")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(value = "공지사항 API", tags = "공지사항")
public class NoticeController {

    private final NoticeService noticeService;

    @Autowired
    public NoticeController(NoticeService noticeService) {
        super();
        this.noticeService = noticeService;
    }


    @GetMapping("/list")
    @ApiResponses({})
    @Operation(summary="공지사항 글 목록 가져오기")
    public ResponseEntity<Page<Notice>> getNoticeList(
            @RequestParam(value = "page", defaultValue = "0")
            @Parameter(name="page", description = "몇 번째 페이지 가져올건지") int page,
            @RequestParam(value="limit", defaultValue = "5")
            @Parameter(name = "limit", description="페이지 당 몇 개 가져올건지") int limit,
            @RequestParam(value="title", required = false)
            @Parameter(name = "title", description="글 제목") String title,
            @RequestParam(value="username", required = false)
            @Parameter(name = "username", description="글을 쓴 유저 아이디") String username
    )
    {
        Page<Notice> responseDto = noticeService.getNoticeBoardList(page, limit, title, username);
        return ResponseEntity.status(200).body(responseDto);
    }

    @GetMapping("{boardId}")
    @Operation(summary="공지사항  특정 글 가져오기", description = "특정 번호의 글 내용을 전부 가져온다.")
    public ResponseEntity<NoticeBoardResDto> getNotice(@PathVariable Long boardId) {
        NoticeBoardResDto responseDto = noticeService.getNoticeBoard(boardId);
        return ResponseEntity.status(200).body(responseDto);
    }

    @GetMapping("/allcount")
    @Operation(summary="r공지사항 글 전체 개수 가져오기", description = "공지사항에 작성된 전체 글의 개수를 가져옵니다.")
    public ResponseEntity<Long> getNoticeCount() {
        long count = noticeService.getNoticeBoardAllCount();
        return ResponseEntity.status(200).body(count);
    }

    @PostMapping("/post")
    @Operation(summary="공지사항 글 작성하기")
    public ResponseEntity<BaseResponseBody> postNotice( @RequestBody NoticeBoardCreateReqDto requestDto) {
        noticeService.saveNoticeBoard(requestDto);
        return ResponseEntity.status(200).body(new BaseResponseBody(200, "공지사항 글 작성 성공"));
    }

    @PutMapping("/update")
    @Operation(summary="공지사항 글 수정하기")
    public ResponseEntity<BaseResponseBody> updateNotice (@RequestBody NoticeBoardUpdateReqDto requestDto) {
        noticeService.updateNoticeBoard(requestDto);
        return ResponseEntity.status(200).body(new BaseResponseBody(200, "공지사항 글 수정 성공"));
    }

    @DeleteMapping("/delete/{boardId}")
    @Operation(summary = "공지사항 글 삭제하기")
    public ResponseEntity<BaseResponseBody> deleteFreeBoard(@PathVariable Long boardId) {
        noticeService.deleteNoticeBoard(boardId);
        return ResponseEntity.status(200).body(new BaseResponseBody(200, "공지사항 글 삭제 성공"));
    }
}
