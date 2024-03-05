import { Link, Outlet } from 'react-router-dom'
import { GnbContainer } from './gnb.styles'

export const Gnb = () => {
  return (
    <>
      <GnbContainer>
        <ul>
          <li>
            <Link to="/">List</Link>
          </li>
          <li>
            <a href="/table">Table</a>
          </li>
        </ul>
      </GnbContainer>
      <Outlet />
    </>
  )
}
