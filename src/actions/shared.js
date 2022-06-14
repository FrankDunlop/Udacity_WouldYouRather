import { getInitialData } from "../utils/api"
import { receiveQuestions } from "../actions/questions"
import { receiveUsers } from "../actions/users"
import { setAuthedUser } from "../actions/authedUser"
import { showLoading, hideLoading } from "react-redux-loading"

//redux thunk pattern to make async request inside handleInitialData function
//getInitialData returns promise that will pass an object with users and questions property
//add users and questions to the redux store
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
        .then(({ users, questions }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(null))
            dispatch(hideLoading())
    });
  };
}