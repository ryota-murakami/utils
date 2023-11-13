import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes as RouteList, Route } from 'react-router-dom'
import './index.css'

import { Loading } from './components/Loading'
import NotFound from './pages/NotFound'

const Index = lazy(async () => import('./pages/index'))
const Workflow = lazy(async () => import('./pages/Workflow'))

const ReactHookForm = lazy(async () => import('./pages/ReactHookForm'))

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <RouteList>
          <Route path="/" element={<Index />} />
          <Route path="workflow" element={<Workflow />} />
          <Route path="/react-hook-form" element={<ReactHookForm />} />
          <Route path="*" element={<NotFound />} />
        </RouteList>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
