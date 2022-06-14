import { saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from "react-redux-loading"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_VOTE = 'ADD_QUESTION_VOTE'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(optionOneText, optionTwoText)
{
  return (dispatch, getState) => {
    const {authedUser} = getState()

    dispatch(showLoading())

    return saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText
    })
    .then((question) => dispatch(addQuestion(question)))
    .then(() => dispatch(hideLoading()))
  }
}

export function addQuestionVote(user, questionId, answer) {
  return {
    type: ADD_QUESTION_VOTE,
    user,
    questionId,
    answer
  }
}