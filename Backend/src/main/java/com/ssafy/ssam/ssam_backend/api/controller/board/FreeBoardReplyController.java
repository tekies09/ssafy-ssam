package com.ssafy.ssam.ssam_backend.api.controller.board;

import com.ssafy.ssam.ssam_backend.api.dto.request.ReplyCreateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.ReplyUpdateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.BaseResponseBody;
import com.ssafy.ssam.ssam_backend.api.dto.response.ReplyResDto;
import com.ssafy.ssam.ssam_backend.api.service.FreeBoardReplyService;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/free/{freeBoardId}/comments")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
@Api(value = "토론 커뮤니티 댓글 API", tags = "토론 커뮤니티 댓글")
public class FreeBoardReplyController {

    private final FreeBoardReplyService replyService;

    @GetMapping
    @Operation(summary="댓글 목록 조회하기", description="토론 커뮤니티 게시글의 댓글 목록을 조회한다.")
    public ResponseEntity<List<ReplyResDto>> getReplyList(@PathVariable("freeBoardId") Long boardId) {
        List<ReplyResDto> replyList = replyService.findReplyList(boardId);
        return ResponseEntity.status(200).body(replyList);
    }

    @PostMapping
    @Operation(summary="댓글 작성하기", description="토론 커뮤니티에 새로운 댓글을 작성한다.")
    public ResponseEntity<BaseResponseBody> createReply(@RequestBody ReplyCreateReqDto request) {
        replyService.createReply(request);
        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "댓글 작성 완료"));
    }

    @PutMapping("/{replyId}")
    @Operation(summary="댓글 수정하기", description="토론 커뮤니티의 댓글을 수정한다.")
    public ResponseEntity<BaseResponseBody> updateReply(
            @PathVariable Long replyId,
            @RequestBody ReplyUpdateReqDto request) {
        replyService.updateReply(replyId, request);
        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "댓글 수정 완료"));
    }

    @DeleteMapping("/{replyId}")
    @Operation(summary="댓글 삭제하기", description="토론 커뮤니티의 댓글을 삭제한다.")
    public ResponseEntity<BaseResponseBody> deleteReply(@PathVariable Long replyId) {
        replyService.deleteReply(replyId);
        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "댓글 삭제 완료"));
    }
}
