package com.ssafy.ssam.ssam_backend.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BattleBoardCustomRepositoryImpl implements BattleBoardCustomRepository {

	private final JPAQueryFactory query;
//	QBattleBoard battleboard = new QBattleBoard("battleboard");
//	QUser user = new QUser("user");
	
	@Override
	public Optional<BattleBoard> findBoardById(Long boardId) {
//		return Optional.ofNullable(query
//				.select(battleboard)
//				.from(battleboard)
////				.innerJoin(battleboard.user, user)
//				.fetchOne()
//				);
		return null;
	}

	@Override
	public List<BattleBoard> findPage(String title, String userid, int page, int limit) {
		// query dsl 쓰는 파-트
//		return query
//				.select(battleboard)
//				.orderBy(battleboard.battleBoardId.desc())
//				.offset(page)
//				.limit(limit)
//				.fetch();
		return null;
	}

}
