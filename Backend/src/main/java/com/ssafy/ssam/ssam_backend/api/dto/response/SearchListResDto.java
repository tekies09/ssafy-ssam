package com.ssafy.ssam.ssam_backend.api.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class SearchListResDto extends BaseResponseBody{
    public SearchListResDto(Integer statusCode, String message){
        super(statusCode, message);
    }

    private List<SearchResultResDto> searchList;

    public SearchListResDto (Integer statusCode, String message , List<SearchResultResDto> list){
        super(statusCode, message);
        searchList = list;
    }

}
