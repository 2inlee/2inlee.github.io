'use client';
import ProfilePhoto from '/public/img/inlee_photo.png'
import Image from 'next/image';

const Mycard = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-red-300 to-blue-500 rounded-lg shadow-md p-4 mx-auto max-w-[80%] max-h-72 object-cover">
      {/* Popped-out Image */}
      <div className="relative md:-left-14 w-full md:w-[40%] h-[60%] md:min-h-[90%] md:max-h-72 rounded-md overflow-hidden shadow-lg mb-4 md:mb-0">
        <Image
          className="object-cover rounded-md shadow-md"
          src={ProfilePhoto}
          alt="Inho Lee Photo"
        />
      </div>

      {/* Introduction */}
      <div className="ml-0 md:ml-6 text-white">
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

