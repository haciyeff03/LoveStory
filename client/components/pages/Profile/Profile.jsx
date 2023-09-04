import { Link } from 'react-router-dom';
import './profile.scss';
import { useState } from 'react';
import ModalcardComponent from '../../ModalCards/ModalcardComponent';
const Profile = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="profile_page">
        <div className="profile_page_container">
          <h1><Link to='/'>Logo</Link></h1>
          <div className="profile_header">
            <div className="container">
              <div className="row align-items-center g-5">
                <div className="col-lg-3">
                  <div className="profile_image">
                    <img src="/src/assets/pp.jpeg" alt="" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="profile_content">
                    <div className="profile_name">
                      <h3>Lorem Ipsum</h3>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="38" viewBox="0 0 32 38" fill="none">
                        <path d="M31.8294 30.8018L28.0459 22.6883V22.6879C28.4683 22.2087 28.7036 21.593 28.7088 20.954V18.8023C28.7088 18.6457 28.7497 18.4923 28.8284 18.3572L29.9046 16.4929C30.1391 16.0867 30.2623 15.6265 30.2623 15.1575C30.2623 14.6886 30.1391 14.2284 29.9046 13.8222L28.8284 11.9579C28.7501 11.8227 28.7088 11.6693 28.7088 11.5128V9.36112C28.7092 8.89215 28.586 8.43114 28.3515 8.02495C28.117 7.61878 27.78 7.28136 27.3734 7.04648L25.5103 5.97026C25.3748 5.89276 25.2623 5.78029 25.1844 5.64437L24.1082 3.78128C23.8737 3.3751 23.5363 3.03769 23.1301 2.8032C22.7236 2.56872 22.2625 2.44552 21.7935 2.44592H19.6439C19.4873 2.44592 19.3339 2.40498 19.1987 2.32669L17.3344 1.25209C16.9282 1.01761 16.468 0.894409 15.9991 0.894409C15.5301 0.894409 15.0699 1.01761 14.6637 1.25209L12.8006 2.32832C12.6651 2.40661 12.5117 2.44794 12.3555 2.44794H10.2026C9.73367 2.44755 9.27266 2.57074 8.86647 2.80523C8.46029 3.03971 8.12288 3.37673 7.888 3.7833L6.81178 5.64639C6.73428 5.78191 6.6218 5.89439 6.48589 5.97228L4.62279 7.0485C4.21662 7.28299 3.87921 7.6204 3.64472 8.02658C3.41024 8.43315 3.28704 8.89416 3.28744 9.36316V11.5148C3.28744 11.671 3.2465 11.8244 3.16821 11.9599L2.09361 13.8223C1.6167 14.6485 1.6167 15.6668 2.09361 16.493L3.10229 18.2389C3.22469 18.4515 3.28907 18.6924 3.28947 18.9376V20.9541C3.29464 21.5928 3.53031 22.2088 3.95238 22.6881L0.168813 30.8016V30.802C-0.0148001 31.193 -0.0501655 31.6381 0.0702508 32.0535C0.190275 32.4692 0.457743 32.8265 0.822182 33.0594C1.18662 33.2919 1.6234 33.3841 2.05102 33.3185L6.16555 32.6902L8.32959 36.2511C8.6527 36.7817 9.22897 37.1056 9.85012 37.1056H9.94908C10.2702 37.0873 10.5806 36.9828 10.8473 36.8023C11.1139 36.6219 11.3262 36.3727 11.4625 36.081L14.719 29.097C15.5135 29.5433 16.4832 29.5433 17.2776 29.097L20.5394 36.0694C20.6749 36.3615 20.8871 36.6111 21.1538 36.7919C21.4205 36.9724 21.7313 37.0773 22.0528 37.0948H22.1517C22.7729 37.0948 23.3492 36.7709 23.6723 36.2403L25.8363 32.6794L29.9508 33.3077C30.3777 33.3729 30.8137 33.2807 31.1777 33.0482C31.5418 32.8161 31.8088 32.4592 31.9293 32.0447C32.0497 31.6301 32.0155 31.1858 31.8331 30.7948L31.8294 30.8018ZM9.8512 35.317L7.68716 31.7561H7.68676C7.50355 31.456 7.23568 31.2172 6.91695 31.0685C6.59861 30.9203 6.2433 30.869 5.89556 30.9219L1.78174 31.545L5.43172 23.7224L6.48933 24.3341C6.62524 24.412 6.73772 24.5244 6.81521 24.66L7.89144 26.523C8.12592 26.9292 8.46334 27.2666 8.8699 27.5011C9.27608 27.7356 9.73709 27.8588 10.2061 27.8584H12.3589C12.5151 27.8584 12.6685 27.8997 12.804 27.9776L13.1725 28.1903L9.8512 35.317ZM15.999 27.6403C15.8428 27.6399 15.6894 27.599 15.5539 27.5211L13.6896 26.4449C13.2834 26.2112 12.8232 26.0884 12.3542 26.0888H10.2026C9.88468 26.0888 9.59098 25.9191 9.43201 25.6436L8.35579 23.7806H8.35539C8.1217 23.3732 7.78349 23.035 7.37612 22.8013L5.51303 21.7251V21.7247C5.23762 21.5657 5.06791 21.272 5.06791 20.9541V18.9375C5.06752 18.3799 4.92087 17.8319 4.64227 17.3486L3.63559 15.6028C3.47661 15.3273 3.47661 14.9879 3.63559 14.7125L4.71181 12.8482C4.9455 12.442 5.0683 11.9818 5.0679 11.5128V9.36121C5.0679 9.04327 5.23761 8.74957 5.51302 8.5906L7.37612 7.51438V7.51398C7.78348 7.27989 8.12129 6.94208 8.35538 6.53472L9.4316 4.67163H9.432C9.59097 4.39621 9.88467 4.22651 10.2026 4.22651H12.3555C12.824 4.2269 13.2842 4.1041 13.6908 3.87041L15.5539 2.79419C15.8293 2.63522 16.1687 2.63522 16.4442 2.79419L18.3085 3.87041C18.7146 4.1041 19.1749 4.2269 19.6438 4.22651H21.7955C22.1134 4.22651 22.4071 4.39621 22.5661 4.67163L23.6423 6.53472H23.6427C23.8768 6.94208 24.2146 7.27989 24.6219 7.51398L26.485 8.5902V8.5906C26.7605 8.74957 26.9302 9.04327 26.9302 9.36121V11.5128C26.9298 11.9818 27.0526 12.442 27.2863 12.8482L28.3625 14.7125C28.5214 14.9879 28.5214 15.3273 28.3625 15.6028L27.2863 17.4658C27.0526 17.8724 26.9298 18.3326 26.9302 18.8012V20.9528C26.9302 21.2712 26.7605 21.5649 26.485 21.7238L24.6219 22.8001C24.2146 23.0342 23.8764 23.372 23.6427 23.7793L22.5665 25.6424L22.5661 25.6428C22.4071 25.9182 22.1134 26.0879 21.7955 26.0879H19.6438C19.1749 26.0871 18.7146 26.2099 18.3085 26.444L16.4442 27.5211C16.3086 27.599 16.1552 27.6399 15.999 27.6403ZM26.1025 30.9263C25.7547 30.873 25.3994 30.9235 25.0803 31.0721C24.7616 31.2208 24.4941 31.46 24.3113 31.7605L22.148 35.3214L18.8291 28.1995L19.1987 27.9869C19.3339 27.9086 19.4873 27.8673 19.6439 27.8673H21.7955C22.2645 27.8677 22.7255 27.7445 23.1317 27.51C23.5378 27.2755 23.8752 26.9385 24.1101 26.5319L25.1863 24.6688C25.2638 24.5333 25.3763 24.4208 25.5122 24.3429L26.5698 23.7313L30.2198 31.5539L26.1025 30.9263ZM21.5114 13.1164L15.3064 19.3222C14.959 19.6696 14.3955 19.6696 14.0477 19.3222L10.4868 15.7613C10.1494 15.4119 10.1541 14.8567 10.4975 14.5133C10.8409 14.1699 11.3961 14.1648 11.7455 14.5022L14.6769 17.4336L20.2524 11.8572H20.2528C20.6021 11.5198 21.1573 11.525 21.5008 11.8683C21.8442 12.2117 21.8489 12.7669 21.5115 13.1163L21.5114 13.1164Z" fill="#222222" />
                      </svg>
                    </div>

                    <div className="position">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M12 18C13.25 18 14.3127 17.5623 15.188 16.687C16.0633 15.8117 16.5007 14.7493 16.5 13.5C16.5 12.25 16.0623 11.1873 15.187 10.312C14.3117 9.43667 13.2493 8.99933 12 9C10.75 9 9.68733 9.43766 8.812 10.313C7.93667 11.1883 7.49933 12.2507 7.5 13.5C7.5 14.75 7.93767 15.8127 8.813 16.688C9.68833 17.5633 10.7507 18.0007 12 18ZM12 16C11.3 16 10.7083 15.7583 10.225 15.275C9.74167 14.7917 9.5 14.2 9.5 13.5C9.5 12.8 9.74167 12.2083 10.225 11.725C10.7083 11.2417 11.3 11 12 11C12.7 11 13.2917 11.2417 13.775 11.725C14.2583 12.2083 14.5 12.8 14.5 13.5C14.5 14.2 14.2583 14.7917 13.775 15.275C13.2917 15.7583 12.7 16 12 16ZM4 21.5C3.45 21.5 2.979 21.304 2.587 20.912C2.195 20.52 1.99934 20.0493 2 19.5V7.5C2 6.95 2.196 6.479 2.588 6.087C2.98 5.695 3.45067 5.49933 4 5.5H7.15L9 3.5H15L16.85 5.5H20C20.55 5.5 21.021 5.696 21.413 6.088C21.805 6.48 22.0007 6.95067 22 7.5V19.5C22 20.05 21.804 20.521 21.412 20.913C21.02 21.305 20.5493 21.5007 20 21.5H4ZM20 19.5V7.5H15.95L14.125 5.5H9.875L8.05 7.5H4V19.5H20Z" fill="#7A7A7A" />
                      </svg>
                      <span>Fotoqraf</span>
                    </div>

                    <div className="experience">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M1 12.5C1 14.9477 1.13246 16.8463 1.46153 18.327C1.78807 19.7963 2.29478 20.7921 3.00136 21.4986C3.70794 22.2052 4.70365 22.7119 6.17298 23.0385C7.65366 23.3675 9.55232 23.5 12 23.5C14.4477 23.5 16.3463 23.3675 17.827 23.0385C19.2963 22.7119 20.2921 22.2052 20.9986 21.4986C21.7052 20.7921 22.2119 19.7963 22.5385 18.327C22.8675 16.8463 23 14.9477 23 12.5C23 10.0523 22.8675 8.15366 22.5385 6.67298C22.2119 5.20365 21.7052 4.20794 20.9986 3.50136C20.2921 2.79478 19.2963 2.28807 17.827 1.96153C16.3463 1.63246 14.4477 1.5 12 1.5C9.55232 1.5 7.65366 1.63246 6.17298 1.96153C4.70365 2.28807 3.70794 2.79478 3.00136 3.50136C2.29478 4.20794 1.78807 5.20365 1.46153 6.67298C1.13246 8.15366 1 10.0523 1 12.5Z" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 6.5C12 6.5 12 10.5 12 11.5C12 12.5 12 12.5 13 12.5C14 12.5 18 12.5 18 12.5" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>1-3 il</span>
                    </div>

                    <div className="description">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at convallis tortor. Donec vel tellus euismod, vehicula odio vitae, bibendum felis. In hac habitasse platea dictumst. Sed id justo et quam scelerisque lobortis.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="profile_contact">
                    <div className="profile_rate">
                      <svg xmlns="http://www.w3.org/2000/svg" width="160" height="32" viewBox="0 0 160 32" fill="none">
                        <path d="M111.049 2.92705C111.348 2.00574 112.652 2.00574 112.951 2.92705L115.368 10.3647C115.502 10.7768 115.886 11.0557 116.319 11.0557H124.139C125.108 11.0557 125.511 12.2953 124.727 12.8647L118.4 17.4615C118.05 17.7161 117.903 18.1675 118.037 18.5795L120.454 26.0172C120.753 26.9385 119.698 27.7047 118.915 27.1353L112.588 22.5385C112.237 22.2839 111.763 22.2839 111.412 22.5385L105.085 27.1353C104.302 27.7047 103.247 26.9385 103.546 26.0172L105.963 18.5795C106.097 18.1675 105.95 17.7161 105.6 17.4615L99.273 12.8647C98.4893 12.2953 98.8921 11.0557 99.8608 11.0557H107.681C108.114 11.0557 108.498 10.7768 108.632 10.3647L111.049 2.92705Z" fill="#EBB529" />
                        <path d="M143.049 2.92705C143.348 2.00574 144.652 2.00574 144.951 2.92705L147.368 10.3647C147.502 10.7768 147.886 11.0557 148.319 11.0557H156.139C157.108 11.0557 157.511 12.2953 156.727 12.8647L150.4 17.4615C150.05 17.7161 149.903 18.1675 150.037 18.5795L152.454 26.0172C152.753 26.9385 151.698 27.7047 150.915 27.1353L144.588 22.5385C144.237 22.2839 143.763 22.2839 143.412 22.5385L137.085 27.1353C136.302 27.7047 135.247 26.9385 135.546 26.0172L137.963 18.5795C138.097 18.1675 137.95 17.7161 137.6 17.4615L131.273 12.8647C130.489 12.2953 130.892 11.0557 131.861 11.0557H139.681C140.114 11.0557 140.498 10.7768 140.632 10.3647L143.049 2.92705Z" fill="#EBB529" />
                        <path d="M79.0489 2.92705C79.3483 2.00574 80.6517 2.00574 80.9511 2.92705L83.3677 10.3647C83.5016 10.7768 83.8855 11.0557 84.3188 11.0557H92.1392C93.1079 11.0557 93.5107 12.2953 92.727 12.8647L86.4001 17.4615C86.0496 17.7161 85.903 18.1675 86.0369 18.5795L88.4535 26.0172C88.7529 26.9385 87.6984 27.7047 86.9147 27.1353L80.5878 22.5385C80.2373 22.2839 79.7627 22.2839 79.4122 22.5385L73.0853 27.1353C72.3016 27.7047 71.2471 26.9385 71.5465 26.0172L73.9631 18.5795C74.097 18.1675 73.9504 17.7161 73.5999 17.4615L67.273 12.8647C66.4893 12.2953 66.8921 11.0557 67.8608 11.0557H75.6812C76.1145 11.0557 76.4984 10.7768 76.6323 10.3647L79.0489 2.92705Z" fill="#EBB529" />
                        <path d="M47.0489 2.92705C47.3483 2.00574 48.6517 2.00574 48.9511 2.92705L51.3677 10.3647C51.5016 10.7768 51.8855 11.0557 52.3188 11.0557H60.1392C61.1079 11.0557 61.5107 12.2953 60.727 12.8647L54.4001 17.4615C54.0496 17.7161 53.903 18.1675 54.0369 18.5795L56.4535 26.0172C56.7529 26.9385 55.6984 27.7047 54.9147 27.1353L48.5878 22.5385C48.2373 22.2839 47.7627 22.2839 47.4122 22.5385L41.0853 27.1353C40.3016 27.7047 39.2471 26.9385 39.5465 26.0172L41.9631 18.5795C42.097 18.1675 41.9504 17.7161 41.5999 17.4615L35.273 12.8647C34.4893 12.2953 34.8921 11.0557 35.8608 11.0557H43.6812C44.1145 11.0557 44.4984 10.7768 44.6323 10.3647L47.0489 2.92705Z" fill="#EBB529" />
                        <path d="M15.0489 2.92705C15.3483 2.00574 16.6517 2.00574 16.9511 2.92705L19.3677 10.3647C19.5016 10.7768 19.8855 11.0557 20.3188 11.0557H28.1392C29.1079 11.0557 29.5107 12.2953 28.727 12.8647L22.4001 17.4615C22.0496 17.7161 21.903 18.1675 22.0369 18.5795L24.4535 26.0172C24.7529 26.9385 23.6984 27.7047 22.9147 27.1353L16.5878 22.5385C16.2373 22.2839 15.7627 22.2839 15.4122 22.5385L9.08533 27.1353C8.30162 27.7047 7.24714 26.9385 7.54649 26.0172L9.96315 18.5795C10.097 18.1675 9.95036 17.7161 9.59987 17.4615L3.27299 12.8647C2.48928 12.2953 2.89206 11.0557 3.86078 11.0557H11.6812C12.1145 11.0557 12.4984 10.7768 12.6323 10.3647L15.0489 2.92705Z" fill="#EBB529" />
                      </svg>
                      <span>5.0</span>
                    </div>

                    <div className="gmail_tel">
                      <h5>loremipsum@gmail.com</h5>
                      <h5>(+994) 258 25 35</h5>
                    </div>

                    <div className="web_link">
                      <Link to='/profile'>linktowebsite</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile_header_mobile">
            <div className="container">
              <div className="row head">
                <div className="col-lg-4 col-md-4 col-sm-5 col-5 first">
                  <div className="profile_image">
                    <img src="/src/assets/pp.jpeg" alt="" />
                  </div>
                  <div className="profile_rate">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="32" viewBox="0 0 160 32" fill="none">
                      <path d="M111.049 2.92705C111.348 2.00574 112.652 2.00574 112.951 2.92705L115.368 10.3647C115.502 10.7768 115.886 11.0557 116.319 11.0557H124.139C125.108 11.0557 125.511 12.2953 124.727 12.8647L118.4 17.4615C118.05 17.7161 117.903 18.1675 118.037 18.5795L120.454 26.0172C120.753 26.9385 119.698 27.7047 118.915 27.1353L112.588 22.5385C112.237 22.2839 111.763 22.2839 111.412 22.5385L105.085 27.1353C104.302 27.7047 103.247 26.9385 103.546 26.0172L105.963 18.5795C106.097 18.1675 105.95 17.7161 105.6 17.4615L99.273 12.8647C98.4893 12.2953 98.8921 11.0557 99.8608 11.0557H107.681C108.114 11.0557 108.498 10.7768 108.632 10.3647L111.049 2.92705Z" fill="#EBB529" />
                      <path d="M143.049 2.92705C143.348 2.00574 144.652 2.00574 144.951 2.92705L147.368 10.3647C147.502 10.7768 147.886 11.0557 148.319 11.0557H156.139C157.108 11.0557 157.511 12.2953 156.727 12.8647L150.4 17.4615C150.05 17.7161 149.903 18.1675 150.037 18.5795L152.454 26.0172C152.753 26.9385 151.698 27.7047 150.915 27.1353L144.588 22.5385C144.237 22.2839 143.763 22.2839 143.412 22.5385L137.085 27.1353C136.302 27.7047 135.247 26.9385 135.546 26.0172L137.963 18.5795C138.097 18.1675 137.95 17.7161 137.6 17.4615L131.273 12.8647C130.489 12.2953 130.892 11.0557 131.861 11.0557H139.681C140.114 11.0557 140.498 10.7768 140.632 10.3647L143.049 2.92705Z" fill="#EBB529" />
                      <path d="M79.0489 2.92705C79.3483 2.00574 80.6517 2.00574 80.9511 2.92705L83.3677 10.3647C83.5016 10.7768 83.8855 11.0557 84.3188 11.0557H92.1392C93.1079 11.0557 93.5107 12.2953 92.727 12.8647L86.4001 17.4615C86.0496 17.7161 85.903 18.1675 86.0369 18.5795L88.4535 26.0172C88.7529 26.9385 87.6984 27.7047 86.9147 27.1353L80.5878 22.5385C80.2373 22.2839 79.7627 22.2839 79.4122 22.5385L73.0853 27.1353C72.3016 27.7047 71.2471 26.9385 71.5465 26.0172L73.9631 18.5795C74.097 18.1675 73.9504 17.7161 73.5999 17.4615L67.273 12.8647C66.4893 12.2953 66.8921 11.0557 67.8608 11.0557H75.6812C76.1145 11.0557 76.4984 10.7768 76.6323 10.3647L79.0489 2.92705Z" fill="#EBB529" />
                      <path d="M47.0489 2.92705C47.3483 2.00574 48.6517 2.00574 48.9511 2.92705L51.3677 10.3647C51.5016 10.7768 51.8855 11.0557 52.3188 11.0557H60.1392C61.1079 11.0557 61.5107 12.2953 60.727 12.8647L54.4001 17.4615C54.0496 17.7161 53.903 18.1675 54.0369 18.5795L56.4535 26.0172C56.7529 26.9385 55.6984 27.7047 54.9147 27.1353L48.5878 22.5385C48.2373 22.2839 47.7627 22.2839 47.4122 22.5385L41.0853 27.1353C40.3016 27.7047 39.2471 26.9385 39.5465 26.0172L41.9631 18.5795C42.097 18.1675 41.9504 17.7161 41.5999 17.4615L35.273 12.8647C34.4893 12.2953 34.8921 11.0557 35.8608 11.0557H43.6812C44.1145 11.0557 44.4984 10.7768 44.6323 10.3647L47.0489 2.92705Z" fill="#EBB529" />
                      <path d="M15.0489 2.92705C15.3483 2.00574 16.6517 2.00574 16.9511 2.92705L19.3677 10.3647C19.5016 10.7768 19.8855 11.0557 20.3188 11.0557H28.1392C29.1079 11.0557 29.5107 12.2953 28.727 12.8647L22.4001 17.4615C22.0496 17.7161 21.903 18.1675 22.0369 18.5795L24.4535 26.0172C24.7529 26.9385 23.6984 27.7047 22.9147 27.1353L16.5878 22.5385C16.2373 22.2839 15.7627 22.2839 15.4122 22.5385L9.08533 27.1353C8.30162 27.7047 7.24714 26.9385 7.54649 26.0172L9.96315 18.5795C10.097 18.1675 9.95036 17.7161 9.59987 17.4615L3.27299 12.8647C2.48928 12.2953 2.89206 11.0557 3.86078 11.0557H11.6812C12.1145 11.0557 12.4984 10.7768 12.6323 10.3647L15.0489 2.92705Z" fill="#EBB529" />
                    </svg>
                    <span>5.0</span>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-7 col-7 ">
                  <div className="profile_content">
                    <div className="profile_name">
                      <h3>Lorem Ipsum</h3>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="38" viewBox="0 0 32 38" fill="none">
                        <path d="M31.8294 30.8018L28.0459 22.6883V22.6879C28.4683 22.2087 28.7036 21.593 28.7088 20.954V18.8023C28.7088 18.6457 28.7497 18.4923 28.8284 18.3572L29.9046 16.4929C30.1391 16.0867 30.2623 15.6265 30.2623 15.1575C30.2623 14.6886 30.1391 14.2284 29.9046 13.8222L28.8284 11.9579C28.7501 11.8227 28.7088 11.6693 28.7088 11.5128V9.36112C28.7092 8.89215 28.586 8.43114 28.3515 8.02495C28.117 7.61878 27.78 7.28136 27.3734 7.04648L25.5103 5.97026C25.3748 5.89276 25.2623 5.78029 25.1844 5.64437L24.1082 3.78128C23.8737 3.3751 23.5363 3.03769 23.1301 2.8032C22.7236 2.56872 22.2625 2.44552 21.7935 2.44592H19.6439C19.4873 2.44592 19.3339 2.40498 19.1987 2.32669L17.3344 1.25209C16.9282 1.01761 16.468 0.894409 15.9991 0.894409C15.5301 0.894409 15.0699 1.01761 14.6637 1.25209L12.8006 2.32832C12.6651 2.40661 12.5117 2.44794 12.3555 2.44794H10.2026C9.73367 2.44755 9.27266 2.57074 8.86647 2.80523C8.46029 3.03971 8.12288 3.37673 7.888 3.7833L6.81178 5.64639C6.73428 5.78191 6.6218 5.89439 6.48589 5.97228L4.62279 7.0485C4.21662 7.28299 3.87921 7.6204 3.64472 8.02658C3.41024 8.43315 3.28704 8.89416 3.28744 9.36316V11.5148C3.28744 11.671 3.2465 11.8244 3.16821 11.9599L2.09361 13.8223C1.6167 14.6485 1.6167 15.6668 2.09361 16.493L3.10229 18.2389C3.22469 18.4515 3.28907 18.6924 3.28947 18.9376V20.9541C3.29464 21.5928 3.53031 22.2088 3.95238 22.6881L0.168813 30.8016V30.802C-0.0148001 31.193 -0.0501655 31.6381 0.0702508 32.0535C0.190275 32.4692 0.457743 32.8265 0.822182 33.0594C1.18662 33.2919 1.6234 33.3841 2.05102 33.3185L6.16555 32.6902L8.32959 36.2511C8.6527 36.7817 9.22897 37.1056 9.85012 37.1056H9.94908C10.2702 37.0873 10.5806 36.9828 10.8473 36.8023C11.1139 36.6219 11.3262 36.3727 11.4625 36.081L14.719 29.097C15.5135 29.5433 16.4832 29.5433 17.2776 29.097L20.5394 36.0694C20.6749 36.3615 20.8871 36.6111 21.1538 36.7919C21.4205 36.9724 21.7313 37.0773 22.0528 37.0948H22.1517C22.7729 37.0948 23.3492 36.7709 23.6723 36.2403L25.8363 32.6794L29.9508 33.3077C30.3777 33.3729 30.8137 33.2807 31.1777 33.0482C31.5418 32.8161 31.8088 32.4592 31.9293 32.0447C32.0497 31.6301 32.0155 31.1858 31.8331 30.7948L31.8294 30.8018ZM9.8512 35.317L7.68716 31.7561H7.68676C7.50355 31.456 7.23568 31.2172 6.91695 31.0685C6.59861 30.9203 6.2433 30.869 5.89556 30.9219L1.78174 31.545L5.43172 23.7224L6.48933 24.3341C6.62524 24.412 6.73772 24.5244 6.81521 24.66L7.89144 26.523C8.12592 26.9292 8.46334 27.2666 8.8699 27.5011C9.27608 27.7356 9.73709 27.8588 10.2061 27.8584H12.3589C12.5151 27.8584 12.6685 27.8997 12.804 27.9776L13.1725 28.1903L9.8512 35.317ZM15.999 27.6403C15.8428 27.6399 15.6894 27.599 15.5539 27.5211L13.6896 26.4449C13.2834 26.2112 12.8232 26.0884 12.3542 26.0888H10.2026C9.88468 26.0888 9.59098 25.9191 9.43201 25.6436L8.35579 23.7806H8.35539C8.1217 23.3732 7.78349 23.035 7.37612 22.8013L5.51303 21.7251V21.7247C5.23762 21.5657 5.06791 21.272 5.06791 20.9541V18.9375C5.06752 18.3799 4.92087 17.8319 4.64227 17.3486L3.63559 15.6028C3.47661 15.3273 3.47661 14.9879 3.63559 14.7125L4.71181 12.8482C4.9455 12.442 5.0683 11.9818 5.0679 11.5128V9.36121C5.0679 9.04327 5.23761 8.74957 5.51302 8.5906L7.37612 7.51438V7.51398C7.78348 7.27989 8.12129 6.94208 8.35538 6.53472L9.4316 4.67163H9.432C9.59097 4.39621 9.88467 4.22651 10.2026 4.22651H12.3555C12.824 4.2269 13.2842 4.1041 13.6908 3.87041L15.5539 2.79419C15.8293 2.63522 16.1687 2.63522 16.4442 2.79419L18.3085 3.87041C18.7146 4.1041 19.1749 4.2269 19.6438 4.22651H21.7955C22.1134 4.22651 22.4071 4.39621 22.5661 4.67163L23.6423 6.53472H23.6427C23.8768 6.94208 24.2146 7.27989 24.6219 7.51398L26.485 8.5902V8.5906C26.7605 8.74957 26.9302 9.04327 26.9302 9.36121V11.5128C26.9298 11.9818 27.0526 12.442 27.2863 12.8482L28.3625 14.7125C28.5214 14.9879 28.5214 15.3273 28.3625 15.6028L27.2863 17.4658C27.0526 17.8724 26.9298 18.3326 26.9302 18.8012V20.9528C26.9302 21.2712 26.7605 21.5649 26.485 21.7238L24.6219 22.8001C24.2146 23.0342 23.8764 23.372 23.6427 23.7793L22.5665 25.6424L22.5661 25.6428C22.4071 25.9182 22.1134 26.0879 21.7955 26.0879H19.6438C19.1749 26.0871 18.7146 26.2099 18.3085 26.444L16.4442 27.5211C16.3086 27.599 16.1552 27.6399 15.999 27.6403ZM26.1025 30.9263C25.7547 30.873 25.3994 30.9235 25.0803 31.0721C24.7616 31.2208 24.4941 31.46 24.3113 31.7605L22.148 35.3214L18.8291 28.1995L19.1987 27.9869C19.3339 27.9086 19.4873 27.8673 19.6439 27.8673H21.7955C22.2645 27.8677 22.7255 27.7445 23.1317 27.51C23.5378 27.2755 23.8752 26.9385 24.1101 26.5319L25.1863 24.6688C25.2638 24.5333 25.3763 24.4208 25.5122 24.3429L26.5698 23.7313L30.2198 31.5539L26.1025 30.9263ZM21.5114 13.1164L15.3064 19.3222C14.959 19.6696 14.3955 19.6696 14.0477 19.3222L10.4868 15.7613C10.1494 15.4119 10.1541 14.8567 10.4975 14.5133C10.8409 14.1699 11.3961 14.1648 11.7455 14.5022L14.6769 17.4336L20.2524 11.8572H20.2528C20.6021 11.5198 21.1573 11.525 21.5008 11.8683C21.8442 12.2117 21.8489 12.7669 21.5115 13.1163L21.5114 13.1164Z" fill="#222222" />
                      </svg>
                    </div>

                    <div className="position">
                      <svg className='photo' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M12 18C13.25 18 14.3127 17.5623 15.188 16.687C16.0633 15.8117 16.5007 14.7493 16.5 13.5C16.5 12.25 16.0623 11.1873 15.187 10.312C14.3117 9.43667 13.2493 8.99933 12 9C10.75 9 9.68733 9.43766 8.812 10.313C7.93667 11.1883 7.49933 12.2507 7.5 13.5C7.5 14.75 7.93767 15.8127 8.813 16.688C9.68833 17.5633 10.7507 18.0007 12 18ZM12 16C11.3 16 10.7083 15.7583 10.225 15.275C9.74167 14.7917 9.5 14.2 9.5 13.5C9.5 12.8 9.74167 12.2083 10.225 11.725C10.7083 11.2417 11.3 11 12 11C12.7 11 13.2917 11.2417 13.775 11.725C14.2583 12.2083 14.5 12.8 14.5 13.5C14.5 14.2 14.2583 14.7917 13.775 15.275C13.2917 15.7583 12.7 16 12 16ZM4 21.5C3.45 21.5 2.979 21.304 2.587 20.912C2.195 20.52 1.99934 20.0493 2 19.5V7.5C2 6.95 2.196 6.479 2.588 6.087C2.98 5.695 3.45067 5.49933 4 5.5H7.15L9 3.5H15L16.85 5.5H20C20.55 5.5 21.021 5.696 21.413 6.088C21.805 6.48 22.0007 6.95067 22 7.5V19.5C22 20.05 21.804 20.521 21.412 20.913C21.02 21.305 20.5493 21.5007 20 21.5H4ZM20 19.5V7.5H15.95L14.125 5.5H9.875L8.05 7.5H4V19.5H20Z" fill="#7A7A7A" />
                      </svg>
                      <span>Fotoqraf</span>
                    </div>

                    <div className="experience">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M1 12.5C1 14.9477 1.13246 16.8463 1.46153 18.327C1.78807 19.7963 2.29478 20.7921 3.00136 21.4986C3.70794 22.2052 4.70365 22.7119 6.17298 23.0385C7.65366 23.3675 9.55232 23.5 12 23.5C14.4477 23.5 16.3463 23.3675 17.827 23.0385C19.2963 22.7119 20.2921 22.2052 20.9986 21.4986C21.7052 20.7921 22.2119 19.7963 22.5385 18.327C22.8675 16.8463 23 14.9477 23 12.5C23 10.0523 22.8675 8.15366 22.5385 6.67298C22.2119 5.20365 21.7052 4.20794 20.9986 3.50136C20.2921 2.79478 19.2963 2.28807 17.827 1.96153C16.3463 1.63246 14.4477 1.5 12 1.5C9.55232 1.5 7.65366 1.63246 6.17298 1.96153C4.70365 2.28807 3.70794 2.79478 3.00136 3.50136C2.29478 4.20794 1.78807 5.20365 1.46153 6.67298C1.13246 8.15366 1 10.0523 1 12.5Z" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 6.5C12 6.5 12 10.5 12 11.5C12 12.5 12 12.5 13 12.5C14 12.5 18 12.5 18 12.5" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>1-3 il</span>
                    </div>

                    <div className="description">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at convallis tortor. Donec vel tellus euismod, vehicula odio vitae, bibendum felis. In hac habitasse platea dictumst.</p>
                   </div>
                  </div>
                </div>
              </div>
              <div className="text1">



                <div className="gmail">
                  <h5>loremipsum@gmail.com</h5>
                </div>
                <div className=" tel">
                  <h5>(+994) 258 25 35</h5>
                </div>

                <div className="web_link">
                  <Link to='/profile'>linktowebsite</Link>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className="profil_page_card">
          <div className="container ">
            <div className="row ">
              <div className="col-lg-4 col-md-6 second" onClick={() => setOpenModal(true)}>
                <div className="img1">
                  <img src="/src/assets/card.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 second" onClick={() => setOpenModal(true)}>
                <div className="img1">
                  <img src="/src/assets/card.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 second" onClick={() => setOpenModal(true)}>
                <div className="img1">
                  <img src="/src/assets/card.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 second" onClick={() => setOpenModal(true)}>
                <div className="img1">
                  <img src="/src/assets/card.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 second" onClick={() => setOpenModal(true)}>
                <div className="img1">
                  <img src="/src/assets/card.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 second" onClick={() => setOpenModal(true)}>
                <div className="img1">
                  <img src="/src/assets/card.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 second" onClick={() => setOpenModal(true)}>
                <div className="img1">
                  <img src="/src/assets/card.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6  second" onClick={() => setOpenModal(true)}>
                <div className="img1">
                  <img src="/src/assets/card.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 second" onClick={() => setOpenModal(true)}>
                <div className="img1">
                  <img src="/src/assets/card.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={openModal ? 'card_modal  open_modal' : 'card_modal'}>
        <div className="modal_left">
          <img src="/src/assets/card.png" alt="" />
        </div>

        <div className="modal_right">
          <div className="right_top">
            <div className="modal_profile">
              <div className="mp_photo">
                <img src="/src/assets/pp.jpeg" alt="" />
              </div>
              <div className="mp_info">
                <div className="mp_name">
                  <span>Ad</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path d="M11.936 11.4257L10.5172 8.38313V8.38298C10.6756 8.20325 10.7638 7.97238 10.7658 7.73274V6.92588C10.7658 6.86716 10.7811 6.80963 10.8106 6.75896L11.2142 6.05984C11.3022 5.90753 11.3484 5.73494 11.3484 5.55908C11.3484 5.38322 11.3022 5.21064 11.2142 5.05832L10.8106 4.3592C10.7813 4.30853 10.7658 4.25101 10.7658 4.19229V3.38542C10.7659 3.20956 10.7197 3.03668 10.6318 2.88436C10.5439 2.73204 10.4175 2.60551 10.265 2.51743L9.56637 2.11385C9.51555 2.08479 9.47337 2.04261 9.44416 1.99164L9.04058 1.29298C8.95264 1.14067 8.82611 1.01414 8.6738 0.926204C8.52134 0.838273 8.34846 0.792073 8.17258 0.792222H7.36644C7.30772 0.792222 7.2502 0.776871 7.19952 0.74751L6.50041 0.344537C6.34809 0.256606 6.17551 0.210406 5.99965 0.210406C5.82378 0.210406 5.6512 0.256606 5.49889 0.344537L4.80023 0.748121C4.74941 0.777481 4.69188 0.792981 4.63331 0.792981H3.82599C3.65013 0.792832 3.47725 0.839032 3.32493 0.926964C3.17261 1.0149 3.04608 1.14128 2.958 1.29374L2.55442 1.9924C2.52535 2.04322 2.48318 2.0854 2.43221 2.11461L1.73355 2.51819C1.58123 2.60612 1.4547 2.73265 1.36677 2.88497C1.27884 3.03743 1.23264 3.21031 1.23279 3.38619V4.19305C1.23279 4.25162 1.21744 4.30915 1.18808 4.35997L0.785104 5.05836C0.606262 5.36821 0.606262 5.75004 0.785104 6.05988L1.16336 6.71459C1.20926 6.79432 1.2334 6.88463 1.23355 6.97659V7.73279C1.23549 7.97228 1.32387 8.20329 1.48214 8.38303L0.0633049 11.4256V11.4257C-0.00555004 11.5724 -0.0188121 11.7393 0.026344 11.8951C0.0713532 12.0509 0.171654 12.1849 0.308318 12.2723C0.444982 12.3595 0.608774 12.394 0.769131 12.3694L2.31208 12.1338L3.1236 13.4692C3.24476 13.6681 3.46086 13.7896 3.6938 13.7896H3.73091C3.85132 13.7827 3.96772 13.7435 4.06772 13.6759C4.16773 13.6082 4.24731 13.5148 4.29843 13.4054L5.51964 10.7864C5.81756 10.9537 6.18121 10.9537 6.47911 10.7864L7.70226 13.401C7.75308 13.5106 7.83267 13.6042 7.93267 13.672C8.03267 13.7396 8.14922 13.779 8.26979 13.7855H8.3069C8.53984 13.7855 8.75596 13.6641 8.8771 13.4651L9.68861 12.1298L11.2316 12.3654C11.3916 12.3898 11.5551 12.3553 11.6917 12.2681C11.8282 12.181 11.9283 12.0472 11.9735 11.8918C12.0186 11.7363 12.0058 11.5697 11.9374 11.423L11.936 11.4257ZM3.6942 13.1189L2.88268 11.7835H2.88254C2.81383 11.671 2.71338 11.5814 2.59385 11.5257C2.47448 11.4701 2.34124 11.4509 2.21084 11.4707L0.668153 11.7044L2.0369 8.77091L2.4335 9.00028C2.48447 9.02949 2.52664 9.07167 2.55571 9.12249L2.95929 9.82115C3.04722 9.97346 3.17375 10.1 3.32621 10.1879C3.47853 10.2759 3.65141 10.3221 3.82728 10.3219H4.6346C4.69317 10.3219 4.7507 10.3374 4.80152 10.3666L4.93967 10.4463L3.6942 13.1189ZM5.99964 10.2401C5.94107 10.24 5.88354 10.2246 5.83272 10.1954L5.1336 9.79183C4.98129 9.70419 4.80871 9.65814 4.63284 9.65829H3.82598C3.70675 9.65829 3.59662 9.59465 3.537 9.49137L3.13342 8.79271H3.13327C3.04564 8.63995 2.91881 8.51312 2.76605 8.42549L2.06739 8.0219V8.02175C1.96411 7.96214 1.90047 7.852 1.90047 7.73277V6.97658C1.90032 6.76748 1.84533 6.56197 1.74085 6.38074L1.36334 5.72604C1.30373 5.62276 1.30373 5.49548 1.36334 5.3922L1.76693 4.69308C1.85456 4.54076 1.90061 4.36818 1.90046 4.19232V3.38546C1.90046 3.26623 1.9641 3.15609 2.06738 3.09648L2.76604 2.69289V2.69275C2.9188 2.60496 3.04548 2.47828 3.13327 2.32552L3.53685 1.62686H3.537C3.59661 1.52358 3.70675 1.45994 3.82598 1.45994H4.6333C4.80901 1.46009 4.98159 1.41404 5.13406 1.32641L5.83272 0.922824C5.936 0.863209 6.06328 0.863209 6.16656 0.922824L6.86567 1.32641C7.01799 1.41404 7.19057 1.46009 7.36643 1.45994H8.17329C8.29252 1.45994 8.40266 1.52358 8.46227 1.62686L8.86586 2.32552H8.86601C8.95379 2.47828 9.08047 2.60496 9.23323 2.69275L9.93189 3.09633V3.09648C10.0352 3.15609 10.0988 3.26623 10.0988 3.38546V4.19232C10.0987 4.36818 10.1447 4.54076 10.2323 4.69308L10.6359 5.3922C10.6955 5.49548 10.6955 5.62276 10.6359 5.72604L10.2323 6.4247C10.1447 6.57716 10.0987 6.74974 10.0988 6.92546V7.73232C10.0988 7.85169 10.0352 7.96183 9.93189 8.02145L9.23323 8.42503C9.08047 8.51281 8.95364 8.63949 8.86601 8.79225L8.46242 9.49091L8.46227 9.49106C8.40266 9.59434 8.29252 9.65798 8.17329 9.65798H7.36643C7.19057 9.65768 7.01799 9.70373 6.86567 9.79152L6.16656 10.1954C6.11574 10.2246 6.05821 10.24 5.99964 10.2401ZM9.78843 11.4724C9.65803 11.4524 9.52479 11.4713 9.40511 11.527C9.28558 11.5828 9.18528 11.6725 9.11673 11.7852L8.30551 13.1205L7.06092 10.4498L7.19952 10.3701C7.2502 10.3407 7.30772 10.3252 7.36644 10.3252H8.17331C8.34917 10.3254 8.52205 10.2792 8.67437 10.1912C8.82668 10.1033 8.95322 9.97693 9.0413 9.82447L9.44488 9.12581C9.47394 9.07499 9.51612 9.03281 9.56709 9.0036L9.96369 8.77423L11.3324 11.7077L9.78843 11.4724ZM8.06677 4.79365L5.73989 7.12084C5.60963 7.2511 5.3983 7.2511 5.2679 7.12084L3.93254 5.78548C3.80601 5.65448 3.8078 5.44628 3.93657 5.31749C4.06533 5.18871 4.27354 5.18679 4.40455 5.31332L5.50382 6.41259L7.59465 4.32145H7.5948C7.7258 4.19492 7.934 4.19686 8.06278 4.32563C8.19157 4.45439 8.19334 4.66259 8.06681 4.79361L8.06677 4.79365Z" fill="#222222" />
                  </svg>
                </div>

                <div className="mp_location">
                  Bakı, Azərbaycan
                </div>
              </div>
            </div>

            <div className="price">Qiymət: 50 AZN</div>
            <div className="description">
              <p>“Lorem ipsum dolor sit amet, c
                onsctetu rad ipiscing elit”</p>
            </div>
            <div className="tag">
              <span>#tag</span>
            </div>
          </div>

          <div className="right_bottom">
            <div className="likes">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                <path d="M7.6 1C9.29038 1 10.8323 1.84142 12 2.8C13.1677 1.84142 14.7096 1 16.4 1C20.0451 1 23 3.71049 23 7.05386C23 13.795 15.3274 17.721 12.7981 18.8321C12.2886 19.056 11.7114 19.056 11.2019 18.8321C8.67259 17.721 1 13.7948 1 7.0537C1 3.71033 3.95492 1 7.6 1Z" stroke="#222222" strokeWidth="2" />
              </svg>
              <span>121212</span>
            </div>
          </div>
        </div>

        <div className="close_btn" >
          <svg onClick={() => setOpenModal(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M1 12C1 14.4477 1.13246 16.3463 1.46153 17.827C1.78807 19.2963 2.29478 20.2921 3.00136 20.9986C3.70794 21.7052 4.70365 22.2119 6.17298 22.5385C7.65366 22.8675 9.55232 23 12 23C14.4477 23 16.3463 22.8675 17.827 22.5385C19.2963 22.2119 20.2921 21.7052 20.9986 20.9986C21.7052 20.2921 22.2119 19.2963 22.5385 17.827C22.8675 16.3463 23 14.4477 23 12C23 9.55232 22.8675 7.65366 22.5385 6.17298C22.2119 4.70365 21.7052 3.70794 20.9986 3.00136C20.2921 2.29478 19.2963 1.78807 17.827 1.46153C16.3463 1.13246 14.4477 1 12 1C9.55232 1 7.65366 1.13246 6.17298 1.46153C4.70365 1.78807 3.70794 2.29478 3.00136 3.00136C2.29478 3.70794 1.78807 4.70365 1.46153 6.17298C1.13246 7.65366 1 9.55232 1 12Z" stroke="#212135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 9L12 12M12 12L9 15M12 12L15 15M12 12L9 9" stroke="#212135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="modal_overlay" onClick={() => setOpenModal(false)} style={{ display: openModal ? 'block' : 'none' }}></div>

      <div className={openModal ? 'mobile_modal  open_mobile_modal' : 'mobile_modal'}>
        <ModalcardComponent imgpath='/src/assets/card.png' />
      </div>
    </>
  )
}

export default Profile