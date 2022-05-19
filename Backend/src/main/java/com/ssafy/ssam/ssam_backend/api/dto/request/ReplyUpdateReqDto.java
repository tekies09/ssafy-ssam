package com.ssafy.ssam.ssam_backend.api.dto.request;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReplyUpdateReqDto {

    @NotNull
    private String content;

}
