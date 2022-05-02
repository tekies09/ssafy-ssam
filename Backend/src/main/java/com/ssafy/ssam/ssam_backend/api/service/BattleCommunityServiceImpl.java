package com.ssafy.ssam.ssam_backend.api.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.ssafy.ssam.ssam_backend.api.repository.BattleBoardRepository;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class BattleCommunityServiceImpl implements BattleCommunityService {

	private final BattleBoardRepository battleBoardRepository;
	
	@Override
	public List<BattleBoard> getBattleCommunityList(int page, int limit, String title, String userid) {
		List<BattleBoard> boards = battleBoardRepository.findPage(title, userid, page, limit);
		return boards;
	}

	@Override
	public void deleteBattleBoard(int id) {
		// TODO Auto-generated method stub

	}

	@Override
	public long getBattleCommunityCount() {
		// TODO Auto-generated method stub
		return 0;
	}

}
