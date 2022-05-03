package com.ssafy.ssam.ssam_backend.api.dto.request;


import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class SaveBattleBoardReqDto {
	@NotNull
    public String title;

    public SaveBattleBoardReqDto(String title) {
        this.title = title;
    }

    public BattleBoard toEntity(User user) {
        return BattleBoard
                .builder()
                .bbTitle(title)
                .author(user)
                .build();
    }

}
