import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/docs_list', async () => {
    const data = [
      { name: 'MSW', url: 'https://mswjs.io/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    ]

    return HttpResponse.json(data, { status: 200 })
  }),
]
