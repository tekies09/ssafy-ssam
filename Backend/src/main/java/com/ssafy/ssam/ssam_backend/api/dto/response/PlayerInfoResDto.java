package com.ssafy.ssam.ssam_backend.api.dto.response;

import com.ssafy.ssam.ssam_backend.domain.PlayerState;
import com.ssafy.ssam.ssam_backend.domain.PlayerType;
import com.ssafy.ssam.ssam_backend.domain.entity.Player;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class PlayerInfoResDto {

    private String playerName;
    private LocalDate birthYear;
    private String heightAndWeight;
    private String graudate;
    private PlayerState state;
    private String payroll;
    private PlayerType playerType;

    public PlayerInfoResDto(Player player){
        this.playerName= player.getPlayerName();
        this.birthYear = player.getBirthYear();
        this.heightAndWeight = player.getHeightAndWeight();
        this.graudate = player.getGraudate();
        this.state= player.getState();
        this.payroll = player.getPayroll();
        this.playerType = player.getPlayerType();
    }

}
