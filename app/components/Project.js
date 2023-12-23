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
          <Image src='/img/CPR_Kiosk.png' alt='CPR_Kiosk' width={800} height={180}/>
          <Carousel.Caption>
            <h3>교육용 CPR키오스크</h3>
            <p>경북도청 납품 - 안드로이드앱 메인개발자</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src='/img/Aily.png' alt='Aily'  width={800} height={180}/>
          <Carousel.Caption>
            <h3>Aily - AI 자동 쓰레기분리수거기기</h3>
            <p>2023KES 출품작 - Team Leader</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src='/img/Codelearn.png' alt='Codelearn'  width={800} height={180}/>
          <Carousel.Caption>
            <h3>코드런 - Codelearn</h3>
            <p>2023 SKT Prompter Day / 2023 신산업 성과포럼 출품작</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
};

export default Project;
