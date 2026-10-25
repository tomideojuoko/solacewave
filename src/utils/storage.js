// localStorage can be blocked (private browsing, strict privacy settings,
// embedded previews). Reading or writing it then throws, so wrap it.
export function getItem(key) {
  try { return window.localStorage.getItem(key) } catch { return null }
}

export function setItem(key, value) {
  try { window.localStorage.setItem(key, value) } catch { /* ignore */ }
}
