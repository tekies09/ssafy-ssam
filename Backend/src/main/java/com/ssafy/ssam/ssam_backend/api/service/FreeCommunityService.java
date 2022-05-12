package com.ssafy.ssam.ssam_backend.api.service;

import org.springframework.data.domain.Page;

import com.ssafy.ssam.ssam_backend.api.dto.request.FreeBoardCreateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.FreeBoardUpdateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.FreeBoardResDto;
import com.ssafy.ssam.ssam_backend.domain.entity.FreeBoard;

public interface FreeCommunityService {
	public Page<FreeBoard> getFreeBoardList(int page, int limit, String title, String username);
	public FreeBoardResDto getFreeBoard(Long boardId);
	public void deleteFreeBoard(long id);
	public void saveFreeBoard(FreeBoardCreateReqDto requestDto);		// savefreeboardrequestdto 만들어서 넣어줄 것
	public void updateFreeBoard(FreeBoardUpdateReqDto requestDto);		// 여기두
	public long getFreeBoardAllCount();
}
