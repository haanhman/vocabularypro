export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const SHOW_LANGUAGE_POPUP = 'SHOW_LANGUAGE_POPUP'
export function changeLanguage(code) {
  return {
    type: CHANGE_LANGUAGE,
    code
  }
}

export function languagePopup(visible = true) {
  return {
    type: SHOW_LANGUAGE_POPUP,
    visible
  }
}
