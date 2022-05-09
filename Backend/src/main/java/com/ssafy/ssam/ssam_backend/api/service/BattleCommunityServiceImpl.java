package com.ssafy.ssam.ssam_backend.api.service;

import javax.transaction.Transactional;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.ssafy.ssam.ssam_backend.api.dto.request.SaveBattleBoardReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.UpdateBattleBoardReqDto;
import com.ssafy.ssam.ssam_backend.api.repository.BattleBoardRepository;
import com.ssafy.ssam.ssam_backend.api.repository.UserRepository;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class BattleCommunityServiceImpl implements BattleCommunityService {

	private final BattleBoardRepository battleBoardRepository;
	private final UserRepository userRepository;
	
	@Override
	public Page<BattleBoard> getBattleCommunityList(int page, int limit, String title, String nickName) {
		Pageable paging = PageRequest.of(page, limit, Sort.Direction.DESC, "battleBoardId");
		Page<BattleBoard> boards = battleBoardRepository.findAll(paging);

		if(nickName != null) {
			boards = battleBoardRepository.findPageByAuthor(1, paging);		// 2 자리에 nickName으로 User 정보 얻어온 id를 넣어줘야 함.
		}
		if(title != null) {
			boards = battleBoardRepository.findPageByBbTitle(title, paging);
		}
		
		return boards;
	}

	@Override
	public void deleteBattleBoard(long id) {
//		battleBoardRepository.deleteById(id);
		BattleBoard board = new BattleBoard();
		try {
			board = battleBoardRepository.findById(id).orElseThrow(NotFoundException::new);
		} catch (NotFoundException e) {
			e.printStackTrace();
		}
		battleBoardRepository.delete(board);
	}

	@Override
	public long getBattleCommunityCount() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void saveBattleBoard(String userId, SaveBattleBoardReqDto requestDto) {
		// 여기 다시
		User user = userRepository.findUserByUsername(userId);
		BattleBoard board = requestDto.toEntity(user);
		battleBoardRepository.save(board);
		
		// 만약 작성 후 해당 게시글로 바로 들어갈 수 있게끔 링크를 걸려면 이렇게 작성
//		return battleBoardRepository.save(board).getAuthor();
	}

	@Override
	public void updateBattleBoard(BattleBoard board) {
		UpdateBattleBoardReqDto requestDto = new UpdateBattleBoardReqDto(board);
		BattleBoard updateBoard = requestDto.toEntity();
		battleBoardRepository.save(updateBoard);
	}

}
