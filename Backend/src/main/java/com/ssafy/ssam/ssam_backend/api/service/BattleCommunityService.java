package com.ssafy.ssam.ssam_backend.api.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.ssafy.ssam.ssam_backend.api.dto.request.SaveBattleBoardReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.UpdateBattleBoardReqDto;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;


public interface BattleCommunityService {
	public Page<BattleBoard> getBattleCommunityList(int page, int limit, String title, String nickName);
	public void deleteBattleBoard(long id);
	public long getBattleCommunityCount();
	public void saveBattleBoard(String userId, SaveBattleBoardReqDto requestDto);
	public void updateBattleBoard(BattleBoard board);
}
