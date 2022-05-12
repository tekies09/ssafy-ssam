package com.ssafy.ssam.ssam_backend.api.service;

import javax.transaction.Transactional;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.ssafy.ssam.ssam_backend.api.dto.request.FreeBoardCreateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.FreeBoardUpdateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.FreeBoardResDto;
import com.ssafy.ssam.ssam_backend.api.repository.FreeBoardRepository;
import com.ssafy.ssam.ssam_backend.api.repository.UserRepository;
import com.ssafy.ssam.ssam_backend.domain.entity.FreeBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class FreeCommunityServiceImpl implements FreeCommunityService {

	private final FreeBoardRepository freeBoardRepository;
	private final UserRepository userRepository;
	
	@Override
	public Page<FreeBoard> getFreeBoardList(int page, int limit, String title, String username) {
		Pageable paging = PageRequest.of(page, limit, Sort.Direction.DESC, "freeBoardId");
		Page<FreeBoard> boards = freeBoardRepository.findAll(paging);
		if(username != null) {
			User user = userRepository.findUserByUsername(username);
			boards = freeBoardRepository.findPageByAuthor(user, paging);
		} else if(title != null) {
			boards = freeBoardRepository.findPageByFbTitle(title, paging);
		}
		
		return boards;
	}
	
	@Override
	public FreeBoardResDto getFreeBoard(Long boardId) {
		FreeBoard board = new FreeBoard();
		try {
			board = freeBoardRepository.findById(boardId).orElseThrow(NotFoundException::new);
		} catch (NotFoundException e) {
			e.printStackTrace();
		}
		return new FreeBoardResDto(new Integer(200), "글 상세 조회 성공", board);
	}

	@Override
	public void deleteFreeBoard(long id) {
		FreeBoard board = new FreeBoard();
		try {
			board = freeBoardRepository.findById(id).orElseThrow(NotFoundException::new);
		} catch (NotFoundException e) {
			e.printStackTrace();
		}
		
		freeBoardRepository.delete(board);
	}

	@Override
	public void saveFreeBoard(FreeBoardCreateReqDto requestDto) {
		User user = new User();
		try {
			user = userRepository.findById(requestDto.getUserId()).orElseThrow(NotFoundException::new);
		} catch (NotFoundException e) {
			e.printStackTrace();
		}
		FreeBoard board = requestDto.toEntity(user);
		freeBoardRepository.save(board);
	}

	@Override
	public void updateFreeBoard(FreeBoardUpdateReqDto requestDto) {
		FreeBoard board = new FreeBoard();
		
		try {
			board = freeBoardRepository.findById(requestDto.getBoardId()).orElseThrow(NotFoundException::new);
		} catch(NotFoundException e) {
			e.printStackTrace();
		}
		
		FreeBoard updateBoard = requestDto.toEntity(board);
		freeBoardRepository.save(updateBoard);
	}

	@Override
	public long getFreeBoardAllCount() {
		long count = freeBoardRepository.count();
		return count;
	}


}
