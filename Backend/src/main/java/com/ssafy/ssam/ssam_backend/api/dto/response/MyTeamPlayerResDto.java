package com.ssafy.ssam.ssam_backend.api.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MyTeamPlayerResDto {
    private Long playerId;
    private int backNumber;
    private String battingOrder;
    private String defensePosition;
}
