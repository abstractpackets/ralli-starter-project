import {Outlet, Link} from 'react-router-dom'
import Header from './components/Header'
const Layout = ({id}) => {


    return (
        <div className="layout">
            <Header id={id}/> 
            
            <Outlet id={id} />  
            <div className="footer">
                Footer! Copyright 2023!
            </div>
        </div>
    )
}

export default Layout