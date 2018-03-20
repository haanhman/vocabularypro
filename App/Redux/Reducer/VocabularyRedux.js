/**
 * Created by man.nv on 1/11/18.
 */

import {CHANGE_LANGUAGE, SHOW_LANGUAGE_POPUP} from '../Actions/VocabularyAction'

const defaultState = {language: "", languagePopupVisible: true};

export const reducer = (state = defaultState, action) => {
  if (action.type == CHANGE_LANGUAGE) {
    return {
      ...state,
      language: action.code
    }
  }

  if (action.type == SHOW_LANGUAGE_POPUP) {
    return {
      ...state,
      languagePopupVisible: action.visible
    }
  }
  return state;
}
