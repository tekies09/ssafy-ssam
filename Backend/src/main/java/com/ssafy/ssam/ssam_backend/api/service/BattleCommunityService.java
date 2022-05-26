package com.ssafy.ssam.ssam_backend.api.service;


import com.ssafy.ssam.ssam_backend.api.dto.request.BattleBoardCreateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.BattleBoardUpdateReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.BattleBoardListResDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.BattleBoardResDto;


public interface BattleCommunityService {
	public BattleBoardListResDto getBattleCommunityList(int page, int limit, String title, String nickName);
	public BattleBoardResDto getBattleBoard(long boardId);
	public void deleteBattleBoard(long id);
	public long getBattleBoardAllCount();
	public void saveBattleBoard(BattleBoardCreateReqDto requestDto);
	public void updateBattleBoard(BattleBoardUpdateReqDto requestDto);
}
