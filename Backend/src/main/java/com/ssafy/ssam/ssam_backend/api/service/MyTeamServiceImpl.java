package com.ssafy.ssam.ssam_backend.api.service;

import com.ssafy.ssam.ssam_backend.api.dto.request.MyTeamPlayerReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.request.MyTeamReqDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.MyTeamPlayerResDto;
import com.ssafy.ssam.ssam_backend.api.dto.response.MyTeamResDto;
import com.ssafy.ssam.ssam_backend.api.repository.*;
import com.ssafy.ssam.ssam_backend.domain.entity.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MyTeamServiceImpl implements MyTeamService {

    private final UserRepository userRepository;
    private final MyTeamRepository myTeamRepository;
    private final MyTeamPlayerRepository myTeamPlayerRepository;
    private final PlayerRepository playerRepository;
    private final HitterYearsStatusRepository hitterYearsStatusRepository;
    private final PitcherYearsStatusRepository pitcherYearsStatusRepository;

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

            MyTeamPlayer myTeamPlayer;
            if (playerDto.getPitcherOrHitter().equals("Hitter")){
                HitterYearsStatus hitterYearsStatus = hitterYearsStatusRepository.findById(playerDto.getStatusId()).get();
                    myTeamPlayer = MyTeamPlayer.builder()
                    .myTeam(savedMyTeam)
                    .hitterYearsStatus(hitterYearsStatus)
                    .battingOrder(playerDto.getBattingOrder())
                    .defensePosition(playerDto.getDefensePosition())
                    .pitcherOrHitter(playerDto.getPitcherOrHitter())
                    .build();
            }

            else{
                PitcherYearsStatus pitcherYearsStatus = pitcherYearsStatusRepository.findById(playerDto.getStatusId()).get();
                    myTeamPlayer = MyTeamPlayer.builder()
                    .myTeam(savedMyTeam)
                    .pitcherYearsStatus(pitcherYearsStatus)
                    .battingOrder(playerDto.getBattingOrder())
                    .defensePosition(playerDto.getDefensePosition())
                    .pitcherOrHitter(playerDto.getPitcherOrHitter())
                    .build();
            }
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

            MyTeamPlayer modPlayer;
            if (playerDto.getPitcherOrHitter().equals("Hitter")) {
                HitterYearsStatus hitterYearsStatus = hitterYearsStatusRepository.findById(playerDto.getStatusId()).get();
                modPlayer = MyTeamPlayer.builder()
                        //여기 아이디를 잘 맞추지 않으면 새로운 컬럼으로 인식해서 수정이 안되고 새로 들어감 조심!
                        .myTeamPlayerId(playerDto.getMyTeamPlayerId())
                        .hitterYearsStatus(hitterYearsStatus)
                        .myTeam(newMyTeam)
                        .battingOrder(playerDto.getBattingOrder())
                        .defensePosition(playerDto.getDefensePosition())
                        .pitcherOrHitter(playerDto.getPitcherOrHitter())
                        .build();
            }
            else{
                PitcherYearsStatus pitcherYearsStatus = pitcherYearsStatusRepository.findById(playerDto.getStatusId()).get();
                modPlayer = MyTeamPlayer.builder()
                        //여기 아이디를 잘 맞추지 않으면 새로운 컬럼으로 인식해서 수정이 안되고 새로 들어감 조심!
                        .myTeamPlayerId(playerDto.getMyTeamPlayerId())
                        .pitcherYearsStatus(pitcherYearsStatus)
                        .myTeam(newMyTeam)
                        .battingOrder(playerDto.getBattingOrder())
                        .defensePosition(playerDto.getDefensePosition())
                        .pitcherOrHitter(playerDto.getPitcherOrHitter())
                        .build();
            }
            myTeamPlayerRepository.save(modPlayer);
        }

    }

    @Override
    public List<MyTeamResDto> getMyTeamList(Long userId) throws Exception {
        List<MyTeamResDto> teamDtoList=new ArrayList<>();

        List<MyTeam> entityList = myTeamRepository.findAllByUser(userRepository.findById(userId).get());

        for(MyTeam myTeam : entityList){
            MyTeamResDto myTeamResDto = new MyTeamResDto(myTeam);
            teamDtoList.add(myTeamResDto);
        }

        return teamDtoList;
    }

    @Override
    public MyTeamResDto getMyTeamPlayerList(Long myTeamId) throws Exception {
        MyTeam myTeam = myTeamRepository.findById(myTeamId).get();
        List<MyTeamPlayerResDto> dtoList = new ArrayList<>();
        for(MyTeamPlayer myTeamPlayer : myTeam.getMyTeamPlayerList()){
            MyTeamPlayerResDto teamPlayer= new MyTeamPlayerResDto(myTeamPlayer);
            dtoList.add(teamPlayer);
        }

        return new MyTeamResDto(myTeam.getMyTeamId(),myTeam.getMyTeamName(),dtoList);
    }
}
