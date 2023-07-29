import "./footer.scss";
import {message} from "./message.svg";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 left">
            <h2>Logo</h2>
          </div>
          <div className="col-lg-5 center">
            <div className="text">
              <h2>About us</h2>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab
              </h4>
            </div>
          </div>
          <div className="col-lg-4 right">
            <h3>Contact us</h3>

            <div className="mobilenumber">
              <div className="up first">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M12.5366 15.38C13.2455 15.8793 13.9887 16.2992 14.7547 16.617C15.2304 16.7895 15.9768 16.301 16.5256 15.9418C16.6628 15.8521 16.7877 15.7704 16.8928 15.7091L16.9274 15.6897C17.4443 15.3994 18.0184 15.077 18.7565 15.2324C19.4197 15.3686 21.695 17.1617 22.3238 17.7972C22.7355 18.2058 22.9641 18.637 22.9984 19.0796C23.067 20.7252 20.8603 22.5751 20.3344 22.8928C19.2139 23.7099 17.7161 23.6986 15.9096 22.8815C13.9773 22.0984 11.6677 20.4528 9.43809 18.4555C8.63997 17.7405 7.10729 16.2351 6.67111 15.7323C4.41867 13.2923 2.52068 10.6708 1.62885 8.54858C1.20581 7.65203 1 6.82358 1 6.08591C1 5.3596 1.20581 4.71272 1.60599 4.15663C1.84609 3.73673 3.77839 1.44429 5.482 1.50104C5.90505 1.54643 6.33953 1.76205 6.76258 2.17061C7.40286 2.79479 9.24369 5.05318 9.38089 5.72275C9.53743 6.44415 9.21284 7.01359 8.92041 7.52661L8.90068 7.56125C8.83477 7.67512 8.74541 7.8102 8.64772 7.95788C8.28784 8.50192 7.81488 9.21689 7.98484 9.6721C8.40903 10.7162 9.01501 11.7376 9.74563 12.6795C10.5565 13.649 11.8277 14.8806 12.5366 15.38Z" stroke="white" stroke-width="2" />
                </svg>
                <h2>Lorem, ipsum.</h2>

              </div>
              <div className="down first">
              <img src={message} alt="" />
                <h2>Lorem, ipsum.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="line">

        </div>
        <div className="texting">
          <h3>Copyright © 2023</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer