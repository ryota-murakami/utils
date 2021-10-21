export function getImageRect(
  url: string
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.addEventListener('load', () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight })
    })

    img.addEventListener('error', reject)

    img.src = url
  })
}
