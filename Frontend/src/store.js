import { configureStore } from "@reduxjs/toolkit"

function reducer(currentState, action) {

  // Store 기본값 설정
  if (currentState === undefined) {
    return {
      user: {
        isLoggedIn: false,
        nickname: 'AnonymousUser'
      }
    }
  }
  const newState = { ...currentState }


  // store Dispatch 작성
  // case 'dispatch명': 하고 작성하시면 됩니다.
  switch (action.type) {
    case 'login':
      newState.user = action.payload
      
    
  }





  // newState 출력
  return newState
}

const store = configureStore({reducer: reducer})
export default store