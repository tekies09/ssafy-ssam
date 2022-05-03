package com.ssafy.ssam.ssam_backend.api.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MyTeamPlayerReqDto {

    private Long playerId;
    private int backNumber;
    private String battingOrder;
    private String defensePosition;


}
