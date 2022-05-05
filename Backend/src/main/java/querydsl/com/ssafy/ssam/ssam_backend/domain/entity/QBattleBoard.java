package com.ssafy.ssam.ssam_backend.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QBattleBoard is a Querydsl query type for BattleBoard
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QBattleBoard extends EntityPathBase<BattleBoard> {

    private static final long serialVersionUID = -2012922085L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QBattleBoard battleBoard = new QBattleBoard("battleBoard");

    public final QUser author;

    public final NumberPath<Long> battleBoardId = createNumber("battleBoardId", Long.class);

    public final StringPath bbTitle = createString("bbTitle");

    public final DateTimePath<java.time.LocalDateTime> bbUpdateTime = createDateTime("bbUpdateTime", java.time.LocalDateTime.class);

    public final DateTimePath<java.time.LocalDateTime> bbWriteTime = createDateTime("bbWriteTime", java.time.LocalDateTime.class);

    public final QMyTeam myTeam;

    public QBattleBoard(String variable) {
        this(BattleBoard.class, forVariable(variable), INITS);
    }

    public QBattleBoard(Path<? extends BattleBoard> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QBattleBoard(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QBattleBoard(PathMetadata metadata, PathInits inits) {
        this(BattleBoard.class, metadata, inits);
    }

    public QBattleBoard(Class<? extends BattleBoard> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.author = inits.isInitialized("author") ? new QUser(forProperty("author")) : null;
        this.myTeam = inits.isInitialized("myTeam") ? new QMyTeam(forProperty("myTeam"), inits.get("myTeam")) : null;
    }

}

