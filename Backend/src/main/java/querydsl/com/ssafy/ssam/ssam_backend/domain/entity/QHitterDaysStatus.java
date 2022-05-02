package querydsl.com.ssafy.ssam.ssam_backend.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;
import com.ssafy.ssam.ssam_backend.domain.entity.HitterDaysStatus;


/**
 * QHitterDaysStatus is a Querydsl query type for HitterDaysStatus
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QHitterDaysStatus extends EntityPathBase<HitterDaysStatus> {

    private static final long serialVersionUID = 2095737738L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QHitterDaysStatus hitterDaysStatus = new QHitterDaysStatus("hitterDaysStatus");

    public final NumberPath<Integer> ab_cn = createNumber("ab_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> avg1_rt = createNumber("avg1_rt", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> avg2_rt = createNumber("avg2_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> bb_cn = createNumber("bb_cn", Integer.class);

    public final NumberPath<Integer> cs_cn = createNumber("cs_cn", Integer.class);

    public final NumberPath<Integer> gdp_cn = createNumber("gdp_cn", Integer.class);

    public final NumberPath<Integer> h2_cn = createNumber("h2_cn", Integer.class);

    public final NumberPath<Integer> h3_cn = createNumber("h3_cn", Integer.class);

    public final NumberPath<Integer> h_cn = createNumber("h_cn", Integer.class);

    public final NumberPath<Integer> hbp_cn = createNumber("hbp_cn", Integer.class);

    public final NumberPath<Long> hitterDaysSId = createNumber("hitterDaysSId", Long.class);

    public final NumberPath<Integer> hr_cn = createNumber("hr_cn", Integer.class);

    public final QTeam opponent;

    public final NumberPath<Integer> pa_cn = createNumber("pa_cn", Integer.class);

    public final QPlayer player;

    public final NumberPath<Integer> r_cn = createNumber("r_cn", Integer.class);

    public final NumberPath<Integer> rbi_cn = createNumber("rbi_cn", Integer.class);

    public final NumberPath<Integer> sb_cn = createNumber("sb_cn", Integer.class);

    public final NumberPath<Integer> so_cn = createNumber("so_cn", Integer.class);

    public final QTeam team;

    public QHitterDaysStatus(String variable) {
        this(HitterDaysStatus.class, forVariable(variable), INITS);
    }

    public QHitterDaysStatus(Path<? extends HitterDaysStatus> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QHitterDaysStatus(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QHitterDaysStatus(PathMetadata metadata, PathInits inits) {
        this(HitterDaysStatus.class, metadata, inits);
    }

    public QHitterDaysStatus(Class<? extends HitterDaysStatus> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.opponent = inits.isInitialized("opponent") ? new QTeam(forProperty("opponent")) : null;
        this.player = inits.isInitialized("player") ? new QPlayer(forProperty("player")) : null;
        this.team = inits.isInitialized("team") ? new QTeam(forProperty("team")) : null;
    }

}

