import logo from './icons/mcdonald-logo.svg';
import flag from './icons/flag.svg'
import './header.css'

function Header(){
    return <div className="container">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="flag-div">
                <img src={flag} className="Flag" alt="flag" />
            </div>
        </header>
    </div>
}

export default Header;