'use client';
import ProfilePhoto from '/public/img/inlee_photo.png'
import Image from 'next/image';


const Mycard = () => {
  return (
    <div className="flex bg-gradient-to-tr from-red-300 to-blue-500 rounded-lg shadow-md p-4 mx-auto max-w-[80%] {styles.card-style}">
      {/* Popped-out Image */}
      <div className="relative -left-14 w-[40%] sm:w-[25%] md:w-[20%] h-[200px] sm:h-auto rounded-md overflow-hidden shadow-lg">
        <Image
          className="h-full w-full object-cover absolute"
          src={process.env.BACKEND_URL + '/inlee_photo.png'}
          alt="Inho Lee Photo"
        />
      </div>

      {/* Introduction */}
      <div className="ml-6 text-white">
        <h2 className="text-3xl font-semibold mb-2">Inho Lee</h2>
        <p className="text-gray-200 mb-1">Project Manager / Back-end Developer</p>
        <p className="text-gray-100">
        Hi, I am a passionate Project Manager.
        <br />
        I try to solve various problems in society through technology.
        <br />
        Various projects are underway to solve social problems.
        </p>
        <br />
        <br />
        <p>- Wevement Team Leader, DMU PD Lab MIT President, DMU ComputerSoftwareEngineering B.S.</p>
      </div>
    </div>
  );
};

export default Mycard;