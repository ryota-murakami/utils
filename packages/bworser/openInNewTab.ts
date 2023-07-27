export function openInNewTab(url: string) {
  const anchor = document.createElement('a')
  anchor.target = '_blank'
  anchor.href = url
  anchor.click()
}
