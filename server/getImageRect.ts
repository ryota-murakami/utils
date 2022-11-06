export function getImageRect(
  url: string
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.addEventListener('load', () => {
      resolve({ height: img.naturalHeight, width: img.naturalWidth })
    })

    img.addEventListener('error', reject)

    img.src = url
  })
}
