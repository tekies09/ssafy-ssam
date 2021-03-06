import { configureStore } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

const defaultUser = {
  sub: "AnonymousUser",
  userid: 0,
  username: "AnonymousUser",
  email: "noreply@notemail.com",
  nickname: "AnonymousUser",
  exp: 0,
  iat: 0,
  role: "GUEST",
};

function getUserfromToken() {
  const token = localStorage.getItem("token");
  if (token === null) {
    return defaultUser;
  }

  const user = jwt_decode(token);

  // 토큰 만료
  if (user.exp * 1000 < Date.now()) {
    console.log("token expired");
    return defaultUser;
  }

  return user;
}

function reducer(currentState, action) {
  // Store 기본값 설정
  if (currentState === undefined) {
    return {
      user: getUserfromToken(),
      isLoggedIn: localStorage.getItem("token") !== null ? true : false,
      modal: {
        login: false,
        deletePost: false,
        deleteComment: false,
      },
      boardType: "freeBoard",
      myPlayers: {},
      yourPlayers: {},
      myTeamToServe: [],
      yourTeamToServe: [],
    };
  }
  const newState = { ...currentState };
  const newModal = { ...currentState.modal };
  const newUser = { ...currentState.user };

  // store Dispatch 작성
  // case 'dispatch명': 하고 작성하시면 됩니다.
  switch (action.type) {
    case "login":
      newState.user = action.payload;
      newState.isLoggedIn = true;
      break;

    case "logout":
      newState.user = defaultUser;
      newState.isLoggedIn = false;
      break;

    case "changeNickname":
      newUser.nickname = action.payload;
      newState.user = newUser;
      break;

    case "openLoginModal":
      newModal.login = true;
      newState.modal = newModal;
      break;

    case "closeLoginModal":
      newModal.login = false;
      newState.modal = newModal;
      break;

    case "openPostDeleteModal":
      newModal.deletePost = true;
      newState.modal = newModal;
      break;

    case "closePostDeleteModal":
      newModal.deletePost = false;
      newState.modal = newModal;
      break;

    case "openCommentDeleteModal":
      newModal.deleteComment = true;
      newState.modal = newModal;
      break;

    case "closeCommentDeleteModal":
      newModal.deleteComment = false;
      newState.modal = newModal;
      break;

    case "noticeType":
      newState.boardType = "notice";
      break;

    case "freeBoardType":
      newState.boardType = "freeBoard";
      break;

    case "battleBoardType":
      newState.boardType = "battleBoard";
      break;

    case "myPlayers":
      newState.myPlayers = action.payload;
      break;

    case "yourPlayers":
      newState.yourPlayers = action.payload;
      break;

    case "myTeamToServe":
      newState.myTeamToServe = action.payload;
      break;

    case "yourTeamToServe":
      newState.yourTeamToServe = action.payload;
      break;

    default:
      break;
  }

  // newState 출력
  return newState;
}

const store = configureStore({ reducer: reducer });
export default store;
