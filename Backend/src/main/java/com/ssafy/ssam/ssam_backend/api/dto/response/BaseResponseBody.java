package com.ssafy.ssam.ssam_backend.api.dto.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 서버 요청에 대한 기본 응답 값(Response Body) 정의
 */

@Getter
@Setter
@ApiModel("BaseResponseBody")
@NoArgsConstructor
public class BaseResponseBody {

    @ApiModelProperty(name = "응답 코드", example = "200")
    Integer statusCode = null;
    @ApiModelProperty(name = "응답 메시지", example = "OK")
    String message = null;

    public BaseResponseBody(Integer statusCode) {
        this.statusCode = statusCode;
    }

    public BaseResponseBody(Integer statusCode, String message) {
        this.statusCode = statusCode;
        this.message = message;
    }

    public static BaseResponseBody of(Integer statusCode, String message) {
        BaseResponseBody body = new BaseResponseBody();
        body.statusCode = statusCode;
        body.message = message;
        return body;
    }

}

