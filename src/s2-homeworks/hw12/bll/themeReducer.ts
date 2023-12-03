import {Dispatch} from "redux";

const initState = {
    themeId: 1,
}

export type themeType = {
    themeId: number
}

export type ActionType = {
    type: 'SET_THEME_ID'
    id: number
}

export const themeReducer = (state = initState, action: ActionType): themeType => { // fix any
    console.log(state)
    switch (action.type) {
        case "SET_THEME_ID":
            return {
                ...state,
                'themeId': action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID' as const, id}) // fix any