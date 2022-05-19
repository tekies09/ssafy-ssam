package com.ssafy.ssam.ssam_backend.api.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class PitcherYearsListResDto extends BaseResponseBody{
    List<PitcherYearsDetailResDto> detailList;

    public PitcherYearsListResDto (Integer statusCode, String message){
        super(statusCode, message);
    }
    public PitcherYearsListResDto(Integer statusCode,String message, List<PitcherYearsDetailResDto> list){
        super(statusCode, message);
        this.detailList = list;
    }
}
