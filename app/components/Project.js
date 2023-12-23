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
          <Image src='/img/Group 4.png' alt='CPR_Kiosk' width={1200} height={800}/>
          <Carousel.Caption>
            <h3>교육용 CPR키오스크</h3>
            <p>경북도청 납품 - 안드로이드앱 메인개발자</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item onClick={() => window.open("https://github.com/Aily-AIRecycle", "_blank","noreferrer")}>
          <Image src='/img/Group 5.png' alt='Aily'  width={1200} height={800}/>
          <Carousel.Caption>
            <h3>Aily - AI 자동 쓰레기분리수거기기</h3>
            <p>2023KES 출품작 - Team Leader</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-black'>
          <Image src='/img/Group 8.png' alt='Codelearn'  width={1200} height={800}/>
          <Carousel.Caption>
            <h3>코드런 - Codelearn</h3>
            <p>2023 SKT Prompter Day 출품작 
              <br/>
              Team Leader</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
};

export default Project;
