package querydsl.com.ssafy.ssam.ssam_backend.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;
import com.ssafy.ssam.ssam_backend.domain.entity.HitterYearsStatus;


/**
 * QHitterYearsStatus is a Querydsl query type for HitterYearsStatus
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QHitterYearsStatus extends EntityPathBase<HitterYearsStatus> {

    private static final long serialVersionUID = 1064989479L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QHitterYearsStatus hitterYearsStatus = new QHitterYearsStatus("hitterYearsStatus");

    public final NumberPath<Integer> ab_cn = createNumber("ab_cn", Integer.class);

    public final NumberPath<Integer> ao_cn = createNumber("ao_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> avg_rt = createNumber("avg_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> bb_cn = createNumber("bb_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> bbk_rt = createNumber("bbk_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> g_cn = createNumber("g_cn", Integer.class);

    public final NumberPath<Integer> gdp_cn = createNumber("gdp_cn", Integer.class);

    public final NumberPath<Integer> go_cn = createNumber("go_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> goao_rt = createNumber("goao_rt", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> gpa_rt = createNumber("gpa_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> gwrbi_cn = createNumber("gwrbi_cn", Integer.class);

    public final NumberPath<Integer> h2_cn = createNumber("h2_cn", Integer.class);

    public final NumberPath<Integer> h3_cn = createNumber("h3_cn", Integer.class);

    public final NumberPath<Integer> h_cn = createNumber("h_cn", Integer.class);

    public final NumberPath<Integer> hbp_cn = createNumber("hbp_cn", Integer.class);

    public final NumberPath<Long> hitterYearsSId = createNumber("hitterYearsSId", Long.class);

    public final NumberPath<Integer> hr_cn = createNumber("hr_cn", Integer.class);

    public final NumberPath<Integer> ibb_cn = createNumber("ibb_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> isop_rt = createNumber("isop_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> mh_cn = createNumber("mh_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> obp_rt = createNumber("obp_rt", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> ops_rt = createNumber("ops_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> pa_cn = createNumber("pa_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> phba_rt = createNumber("phba_rt", java.math.BigDecimal.class);

    public final QPlayer player;

    public final NumberPath<java.math.BigDecimal> ppa_rt = createNumber("ppa_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> r_cn = createNumber("r_cn", Integer.class);

    public final NumberPath<Integer> rbi_cn = createNumber("rbi_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> risp_rt = createNumber("risp_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> sac_cn = createNumber("sac_cn", Integer.class);

    public final NumberPath<Integer> sf_cn = createNumber("sf_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> slg_rt = createNumber("slg_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> so_cn = createNumber("so_cn", Integer.class);

    public final NumberPath<Integer> tb_cn = createNumber("tb_cn", Integer.class);

    public final QTeam team;

    public final NumberPath<Integer> xbh_cn = createNumber("xbh_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> xr_rt = createNumber("xr_rt", java.math.BigDecimal.class);

    public QHitterYearsStatus(String variable) {
        this(HitterYearsStatus.class, forVariable(variable), INITS);
    }

    public QHitterYearsStatus(Path<? extends HitterYearsStatus> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QHitterYearsStatus(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QHitterYearsStatus(PathMetadata metadata, PathInits inits) {
        this(HitterYearsStatus.class, metadata, inits);
    }

    public QHitterYearsStatus(Class<? extends HitterYearsStatus> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.player = inits.isInitialized("player") ? new QPlayer(forProperty("player")) : null;
        this.team = inits.isInitialized("team") ? new QTeam(forProperty("team")) : null;
    }

}

