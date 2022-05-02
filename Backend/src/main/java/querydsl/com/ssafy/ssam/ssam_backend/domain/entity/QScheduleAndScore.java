package querydsl.com.ssafy.ssam.ssam_backend.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;
import com.ssafy.ssam.ssam_backend.domain.entity.ScheduleAndScore;


/**
 * QScheduleAndScore is a Querydsl query type for ScheduleAndScore
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QScheduleAndScore extends EntityPathBase<ScheduleAndScore> {

    private static final long serialVersionUID = 267433157L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QScheduleAndScore scheduleAndScore = new QScheduleAndScore("scheduleAndScore");

    public final NumberPath<Integer> awayScore = createNumber("awayScore", Integer.class);

    public final QTeam awayTeam;

    public final StringPath broadcasting = createString("broadcasting");

    public final EnumPath<com.ssafy.ssam.ssam_backend.domain.GameState> gameState = createEnum("gameState", com.ssafy.ssam.ssam_backend.domain.GameState.class);

    public final NumberPath<Integer> homeScore = createNumber("homeScore", Integer.class);

    public final QTeam homeTeam;

    public final NumberPath<Long> scheduleId = createNumber("scheduleId", Long.class);

    public final StringPath stadium = createString("stadium");

    public QScheduleAndScore(String variable) {
        this(ScheduleAndScore.class, forVariable(variable), INITS);
    }

    public QScheduleAndScore(Path<? extends ScheduleAndScore> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QScheduleAndScore(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QScheduleAndScore(PathMetadata metadata, PathInits inits) {
        this(ScheduleAndScore.class, metadata, inits);
    }

    public QScheduleAndScore(Class<? extends ScheduleAndScore> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.awayTeam = inits.isInitialized("awayTeam") ? new QTeam(forProperty("awayTeam")) : null;
        this.homeTeam = inits.isInitialized("homeTeam") ? new QTeam(forProperty("homeTeam")) : null;
    }

}

