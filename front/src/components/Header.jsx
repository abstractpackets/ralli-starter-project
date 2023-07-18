import {Link} from 'react-router-dom'
const Header = ({id}) => {
    return (
        <header>
            <h1>CompanyLogo</h1>
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>

                    <Link to={`/profile/${id}`}><li>Profile</li></Link>
                   
                    <Link to="/signup"><li>Signup</li></Link>
                    <Link to="/signin"><li>Signin</li></Link>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header