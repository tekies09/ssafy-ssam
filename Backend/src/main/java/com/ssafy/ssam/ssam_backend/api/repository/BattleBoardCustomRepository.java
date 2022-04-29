package com.ssafy.ssam.ssam_backend.api.repository;

import java.util.List;
import java.util.Optional;

import com.ssafy.ssam.ssam_backend.api.domain.board.BattleBoard;

public interface BattleBoardCustomRepository {
	Optional<BattleBoard> findBoardById(Long id);
	List<BattleBoard> findPage(String title, String userid, int page, int limit);
}
