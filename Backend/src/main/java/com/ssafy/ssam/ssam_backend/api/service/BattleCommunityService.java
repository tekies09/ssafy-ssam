package com.ssafy.ssam.ssam_backend.api.service;

import java.util.List;

import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;


public interface BattleCommunityService {
	public List<BattleBoard> getBattleCommunityList(int page, int limit, String title, String userid);
	public void deleteBattleBoard(int id);
	public long getBattleCommunityCount();
}
