import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_QUESTION_VOTE } from "../actions/questions"

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      return {
         ...state,
         [action.question.Id]: action.question
      }
      case ADD_QUESTION_VOTE :
        return {
          ...state,
          [action.questionId]: {
            ...state[action.questionId],         
             [action.answer]: {
               ...state[action.questionId][action.answer],
               votes: state[action.questionId][action.answer].votes.concat([action.user])
             }
          }
        }
    default :
      return state
  }
}