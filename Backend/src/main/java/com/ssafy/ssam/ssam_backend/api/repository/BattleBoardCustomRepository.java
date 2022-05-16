package com.ssafy.ssam.ssam_backend.api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.User;

public interface BattleBoardCustomRepository {
	Page<BattleBoard> findPageByBbTitleLike(String title, Pageable pageable);
	Page<BattleBoard> findPageByAuthor(User user, Pageable pageable);
}
