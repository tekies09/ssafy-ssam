package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.request.MyTeamPlayerReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.MyTeamReqDto;
import com.ssafy.ssam.ssam_backend.api.repository.MyTeamPlayerRepository;
import com.ssafy.ssam.ssam_backend.api.repository.MyTeamRepository;
import com.ssafy.ssam.ssam_backend.api.repository.PlayerRepository;
import com.ssafy.ssam.ssam_backend.api.repository.UserRepository;
import com.ssafy.ssam.ssam_backend.domain.entity.MyTeam;
import com.ssafy.ssam.ssam_backend.domain.entity.MyTeamPlayer;
import com.ssafy.ssam.ssam_backend.domain.entity.Player;
import com.ssafy.ssam.ssam_backend.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MyTeamServiceImpl implements MyTeamService {

    private final UserRepository userRepository;
    private final MyTeamRepository myTeamRepository;
    private final MyTeamPlayerRepository myTeamPlayerRepository;
    private final PlayerRepository playerRepository;

    @Override
    public void createMyTeam(MyTeamReqDto myTeamReqDto) throws Exception {
        //저장하는 유저아이디 검색
        User user = userRepository.findById(myTeamReqDto.getUserId()).get();
        //저장하는 유저의 나만의 팀 정보 저장 ( 팀 아이디, 팀 이름 )
        MyTeam myTeam = MyTeam.builder()
                        .myTeamName(myTeamReqDto.getMyTeamName())
                        .user(user)
                        .build();
        MyTeam savedMyTeam = myTeamRepository.save(myTeam);

        //저장하는 나만의 팀에 속한 선수정보 저장
        for(MyTeamPlayerReqDto playerDto : myTeamReqDto.getMyTeamPlayerReqDtoList()){
            //선수정보 저장하는 과정에서 실제 선수 DB와 연동
            Player player = playerRepository.findById(playerDto.getPlayerId()).get();
            MyTeamPlayer myTeamPlayer = MyTeamPlayer.builder()
                    .myTeam(savedMyTeam)
                    .player(player)
                    .backNumber(playerDto.getBackNumber())
                    .battingOrder(playerDto.getBattingOrder())
                    .defensePosition(playerDto.getDefensePosition())
                    .build();
            myTeamPlayerRepository.save(myTeamPlayer);
        }


    }

    @Override
    public void deleteMyTeam(Long teamId) throws Exception {
        MyTeam myTeam = myTeamRepository.findById(teamId).get();
        //해당 팀 id 삭제 : cascade 옵션으로 밑에 연결된 선수들은 my_team_player 테이블에서 자동 삭제
        myTeamRepository.delete(myTeam);
    }

    @Override
    public void modifyMyTeam(MyTeamReqDto myTeamReqDto) throws Exception {

        MyTeam newMyTeam = MyTeam.builder()
                .myTeamId(myTeamReqDto.getMyTeamId())
                .user(userRepository.findById(myTeamReqDto.getUserId()).get())
                .myTeamName(myTeamReqDto.getMyTeamName())
                .build();

        myTeamRepository.save(newMyTeam);

        for(MyTeamPlayerReqDto playerDto : myTeamReqDto.getMyTeamPlayerReqDtoList()){

            MyTeamPlayer modPlayer = MyTeamPlayer.builder()
                    //여기 아이디를 잘 맞추지 않으면 새로운 컬럼으로 인식해서 수정이 안되고 새로 들어감 조심!
                    .myTeamPlayerId(playerDto.getMyTeamPlayerId())
                    .player(playerRepository.findById(playerDto.getPlayerId()).get())
                    .myTeam(newMyTeam)
                    .backNumber(playerDto.getBackNumber())
                    .battingOrder(playerDto.getBattingOrder())
                    .defensePosition(playerDto.getDefensePosition())
                    .build();
            myTeamPlayerRepository.save(modPlayer);
        }

    }
}
