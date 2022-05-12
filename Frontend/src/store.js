import { configureStore } from "@reduxjs/toolkit"
const initialUser = {
  username: "",
  email: "",
  nickname: "AnonymousUser"
}

function reducer(currentState, action) {

  // Store 기본값 설정
  if (currentState === undefined) {
    return {
      user: initialUser,
      isLoggedIn: (localStorage.getItem("token") !== null ? true : false),
      modal: {
        login: false,
        deletePost: false,
        deleteComment: false,
      },
      boardType: "",
    }
  }
  const newState = { ...currentState }


  // store Dispatch 작성
  // case 'dispatch명': 하고 작성하시면 됩니다.
  switch (action.type) {
    case "login":
      newState.user = action.payload
      newState.isLoggedIn = true
      break

    case "logout":
      newState.user = initialUser
      newState.isLoggedIn = false
      break

    case "openLoginModal":
      newState.modal.login = true
      break
    
    case "closeLoginModal":
      newState.modal.login = false
      break
    
    case "openPostDeleteModal":
      newState.modal.deletePost = true
      break
    
    case "closePostDeleteModal":
      newState.modal.deletePost = false
      break

    case "openCommentDeleteModal":
      newState.modal.deleteComment = true
      break
    
    case "closeCommentDeleteModal":
      newState.modal.deleteComment = false
      break

    // case "noticeType":
    //   newState.boardType = "notice";
    //   break;

    case "freeBoardType":
      newState.boardType = "freeBoard";
      break;

    case "battleBoardType":
      newState.boardType = "battleBoard";
      break;

    default:
      break
  }

  // newState 출력
  return newState
}

const store = configureStore({reducer: reducer})
export default store