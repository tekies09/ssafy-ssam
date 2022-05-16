import React, { useState } from "react";

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
    color: #ffffff;
  }

  .fc-h-event {
    background-color: #f6f6f6;
    height: 25px;
    color: #5f5f5f;
    border-radius: 5px;
    margin-bottom: 1px;
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
          fontWeight: "bold"
        }}
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
    },
    {
      id: "2",
      title: "두산 베어스 vs 키움 히어로즈",
      start: "2022-05-16",
      end: "2022-05-16",
      type: "playing",
    },
    {
      id: "3",
      title: "SSG vs LG",
      start: "2022-05-16T19:00:00",
      end: "2022-05-16T23:00:00",
      type: "yet",
    },
  ]);
  const [todayEvent, setTodayEvent] = useState([
    {
      id: "1",
      title: "롯데 승",
      start: "2022-05-16T11:00:00",
      end: "2022-05-16T14:00:00",
      type: "end",
    },
    {
      id: "2",
      title: "두산 베어스 vs 키움 히어로즈",
      start: "2022-05-16T13:00:00",
      end: "2022-05-16T16:00:00",
      type: "playing",
    },
    {
      id: "3",
      title: "SSG vs LG",
      start: "2022-05-16T19:00:00",
      end: "2022-05-16T23:00:00",
      type: "yet",
    },
  ]);
  const calendarRef = React.useRef();
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

  const fetchEventList = () => {
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "GET",
      url: `/schedule`,
    })
      .then((res) => {
        setEventList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            dayCellDidMount={(date) => {
              var newDay = new Date(date.date);
              // console.log(newDay.toISOString().substring(0, 10));
            }}
            events={eventList}
            eventDisplay="block"
            eventContent={renderEventContent}
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
              start: "title selectModal",
              center: "",
              end: "prevWeek nextWeek",
            }}
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
                  fetchEventList();
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
                  calendarRef.current.getApi().prev();
                },
              },
              gotoToday: {
                text: "오늘",
                click: () => {
                  calendarRef.current.getApi().now();
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
              <svg height="5">
                <line
                  x1="0"
                  y1="0"
                  x2="290"
                  y2="0"
                  style={{ stroke: "#475174", strokeWidth: 4 }}
                />
              </svg>
              <span style={{ fontSize: "28px", color: "#000000" }}>
                {" "}
                오늘의 일정{" "}
              </span>
              <svg height="5">
                <line
                  x1="10"
                  y1="0"
                  x2="300"
                  y2="0"
                  style={{ stroke: "#475174", strokeWidth: 4 }}
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
                marginBottom: "10px"
              }}
            >
              {todayEvent.length == 0 ? (
                <div style={{ textAlign: "center", height: "100%" }}>
                  <Typography component={"div"}>
                    오늘 예정된 경기가 없습니다.
                  </Typography>
                </div>
              ) : (
                <div>{/* 오늘 일정 리스트 출력하는 곳 */}</div>
              )}
            </Paper>
            {todayEvent.map(({ id, title, start, end, type }) => {
              if (type === "playing") {
                return (
                  <Box
                    sx={{
                      maxWidth: "900px",
                      height: "48px",
                      fontSize: "16px",
                      margin: "auto",
                      backgroundColor: "#1FC4AA",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      borderRadius: "20px",
                      lineHeight: "48px"
                    }}
                  >
                    <Grid
                      container
                      spacing={0}
                      sx={{ justifyContent: "space-between", height: "auto" }}
                    >
                      <Grid item xs={2}>
                        {start.substring(0, 10).replaceAll("-", ".")}
                      </Grid>
                      <Grid item xs={1}>
                        {start.substring(11, 16)}
                      </Grid>
                      <Grid item xs={7}>
                        {title}
                      </Grid>
                      <Grid item xs={2}>
                        진행 중
                      </Grid>
                    </Grid>
                  </Box>
                );
              } else {
                return (
                  <Box
                    sx={{
                      maxWidth: "900px",
                      margin: "auto",
                      backgroundColor: "#F6F6F6",
                      borderRadius: "20px",
                      height: "48px",
                      fontSize: "16px",
                      lineHeight: "48px"
                    }}
                  >
                    <Grid
                      container
                      spacing={0}
                      sx={{ justifyContent: "space-between", height: "auto" }}
                    >
                      <Grid item xs={2}>
                        {start.substring(0, 10).replaceAll("-", ".")}
                      </Grid>
                      <Grid item xs={1}>
                        {start.substring(11, 16)}
                      </Grid>
                      <Grid item xs={7}>
                        {title}
                      </Grid>
                      <Grid item xs={2}>
                        {type === "playing" ? "진행 중" : ""}
                      </Grid>
                    </Grid>
                  </Box>
                );
              }
            })}
          </Box>
        </CalendarDiv>
      </div>
    </>
  );
};

export default MainPage;
