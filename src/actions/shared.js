import { getInitialData } from "../utils/api"
import { receiveQuestions } from "../actions/questions"
import { receiveUsers } from "../actions/users"
import { setAuthedUser } from "../actions/authedUser"

const AUTHED_ID = 'fdunlop'

//redux thunk pattern to make async request inside handleInitialData function
//getInitialData returns promise that will pass an object with users and questions property
//add users and questions to the redux store
export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
        .then(({ users, questions }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
    });
  };
}