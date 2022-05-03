package com.ssafy.ssam.ssam_backend.api.service;

import java.util.List;

import com.ssafy.ssam.ssam_backend.api.dto.request.SaveBattleBoardReqDto;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;


public interface BattleCommunityService {
	public List<BattleBoard> getBattleCommunityList(int page, int limit, String title, String userid);
	public void deleteBattleBoard(long id);
	public long getBattleCommunityCount();
	public void saveBattleBoard(String userId, SaveBattleBoardReqDto requestDto);
}
