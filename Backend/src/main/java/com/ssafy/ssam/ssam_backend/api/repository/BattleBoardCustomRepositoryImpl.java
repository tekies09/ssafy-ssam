package com.ssafy.ssam.ssam_backend.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;

import lombok.RequiredArgsConstructor;
import static generated.queryDsl.com.ssafy.ssam.ssam_backend.domain.entity.QBattleBoard.battleBoard;
import static generated.queryDsl.com.ssafy.ssam.ssam_backend.domain.entity.QUser.user;

@Repository
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BattleBoardCustomRepositoryImpl implements BattleBoardCustomRepository {

	private final JPAQueryFactory query;
	
	@Override
	public Optional<BattleBoard> findBoardById(Long boardId) {
		return Optional.ofNullable(query
				.select(battleBoard)
				.from(battleBoard)
//				.innerJoin(battleboard.user, user)
				.fetchOne()
				);
	}

	@Override
	public List<BattleBoard> findPage(String title, String userid, int page, int limit) {
		// query dsl 쓰는 파-트
		return query
				.select(battleBoard)
				.orderBy(battleBoard.battleBoardId.desc())
				.offset(page)
				.limit(limit)
				.fetch();
	}

}
