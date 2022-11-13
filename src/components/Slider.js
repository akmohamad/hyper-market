import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const slideImages = [
    {
      url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/17fb4fd9e4c3e427a688e61f3d30dd6df5a01b9a_1658670733.jpg?x-oss-process=image/quality,q_95',
    },
    {
      url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/582eac6dacc6aa662f2313c2325e80ded7b3cd54_1667160078.jpg?x-oss-process=image/quality,q_95',
    },
    {
      url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/8e836e6c936e46bd2b197cb1b9e4746b1be84114_1666708071.jpg?x-oss-process=image/quality,q_95',
    },
    {
      url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/d48f288aab0ca97730144164bd141c8baec66a8c_1666018516.jpg?x-oss-process=image/quality,q_95',
    },
    {
      url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/cb0f5d684a8ea32ddef589caa02f3844ce61a376_1667222487.jpg?x-oss-process=image/quality,q_95',
    },
  ];

const Slideshow = () => {
    return(
        <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div className="each-slide" key={index}>
                <div style={{'backgroundImage': `url(${slideImage.url})`,height:600 ,textAlign:'center' ,marginTop:70 ,justifyContent:'center'}}>
                  <span>{slideImage.caption}</span>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
    )
}

export default Slideshow;
