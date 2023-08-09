import './imgupload.scss';
import { useRef, useState } from 'react';

const UploadImage = () => {
    const fileInput = useRef(null);
    const [images, setImages] = useState([]);
    const [isDragOver, setIsDragOver] = useState(false);

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

            if (images.length < 5) {
                setImages((prev) =>
                    [
                        ...prev,
                        {
                            name: file.name,
                            url: URL.createObjectURL(file),
                            size: sizeFormatted
                        }
                    ]
                )
            }
        })
    }

    const deleteImage = (i) => {
        setImages(
            images.filter((el, index) => {
                return index !== i
            })
        )
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

            if (images.length + selectedFiles.length <= 5) {
                setImages((prev) =>
                    [
                        ...prev,
                        {
                            name: file.name,
                            url: URL.createObjectURL(file),
                            size: sizeFormatted
                        }
                    ]
                )
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
                <div className={`img_upload_container row justify-content-${images.length > 0 ? 'between' : 'center'}`}>
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
                                    <path d="M16 10.6667V16.0001M16 21.3334V16.0001M16 16.0001H21.3333H10.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Fayl yüklə</span>
                            </button>
                        </div>
                        <p className='supported_files'>.jpg, .png, ... sonluqlu fayllar dəstəklənir</p>
                        <p className="max_size">maksimum fayl ölçüsü 50MB olmalıdır</p>
                    </div>

                    {
                        images.length > 0 &&
                        <div className="imgupload_right col-lg-5">
                            {
                                images && (
                                    images.map((img, index) => (
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M1 12C1 14.4477 1.13246 16.3463 1.46153 17.827C1.78807 19.2963 2.29478 20.2921 3.00136 20.9986C3.70794 21.7052 4.70365 22.2119 6.17298 22.5385C7.65366 22.8675 9.55232 23 12 23C14.4477 23 16.3463 22.8675 17.827 22.5385C19.2963 22.2119 20.2921 21.7052 20.9986 20.9986C21.7052 20.2921 22.2119 19.2963 22.5385 17.827C22.8675 16.3463 23 14.4477 23 12C23 9.55232 22.8675 7.65366 22.5385 6.17298C22.2119 4.70365 21.7052 3.70794 20.9986 3.00136C20.2921 2.29478 19.2963 1.78807 17.827 1.46153C16.3463 1.13246 14.4477 1 12 1C9.55232 1 7.65366 1.13246 6.17298 1.46153C4.70365 1.78807 3.70794 2.29478 3.00136 3.00136C2.29478 3.70794 1.78807 4.70365 1.46153 6.17298C1.13246 7.65366 1 9.55232 1 12Z" stroke="#212135" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M15 9L12 12M12 12L9 15M12 12L15 15M12 12L9 9" stroke="#212135" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>


                                        </div>
                                    ))
                                )
                            }

                            <div className="next_btn">
                                <button>Davam et</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default UploadImage