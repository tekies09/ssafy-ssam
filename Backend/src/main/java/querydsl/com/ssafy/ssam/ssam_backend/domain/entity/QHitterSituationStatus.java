package com.ssafy.ssam.ssam_backend.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QHitterSituationStatus is a Querydsl query type for HitterSituationStatus
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QHitterSituationStatus extends EntityPathBase<HitterSituationStatus> {

    private static final long serialVersionUID = 1575229391L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QHitterSituationStatus hitterSituationStatus = new QHitterSituationStatus("hitterSituationStatus");

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

    public QHitterSituationStatus(String variable) {
        this(HitterSituationStatus.class, forVariable(variable), INITS);
    }

    public QHitterSituationStatus(Path<? extends HitterSituationStatus> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QHitterSituationStatus(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QHitterSituationStatus(PathMetadata metadata, PathInits inits) {
        this(HitterSituationStatus.class, metadata, inits);
    }

    public QHitterSituationStatus(Class<? extends HitterSituationStatus> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.player = inits.isInitialized("player") ? new QPlayer(forProperty("player")) : null;
    }

}

