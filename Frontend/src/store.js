import { configureStore } from "@reduxjs/toolkit";
const initialUser = {
  username: "",
  email: "",
  nickname: "AnonymousUser",
};

function reducer(currentState, action) {
  // Store 기본값 설정
  if (currentState === undefined) {
    return {
      user: initialUser,
      isLoggedIn: localStorage.getItem("token") !== null ? true : false,
      modal: {
        login: false,
        deletePost: false,
        deleteComment: false,
      },
      boardType: "freeBoard",
    };
  }
  const newState = { ...currentState }
  const newModal = { ...currentState.modal }


  // store Dispatch 작성
  // case 'dispatch명': 하고 작성하시면 됩니다.
  switch (action.type) {
    case "login":
      newState.user = action.payload;
      newState.isLoggedIn = true;
      break;

    case "logout":
      newState.user = initialUser;
      newState.isLoggedIn = false;
      break;

    case "openLoginModal":
      newModal.login = true
      newState.modal = newModal
      break
      
    case "closeLoginModal":
      newModal.login = false
      newState.modal.login = false
      break
    
    case "openPostDeleteModal":
      newModal.deletePost = true
      newState.modal = newModal
      break
      
    case "closePostDeleteModal":
      newModal.deletePost = false
      newState.modal = newModal
      break
      
    case "openCommentDeleteModal":
      newModal.deleteComment = true
      newState.modal = newModal
      break
    
    case "closeCommentDeleteModal":
      newModal.deleteComment = false
      newState.modal = newModal
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
      break;
  }

  // newState 출력
  return newState;
}

const store = configureStore({ reducer: reducer });
export default store;
