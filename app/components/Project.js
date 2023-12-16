'use client';
import HorizonLine from "../utils/HorizonLine";
import Image from "next/image";


const Project = () => {
  return (
      <div id="project" className="container text-left text-4xl mx-auto max-w-[80%] font-extrabold">
      <div className="mt-40" />
        <p>Project</p>
        <HorizonLine text="With"/>
      <br />
      <div className="font-bold">
        <p>Me</p>
      </div>
      <br />
        <div className="container text-left text-xl font-medium">
          <Carousel>
            <Carousel.Item interval={1000}>
              <Image
              src="/img/inlee_photo.png"
              width={500}
              height={500}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <Image
                src="/img/inlee_photo.png"
                width={500}
                height={500}
                />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/img/inlee_photo.png"
                width={500}
                height={500}
                />
              <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      <br />
    </div>
  );
};

export default Project;
