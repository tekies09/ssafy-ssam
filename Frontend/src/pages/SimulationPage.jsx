import React, { useEffect, useState } from "react";
import { Typography, Box, Grow, List, Button, Link } from "@mui/material";
import MyTeamSummarySimulation from "../components/MyTeamSummarySimulation";

const testTeams = [
  {
    id: 1,
    name: "나만의 팀 1",
    members: [
      { id: 12345, ord: 1, pos: "2B", name: "김갑돌", year: "2020" },
      { id: 12347, ord: 2, pos: "SS", name: "김납돌", year: "2020" },
      { id: 23456, ord: 3, pos: "LF", name: "김답돌", year: "2020" },
      { id: 23442, ord: 4, pos: "DH", name: "김랍돌", year: "2020" },
      { id: 23313, ord: 5, pos: "1B", name: "김맙돌", year: "2020" },
      { id: 26562, ord: 6, pos: "CF", name: "김밥돌", year: "2020" },
      { id: 54356, ord: 7, pos: "RF", name: "김삽돌", year: "2020" },
      { id: 45754, ord: 8, pos: "3B", name: "김압돌", year: "2020" },
      { id: 45755, ord: 9, pos: "C", name: "김잡돌", year: "2020" },
      { id: 95733, ord: 10, pos: "P", name: "김찹돌", year: "2020" },
    ],
  },
  {
    id: 2,
    name: "나만의 팀 2",
    members: [
      { id: 12345, ord: 1, pos: "2B", name: "김갑돌", year: "2020" },
      { id: 12347, ord: 2, pos: "SS", name: "김납돌", year: "2020" },
      { id: 23456, ord: 3, pos: "LF", name: "김답돌", year: "2020" },
      { id: 23442, ord: 4, pos: "DH", name: "김랍돌", year: "2020" },
      { id: 23313, ord: 5, pos: "1B", name: "김맙돌", year: "2020" },
      { id: 26562, ord: 6, pos: "CF", name: "김밥돌", year: "2020" },
      { id: 54356, ord: 7, pos: "RF", name: "김삽돌", year: "2020" },
      { id: 45754, ord: 8, pos: "3B", name: "김압돌", year: "2020" },
      { id: 45755, ord: 9, pos: "C", name: "김잡돌", year: "2020" },
      { id: 95733, ord: 10, pos: "P", name: "김찹돌", year: "2020" },
    ],
  },
];

const testLogs = [
  "==== 경기시작 싸피 이글스팀 VS SAMSUNG팀 ====",
  "**싸피 이글스팀 1회초 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B)(1S,0B), 결과 -> 2루타(0아웃)(주자: 0, 1, 0)",
  "[2번 타자] (0S,0B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 1, 0)",
  "[3번 타자] (0S,0B), 결과 -> 1루타(1아웃)(주자: 1, 0, 1)",
  "[4번 타자] (0S,0B)(0S,1B)(0S,2B)(0S,3B), 결과-> 볼넷(1아웃)(주자: 1, 1, 0)",
  "[5번 타자] (0S,0B)(0S,1B)(0S,2B)(0S,3B), 결과 -> 땅볼/뜬공(2아웃)(주자: 1, 1, 0)",
  "[6번 타자] (0S,0B), 결과 -> 땅볼/뜬공(3아웃)(주자: 1, 1, 0)",
  "->1 회초 싸피 이글스팀 : 1점, SAMSUNG팀 : 0점",
  "===싸피 이글스팀 1점 증가===",
  "**SAMSUNG팀 1회말 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B)(0S,1B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 0, 0)",
  "[2번 타자] (0S,0B)(0S,1B)(0S,2B), 결과 -> 땅볼/뜬공(2아웃)(주자: 0, 0, 0)",
  "[3번 타자] (0S,0B)(0S,1B), 결과 -> 땅볼/뜬공(3아웃)(주자: 0, 0, 0)",
  "->1 회말 싸피 이글스팀 : 1점, SAMSUNG팀 : 0점",
  "===SAMSUNG팀 0점 증가===",
  "**싸피 이글스팀 2회초 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B)(0S,1B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 0, 0)",
  "[2번 타자] (0S,0B), 결과 -> 1루타(1아웃)(주자: 1, 0, 0)",
  "[3번 타자] (0S,0B), 결과 -> 땅볼/뜬공(2아웃)(주자: 1, 0, 0)",
  "[4번 타자] (0S,0B)(0S,1B)(1S,1B)(1S,2B), 결과 -> 땅볼/뜬공(3아웃)(주자: 1, 0, 0)",
  "->2 회초 싸피 이글스팀 : 1점, SAMSUNG팀 : 0점",
  "===싸피 이글스팀 0점 증가===",
  "**SAMSUNG팀 2회말 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 0, 0)",
  "[2번 타자] (0S,0B)(0S,1B)(0S,2B)(0S,3B), 결과 -> 땅볼/뜬공(2아웃)(주자: 0, 0, 0)",
  "[3번 타자] (0S,0B)(1S,0B), 결과 -> 땅볼/뜬공(3아웃)(주자: 0, 0, 0)",
  "->2 회말 싸피 이글스팀 : 1점, SAMSUNG팀 : 0점",
  "===SAMSUNG팀 0점 증가===",
  "**싸피 이글스팀 3회초 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B), 결과 -> 2루타(0아웃)(주자: 0, 1, 0)",
  "[2번 타자] (0S,0B)(0S,1B)(0S,2B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 1, 0)",
  "[3번 타자] (0S,0B)(1S,0B)(2S,0B), 결과-> 삼진(2아웃)(주자: 0, 1, 0)",
  "[4번 타자] (0S,0B), 결과 -> 1루타(2아웃)(주자: 1, 0, 1)",
  "[5번 타자] (0S,0B)(0S,1B)(0S,2B)(1S,2B)(1S,3B), 결과 -> 땅볼/뜬공(3아웃)(주자: 1, 0, 1)",
  "->3 회초 싸피 이글스팀 : 1점, SAMSUNG팀 : 0점",
  "===싸피 이글스팀 0점 증가===",
  "**SAMSUNG팀 3회말 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B)(0S,1B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 0, 0)",
  "[2번 타자] (0S,0B)(0S,1B), 결과 -> 1루타(1아웃)(주자: 1, 0, 0)",
  "[3번 타자] (0S,0B), 결과 -> 땅볼/뜬공(2아웃)(주자: 1, 0, 0)",
  "[4번 타자] (0S,0B)(0S,1B), 결과 -> 땅볼/뜬공(3아웃)(주자: 1, 0, 0)",
  "->3 회말 싸피 이글스팀 : 1점, SAMSUNG팀 : 0점",
  "===SAMSUNG팀 0점 증가===",
  "**싸피 이글스팀 4회초 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B)(0S,1B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 0, 0)",
  "[2번 타자] (0S,0B)(0S,1B)(0S,2B), 결과-> 홈런!!(1아웃)(주자: 0, 0, 0)",
  "[3번 타자] (0S,0B)(1S,0B), 결과 -> 땅볼/뜬공(2아웃)(주자: 0, 0, 0)",
  "[4번 타자] (0S,0B), 결과 -> 땅볼/뜬공(3아웃)(주자: 0, 0, 0)",
  "->4 회초 싸피 이글스팀 : 2점, SAMSUNG팀 : 0점",
  "===싸피 이글스팀 1점 증가===",
  "**SAMSUNG팀 4회말 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B)(1S,0B)(1S,1B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 0, 0)",
  "[2번 타자] (0S,0B)(0S,1B)(0S,2B)(0S,3B), 결과 -> 땅볼/뜬공(2아웃)(주자: 0, 0, 0)",
  "[3번 타자] (0S,0B), 결과 -> 땅볼/뜬공(3아웃)(주자: 0, 0, 0)",
  "->4 회말 싸피 이글스팀 : 2점, SAMSUNG팀 : 0점",
  "===SAMSUNG팀 0점 증가===",
  "**싸피 이글스팀 5회초 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 0, 0)",
  "[2번 타자] (0S,0B), 결과 -> 땅볼/뜬공(2아웃)(주자: 0, 0, 0)",
  "[3번 타자] (0S,0B)(0S,1B)(0S,2B), 결과 -> 땅볼/뜬공(3아웃)(주자: 0, 0, 0)",
  "->5 회초 싸피 이글스팀 : 2점, SAMSUNG팀 : 0점",
  "===싸피 이글스팀 0점 증가===",
  "**SAMSUNG팀 5회말 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 0, 0)",
  "[2번 타자] (0S,0B)(0S,1B)(0S,2B)(0S,3B), 결과-> 볼넷(1아웃)(주자: 1, 0, 0)",
  "[3번 타자] (0S,0B)(0S,1B), 결과 -> 2루타(1아웃)(주자: 0, 1, 1)",
  "[4번 타자] (0S,0B), 결과 -> 땅볼/뜬공(2아웃)(주자: 0, 1, 1)",
  "[5번 타자] (0S,0B)(1S,0B)(2S,0B), 결과-> 삼진(3아웃)(주자: 0, 1, 1)",
  "->5 회말 싸피 이글스팀 : 2점, SAMSUNG팀 : 0점",
  "===SAMSUNG팀 0점 증가===",
  "**싸피 이글스팀 6회초 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 0, 0)",
  "[2번 타자] (0S,0B)(0S,1B)(0S,2B), 결과 -> 땅볼/뜬공(2아웃)(주자: 0, 0, 0)",
  "[3번 타자] (0S,0B)(0S,1B)(0S,2B)(1S,2B), 결과-> 홈런!!(2아웃)(주자: 0, 0, 0)",
  "[4번 타자] (0S,0B)(1S,0B)(1S,1B), 결과 -> 2루타(2아웃)(주자: 0, 1, 0)",
  "[5번 타자] (0S,0B)(0S,1B), 결과 -> 땅볼/뜬공(3아웃)(주자: 0, 1, 0)",
  "->6 회초 싸피 이글스팀 : 3점, SAMSUNG팀 : 0점",
  "===싸피 이글스팀 1점 증가===",
  "**SAMSUNG팀 6회말 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B)(0S,1B)(1S,1B)(1S,2B), 결과 -> 2루타(0아웃)(주자: 0, 1, 0)",
  "[2번 타자] (0S,0B)(1S,0B)(1S,1B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 1, 0)",
  "[3번 타자] (0S,0B)(1S,0B)(2S,0B)(2S,1B)(2S,2B), 결과-> 삼진(2아웃)(주자: 0, 1, 0)",
  "[4번 타자] (0S,0B)(0S,1B)(1S,1B)(1S,2B), 결과 -> 땅볼/뜬공(3아웃)(주자: 0, 1, 0)",
  "->6 회말 싸피 이글스팀 : 3점, SAMSUNG팀 : 0점",
  "===SAMSUNG팀 0점 증가===",
  "**싸피 이글스팀 7회초 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B)(0S,1B)(1S,1B)(2S,1B), 결과-> 삼진(1아웃)(주자: 0, 0, 0)",
  "[2번 타자] (0S,0B)(1S,0B), 결과 -> 땅볼/뜬공(2아웃)(주자: 0, 0, 0)",
  "[3번 타자] (0S,0B), 결과 -> 땅볼/뜬공(3아웃)(주자: 0, 0, 0)",
  "->7 회초 싸피 이글스팀 : 3점, SAMSUNG팀 : 0점",
  "===싸피 이글스팀 0점 증가===",
  "**SAMSUNG팀 7회말 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B)(0S,1B)(0S,2B)(0S,3B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 0, 0)",
  "[2번 타자] (0S,0B), 결과 -> 1루타(1아웃)(주자: 1, 0, 0)",
  "[3번 타자] (0S,0B), 결과 -> 1루타(1아웃)(주자: 1, 1, 0)",
  "[4번 타자] (0S,0B), 결과 -> 땅볼/뜬공(2아웃)(주자: 1, 1, 0)",
  "[5번 타자] (0S,0B)(0S,1B)(1S,1B)(2S,1B)(2S,2B), 결과 -> 2루타(2아웃)(주자: 0, 1, 1)",
  "[6번 타자] (0S,0B), 결과 -> 3루타(2아웃)(주자: 0, 0, 1)",
  "[7번 타자] (0S,0B)(1S,0B), 결과 -> 땅볼/뜬공(3아웃)(주자: 0, 0, 1)",
  "->7 회말 싸피 이글스팀 : 3점, SAMSUNG팀 : 3점",
  "===SAMSUNG팀 3점 증가===",
  "**싸피 이글스팀 8회초 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B)(0S,1B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 0, 0)",
  "[2번 타자] (0S,0B)(1S,0B)(1S,1B), 결과 -> 땅볼/뜬공(2아웃)(주자: 0, 0, 0)",
  "[3번 타자] (0S,0B), 결과 -> 3루타(2아웃)(주자: 0, 0, 1)",
  "[4번 타자] (0S,0B)(0S,1B)(1S,1B)(1S,2B)(2S,2B), 결과 -> 땅볼/뜬공(3아웃)(주자: 0, 0, 1)",
  "->8 회초 싸피 이글스팀 : 3점, SAMSUNG팀 : 3점",
  "===싸피 이글스팀 0점 증가===",
  "**SAMSUNG팀 8회말 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B)(0S,1B)(0S,2B)(1S,2B)(2S,2B)(2S,3B), 결과-> 볼넷(0아웃)(주자: 1, 0, 0)",
  "[2번 타자] (0S,0B)(0S,1B), 결과 -> 땅볼/뜬공(1아웃)(주자: 1, 0, 0)",
  "[3번 타자] (0S,0B)(1S,0B)(1S,1B)(1S,2B)(1S,3B), 결과 -> 땅볼/뜬공(2아웃)(주자: 1, 0, 0)",
  "[4번 타자] (0S,0B), 결과 -> 땅볼/뜬공(3아웃)(주자: 1, 0, 0)",
  "->8 회말 싸피 이글스팀 : 3점, SAMSUNG팀 : 3점",
  "===SAMSUNG팀 0점 증가===",
  "**싸피 이글스팀 9회초 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 0, 0)",
  "[2번 타자] (0S,0B), 결과 -> 땅볼/뜬공(2아웃)(주자: 0, 0, 0)",
  "[3번 타자] (0S,0B)(1S,0B), 결과 -> 땅볼/뜬공(3아웃)(주자: 0, 0, 0)",
  "->9 회초 싸피 이글스팀 : 3점, SAMSUNG팀 : 3점",
  "===싸피 이글스팀 0점 증가===",
  "**SAMSUNG팀 9회말 공격시작**",
  "hit! = ",
  "[1번 타자] (0S,0B), 결과 -> 땅볼/뜬공(1아웃)(주자: 0, 0, 0)",
  "[2번 타자] (0S,0B), 결과 -> 땅볼/뜬공(2아웃)(주자: 0, 0, 0)",
  "[3번 타자] (0S,0B)(0S,1B)(0S,2B), 결과 -> 땅볼/뜬공(3아웃)(주자: 0, 0, 0)",
  "->9 회말 싸피 이글스팀 : 3점, SAMSUNG팀 : 3점",
  "===SAMSUNG팀 0점 증가===",
  "====경기종료 싸피 이글스팀:3점, SAMSUNG팀:3점====",
  "경기결과 >> 무승부!",
];

// const logBox = document.querySelector("#log-box");

const SimulationPage = props => {
  const [teams, setTeams] = useState(testTeams);
  const [checked, setChecked] = useState(false);
  const [finished, setFinished] = useState(false);
  const logList = [];
  // const [logs, setLogs] = useState([]);

  // const printLog = setInterval(() => {
  //   console.log(testLogs[logIdx++]);

  //   if (logIdx === testLogs.length) {
  //     clearInterval(printLog);
  //   }
  // }, 500);

  const addLog = log => {
    const logBox = document.querySelector("#log-box");
    const newLog = document.createElement("li");

    // 중복 출력 방지
    if (logList[logList.length - 1] !== log) {
      // 스크롤바 맨 아래로 내리기
      let isScrollBottom =
        logBox.scrollHeight - logBox.scrollTop <= logBox.clientHeight + 2;

      logList.push(log);
      newLog.innerText = log;
      logBox.appendChild(newLog);

      if (isScrollBottom) {
        logBox.scrollTo({ top: logBox.scrollHeight, behavior: "smooth" });
      }
    }
  };

  // async function playSimulation() {
  //   setChecked(true);
  //   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  //   for (let i = 0; i < testLogs.length; i++) {
  //     console.log(testLogs[i]);
  //     await new Promise((resolve, reject) => setTimeout(resolve, 500));
  //   }
  // }

  useEffect(() => {
    async function playSimulation() {
      setChecked(true);
      await new Promise((resolve, reject) => setTimeout(resolve, 3000));

      for (let i = 0; i < testLogs.length; i++) {
        addLog(testLogs[i]);
        await new Promise((resolve, reject) => setTimeout(resolve, 200));
      }

      setFinished(true);
    }

    playSimulation();
  }, []);

  const teamInfo = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <MyTeamSummarySimulation
        team={teams[0]}
        key={teams[0].id}
        isMyTeam={true}
      />

      <Box
        sx={{
          mx: 3,
        }}
      >
        <Typography variant="h4">VS</Typography>
      </Box>

      {/* 상대 팀 */}
      <MyTeamSummarySimulation
        team={teams[1]}
        key={teams[1].id}
        isMyTeam={false}
      />
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F6F6F6",
        // border: "2px solid black",
        alignItems: "center",
        m: 4,
        p: 4,
      }}
    >
      {/* 양팀 선수 정보 */}
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 2000 } : {})}
      >
        {teamInfo}
      </Grow>
      <Box>
        <Typography sx={{ mt: 4 }} variant="h4">
          ⚾ ⚾ ⚾ ⚾
        </Typography>
      </Box>
      {/* 로그 */}
      <List
        sx={{
          mt: 1,
          width: "100%",
          // maxWidth: 360,
          // bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          minHeight: "25vh",
          maxHeight: "25vh",
          alignItems: "left",
          border: "2px solid black",
        }}
        id="log-box"
      ></List>
      {/* <Box sx={{ mt: 4 }} id="log-box">
        {logs.map(log => {
          <Typography>{log}</Typography>;
        })}
      </Box> */}

      {/* 다시하기 버튼 */}
      {/* 작동 제대로 안 될 수 있음 */}
      <Grow
        in={finished}
        style={{ transformOrigin: "0 0 0" }}
        {...(finished ? { timeout: 2000 } : {})}
      >
        <Button
          sx={{ mt: 3, color: "white" }}
          variant="contained"
          color="mint"
          size="large"
          onClick={() => {
            window.location.reload();
          }}
        >
          <Typography textAlign="left">RESTART?</Typography>
        </Button>
      </Grow>
    </Box>
  );
};

export default SimulationPage;
