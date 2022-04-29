package querydsl.com.ssafy.ssam.ssam_backend.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;
import com.ssafy.ssam.ssam_backend.domain.entity.PitcherYearsStatus;


/**
 * QPitcherYearsStatus is a Querydsl query type for PitcherYearsStatus
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QPitcherYearsStatus extends EntityPathBase<PitcherYearsStatus> {

    private static final long serialVersionUID = 563580558L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QPitcherYearsStatus pitcherYearsStatus = new QPitcherYearsStatus("pitcherYearsStatus");

    public final NumberPath<Integer> ao_cn = createNumber("ao_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> avg_rt = createNumber("avg_rt", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> babip_rt = createNumber("babip_rt", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> bb9_rt = createNumber("bb9_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> bb_cn = createNumber("bb_cn", Integer.class);

    public final NumberPath<Integer> bk_cn = createNumber("bk_cn", Integer.class);

    public final NumberPath<Integer> bsv_cn = createNumber("bsv_cn", Integer.class);

    public final NumberPath<Integer> cg_cn = createNumber("cg_cn", Integer.class);

    public final NumberPath<Integer> er_cn = createNumber("er_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> era_rt = createNumber("era_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> g_cn = createNumber("g_cn", Integer.class);

    public final NumberPath<Integer> gdp_cn = createNumber("gdp_cn", Integer.class);

    public final NumberPath<Integer> gf_cn = createNumber("gf_cn", Integer.class);

    public final NumberPath<Integer> go_cn = createNumber("go_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> goao_rt = createNumber("goao_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> gs_cn = createNumber("gs_cn", Integer.class);

    public final NumberPath<Integer> h2_cn = createNumber("h2_cn", Integer.class);

    public final NumberPath<Integer> h3_cn = createNumber("h3_cn", Integer.class);

    public final NumberPath<Integer> h_cn = createNumber("h_cn", Integer.class);

    public final NumberPath<Integer> hbp_cn = createNumber("hbp_cn", Integer.class);

    public final NumberPath<Integer> hld_cn = createNumber("hld_cn", Integer.class);

    public final NumberPath<Integer> hr_cn = createNumber("hr_cn", Integer.class);

    public final NumberPath<Integer> ibb_cn = createNumber("ibb_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> ip_cn = createNumber("ip_cn", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> k9_rt = createNumber("k9_rt", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> kbb_rt = createNumber("kbb_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> l_cn = createNumber("l_cn", Integer.class);

    public final NumberPath<Integer> np_cn = createNumber("np_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> obp_rt = createNumber("obp_rt", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> ops_rt = createNumber("ops_rt", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> pg_rt = createNumber("pg_rt", java.math.BigDecimal.class);

    public final NumberPath<java.math.BigDecimal> pip_rt = createNumber("pip_rt", java.math.BigDecimal.class);

    public final NumberPath<Long> pitcherYearsSId = createNumber("pitcherYearsSId", Long.class);

    public final QPlayer player;

    public final NumberPath<Integer> qs_cn = createNumber("qs_cn", Integer.class);

    public final NumberPath<Integer> r_cn = createNumber("r_cn", Integer.class);

    public final NumberPath<Integer> sac_cn = createNumber("sac_cn", Integer.class);

    public final NumberPath<Integer> sf_cn = createNumber("sf_cn", Integer.class);

    public final NumberPath<Integer> sho_cn = createNumber("sho_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> slg_rt = createNumber("slg_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> so_cn = createNumber("so_cn", Integer.class);

    public final NumberPath<Integer> sv_cn = createNumber("sv_cn", Integer.class);

    public final NumberPath<Integer> svo_cn = createNumber("svo_cn", Integer.class);

    public final NumberPath<Integer> tbf_cn = createNumber("tbf_cn", Integer.class);

    public final QTeam team;

    public final NumberPath<Integer> ts_cn = createNumber("ts_cn", Integer.class);

    public final NumberPath<Integer> w_cn = createNumber("w_cn", Integer.class);

    public final NumberPath<Integer> wgr_cn = createNumber("wgr_cn", Integer.class);

    public final NumberPath<Integer> wgs_cn = createNumber("wgs_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> whip_rt = createNumber("whip_rt", java.math.BigDecimal.class);

    public final NumberPath<Integer> wp_cn = createNumber("wp_cn", Integer.class);

    public final NumberPath<java.math.BigDecimal> wpct_rt = createNumber("wpct_rt", java.math.BigDecimal.class);

    public QPitcherYearsStatus(String variable) {
        this(PitcherYearsStatus.class, forVariable(variable), INITS);
    }

    public QPitcherYearsStatus(Path<? extends PitcherYearsStatus> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QPitcherYearsStatus(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QPitcherYearsStatus(PathMetadata metadata, PathInits inits) {
        this(PitcherYearsStatus.class, metadata, inits);
    }

    public QPitcherYearsStatus(Class<? extends PitcherYearsStatus> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.player = inits.isInitialized("player") ? new QPlayer(forProperty("player")) : null;
        this.team = inits.isInitialized("team") ? new QTeam(forProperty("team")) : null;
    }

}

