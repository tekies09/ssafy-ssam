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
    HitterSituationResDto hitterSituationResDto;
    PitcherDaysDetailResDto pitcherDaysDetailResDto;
    PitcherYearsDetailResDto pitcherYearsDetailResDto;
    PitcherSituationResDto pitcherSituationResDto;


    public PlayerDetailResDto(Integer statusCode, String message, HitterDaysDetailResDto hitterDaysDetailResDto){
        super(statusCode, message);
        this.hitterDaysDetailResDto=hitterDaysDetailResDto;

    }
    public PlayerDetailResDto(Integer statusCode, String message, HitterYearsDetailResDto hitterYearsDetailResDto){
        super(statusCode, message);
        this.hitterYearsDetailResDto = hitterYearsDetailResDto;
    }
    public PlayerDetailResDto(Integer statusCode, String message, HitterSituationResDto hitterSituationResDto){
        super(statusCode, message);
        this.hitterSituationResDto = hitterSituationResDto;
    }
    public PlayerDetailResDto(Integer statusCode, String message, PitcherDaysDetailResDto pitcherDaysDetailResDto){
        super(statusCode, message);
        this.pitcherDaysDetailResDto = pitcherDaysDetailResDto;

    }
    public PlayerDetailResDto(Integer statusCode, String message, PitcherYearsDetailResDto pitcherYearsDetailResDto){
        super(statusCode, message);
        this.pitcherYearsDetailResDto = pitcherYearsDetailResDto;

    }
    public PlayerDetailResDto(Integer statusCode, String message, PitcherSituationResDto pitcherSituationResDto){
        super(statusCode, message);
        this.pitcherSituationResDto = pitcherSituationResDto;

    }

    public PlayerDetailResDto(Integer statusCode, String message) {
        super(statusCode, message);
    }
}
