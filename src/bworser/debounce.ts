/**
 * @param {number} timeout
 * @param {(event: Event) => void} callback
 * @return {(event: Event) => void}
 */
function debounce(
  timeout: number,
  callback: (event: Event) => void
): (event: Event) => void {
  let timeoutID = 0
  return (event) => {
    clearTimeout(timeoutID)
    timeoutID = window.setTimeout(() => callback(event), timeout)
  }
}
