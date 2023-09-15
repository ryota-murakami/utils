export async function getImageRect(
  url: string,
): Promise<{ height: number; width: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.addEventListener('load', () => {
      resolve({ height: img.naturalHeight, width: img.naturalWidth })
    })

    img.addEventListener('error', reject)

    img.src = url
  })
}
