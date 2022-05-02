package querydsl.com.ssafy.ssam.ssam_backend.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;
import com.ssafy.ssam.ssam_backend.domain.entity.PitcherDaysStatus;


/**
 * QPitcherDaysStatus is a Querydsl query type for PitcherDaysStatus
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QPitcherDaysStatus extends EntityPathBase<PitcherDaysStatus> {

    private static final long serialVersionUID = 278447939L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QPitcherDaysStatus pitcherDaysStatus = new QPitcherDaysStatus("pitcherDaysStatus");

    public final NumberPath<Integer> bb_cn = createNumber("bb_cn", Integer.class);

    public final NumberPath<Integer> er_cn = createNumber("er_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> era1_rt = createNumber("era1_rt", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> era2_rt = createNumber("era2_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> h_cn = createNumber("h_cn", Integer.class);

    public final NumberPath<Integer> hbp_cn = createNumber("hbp_cn", Integer.class);

    public final NumberPath<Integer> hr_cn = createNumber("hr_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> ip_cn = createNumber("ip_cn", java.math.BigDecimal.class);

    public final QTeam opponent;

    public final NumberPath<Long> pitcherDaysSId = createNumber("pitcherDaysSId", Long.class);

    public final QPlayer player;

    public final NumberPath<Integer> r_cn = createNumber("r_cn", Integer.class);

    public final NumberPath<Integer> so_cn = createNumber("so_cn", Integer.class);

    public final NumberPath<Integer> tbf_cn = createNumber("tbf_cn", Integer.class);

    public final QTeam team;

    public QPitcherDaysStatus(String variable) {
        this(PitcherDaysStatus.class, forVariable(variable), INITS);
    }

    public QPitcherDaysStatus(Path<? extends PitcherDaysStatus> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QPitcherDaysStatus(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QPitcherDaysStatus(PathMetadata metadata, PathInits inits) {
        this(PitcherDaysStatus.class, metadata, inits);
    }

    public QPitcherDaysStatus(Class<? extends PitcherDaysStatus> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.opponent = inits.isInitialized("opponent") ? new QTeam(forProperty("opponent")) : null;
        this.player = inits.isInitialized("player") ? new QPlayer(forProperty("player")) : null;
        this.team = inits.isInitialized("team") ? new QTeam(forProperty("team")) : null;
    }

}

