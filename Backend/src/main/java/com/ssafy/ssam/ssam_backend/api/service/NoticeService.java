package com.ssafy.ssam.ssam_backend.api.service;


import com.ssafy.ssam.ssam_backend.api.dto.request.NoticeBoardCreateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.NoticeBoardUpdateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.NoticeBoardResDto;
import com.ssafy.ssam.ssam_backend.domain.entity.Notice;
import org.springframework.data.domain.Page;

public interface NoticeService {
    public Page<Notice> getNoticeBoardList(int page, int limit, String title, String username);
    public NoticeBoardResDto getNoticeBoard(Long boardId);
    public void deleteNoticeBoard(long id);
    public void saveNoticeBoard(NoticeBoardCreateReqDto requestDto);		// savefreeboardrequestdto 만들어서 넣어줄 것
    public void updateNoticeBoard(NoticeBoardUpdateReqDto requestDto);		// 여기두
    public long getNoticeBoardAllCount();
}
