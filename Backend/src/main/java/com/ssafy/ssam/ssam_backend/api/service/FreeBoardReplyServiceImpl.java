package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.request.ReplyCreateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.ReplyUpdateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.ReplyResDto;
import com.ssafy.ssam.ssam_backend.api.repository.FreeBoardReplyRepository;
import com.ssafy.ssam.ssam_backend.api.repository.FreeBoardRepository;
import com.ssafy.ssam.ssam_backend.api.repository.UserRepository;
import com.ssafy.ssam.ssam_backend.domain.entity.FreeBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.Reply;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class FreeBoardReplyServiceImpl implements FreeBoardReplyService {

    private final FreeBoardRepository freeBoardRepository;
    private final UserRepository userRepository;
    private final FreeBoardReplyRepository replyRepository;

    /**
     * 댓글 목록 조회
     */
    @Override
    public List<ReplyResDto> findReplyList(Long boardId) {
        Optional<FreeBoard> freeBoard = freeBoardRepository.findById(boardId);
        List<Reply> replyList = replyRepository.findAllByFreeBoard(freeBoard);
        return replyList.stream().map(ReplyResDto::new).collect(Collectors.toList());
    }

    /**
     * 댓글 생성
     */
    @Override
    public void createReply(ReplyCreateReqDto requestDto) {
        FreeBoard freeBoard = new FreeBoard();
        User user = new User();

        try {
            user = userRepository.findById(requestDto.getUserId()).orElseThrow(NotFoundException::new);
            freeBoard = freeBoardRepository.findById(requestDto.getFreeBoardId()).orElseThrow(NotFoundException::new);
        } catch (NotFoundException e) {
            e.printStackTrace();
        }

        replyRepository.save(requestDto.toEntity(user, freeBoard));
    }

    /**
     * 댓글 수정
     */
    @Override
    public void updateReply(Long replyId, ReplyUpdateReqDto requestDto) {
        try {
            Reply reply = replyRepository.findById(replyId).orElseThrow(NotFoundException::new);
            reply.update(requestDto.getContent());
        } catch (NotFoundException e) {
            e.printStackTrace();
        }
    }

    /**
     * 댓글 삭제
     */
    @Override
    public void deleteReply(Long replyId) {
        replyRepository.deleteById(replyId);
    }
}
