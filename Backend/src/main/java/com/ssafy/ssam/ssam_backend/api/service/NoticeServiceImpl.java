package com.ssafy.ssam.ssam_backend.api.service;
import com.ssafy.ssam.ssam_backend.api.dto.request.NoticeBoardCreateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.NoticeBoardUpdateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.ReplyCreateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.ReplyUpdateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.FreeBoardResDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.NoticeBoardResDto;
import com.ssafy.ssam.ssam_backend.api.repository.FreeBoardReplyRepository;
import com.ssafy.ssam.ssam_backend.api.repository.FreeBoardRepository;
import com.ssafy.ssam.ssam_backend.api.repository.NoticeBoardRepository;
import com.ssafy.ssam.ssam_backend.api.repository.UserRepository;
import com.ssafy.ssam.ssam_backend.domain.entity.FreeBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.Notice;
import com.ssafy.ssam.ssam_backend.domain.entity.Reply;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class NoticeServiceImpl implements NoticeService{


    private final NoticeBoardRepository noticeBoardRepository;
    private final UserRepository userRepository;

    @Override
    public Page<Notice> getNoticeBoardList(int page, int limit, String title, String username) {
        Pageable paging = PageRequest.of(page, limit, Sort.Direction.DESC, "noticeId");
        Page<Notice> boards = noticeBoardRepository.findAll(paging);
        if(username != null) {
            User user = userRepository.findUserByUsername(username);
            boards = noticeBoardRepository.findPageByAuthor(user, paging);
        } else if(title != null) {
            boards = noticeBoardRepository.findPageBynTitleLike("%"+title+"%", paging);
        }

        return boards;
    }

    @Override
    public NoticeBoardResDto getNoticeBoard(Long boardId) {
        Notice board = new Notice();
        try {
            board = noticeBoardRepository.findById(boardId).orElseThrow(NotFoundException::new);
        } catch (NotFoundException e) {
            e.printStackTrace();
        }
        return new NoticeBoardResDto(new Integer(200), "글 상세 조회 성공", board);
    }

    @Override
    public void deleteNoticeBoard(long id) {
        Notice board = new Notice();
        try {
            board = noticeBoardRepository.findById(id).orElseThrow(NotFoundException::new);
        } catch (NotFoundException e) {
            e.printStackTrace();
        }
        noticeBoardRepository.delete(board);
    }

    @Override
    public void saveNoticeBoard(NoticeBoardCreateReqDto requestDto) {
        User user = new User();
        try {
            user = userRepository.findById(requestDto.getUserId()).orElseThrow(NotFoundException::new);
        } catch (NotFoundException e) {
            e.printStackTrace();
        }
        Notice board = requestDto.toEntity(user);
        noticeBoardRepository.save(board);
    }

    @Override
    public void updateNoticeBoard(NoticeBoardUpdateReqDto requestDto) {
        Notice board = new Notice();

        try {
            board = noticeBoardRepository.findById(requestDto.getBoardId()).orElseThrow(NotFoundException::new);
        } catch(NotFoundException e) {
            e.printStackTrace();
        }

        Notice updateBoard = requestDto.toEntity(board);
        noticeBoardRepository.save(updateBoard);
    }

    @Override
    public long getNoticeBoardAllCount() {
        long count = noticeBoardRepository.count();
        return count;
    }
}
