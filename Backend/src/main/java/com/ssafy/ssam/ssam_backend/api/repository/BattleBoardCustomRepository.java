package com.ssafy.ssam.ssam_backend.api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;

public interface BattleBoardCustomRepository {
	Page<BattleBoard> findPageByBbTitle(String title, Pageable pageable);
	Page<BattleBoard> findPageByAuthor(long userId, Pageable pageable);
}
