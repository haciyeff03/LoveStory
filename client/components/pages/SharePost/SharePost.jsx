import './sharepost.scss';
import { useSnapshot } from 'valtio';
import { sharePostStore } from '../../../store/store';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SharePost = () => {
    const snap = useSnapshot(sharePostStore);
    const [img, setImg] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (snap.images.length === 0) {
            navigate('/upload-image')
        } else {
            setImg(snap.images[0].url);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='sharepost_page'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="sharepost_left">
                            <div className="photo_container">
                                <img src={img} alt="" />
                            </div>

                            <div className="photo_wrapper">
                                {
                                    snap.images.map((el, idx) => (
                                        <div className="photo" key={idx} onClick={() => setImg(el.url)}>
                                            <img src={el.url} alt="" />
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sharepost_right">
                            <form onSubmit={handleSubmit}>
                                <div className="description">
                                    <h3>Şəkilin təsviri</h3>
                                    <h6>(min.100 söz daxil edin)</h6>
                                    <textarea name="description" cols="30" rows="6" placeholder='asimazizov5@gmail.com' onChange={(e) => { sharePostStore.description = e.target.value; console.log(e.target.value) }}></textarea>
                                </div>

                                <div className="post_tag">
                                    <h3>Tag et</h3>
                                    <input type="text" onChange={(e) => { sharePostStore.tag = e.target.value; console.log(e.target.value) }} />
                                </div>

                                <div className="share_btn">
                                    <button type='submit'>Paylaş</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SharePost