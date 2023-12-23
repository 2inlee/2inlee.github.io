'use client';
import { useState } from 'react';
import HorizonLine from "../utils/HorizonLine";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';


const Project = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
      <div id="project" className="container text-left text-4xl mx-auto max-w-[80%] font-extrabold">
      <div className="mt-40" />
        <p>Project</p>
        <HorizonLine text="List"/>
      <br />
      <br />
      
      <div className='carousel-container'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image src='/img/CPR_Kiosk.png' alt='CPR_Kiosk' width={1440} height={180}/>
          <Carousel.Caption>
            <h3>교육용 CPR키오스</h3>
            <p>안드로이드앱 메인개발자 - 경북도청 납품</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src='/img/wevement_logo_simbol_only.png' alt='설명'  width={540} height={180}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src='/img/wevement_logo_simbol_only.png' alt='설명'  width={540} height={180}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
};

export default Project;
