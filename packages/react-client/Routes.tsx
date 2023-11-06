import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes as RouteList, Route } from 'react-router-dom'
import './index.css'

import { Loading } from './components/Loading'
import Index from './pages'
import NotFound from './pages/NotFound'

const Demo = lazy(async () => import('./pages/index'))

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <RouteList>
          <Route path="/" element={<Index />} />
          <Route path="/demo" element={<Demo />} />

          <Route path="*" element={<NotFound />} />
        </RouteList>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
