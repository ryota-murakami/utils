import classed from 'classed-components'
const Header = classed.header('w-full min-h-[150px] grid place-content-center')

const H1 = classed.h1('text-5xl font-bold subpixel-antialiased')
const H2 = classed.h2('text-4xl font-semibold subpixel-antialiased')
const H3 = classed.h3('text-3xl font-semibold subpixel-antialiased')
export default Object.assign(Header, { H1, H2, H3 })
