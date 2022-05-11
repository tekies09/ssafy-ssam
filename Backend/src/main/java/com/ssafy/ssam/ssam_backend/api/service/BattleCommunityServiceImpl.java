package com.ssafy.ssam.ssam_backend.api.service;

import javax.transaction.Transactional;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.ssafy.ssam.ssam_backend.api.dto.request.BattleBoardCreateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.BattleBoardUpdateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.BattleBoardRes;
import com.ssafy.ssam.ssam_backend.api.repository.BattleBoardRepository;
import com.ssafy.ssam.ssam_backend.api.repository.MyTeamRepository;
import com.ssafy.ssam.ssam_backend.api.repository.UserRepository;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.MyTeam;
import com.ssafy.ssam.ssam_backend.domain.entity.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class BattleCommunityServiceImpl implements BattleCommunityService {

	private final BattleBoardRepository battleBoardRepository;
	private final UserRepository userRepository;
	private final MyTeamRepository myTeamRepository;
	
	@Override
	public Page<BattleBoard> getBattleCommunityList(int page, int limit, String title, String username) {
		Pageable paging = PageRequest.of(page, limit, Sort.Direction.DESC, "battleBoardId");
		Page<BattleBoard> boards = battleBoardRepository.findAll(paging);

		if(username != null) {
			User user = userRepository.findUserByUsername(username);
			boards = battleBoardRepository.findPageByAuthor(user, paging);		// 2 자리에 nickName으로 User 정보 얻어온 id를 넣어줘야 함.
		} else if(title != null) {
			boards = battleBoardRepository.findPageByBbTitle(title, paging);
		}
		
		return boards;
	}

	@Override
	public void deleteBattleBoard(long id) {
		BattleBoard board = new BattleBoard();
		try {
			board = battleBoardRepository.findById(id).orElseThrow(NotFoundException::new);
		} catch (NotFoundException e) {
			e.printStackTrace();
		}
		battleBoardRepository.delete(board);
	}

	@Override
	public long getBattleBoardAllCount() {
		long count = battleBoardRepository.count();
		return count;
	}


	@Override
	public void saveBattleBoard(String userId, Long myTeamId, BattleBoardCreateReqDto requestDto) {
		User user = userRepository.findUserByUsername(userId);
		MyTeam myTeam = new MyTeam();
		try {
			myTeam = myTeamRepository.findById(myTeamId).orElseThrow(NotFoundException::new);
		} catch (NotFoundException e) {
			e.printStackTrace();
		}
		BattleBoard board = requestDto.toEntity(user, myTeam);
		battleBoardRepository.save(board);
		
		// 만약 작성 후 해당 게시글로 바로 들어갈 수 있게끔 링크를 걸려면 이렇게 작성
//		return battleBoardRepository.save(board).getAuthor();
	}

	@Override
	public void updateBattleBoard(long battleBoardId, String bbTitle, Long myTeamId) {
		MyTeam myTeam = new MyTeam();
		try {
			myTeam = myTeamRepository.findById(myTeamId).orElseThrow(NotFoundException::new);
		} catch (NotFoundException e) {
			e.printStackTrace();
		}
		
		BattleBoard beforeBoard = new BattleBoard();
		try {
			beforeBoard = battleBoardRepository.findById(battleBoardId).orElseThrow(NotFoundException::new);
		} catch(NotFoundException e) {
			System.out.println(e);
		}
		
		BattleBoardUpdateReqDto requestDto = new BattleBoardUpdateReqDto(beforeBoard);
		BattleBoard updateBoard = requestDto.toEntity(myTeam, bbTitle);
		battleBoardRepository.save(updateBoard);
	}

	@Override
	public BattleBoardRes getBattleBoard(long boardId) {
		BattleBoard board = new BattleBoard();
		try {
			board = battleBoardRepository.findById(boardId).orElseThrow(NotFoundException::new);
		} catch (NotFoundException e) {
			e.printStackTrace();
		}
		
		return new BattleBoardRes(new Integer(200), "글 상세 조회 성공", board);
	}

}