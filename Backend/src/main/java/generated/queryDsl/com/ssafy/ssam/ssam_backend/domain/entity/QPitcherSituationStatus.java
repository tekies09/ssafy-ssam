package generated.queryDsl.com.ssafy.ssam.ssam_backend.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;
import com.ssafy.ssam.ssam_backend.domain.entity.PitcherSituationStatus;


/**
 * QPitcherSituationStatus is a Querydsl query type for PitcherSituationStatus
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QPitcherSituationStatus extends EntityPathBase<PitcherSituationStatus> {

    private static final long serialVersionUID = 1806116790L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QPitcherSituationStatus pitcherSituationStatus = new QPitcherSituationStatus("pitcherSituationStatus");

    public final NumberPath<java.math.BigDecimal> firAndSecB = createNumber("firAndSecB", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> firAndThrB = createNumber("firAndThrB", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> firB = createNumber("firB", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> fullyB = createNumber("fullyB", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> noRunner = createNumber("noRunner", java.math.BigDecimal.class);

    public final NumberPath<Long> pitcherSitSId = createNumber("pitcherSitSId", Long.class);

    public final QPlayer player;

    public final NumberPath<java.math.BigDecimal> risp = createNumber("risp", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> runner = createNumber("runner", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> secAndThrB = createNumber("secAndThrB", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> secB = createNumber("secB", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> thrB = createNumber("thrB", java.math.BigDecimal.class);

    public QPitcherSituationStatus(String variable) {
        this(PitcherSituationStatus.class, forVariable(variable), INITS);
    }

    public QPitcherSituationStatus(Path<? extends PitcherSituationStatus> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QPitcherSituationStatus(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QPitcherSituationStatus(PathMetadata metadata, PathInits inits) {
        this(PitcherSituationStatus.class, metadata, inits);
    }

    public QPitcherSituationStatus(Class<? extends PitcherSituationStatus> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.player = inits.isInitialized("player") ? new QPlayer(forProperty("player")) : null;
    }

}

