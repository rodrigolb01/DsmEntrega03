import { ActionType } from '../actionTypes'

export const SetList = (payload : []) => ({type: ActionType.SET_LIST, payload})
export const SetKeyword = (payload : string) => ({type: ActionType.SET_KEYWORD, payload});