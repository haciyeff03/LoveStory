import React, { useState, useRef } from 'react';
// import { dataURLtoFile } from "./dataURLtoFile"
import getCroppedImg from "./cropImage";
import Modal from 'react-modal';
import Cropper from 'react-easy-crop'
import './editprofile.css';
import editCamera from '../../../src/assets/editcamera.svg';
import profilePhoto from '../../../src/assets/profilePhoto.jpg';
import selectArrow from '../../../src/assets/selectarrow.svg';

function EditProfile() {
  const fileInputRef = useRef(null)
  Modal.setAppElement('#root')

  // States of Position and Experience Part
  const [isOpenPos, setIsOpenPos] = useState(false)
  const [isOpenExp, setIsOpenExp] = useState(false)
  const [position, setPosition] = useState('Fotoqraf')
  const [experience, setExperience] = useState('0-6 ay')

  // States of Modal and Crop Image 
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [cropedImage, setCropedImage] = useState(null)
  const [croppedArea, setCroppedArea] = useState(null)
  const [image, setImage] = useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  // Functions of Position and Experience Part
  const togglePosDropdown = () => {
    setIsOpenPos(!isOpenPos)
    isOpenExp && setIsOpenExp(false)
  }
  
  const toggleExpDropdown = () => {
    setIsOpenExp(!isOpenExp)
    isOpenPos && setIsOpenPos(false)
  } 

  const toggleCropModal = () => {
    setIsOpenModal(!isOpenModal)
  } 

  const selectPosition = (e) => {
    setPosition(e.target.innerHTML)
    setIsOpenPos(false)
  }

  const selectExperience = (e) => {
    setExperience(e.target.innerHTML)
    setIsOpenExp(false)
  }

  // Functions of Modal and Crop Image 
  const handleDivClick = () => {
    fileInputRef.current.click()
  }

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
		setCroppedArea(croppedAreaPixels)
	}

  const changeImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
			reader.readAsDataURL(e.target.files[0])
			reader.addEventListener("load", () => {
				setImage(reader.result)
        toggleCropModal()
        e.target.value = ''
			})
		}
  }

  const cropFile = async () => {
		const canvas = await getCroppedImg(image, croppedArea)
    const canvasDataUrl = canvas.toDataURL('image/jpeg')
    setCropedImage(canvasDataUrl)
    toggleCropModal()

    // for sending to back
    // const convertedUrlToFile = dataURLtoFile(canvasDataUrl, 'cropped-img.jpeg')
    // console.log(convertedUrlToFile)
	}

  isOpenModal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal') 

  return (
    <div className='edit-container'>
      <h1 className='text-center edit-logo'>Logo</h1>
      <form action='' className='edit-form'>
        <div>
          <div>
            <div className='edit-photo' onClick={handleDivClick}>
              <img src={cropedImage ? cropedImage : profilePhoto} alt="Profile Photo" className='profile-photo' />
              <div>
                <img src={editCamera} alt="Edit Camera" />
                <p>Profili düzənlə</p>
              </div>
            </div>
            <input 
              type="file" 
              accept='image/*' 
              className='upload-photo' 
              ref={fileInputRef} 
              onChange={changeImage}
            />
            <Modal
              isOpen={isOpenModal}
              onRequestClose={toggleCropModal}
              className='crop-modal'
              contentLabel="Example Modal"
            > 
              <div className='cropper'>
              <Cropper
                image={image ? image : profilePhoto}
                crop={crop}
                zoom={zoom}
                aspect={4 / 3}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
              </div>
              <div className='crop-manage'>
                <input
                  type="range"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  aria-labelledby="Zoom"
                  onChange={(e) => {
                    setZoom(e.target.value)
                  }}
                  className="zoom-range"
                />
                <button className='crop-button' onClick={cropFile}>Bitir</button>
              </div>
            </Modal>
          </div>
        </div>
        <div className='edit-inputs'>
          <div className='name-surname'>
            <div>
              <label className='edit-label' htmlFor=''>Ad</label>
              <input type='text' placeholder='Asim' className='edit-form-input' required />
            </div>
            <div>
              <label className='edit-label' htmlFor=''>Soyad</label>
              <input type='text' placeholder='Əzizov' className='edit-form-input' required />
            </div>
          </div>
          <div className='div-100'>
            <label className='edit-label' htmlFor=''>Email</label>
            <input type='email' placeholder='asimazizov5@gmail.com' className='edit-form-input' required />
          </div> 
          <div className='div-100'>
            <label className='edit-label' htmlFor=''>Mövqe</label>
            <div className="dropdown-container">
              <div className="dropdown-header" onClick={togglePosDropdown}>
                {position}
                <img src={selectArrow} alt="Select Arrow" className='select-arrow' />
              </div>
              {isOpenPos && (
                <div className="dropdown-options">
                  <div className='dropdown-option' onClick={selectPosition}>Fotoqraf</div>
                  <div className='dropdown-option' onClick={selectPosition}>Videoqraf</div>
                  <div className='dropdown-option' onClick={selectPosition}>İstifadəçi</div>
                </div>
              )}
            </div>
          </div> 
          <div className='div-100'>
            <label className='edit-label' htmlFor=''>Təcrübə</label>
            <div className="dropdown-container">
              <div className="dropdown-header" onClick={toggleExpDropdown}>
                {experience}
                <img src={selectArrow} alt="Select Arrow" className='select-arrow' />
              </div>
              {isOpenExp && (
                <div className="dropdown-options">
                  <div className='dropdown-option' onClick={selectExperience}>0-6 ay</div>
                  <div className='dropdown-option' onClick={selectExperience}>6ay -1 il</div>
                  <div className='dropdown-option' onClick={selectExperience}>1-3il</div>
                  <div className='dropdown-option' onClick={selectExperience}>3 ildən çox</div>
                </div>
              )}
            </div>
          </div> 
          <div className='div-100'>
            <label className='edit-label' htmlFor=''>Əlaqə Nömrəsi</label>
            <div className='num-div'>
              <input type='tel' placeholder='055 555 55 55' className='edit-form-input num-input' required />
              <span className='num-prefix'>(+994)</span>
            </div>
          </div> 
          <div className='div-100'>
            <label className='edit-label' htmlFor=''>Web səhifə linki</label>
            <input type='url' placeholder='linktowebsite' className='edit-form-input' required />
          </div>
          <div className='submit-button'>
            <button type='submit'>Təsdiq et</button>
          </div>
        </div> 
      </form>
    </div>
  )
}

export default EditProfile
