package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.request.ReplyCreateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.ReplyUpdateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.ReplyResDto;

import java.util.List;

public interface FreeBoardReplyService {
    // 댓글 조회 => 게시글 상세 조회에서 함께 조회한다.
    List<ReplyResDto> findReplyList(Long boardId);

    // 댓글 생성
    void createReply(ReplyCreateReqDto request);

    // 댓글 수정
    void updateReply(Long replyId, ReplyUpdateReqDto request);

    // 댓글 삭제
    void deleteReply(Long replyId);
}
