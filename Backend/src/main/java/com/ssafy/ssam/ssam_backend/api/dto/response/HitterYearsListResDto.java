package com.ssafy.ssam.ssam_backend.api.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class HitterYearsListResDto extends BaseResponseBody{
    List<HitterYearsDetailResDto> detailList;
    private Long allCount;

    public HitterYearsListResDto (Integer statusCode, String message){
        super(statusCode, message);
    }
    public HitterYearsListResDto(Integer statusCode,String message, List<HitterYearsDetailResDto> list,Long count){
        super(statusCode, message);
        this.detailList = list;
        this.allCount=count;
    }

}
