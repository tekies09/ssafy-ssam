package com.ssafy.ssam.ssam_backend.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QPlayer is a Querydsl query type for Player
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QPlayer extends EntityPathBase<Player> {

    private static final long serialVersionUID = 1576757428L;

    public static final QPlayer player = new QPlayer("player");

    public final NumberPath<Integer> birthYear = createNumber("birthYear", Integer.class);

    public final NumberPath<Integer> debutYear = createNumber("debutYear", Integer.class);

    public final StringPath graudate = createString("graudate");

    public final StringPath payroll = createString("payroll");

    public final NumberPath<Long> playerId = createNumber("playerId", Long.class);

    public final StringPath playerName = createString("playerName");

    public final EnumPath<com.ssafy.ssam.ssam_backend.domain.PlayerType> playerType = createEnum("playerType", com.ssafy.ssam.ssam_backend.domain.PlayerType.class);

    public final EnumPath<com.ssafy.ssam.ssam_backend.domain.PlayerState> state = createEnum("state", com.ssafy.ssam.ssam_backend.domain.PlayerState.class);

    public QPlayer(String variable) {
        super(Player.class, forVariable(variable));
    }

    public QPlayer(Path<? extends Player> path) {
        super(path.getType(), path.getMetadata());
    }

    public QPlayer(PathMetadata metadata) {
        super(Player.class, metadata);
    }

}

