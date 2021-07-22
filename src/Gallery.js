import React, {useState} from "react";
import Img1 from './imggallery/imgg1.jpg';
import Img2 from './imggallery/imgg2.jpg';
import Img3 from './imggallery/imgg3.jpg';
import Img4 from './imggallery/imgg4.jpg';
import Img5 from './imggallery/imgg5.jpg';
import Img6 from './imggallery/imgg6.jpg';
import './Gallery.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from "./components/ButtonElementGallery";


const Gallery = () =>{

    let data =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        }
    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    
    return(
        
        <>
       <div className='maim' id='photo'>
        <h1>Галлерея работ</h1>
        <div className={model ? 'model open' : 'model'} >
            <img src={tempimgSrc} alt='img' />
            <CloseIcon onClick={()=>setModel(false)} />
        </div>
            <div className='gallery'>
                {data.map((item, index)=>{
                    return(
                        <div className='pics' key={index} onClick={()=>getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{width: '100%'}} alt='imggallery'/>
                        </div>
                    )
                })}
                
            </div>
            
            <Button onClick={() => {
        let win = window.open('')
        win.location.replace('//www.instagram.com/subaru_gangster/')
      }}>Больше в нашем Instagram</Button>
            </div>
        </>
    )
    
}

export default Gallery;