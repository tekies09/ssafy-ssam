package com.ssafy.ssam.ssam_backend.api.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class HitterYearsListResDto extends BaseResponseBody{
    List<HitterYearsDetailResDto> detailList;

    public HitterYearsListResDto (Integer statusCode, String message){
        super(statusCode, message);
    }
    public HitterYearsListResDto(Integer statusCode,String message, List<HitterYearsDetailResDto> list){
        super(statusCode, message);
        this.detailList = list;
    }

}
