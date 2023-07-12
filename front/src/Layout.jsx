import {Outlet, Link} from 'react-router-dom'
import Header from './components/Header'
const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <Outlet/>  
        </div>
    )
}

export default Layout