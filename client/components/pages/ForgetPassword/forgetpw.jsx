import './forgetpw.scss';
import bgimg from '../../../src/assets/login_bg.jpeg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginStore } from '../../../store/store';
import { useSnapshot } from 'valtio';
const ForgetPassword = () => {

    const [validation, setValidation] = useState({ email: '' });

    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [click, setClick] = useState(false);
    const [email, setEmail] = useState('');
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    useEffect(() => {
        let errmsg = '';
        let err = false;

        if (email.trim().length === 0) {
            errmsg = 'Boşluğu doldurun';
            err = true;
        }

        else if (!email.match(emailRegex)) {
            errmsg = 'Düzgün email daxil edin';
            err = true;
        }
        else {
            errmsg = '';
        }

        setError(err);
        setValidation({ ...validation, email: errmsg })
    }, [email])


    const handleSubmit = (e) => {
        e.preventDefault();
        setClick(true)

        if (!error) {
            console.log(email)
        }
    }


    return (
        <div className="forgetpw_page">
            <div className="login_page_container">
                <div className="forgetpw_form_container">
                    <div className="forget_pw_container">
                        <h2>Şifrəni unutmusan ?</h2>
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

                        <p className="forgetpw_description">
                            Qeydiyyatdan keçdiyiniz emaili daxil edərək
                            sizə göndərilən linkdən şifrəni yeniləyə bilərsiniz
                        </p>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                            <h6 className='validation_error'>{click && validation.email}</h6>

                            <div className="btn_cont">
                                <button type='submit'>Göndər</button>
                            </div>
                        </form>
                    </div>

                </div>


                <div className="bg_image">
                    <img src={bgimg} alt="wedding" />
                    <div className="overlay"></div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword