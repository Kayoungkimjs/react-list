import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Gnb } from './components/GNB/gnb'
import { List } from './pages/List/list'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gnb />}>
          <Route index element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
