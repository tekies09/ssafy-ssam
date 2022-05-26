package com.ssafy.ssam.ssam_backend.api.dto.request;

import java.time.LocalDateTime;

import com.ssafy.ssam.ssam_backend.domain.entity.BattleBoard;
import com.ssafy.ssam.ssam_backend.domain.entity.MyTeam;
import com.ssafy.ssam.ssam_backend.domain.entity.User;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class BattleBoardCreateReqDto {
	
	public String bbTitle;
	public long userId;
	public long myTeamId;

    public BattleBoardCreateReqDto(String title, long userId, long myTeamId) {
        this.bbTitle = title;
        this.userId = userId;
        this.myTeamId = myTeamId;
    }

    public BattleBoard toEntity(User user) {
        return BattleBoard
        		.builder()
                .bbTitle(bbTitle)
                .author(user)
                .bbUpdateTime(LocalDateTime.now())
                .bbWriteTime(LocalDateTime.now())
                .build();
    }
    
    public BattleBoard toEntity(User user, MyTeam team) {
        return BattleBoard
        		.builder()
                .bbTitle(bbTitle)
                .author(user)
                .myTeam(team)
                .bbUpdateTime(LocalDateTime.now())
                .bbWriteTime(LocalDateTime.now())
                .build();
    }
}
