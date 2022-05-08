package com.ssafy.ssam.ssam_backend.api.dto.response;

import com.ssafy.ssam.ssam_backend.domain.entity.HitterDaysStatus;
import com.ssafy.ssam.ssam_backend.domain.entity.HitterYearsStatus;
import com.ssafy.ssam.ssam_backend.domain.entity.PitcherDaysStatus;
import com.ssafy.ssam.ssam_backend.domain.entity.PitcherYearsStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PlayerDetailResDto extends BaseResponseBody{

    HitterDaysDetailResDto hitterDaysDetailResDto;
    HitterYearsDetailResDto hitterYearsDetailResDto;
    PitcherDaysDetailResDto pitcherDaysDetailResDto;
    PitcherYearsDetailResDto pitcherYearsDetailResDto;

    public PlayerDetailResDto(Integer statusCode, String message, HitterDaysStatus hitterDaysStatus){
        super(statusCode, message);

    }
    public PlayerDetailResDto(Integer statusCode, String message, HitterYearsDetailResDto hitterYearsDetailResDto){
        super(statusCode, message);
        this.hitterYearsDetailResDto = hitterYearsDetailResDto;
    }
    public PlayerDetailResDto(Integer statusCode, String message, PitcherDaysStatus pitcherDaysStatus){
        super(statusCode, message);

    }
    public PlayerDetailResDto(Integer statusCode, String message, PitcherYearsStatus pitcherYearsStatus){
        super(statusCode, message);

    }

    public PlayerDetailResDto(Integer statusCode, String message) {
        super(statusCode, message);
    }
}
