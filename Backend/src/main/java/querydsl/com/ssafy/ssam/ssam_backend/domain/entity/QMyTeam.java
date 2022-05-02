package com.ssafy.ssam.ssam_backend.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMyTeam is a Querydsl query type for MyTeam
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMyTeam extends EntityPathBase<MyTeam> {

    private static final long serialVersionUID = 1502469116L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMyTeam myTeam = new QMyTeam("myTeam");

    public final NumberPath<Long> myTeamId = createNumber("myTeamId", Long.class);

    public final StringPath myTeamName = createString("myTeamName");

    public final QUser user;

    public QMyTeam(String variable) {
        this(MyTeam.class, forVariable(variable), INITS);
    }

    public QMyTeam(Path<? extends MyTeam> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMyTeam(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMyTeam(PathMetadata metadata, PathInits inits) {
        this(MyTeam.class, metadata, inits);
    }

    public QMyTeam(Class<? extends MyTeam> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user")) : null;
    }

}

