import logo404 from '../../../src/assets/404.png';
import './error.scss';

const Error = () => {
  return (
    <div className='error_container'>
      <img src={logo404} alt="404" />
      <h1>Səhifə tapılmadı</h1>
    </div>
  )
}

export default Error