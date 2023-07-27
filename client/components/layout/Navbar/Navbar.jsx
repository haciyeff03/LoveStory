import { Link } from 'react-router-dom';
import './navbar.scss';
import { useState } from 'react';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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
            <Link className='signin' to='/login'>
              Giriş
            </Link>
            <Link className='signup' to='/signup'>
              Qeydiyyat
            </Link>
          </div>

          <div className="burger_menu" onClick={() => setToggleMenu(true)}>
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

      <div className="mobile_menu" style={{ transform: toggleMenu ? 'translateY(0)' : 'translateY(-101%)' }}>
        <div className="container">
          <div className="close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" onClick={() => setToggleMenu(false)}>
              <path d="M1 16C1 19.2712 1.17658 21.8316 1.62331 23.8417C2.06751 25.8404 2.7654 27.2332 3.76611 28.2339C4.76681 29.2346 6.15959 29.9325 8.15832 30.3767C10.1684 30.8234 12.7288 31 16 31C19.2712 31 21.8316 30.8234 23.8417 30.3767C25.8404 29.9325 27.2332 29.2346 28.2339 28.2339C29.2346 27.2332 29.9325 25.8404 30.3767 23.8417C30.8234 21.8316 31 19.2712 31 16C31 12.7288 30.8234 10.1684 30.3767 8.15832C29.9325 6.15959 29.2346 4.76681 28.2339 3.76611C27.2332 2.7654 25.8404 2.06751 23.8417 1.62331C21.8316 1.17658 19.2712 1 16 1C12.7288 1 10.1684 1.17658 8.15832 1.62331C6.15959 2.06751 4.76681 2.7654 3.76611 3.76611C2.7654 4.76681 2.06751 6.15959 1.62331 8.15832C1.17658 10.1684 1 12.7288 1 16Z" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20 12L16 16M16 16L12 20M16 16L20 20M16 16L12 12" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div className="menu_links">
          <Link to='/login'>
            Giriş
          </Link>
          <Link to='/signup'>
            Qeydiyyat
          </Link>
        </div>
      </div>
    </header >
  )
}

export default Navbar