import React, { useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import momentPlugin from "@fullcalendar/moment";
import styled from "styled-components";

import {
  Paper,
  Box,
  Typography,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

const monthName = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

const CalendarDiv = styled.div`
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  color: #5f5f5f;
  font-family: "Noto Sans KR", sans-serif;

  td,
  th {
    border: 0px solid #e5e5e5;
  }
  .fc-scrollgrid {
    border: 0px solid #ffffff;
  }
  .fc-header-toolbar {
    margin: 0 25px;
    margin-bottom: 0 !important;
    margin-top: -15px !important;
    height: 50px;
  }
  .fc-toolbar-title {
    font-size: 20px;
    color: #000000;
  }
  .fc-toolbar-chunk {
    display: flex;
    justify-content: center;
    align-items: center;
    .fc-gotoDate-button {
      margin: 0 !important;
    }
  }

  .fc-scrollgrid {
    font-size: 16px;
    color: #000000;
  }
  thead,
  .fc-col-header-cell {
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #5f5f5f;
    padding-left: 10px;
  }

  .fc-daygrid-day-top {
    text-align: left;
    padding-left: 10px;
  }
  .fc-daygrid-day-number {
    width: 100%;
  }

  .fc .fc-daygrid-day.fc-day-today {
    background-color: #ffffff;
  }
  th.fc-col-header-cell.fc-day.fc-day-today {
    background: linear-gradient(135deg, #638493, #37468b);
    border-radius: 2px 2px 0 0;
    color: #ffffff;
  }

  .fc-h-event {
    height: auto;
    border-radius: 5px;
    margin-bottom: 2px;
    border: 0px solid rgba(255, 255, 255, 0);
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
  .fc-event-main {
    overflow: hidden;
  }

  .fc-day-today > div.fc-daygrid-day-frame {
    border-top: 0px solid #f2d0d9;
  }

  .fc-scroller-harness {
    margin-bottom: 10px;
  }
  .fc-scroller-harness::webkit-scrollbar {
    display: none;
  }

  .fc-button {
    font-size: 18px;
    line-height: 14px;
    border: 0px solid #8c7b80;
    background-color: #ffffff;
    &:hover {
      background-color: #2d323f66;
      border: 0px solid #2d323f66;
    }
  }

  .event-list-item {
    height: 25px;
    border-radius: 2px;
    font-size: 14px;
    line-height: 25px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      color: #dddddd;
    }
  }
  .today-event {
    max-width: 900px;
    margin: auto;
    margin-bottom: 7px;
    background-color: #f6f6f6;
    border-radius: 16px;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
  }
  .today-event-playing {
    background-color: #1fc4aa;
    color: #ffffff;
    font-weight: bold;
  }
  .today-event-end {
    background-color: #C5C5C5;
    color: #565656;
    font-weight: bold;
  }
`;

const HeaderDiv = styled.div`
  text-align: left;
  margin-left: 40px;
`;

function renderEventContent(events) {
  //console.log(events);
  if (events.event._def.extendedProps.type === "end") {
    return (
      <div
        style={{
          backgroundColor: "#C5C5C5",
          color: "#565656",
          paddingLeft: "7px",
        }}
        class="event-list-item"
      >
        {events.event._def.title}
      </div>
    );
  } else if (events.event._def.extendedProps.type === "playing") {
    return (
      <div
        style={{
          backgroundColor: "#1FC4AA",
          color: "#FFFFFF",
          textAlign: "center",
          fontWeight: "bold",
        }}
        class="event-list-item"
      >
        ! 현재 진행 중인 경기 !
      </div>
    );
  } else if (events.event._def.extendedProps.type === "yet") {
    // 아직 치루지 않은 경기일 떄,
    const startTime = String(events.event.startStr);
    return (
      <div
        style={{
          backgroundColor: "#DEE1EB",
          color: "#000000",
          paddingLeft: "7px",
        }}
        class="event-list-item"
      >
        {startTime.substring(11, 16)} {events.event._def.title}
      </div>
    );
  }
}

const MainPage = (props) => {
  const [eventList, setEventList] = useState([
    {
      id: "1",
      title: "롯데 승",
      start: "2022-05-16T15:00:00",
      end: "2022-05-16T15:00:00",
      type: "end",
      team1: "롯데 자이언츠",
      team2: "삼성 라이온즈",
    },
    {
      id: "2",
      title: "두산 베어스 vs 키움 히어로즈",
      start: "2022-05-16T13:00:00",
      end: "2022-05-16T16:00:00",
      type: "playing",
      team1: "두산 베어스",
      team2: "키움 히어로즈",
    },
    {
      id: "3",
      title: "SSG vs LG",
      start: "2022-05-16T19:00:00",
      end: "2022-05-16T23:00:00",
      type: "yet",
      team1: "SSG 랜더스",
      team2: "LG 트윈스",
    },
  ]);
  const [todayEvent, setTodayEvent] = useState([
    {
      id: "1",
      awayScore: "10",
      awayTeam: "키움 히어로즈",
      broadcasting: "SBS",
      date: "2022-05-17T14:00",
      gameState: "end",
      homeScore: "12",
      homeTeam: "롯데 자이언츠",
      stadium: "사직 야구장",
    },
    {
      id: "2",
      awayScore: "10",
      awayTeam: "두산 베어스",
      broadcasting: "SBS",
      date: "2022-05-17T15:00",
      gameState: "playing",
      homeScore: "12",
      homeTeam: "키움 히어로즈",
      stadium: "사직 야구장",
    },
    {
      id: "3",
      awayScore: "10",
      awayTeam: "SSG 랜더스",
      broadcasting: "SBS",
      date: "2022-05-17T17:00",
      gameState: "yet",
      homeScore: "12",
      homeTeam: "LG 트윈스",
      stadium: "사직 야구장",
    },
  ]);
  const [selectDate, setSelectDate] = useState(
    new Date().toISOString().substring(0, 10)
  ); // * 달력의 기준으로 삼을 날짜
  const calendarRef = React.useRef();

  const fetchEventList = (date) => {
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "GET",
      url: `/schedule/${date}`,
    })
      .then((res) => {
        // console.log(res.data);
        setEventList(res.data.scheduleList);
        // console.log(eventList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchTodayEventList = () => {
    const today = new Date().toISOString().substring(0, 10);
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "GET",
      url: `/schedule/today/${today}`,
    })
      .then((res) => {
        // console.log(res.data.scheduleList);
        setTodayEvent(res.data.scheduleList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTodayEventList();
    fetchEventList(new Date().toISOString().substring(0, 10));
  }, [selectDate, eventList, todayEvent]);

  return (
    <>
      <div>
        <HeaderDiv>
          <h1>경기 일정</h1>
        </HeaderDiv>
        <CalendarDiv>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, momentPlugin]}
            initialView="dayGridWeek"
            contentHeight={180}
            // * dayCellDidMount는 Mount 됐을 때 일어나는 이벤트를 정의해주는 것... 즉 일정표 불러올 때 써야하는 부분
            // dayCellDidMount={(date) => {
            //   var newDay = new Date(date.date);
            //   // console.log(newDay.toISOString().substring(0, 10));
            // }}
            initialDate={selectDate}
            titleFormat={function (date) {
              // console.log(date)
              return `${date.date.year}년 ${monthName[date.date.month]}`;
            }}
            locale={"ko"}
            dayHeaderFormat={{
              month: "numeric",
              day: "numeric",
              year: "numeric",
            }}
            headerToolbar={{
              start: "title",
              center: "",
              end: "prevWeek nextWeek",
            }}
            events={eventList}
            eventDisplay="block"
            eventContent={renderEventContent}
            customButtons={{
              nextWeek: {
                text: (
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="angleRight"
                    style={{ width: "14px", color: "#2D323F" }}
                  />
                ),
                click: () => {
                  calendarRef.current.getApi().next();
                  // * 이동한 주의 맨 처음 날짜
                  var day = calendarRef.current
                    .getApi()
                    .getDate()
                    .toISOString()
                    .substring(0, 10);
                  fetchEventList(day);
                  fetchTodayEventList();
                },
              },
              prevWeek: {
                text: (
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="angleLeft"
                    style={{ width: "14px", color: "#2D323F" }}
                  />
                ),
                click: () => {
                  calendarRef.current.getApi().prev();
                  // * 이동한 주의 맨 처음 날짜
                  var day = calendarRef.current
                    .getApi()
                    .getDate()
                    .toISOString()
                    .substring(0, 10);
                  // console.log(day);
                  fetchEventList(day);
                  fetchTodayEventList();
                },
              },
              selectModal: {
                text: (
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="calendar"
                    style={{
                      width: "14px",
                      color: "#2D323F",
                    }}
                  />
                ),
                click: () => {
                  // setSelectDate(Date("2021-02-22"));
                },
              },
              gotoToday: {
                text: "오늘",
                click: () => {
                  calendarRef.current
                    .getApi()
                    .gotoDate(new Date().toISOString());
                },
              },
            }}
            dayCount={5}
          ></FullCalendar>
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <svg height="5" width="330">
                <line
                  x1="0"
                  y1="0"
                  x2="315"
                  y2="0"
                  style={{ stroke: "#475174", strokeWidth: 6 }}
                />
              </svg>
              <span style={{ fontSize: "30px", color: "#000000" }}>
                오늘의 일정
              </span>
              <svg height="5" width="330">
                <line
                  x1="15"
                  y1="0"
                  x2="330"
                  y2="0"
                  style={{ stroke: "#475174", strokeWidth: 6 }}
                />
              </svg>
            </div>
            <Paper
              elevation={0}
              sx={{
                maxWidth: "900px",
                minHeight: "100px",
                maxHeight: "300px",
                backgroundColor: "#F6F6F6",
                margin: "auto",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            >
              {todayEvent.length == 0 ? (
                <div style={{ textAlign: "center", height: "100%" }}>
                  <Typography component={"div"}>
                    오늘 예정된 경기가 없습니다.
                  </Typography>
                </div>
              ) : (
                <div></div>
              )}
            </Paper>
            {todayEvent.map(
              ({
                id,
                awayScore,
                awayTeam,
                broadcasting,
                date,
                gameState,
                homeScore,
                homeTeam,
                stadium,
              }) => {
                if (gameState === "playing") {
                  return (
                    <Box class="today-event today-event-playing">
                      <Grid
                        container
                        spacing={0}
                        sx={{ justifyContent: "space-between", height: "auto" }}
                      >
                        <Grid item xs={2}>
                          {date.substring(0, 10).replaceAll("-", ".")}
                        </Grid>
                        <Grid item xs={1}>
                          {date.substring(11, 16)}
                        </Grid>
                        <Grid item xs={7}>
                          {homeTeam} vs {awayTeam}
                        </Grid>
                        <Grid item xs={2}>
                          진행 중
                        </Grid>
                      </Grid>
                    </Box>
                  );
                } else if(gameState === "end") {
                  return (
                    <Box class="today-event today-event-end">
                      <Grid
                        container
                        spacing={0}
                        sx={{ justifyContent: "space-between", height: "auto" }}
                      >
                        <Grid item xs={2}>
                          {date.substring(0, 10).replaceAll("-", ".")}
                        </Grid>
                        <Grid item xs={1}>
                          {date.substring(11, 16)}
                        </Grid>
                        <Grid item xs={7}>
                          {homeTeam} {homeScore} : {awayTeam} {awayScore}
                        </Grid>
                        <Grid item xs={2}></Grid>
                      </Grid>
                    </Box>
                  );
                } else {
                  return (
                    <Box class="today-event">
                      <Grid
                        container
                        spacing={0}
                        sx={{ justifyContent: "space-between", height: "auto" }}
                      >
                        <Grid item xs={2}>
                          {date.substring(0, 10).replaceAll("-", ".")}
                        </Grid>
                        <Grid item xs={1}>
                          {date.substring(11, 16)}
                        </Grid>
                        <Grid item xs={7}>
                          {homeTeam} vs {awayTeam}
                        </Grid>
                        <Grid item xs={2}></Grid>
                      </Grid>
                    </Box>
                  );
                }
              }
            )}
          </Box>
        </CalendarDiv>
      </div>
    </>
  );
};

export default MainPage;
