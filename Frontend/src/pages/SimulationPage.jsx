import React, { useEffect, useState } from "react";
import { Typography, Box, Grow, List, Button, Link } from "@mui/material";
import MyTeamSummarySimulation from "../components/MyTeamSummarySimulation";

import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

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

const SimulationPage = props => {
  const [teams, setTeams] = useState(testTeams);
  const [checked, setChecked] = useState(false);
  const [finished, setFinished] = useState(false);
  const [logFinished, setLogFinished] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  // const [myScore, setMyScore] = useState({
  //   1: 0,
  //   2: 0,
  //   3: 0,
  //   4: 0,
  //   5: 0,
  //   6: 0,
  //   7: 0,
  //   8: 0,
  //   9: 0,
  //   total: 0,
  // });
  // const [yourScore, setYourScore] = useState({
  //   1: 0,
  //   2: 0,
  //   3: 0,
  //   4: 0,
  //   5: 0,
  //   6: 0,
  //   7: 0,
  //   8: 0,
  //   9: 0,
  //   total: 0,
  // });
  // const [yourScore, setYourScore] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const logList = [];
  const showedLogList = [];

  let logCount = 0;
  const pointChange = {};
  let myTotalPoint = 0;
  let yourTotalPoint = 0;

  const result = {
    team1Point: 0,
    team2Point: 0,
    base: [0, 0, 0],
    team1takehitnum: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    team2takehitnum: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  const team1 = [
    {
      ab_cn: 151,
      so_cn: 14,
      h_cn: 60,
      h2_cn: 11,
      h3_cn: 2,
      hr_cn: 5,
    },
    {
      ab_cn: 141,
      so_cn: 14,
      h_cn: 52,
      h2_cn: 4,
      h3_cn: 0,
      hr_cn: 5,
    },
    {
      ab_cn: 144,
      so_cn: 16,
      h_cn: 51,
      h2_cn: 11,
      h3_cn: 0,
      hr_cn: 8,
    },
    {
      ab_cn: 136,
      so_cn: 17,
      h_cn: 46,
      h2_cn: 10,
      h3_cn: 0,
      hr_cn: 1,
    },
    {
      ab_cn: 145,
      so_cn: 3,
      h_cn: 48,
      h2_cn: 9,
      h3_cn: 0,
      hr_cn: 4,
    },
    {
      ab_cn: 135,
      so_cn: 17,
      h_cn: 44,
      h2_cn: 6,
      h3_cn: 0,
      hr_cn: 2,
    },
    {
      ab_cn: 132,
      so_cn: 30,
      h_cn: 43,
      h2_cn: 15,
      h3_cn: 1,
      hr_cn: 5,
    },
    {
      ab_cn: 143,
      so_cn: 38,
      h_cn: 46,
      h2_cn: 11,
      h3_cn: 1,
      hr_cn: 5,
    },
    {
      ab_cn: 140,
      so_cn: 17,
      h_cn: 45,
      h2_cn: 10,
      h3_cn: 0,
      hr_cn: 8,
    },
    {
      kbb_rt: 5.33,
    },
    {
      myTeamName: "싸피 이글스",
    },
  ];

  const team2 = [
    {
      ab_cn: 151,
      so_cn: 14,
      h_cn: 60,
      h2_cn: 11,
      h3_cn: 2,
      hr_cn: 5,
    },
    {
      ab_cn: 141,
      so_cn: 14,
      h_cn: 52,
      h2_cn: 4,
      h3_cn: 0,
      hr_cn: 5,
    },
    {
      ab_cn: 144,
      so_cn: 16,
      h_cn: 51,
      h2_cn: 11,
      h3_cn: 0,
      hr_cn: 8,
    },
    {
      ab_cn: 136,
      so_cn: 17,
      h_cn: 46,
      h2_cn: 10,
      h3_cn: 0,
      hr_cn: 1,
    },
    {
      ab_cn: 145,
      so_cn: 3,
      h_cn: 48,
      h2_cn: 9,
      h3_cn: 0,
      hr_cn: 4,
    },
    {
      ab_cn: 135,
      so_cn: 17,
      h_cn: 44,
      h2_cn: 6,
      h3_cn: 0,
      hr_cn: 2,
    },
    {
      ab_cn: 132,
      so_cn: 30,
      h_cn: 43,
      h2_cn: 15,
      h3_cn: 1,
      hr_cn: 5,
    },
    {
      ab_cn: 143,
      so_cn: 38,
      h_cn: 46,
      h2_cn: 11,
      h3_cn: 1,
      hr_cn: 5,
    },
    {
      ab_cn: 140,
      so_cn: 17,
      h_cn: 45,
      h2_cn: 10,
      h3_cn: 0,
      hr_cn: 8,
    },
    {
      kbb_rt: 5.33,
    },
    {
      myTeamName: "싸피 라이온즈",
    },
  ];

  function movePlayer(plusNum, teamNum) {
    if (plusNum === 1) {
      for (let i = 2; i > -1; i -= 1) {
        if (result["base"][i] === 1) {
          if (i === 2) {
            result["base"][i] = 0;

            if (teamNum === 1) {
              result["team1Point"] += 1;
            } else if (teamNum === 2) {
              result["team2Point"] += 1;
            } else {
              console.log("오류");
            }
          } else {
            result["base"][i + 1] = 1;
            result["base"][i] = 0;
          }
        }
      }

      result["base"][0] = 1;
    }

    if (plusNum === 2) {
      for (let i = 2; i > -1; i -= 1) {
        if (result["base"][i] === 1) {
          if (i === 1 || i === 2) {
            result["base"][i] = 0;

            if (teamNum === 1) {
              result["team1Point"] += 1;
            } else if (teamNum === 2) {
              result["team2Point"] += 1;
            } else {
              console.log("오류");
            }
          } else {
            result["base"][i + 2] = 1;
            result["base"][i] = 0;
          }
        }
      }

      result["base"][1] = 1;
    }

    if (plusNum === 3) {
      for (let i = 2; i > -1; i -= 1) {
        if (result["base"][i] === 1) {
          result["base"][i] = 0;

          if (teamNum === 1) {
            result["team1Point"] += 1;
          } else if (teamNum === 2) {
            result["team2Point"] += 1;
          }
        }
      }
      result["base"][2] = 1;
    }

    if (plusNum === 4) {
      for (let i = 2; i > -1; i -= 1) {
        if (result["base"][i] === 1) {
          if (teamNum === 1) {
            result["team1Point"] += 1;
          } else if (teamNum === 2) {
            result["team2Point"] += 1;
          }
          result["base"][i] = 0;
        }
      }

      if (teamNum === 1) {
        result["team1Point"] += 1;
      } else if (teamNum === 2) {
        result["team2Point"] += 1;
      }
    }

    if (plusNum === 5) {
      let first = result["base"][0];
      let second = result["base"][1];
      let third = result["base"][2];

      let value = 4 * first + 2 * second + third;

      switch (value) {
        case 4: // 1루
          result["base"][1] = 1;
          break;
        case 2: // 2루
          result["base"][0] = 1;
          break;
        case 1: // 3루
          result["base"][0] = 1;
          break;
        case 0: // 주자 없음
          result["base"][0] = 1;
          break;
        case 6: // 1루, 2루
          result["base"][2] = 1;
          break;
        case 5: // 1루, 3루
          result["base"][1] = 1;
          break;
        case 3: // 2루, 3루
          result["base"][0] = 1;
          break;
        case 7: // 1루, 2루, 3루
          if (teamNum === 1) {
            result["team1Point"] += 1;
          } else if (teamNum === 2) {
            result["team2Point"] += 1;
          }
          break;
      }
    }
  }

  /*
  한번(ex. 3회초, 5회말 등) 동안의 공격 결과를 기록한다.
  
  Args:
  result: 경기 진행 상황을 기록하는 곳
  a: 현재 수비하는 팀
  b: 현재 공격하는 팀
  teamNum: 1이면 선공 팀(n회 초), 2면 후공 팀(n회 말)*/

  function hit(a, b, teamNum) {
    // storeLog("hit! = ");

    let hit = 0;
    let hitterNum = 0;
    let ball = 0;
    let count = 0;
    let strike = 0;
    let out = 0;

    if (teamNum === 1) {
      count = result["team1Point"];
    } else if (teamNum === 2) {
      count = result["team2Point"];
    }

    while (out !== 3) {
      hitterNum += 1;
      result["team1takehitnum"][(hitterNum - 1) % 9] += 1;
      storeLog(`[${hitterNum % 9}번 타자]`);

      let currentLog = "";

      while (true) {
        currentLog += `(${strike}S, ${ball}B) `;
        // storeLog(`(${strike}S, ${ball}B)`);
        hit = Math.random() * 100;

        if (a[9]["kbb_rt"] >= 1.5) {
          if (hit < 40 - a[9]["kbb_rt"] * 1.5) {
            ball += 1;
          } else if (hit < 80) {
            strike += 1;
          } else {
            hit = Math.random();

            if (
              hit <
              1 -
                b[(hitterNum - 1) % 9]["h_cn"] /
                  (b[(hitterNum - 1) % 9]["ab_cn"] -
                    b[(hitterNum - 1) % 9]["so_cn"])
            ) {
              out += 1;
              storeLog(
                currentLog +
                  `, 결과 -> 땅볼/뜬공(${out}아웃)(주자: ${result["base"][0]}, ${result["base"][1]}, ${result["base"][2]})`
              );
              break;
            } else {
              hit = Math.random();

              if (
                hit <
                (b[(hitterNum - 1) % 9]["h_cn"] -
                  b[(hitterNum - 1) % 9]["h2_cn"] -
                  b[(hitterNum - 1) % 9]["h3_cn"] -
                  b[(hitterNum - 1) % 9]["hr_cn"]) /
                  b[(hitterNum - 1) % 9]["h_cn"]
              ) {
                movePlayer(1, teamNum);
                storeLog(
                  currentLog +
                    `, 결과 -> 1루타(${out}아웃)(주자: ${result["base"][0]}, ${result["base"][1]}, ${result["base"][2]})`
                );
                break;
              } else if (
                hit <
                (b[(hitterNum - 1) % 9]["h_cn"] -
                  b[(hitterNum - 1) % 9]["h3_cn"] -
                  b[(hitterNum - 1) % 9]["hr_cn"]) /
                  b[(hitterNum - 1) % 9]["h_cn"]
              ) {
                movePlayer(2, teamNum);
                storeLog(
                  currentLog +
                    `, 결과 -> 2루타(${out}아웃)(주자: ${result["base"][0]}, ${result["base"][1]}, ${result["base"][2]})`
                );
                break;
              } else if (
                hit <
                (b[(hitterNum - 1) % 9]["h_cn"] -
                  b[(hitterNum - 1) % 9]["hr_cn"]) /
                  b[(hitterNum - 1) % 9]["h_cn"]
              ) {
                movePlayer(3, teamNum);
                storeLog(
                  currentLog +
                    `, 결과 -> 3루타(${out}아웃)(주자: ${result["base"][0]}, ${result["base"][1]}, ${result["base"][2]})`
                );
                break;
              } else {
                movePlayer(4, teamNum);
                storeLog(
                  currentLog +
                    `, 결과 -> 홈런!!(${out}아웃)(주자: ${result["base"][0]}, ${result["base"][1]}, ${result["base"][2]})`
                );
                break;
              }
            }
          }

          if (ball === 4) {
            movePlayer(5, teamNum);
            storeLog(
              currentLog +
                `, 결과 -> 볼넷(${out}아웃)(주자: ${result["base"][0]}, ${result["base"][1]}, ${result["base"][2]})`
            );
            break;
          }

          if (strike === 3) {
            out += 1;
            storeLog(
              currentLog +
                `, 결과 -> 삼진(${out}아웃)(주자: ${result["base"][0]}, ${result["base"][1]}, ${result["base"][2]})`
            );
            break;
          }
        } else {
          if (hit < 43) {
            ball += 1;
          } else if (hit < 80) {
            strike += 1;
          } else {
            hit = Math.random();

            if (
              hit <
              1 -
                b[(hitterNum - 1) % 9]["h_cn"] /
                  (b[(hitterNum - 1) % 9]["ab_cn"] -
                    b[(hitterNum - 1) % 9]["so_cn"])
            ) {
              out += 1;
              storeLog(
                currentLog +
                  `, 결과 -> 땅볼/뜬공(${out}아웃)(주자: ${result["base"][0]}, ${result["base"][1]}, ${result["base"][2]})`
              );
              break;
            } else {
              hit = Math.random();

              if (
                hit <
                (b[(hitterNum - 1) % 9]["h_cn"] -
                  b[(hitterNum - 1) % 9]["h2_cn"] -
                  b[(hitterNum - 1) % 9]["h3_cn"] -
                  b[(hitterNum - 1) % 9]["hr_cn"]) /
                  b[(hitterNum - 1) % 9]["h_cn"]
              ) {
                movePlayer(1, teamNum);
                storeLog(
                  currentLog +
                    `, 결과 -> 1루타(${out}아웃)(주자: ${result["base"][0]}, ${result["base"][1]}, ${result["base"][2]})`
                );
                break;
              } else if (
                hit <
                (b[(hitterNum - 1) % 9]["h_cn"] -
                  b[(hitterNum - 1) % 9]["h3_cn"] -
                  b[(hitterNum - 1) % 9]["hr_cn"]) /
                  b[(hitterNum - 1) % 9]["h_cn"]
              ) {
                movePlayer(2, teamNum);
                storeLog(
                  currentLog +
                    `, 결과 -> 2루타(${out}아웃)(주자: ${result["base"][0]}, ${result["base"][1]}, ${result["base"][2]})`
                );
                break;
              } else if (
                hit <
                (b[(hitterNum - 1) % 9]["h_cn"] -
                  b[(hitterNum - 1) % 9]["hr_cn"]) /
                  b[(hitterNum - 1) % 9]["h_cn"]
              ) {
                movePlayer(3, teamNum);
                storeLog(
                  currentLog +
                    `, 결과 -> 3루타(${out}아웃)(주자: ${result["base"][0]}, ${result["base"][1]}, ${result["base"][2]})`
                );
                break;
              } else {
                movePlayer(4, teamNum);
                storeLog(
                  currentLog +
                    `, 결과 -> 홈런!!(${out}아웃)(주자: ${result["base"][0]}, ${result["base"][1]}, ${result["base"][2]})`
                );
                break;
              }
            }
          }

          if (ball === 4) {
            movePlayer(5, teamNum);
            storeLog(
              currentLog +
                `, 결과 -> 볼넷(${out}아웃)(주자: ${result["base"][0]}, ${result["base"][1]}, ${result["base"][2]})`
            );
            break;
          }

          if (strike === 3) {
            out += 1;
            storeLog(
              currentLog +
                `, 결과 -> 삼진(${out}아웃)(주자: ${result["base"][0]}, ${result["base"][1]}, ${result["base"][2]})`
            );
            break;
          }
        }
      }

      ball = 0;
      strike = 0;
    }

    if (teamNum === 1) {
      return result["team1Point"] - count;
    } else {
      return result["team2Point"] - count;
    }
  }

  function teamFight(a, b) {
    let num;

    // 중복 실행 방지
    if (!isFirst) {
      return;
    } else {
      setIsFirst(false);

      storeLog(
        `==== 경기시작 ${a[10]["myTeamName"]}팀 VS ${b[10]["myTeamName"]}팀 ====`
      );
    }

    for (let i = 1; i < 10; i += 1) {
      storeLog(`\n**${a[10]["myTeamName"]}팀 ${i}회초 공격시작**`);

      num = hit(a, b, 1);

      storeLog(
        `->${i} 회초 ${a[10]["myTeamName"]}팀 : ${result["team1Point"]}점, ${b[10]["myTeamName"]}팀 : ${result["team2Point"]}점`
      );

      // 점수 전광판에 표시하기
      pointChange[logCount] = ["me", i, num];

      storeLog(`\n===${a[10]["myTeamName"]}팀 ${num}점 증가===`);

      for (let j = 0; j < 3; j += 1) {
        result["base"][j] = 0;
      }

      storeLog(`\n**${b[10]["myTeamName"]}팀 ${i}회말 공격시작**`);

      num = hit(b, a, 2);

      storeLog(
        `->${i} 회말 ${a[10]["myTeamName"]}팀 : ${result["team1Point"]}점, ${b[10]["myTeamName"]}팀 : ${result["team2Point"]}점`
      );

      // 점수 전광판에 표시하기
      pointChange[logCount] = ["you", i, num];

      storeLog(`\n===${b[10]["myTeamName"]}팀 ${num}점 증가===`);

      for (let j = 0; j < 3; j += 1) {
        result["base"][j] = 0;
      }
    }

    storeLog(
      `\n==== 경기종료 ${a[10]["myTeamName"]}팀:${result["team1Point"]}점, ${b[10]["myTeamName"]}팀:${result["team2Point"]}점 ====`
    );

    if (result["team1Point"] > result["team2Point"]) {
      storeLog(`\n경기결과>> ${a[10]["myTeamName"]}팀 승리!`);
    } else if (result["team1Point"] === result["team2Point"]) {
      storeLog("\n경기결과>> 무승부!");
    } else {
      storeLog(`\n경기결과>> ${b[10]["myTeamName"]}팀 승리!`);
    }

    storeLog("endgame");
  }

  // const [logs, setLogs] = useState([]);

  // const printLog = setInterval(() => {
  //   console.log(testLogs[logIdx++]);

  //   if (logIdx === testLogs.length) {
  //     clearInterval(printLog);
  //   }
  // }, 500);

  // 로그 내용을 logs 배열에 저장한다.
  const storeLog = log => {
    logList.push(log);
    logCount++;
  };

  // 로그를 화면에 보여준다.
  const addLog = (idx, log) => {
    const logBox = document.querySelector("#log-box");
    const newLog = document.createElement("li");

    if (showedLogList[showedLogList.length - 1] !== log) {
      // 스크롤바 맨 아래로 내리기
      let isScrollBottom =
        logBox.scrollHeight - logBox.scrollTop <= logBox.clientHeight + 2;

      // logList.push(log);
      showedLogList.push(log);
      newLog.innerText = log;
      logBox.appendChild(newLog);

      // 점수판을 로그에 맞춰 실시간으로 업데이트한다.
      if (idx in pointChange) {
        // 점수를 얻은 경우
        if (pointChange[idx][2] > 0) {
          let point = pointChange[idx][2];
          let findId = `#${pointChange[idx][0]}-${pointChange[idx][1]}`;
          let totalId = `#${pointChange[idx][0]}-total`;

          // 현재 점수 업데이트
          document.querySelector(findId).innerText = pointChange[idx][2];

          // 총 점수 업데이트
          if (pointChange[idx][0] === "me") {
            myTotalPoint += point;
            document.querySelector(totalId).innerText = myTotalPoint;
          } else {
            yourTotalPoint += point;
            document.querySelector(totalId).innerText = yourTotalPoint;
          }
        }
      }

      if (isScrollBottom) {
        logBox.scrollTo({ top: logBox.scrollHeight, behavior: "smooth" });
      }
    }
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.sub_100.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

  const TableData = post => {
    return (
      <TableBody>
        <TableRow key={post.freeBoardId}>
          <StyledTableCell align="center">나의 팀</StyledTableCell>
          <StyledTableCell align="center" id="me-1">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="me-2">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="me-3">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="me-4">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="me-5">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="me-6">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="me-7">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="me-8">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="me-9">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="me-total">
            0
          </StyledTableCell>
        </TableRow>
        <TableRow key={post.freeBoardId}>
          <StyledTableCell align="center">상대 팀</StyledTableCell>
          <StyledTableCell align="center" id="you-1">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="you-2">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="you-3">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="you-4">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="you-5">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="you-6">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="you-7">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="you-8">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="you-9">
            0
          </StyledTableCell>
          <StyledTableCell align="center" id="you-total">
            0
          </StyledTableCell>
        </TableRow>
      </TableBody>
    );
  };

  useEffect(() => {
    async function playSimulation() {
      setChecked(true);
      teamFight(team1, team2);
      await new Promise((resolve, reject) => setTimeout(resolve, 3000));

      // 3초 후 로그 보여주기 시작
      for (let i = 0; i < logList.length; i++) {
        // 반복 실행 방지
        if (logList[i] === "endgame") {
          break;
        }

        addLog(i, logList[i]);
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
      {/* 전광판 */}
      <TableContainer sx={{ mt: 4 }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Team</StyledTableCell>
              <StyledTableCell align="center">1</StyledTableCell>
              <StyledTableCell align="center">2</StyledTableCell>
              <StyledTableCell align="center">3</StyledTableCell>
              <StyledTableCell align="center">4</StyledTableCell>
              <StyledTableCell align="center">5</StyledTableCell>
              <StyledTableCell align="center">6</StyledTableCell>
              <StyledTableCell align="center">7</StyledTableCell>
              <StyledTableCell align="center">8</StyledTableCell>
              <StyledTableCell align="center">9</StyledTableCell>
              <StyledTableCell align="center">Total</StyledTableCell>
            </TableRow>
          </TableHead>
          {/* 점수 */}
          <TableData />
        </Table>
      </TableContainer>
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
