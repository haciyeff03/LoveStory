import './signup.scss';
import bgimg from '../../../src/assets/login_bg.jpeg';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { signupStore } from '../../../store/store';
import { useSnapshot } from 'valtio';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [hidden1, setHidden1] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const snap = useSnapshot(signupStore);
  const navigate = useNavigate();
  const [validation, setValidation] = useState({
    name: '',
    surname: '',
    email: '',
    tel: '',
    password: '',
    pwagain: ''
  });


  const [error, setError] = useState(false);
  const [click, setClick] = useState(false);
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const numRegex = /^\d+$/;
  useEffect(() => {
    let errmsg1 = '';
    let errmsg2 = '';
    let errmsg3 = '';
    let errmsg4 = '';
    let errmsg5 = '';
    let errmsg6 = '';
    let err = false;
    if (snap.name.trim().length === 0) {
      errmsg1 = 'Boşluğu doldurun';
      err = true;
    } else {
      errmsg1 = '';
    }

    if (snap.surname.trim().length === 0) {
      errmsg2 = 'Boşluğu doldurun';
      err = true;
    } else {
      errmsg2 = '';
    }

    if (snap.email.trim().length === 0) {
      errmsg3 = 'Boşluğu doldurun';
      err = true;
    }
    else if (!snap.email.match(emailRegex)) {
      errmsg3 = 'Düzgün email daxil edin';
      err = true;
    }
    else {
      errmsg3 = '';
    }

    if (snap.tel.trim().length === 0) {
      errmsg4 = 'Boşluğu doldurun';
      err = true;
    }
    else if (!snap.tel.match(numRegex)) {
      errmsg4 = 'Düzgün telefon nömrəsi daxil edin';
      err = true;
    }
    else {
      errmsg4 = '';
    }


    if (snap.password.trim().length === 0) {
      errmsg5 = 'Boşluğu doldurun';
      err = true;
    }
    else if (snap.password.length < 6) {
      errmsg5 = 'Şifrə ən az 6 simvoldan ibarət olmalıdır';
      err = true;
    }
    else {
      errmsg5 = '';
    }

    if (snap.pwagain.trim().length === 0) {
      errmsg6 = 'Boşluğu doldurun';
      err = true;
    }
    else if (snap.pwagain !== snap.password) {
      errmsg6 = 'Şifrələr eyni olmalıdır';
      err = true
    }
    else {
      errmsg6 = '';
    }

    setError(err);
    setValidation({ ...validation, name: errmsg1, surname: errmsg2, email: errmsg3, tel: errmsg4, password: errmsg5, pwagain: errmsg6 })
  }, [snap])


  const handleSubmit = (e) => {
    e.preventDefault();
    setClick(true)

    if (!error) {
      navigate('/signup/2')
    }
  }


  return (
    <div className="signup_page">
      <div className="signup_page_container">
        <div className="bg_image">
          <img src={bgimg} alt="" />
          <div className="overlay"></div>
        </div>

        <div className="register_container">
          <h2>Qeydiyyat</h2>
          <div className="bottom_shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="235" height="2" viewBox="0 0 235 2" fill="none">
              <path d="M1 1H233.175" stroke="url(#paint0_linear_290_6152)" stroke-width="2" stroke-linecap="round" />
              <defs>
                <linearGradient id="paint0_linear_290_6152" x1="-12.9615" y1="1.50328" x2="233.175" y2="1.50285" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#F3EFE0" />
                  <stop offset="0.492608" />
                  <stop offset="0.492708" stop-color="#232220" />
                  <stop offset="0.711458" stop-color="#7D7B73" />
                  <stop offset="1" stop-color="#F3EFE0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="socials">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <g clip-path="url(#clip0_599_6350)">
                <path d="M32.5 16C32.5 7.1635 25.3365 0 16.5 0C7.6635 0 0.5 7.16337 0.5 16C0.5 23.986 6.351 30.6054 14 31.8056V20.625H9.9375V16H14V12.475C14 8.465 16.3888 6.25 20.0434 6.25C21.794 6.25 23.625 6.5625 23.625 6.5625V10.5H21.6075C19.6198 10.5 19 11.7334 19 12.9987V16H23.4375L22.7281 20.625H19V31.8056C26.649 30.6054 32.5 23.9861 32.5 16Z" fill="#1877F2" />
                <path d="M22.7281 20.625L23.4375 16H19V12.9987C19 11.7332 19.6199 10.5 21.6075 10.5H23.625V6.5625C23.625 6.5625 21.794 6.25 20.0434 6.25C16.3888 6.25 14 8.465 14 12.475V16H9.9375V20.625H14V31.8056C14.827 31.9352 15.6629 32.0002 16.5 32C17.3371 32.0002 18.173 31.9353 19 31.8056V20.625H22.7281Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_599_6350">
                  <rect width="32" height="32" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path d="M11.6477 1.0525C8.45043 2.16167 5.69309 4.26691 3.78071 7.059C1.86833 9.85109 0.901709 13.1829 1.02284 16.5649C1.14396 19.947 2.34645 23.201 4.45367 25.8492C6.56089 28.4973 9.46178 30.3999 12.7302 31.2775C15.38 31.9612 18.1563 31.9913 20.8202 31.365C23.2335 30.8229 25.4647 29.6634 27.2952 28C29.2004 26.2159 30.5833 23.9462 31.2952 21.435C32.0688 18.7041 32.2065 15.8323 31.6977 13.04H16.8177V19.2125H25.4352C25.263 20.197 24.8939 21.1366 24.3501 21.9751C23.8063 22.8136 23.0989 23.5338 22.2702 24.0925C21.2181 24.7888 20.0318 25.2572 18.7877 25.4675C17.5401 25.6995 16.2604 25.6995 15.0127 25.4675C13.7481 25.2063 12.5518 24.6844 11.5002 23.935C9.8106 22.739 8.54192 21.0398 7.87523 19.08C7.19745 17.0835 7.19745 14.919 7.87523 12.9225C8.3498 11.523 9.13431 10.2488 10.1702 9.19499C11.3557 7.96686 12.8566 7.08899 14.5081 6.65769C16.1597 6.22638 17.8981 6.25832 19.5327 6.75C20.8097 7.1418 21.9775 7.82669 22.9427 8.75C23.9144 7.78333 24.8844 6.81416 25.8527 5.8425C26.3527 5.32 26.8977 4.82249 27.3902 4.2875C25.9166 2.91629 24.1869 1.84926 22.3002 1.1475C18.8645 -0.10003 15.1052 -0.133556 11.6477 1.0525Z" fill="white" />
              <path d="M11.6474 1.05249C15.1046 -0.134368 18.8639 -0.101725 22.2999 1.14499C24.1869 1.85152 25.9158 2.92369 27.3874 4.29999C26.8874 4.83499 26.3599 5.33499 25.8499 5.85499C24.8799 6.82332 23.9108 7.78832 22.9424 8.74999C21.9772 7.82668 20.8094 7.1418 19.5324 6.74999C17.8984 6.25659 16.16 6.22281 14.508 6.65235C12.856 7.08188 11.3542 7.95814 10.1674 9.18499C9.13153 10.2388 8.34701 11.513 7.87244 12.9125L2.68994 8.89999C4.54496 5.22139 7.75681 2.40755 11.6474 1.05249Z" fill="#E33629" />
              <path d="M1.31488 12.875C1.59322 11.4945 2.05569 10.1575 2.68988 8.90002L7.87238 12.9225C7.1946 14.9191 7.1946 17.0835 7.87238 19.08C6.14571 20.4134 4.41821 21.7534 2.68988 23.1C1.10275 19.9408 0.618707 16.3413 1.31488 12.875Z" fill="#F8BD00" />
              <path d="M16.8175 13.0375H31.6975C32.2062 15.8298 32.0686 18.7016 31.295 21.4325C30.5831 23.9437 29.2002 26.2133 27.295 27.9975C25.6225 26.6925 23.9425 25.3975 22.27 24.0925C23.0992 23.5332 23.8069 22.8122 24.3508 21.9728C24.8946 21.1334 25.2634 20.1928 25.435 19.2075H16.8175C16.815 17.1525 16.8175 15.095 16.8175 13.0375Z" fill="#587DBD" />
              <path d="M2.6875 23.1C4.41583 21.7666 6.14333 20.4266 7.87 19.08C8.53802 21.0405 9.80851 22.7397 11.5 23.935C12.5549 24.6809 13.7537 25.1986 15.02 25.455C16.2676 25.687 17.5474 25.687 18.795 25.455C20.0391 25.2447 21.2253 24.7763 22.2775 24.08C23.95 25.385 25.63 26.68 27.3025 27.985C25.4722 29.6493 23.241 30.8097 20.8275 31.3525C18.1635 31.9787 15.3873 31.9487 12.7375 31.265C10.6418 30.7054 8.68419 29.7189 6.9875 28.3675C5.19182 26.9415 3.72509 25.1448 2.6875 23.1Z" fill="#319F43" />
            </svg>
          </div>

          <div className="email_option">
            <span>və ya e-mail vasitəsilə</span>
            <div className="linee"></div>
          </div>


          {/* REGISTER FORM */}

          <form>
            <div className="fullname">
              <div className="name">
                <label>Ad</label>
                <input type="text" onChange={(e) => { signupStore.name = e.target.value }} value={snap.name} />
                <h6 className='validation_error'>{click && validation.name}</h6>
              </div>

              <div className="surname">
                <label>Soyad</label>
                <input type="text" onChange={(e) => { signupStore.surname = e.target.value }} value={snap.surname} />
                <h6 className='validation_error'>{click && validation.surname}</h6>
              </div>
            </div>

            <label>Email</label>
            <input type="email" onChange={(e) => signupStore.email = e.target.value} placeholder='example@gmail.com' value={snap.email} />
            <h6 className='validation_error'>{click && validation.email}</h6>

            <div className="tel_number">
              <label>Mobil nömrə</label>
              <input type="text" className='tel_input' placeholder='0501234567' onChange={(e) => signupStore.tel = e.target.value} value={snap.tel} />
              <h6 className='validation_error'>{click && validation.tel}</h6>
              <div className="number_prefix">
                <span>+994</span>
              </div>
            </div>
            <div className="passwords">
              <div className="psw">
                <label>Şifrə</label>
                <input type={hidden1 ? 'password' : 'text'} onChange={(e) => signupStore.password = e.target.value} value={snap.password} />
                <div onClick={() => setHidden1((prev) => !prev)} className="eye_icons">
                  {
                    hidden1 ? <FaEyeSlash /> : <FaEye />
                  }
                </div>
                <h6 className='validation_error'>{click && validation.password}</h6>
              </div>

              <div className="psw_again">
                <label>Şifrə təkrar</label>
                <input type={hidden2 ? 'password' : 'text'} onChange={(e) => signupStore.pwagain = e.target.value} value={snap.pwagain} />
                <div onClick={() => setHidden2((prev) => !prev)} className="eye_icons">
                  {
                    hidden2 ? <FaEyeSlash /> : <FaEye />
                  }
                </div>
                <h6 className='validation_error'>{click && validation.pwagain}</h6>
              </div>
            </div>

            <div className="btn_container" onClick={handleSubmit}>
              <button>İrəli

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28" fill="none">
                  <path d="M2 2L14 14L2 26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>

            </div>

          </form>

          <h6 className='login_link'><Link to='/login'>Daxil ol</Link></h6>
        </div>
      </div>
    </div>
  )
}

export default Signup