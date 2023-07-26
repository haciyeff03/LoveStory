import { Link } from 'react-router-dom';
import './navbar.scss';
const Navbar = () => {
  return (
    <header>
      <div className="overlay"></div>
      <div className="container">
        <nav>
          <div className="logo">
            <Link to='/'>
              Logo
            </Link>
          </div>
          <div className="actions">
            <Link className='signin' to='/'>
              Giriş
            </Link>
            <Link className='signup' to='/'>
              Qeydiyyat
            </Link>
          </div>

          <div className="burger_menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="23" viewBox="0 0 32 23" fill="none">
              <path d="M2.28577 2.28564H29.7143M2.28577 11.4285H29.7143M2.28577 20.5714H29.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

        </nav>

        <div className="header_content">
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
          <Link to='/'>Fotoqraf olaraq daxil ol</Link>
        </div>
      </div>

      <div className="mobile_menu">
        
      </div>
    </header>
  )
}

export default Navbar