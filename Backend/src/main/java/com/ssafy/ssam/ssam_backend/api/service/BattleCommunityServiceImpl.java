package com.ssafy.ssam.ssam_backend.api.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ssafy.ssam.ssam_backend.api.dto.request.SaveBattleBoardReqDto;
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
	public List<BattleBoard> getBattleCommunityList(int page, int limit, String title, String userid) {
		List<BattleBoard> boards = battleBoardRepository.findPage(title, userid, page, limit);
		return boards;
	}

	@Override
	public void deleteBattleBoard(long id) {
		BattleBoard board = battleBoardRepository.findById(id).orElseThrow(null);
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
//		User user = userRepository.findByUserId(userId).orElseThrow(null);
//		BattleBoard board = requestDto.toEntity(user);
		
		// 만약 작성 후 해당 게시글로 바로 들어갈 수 있게끔 링크를 걸려면 이렇게 작성
//		return battleBoardRepository.save(board).getAuthor();
	}

}
