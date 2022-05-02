package querydsl.com.ssafy.ssam.ssam_backend.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;
import com.ssafy.ssam.ssam_backend.domain.entity.MyTeamPlayer;


/**
 * QMyTeamPlayer is a Querydsl query type for MyTeamPlayer
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMyTeamPlayer extends EntityPathBase<MyTeamPlayer> {

    private static final long serialVersionUID = -775719427L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMyTeamPlayer myTeamPlayer = new QMyTeamPlayer("myTeamPlayer");

    public final NumberPath<Integer> backNumber = createNumber("backNumber", Integer.class);

    public final StringPath battingOrder = createString("battingOrder");

    public final StringPath defencePosition = createString("defencePosition");

    public final QMyTeam myTeam;

    public final NumberPath<Long> myTeamPlayerId = createNumber("myTeamPlayerId", Long.class);

    public final QPlayer player;

    public QMyTeamPlayer(String variable) {
        this(MyTeamPlayer.class, forVariable(variable), INITS);
    }

    public QMyTeamPlayer(Path<? extends MyTeamPlayer> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMyTeamPlayer(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMyTeamPlayer(PathMetadata metadata, PathInits inits) {
        this(MyTeamPlayer.class, metadata, inits);
    }

    public QMyTeamPlayer(Class<? extends MyTeamPlayer> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.myTeam = inits.isInitialized("myTeam") ? new QMyTeam(forProperty("myTeam"), inits.get("myTeam")) : null;
        this.player = inits.isInitialized("player") ? new QPlayer(forProperty("player")) : null;
    }

}

