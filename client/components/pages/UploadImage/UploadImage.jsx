import './imgupload.scss';
import { useRef, useState } from 'react';
import { sharePostStore } from '../../../store/store';
import { useNavigate } from 'react-router-dom';
import { useSnapshot } from 'valtio';

const UploadImage = () => {
    const fileInput = useRef(null);
    const snap = useSnapshot(sharePostStore);
    const [isDragOver, setIsDragOver] = useState(false);
    const navigate = useNavigate();

    const triggerInput = (e) => {
        e.stopPropagation()
        fileInput.current.click();
    }

    const selectImages = (e) => {
        const files = e.target.files;
        if (files.length === 0) return;
        const selectedFiles = [...files];
        selectedFiles.map((file) => {
            const sizeInBytes = file.size;
            let sizeFormatted;

            if (sizeInBytes < 1024) {
                sizeFormatted = sizeInBytes + " B";
            } else if (sizeInBytes < 1024 * 1024) {
                sizeFormatted = (sizeInBytes / 1024).toFixed(2) + " KB";
            } else {
                sizeFormatted = (sizeInBytes / (1024 * 1024)).toFixed(2) + " MB";
            }

            if (snap.images.length + selectedFiles.length <= 5) {

                sharePostStore.images.push(
                    {
                        name: file.name,
                        url: URL.createObjectURL(file),
                        size: sizeFormatted
                    }
                )
            }
        })
    }

    const deleteImage = (i) => {
        sharePostStore.images = sharePostStore.images.filter((el, index) => {
            return index !== i
        });
    }

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const files = e.dataTransfer.files;
        if (files.length === 0) return;
        const selectedFiles = [...files];
        selectedFiles.map((file) => {
            const sizeInBytes = file.size;
            let sizeFormatted;

            if (sizeInBytes < 1024) {
                sizeFormatted = sizeInBytes + " B";
            } else if (sizeInBytes < 1024 * 1024) {
                sizeFormatted = (sizeInBytes / 1024).toFixed(2) + " KB";
            } else {
                sizeFormatted = (sizeInBytes / (1024 * 1024)).toFixed(2) + " MB";
            }

            if (snap.images.length + selectedFiles.length <= 5) {

                sharePostStore.images.push(
                    {
                        name: file.name,
                        url: URL.createObjectURL(file),
                        size: sizeFormatted
                    }
                );
            } else {
                alert('Seçilə biləcək maksimum fayl sayı: 5')
            }
        })


    }

    const handleDragOver = (e) => {
        e.preventDefault()
        setIsDragOver(true)
    }

    const handleDragLeave = (e) => {
        e.preventDefault()
        setIsDragOver(false)
    }

    let dropzoneBorder = isDragOver ?
        `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='%23333' stroke-width='3' stroke-dasharray='0' stroke-dashoffset='6' stroke-linecap='square'/%3e%3c/svg%3e")` :
        `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='%23333' stroke-width='3' stroke-dasharray='20' stroke-dashoffset='6' stroke-linecap='square'/%3e%3c/svg%3e")`
    return (
        <div className='image_upload_page'>
            <div className="container">
                <div className={`img_upload_container row justify-content-${snap.images.length > 0 ? 'between' : 'center'}`}>
                    <div className="imgupload_left col-lg-6">
                        <input ref={fileInput} type="file" hidden multiple onChange={selectImages} />
                        <div className="dropzone"
                            onClick={triggerInput}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            style={{ background: isDragOver && '#EDEDED', backgroundImage: dropzoneBorder }}
                        >
                            <h3>{isDragOver ? 'Faylı burax' : 'Faylı çək və buraya sürüklə'}</h3>
                            <h5 style={{ display: isDragOver ? 'none' : 'block' }}>və ya</h5>
                            <button onClick={triggerInput} style={{ display: isDragOver ? 'none' : 'flex' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M1 16C1 19.2712 1.17658 21.8316 1.62331 23.8417C2.06751 25.8404 2.7654 27.2332 3.76611 28.2339C4.76681 29.2346 6.15959 29.9325 8.15832 30.3767C10.1684 30.8234 12.7288 31 16 31C19.2712 31 21.8316 30.8234 23.8417 30.3767C25.8404 29.9325 27.2332 29.2346 28.2339 28.2339C29.2346 27.2332 29.9325 25.8404 30.3767 23.8417C30.8234 21.8316 31 19.2712 31 16C31 12.7288 30.8234 10.1684 30.3767 8.15832C29.9325 6.15959 29.2346 4.76681 28.2339 3.76611C27.2332 2.7654 25.8404 2.06751 23.8417 1.62331C21.8316 1.17658 19.2712 1 16 1C12.7288 1 10.1684 1.17658 8.15832 1.62331C6.15959 2.06751 4.76681 2.7654 3.76611 3.76611C2.7654 4.76681 2.06751 6.15959 1.62331 8.15832C1.17658 10.1684 1 12.7288 1 16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 10.6667V16.0001M16 21.3334V16.0001M16 16.0001H21.3333H10.6667" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Fayl yüklə</span>
                            </button>
                        </div>
                        <p className='supported_files'>.jpg, .png, ... sonluqlu fayllar dəstəklənir</p>
                        <p className="max_size">maksimum fayl ölçüsü 50MB olmalıdır</p>
                    </div>

                    {
                        snap.images.length > 0 &&
                        <div className="imgupload_right col-lg-5">
                            {
                                snap.images && (
                                    snap.images.map((img, index) => (
                                        <div className="uploaded_image" key={index}>
                                            <div className="ui_left">
                                                <img src={img.url} alt="" />
                                            </div>
                                            <div className="ui_right">
                                                <div className="file_info">
                                                    <div className="file_name">
                                                        {img.name}
                                                    </div>
                                                    <div className="file_size">
                                                        {img.size}
                                                    </div>
                                                </div>
                                                <div className="progress_bar">
                                                    <div className="inner"></div>
                                                </div>
                                                <div className="close_btn" onClick={() => deleteImage(index)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                                                        <path d="M1.37007 14.7829C1.43006 15.0528 1.48764 15.3135 1.54331 15.5655C1.8645 17.02 2.1222 18.1869 2.41496 19.154C2.75672 20.2829 3.11339 21.018 3.57483 21.5318C4.45908 22.5162 6.01659 23 10.0001 23C13.9837 23 15.5412 22.5162 16.4254 21.5318C16.8868 21.018 17.2435 20.2829 17.5853 19.154C17.878 18.1869 18.1357 17.0201 18.4569 15.5657C18.5126 15.3135 18.5702 15.0528 18.6302 14.7829C19.408 11.285 18.8947 9.54317 17.7283 8.56682C17.0969 8.03836 16.1721 7.63709 14.8661 7.37407C13.5629 7.1116 11.9484 7 10.0001 7C8.05182 7 6.43732 7.1116 5.13411 7.37407C3.82814 7.63709 2.90332 8.03836 2.27197 8.56682C1.10554 9.54317 0.592247 11.285 1.37007 14.7829Z" stroke="#212135" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.0001 12V18M6.00012 12V18M14.0001 12V18" stroke="#212135" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 2.07058C15.6539 2.33516 18.1084 3.29618 19.5158 4.14321C19.989 4.428 20.1417 5.04247 19.8569 5.51566C19.5721 5.98886 18.9577 6.14158 18.4845 5.85679C17.1809 5.07224 14.4556 4 10.0001 4C5.52988 4 2.72875 5.0786 1.54035 5.84152C1.0756 6.13988 0.456969 6.00499 0.158607 5.54023C-0.139756 5.07548 -0.00486638 4.45685 0.45989 4.15848C1.8081 3.29297 4.33316 2.3338 8.00012 2.07024V1C8.00012 0.447715 8.44784 0 9.00012 0H11.0001C11.5524 0 12.0001 0.447715 12.0001 1V2.07058Z" fill="#212135" />
                                                    </svg>
                                                </div>
                                            </div>


                                        </div>
                                    ))
                                )
                            }

                            <div className="next_btn">
                                <button onClick={() => { navigate('/share-post') }}>Davam et</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default UploadImage