
// import React from 'react';
// import { FaRegHeart } from "react-icons/fa";
// import { BsShare } from "react-icons/bs";
// import { SlEye } from "react-icons/sl";
// import { FaArrowRightLong } from "react-icons/fa6";


// const LeftSideBar = () => {
//   return (
//     <section className="p-6 bg-zinc-70 w-96 h-screen ">
//       <div className="text-start text-2xl font-normal decoration-solid leading-tight text-gray-900">
     
       
//         <h1 className='flex justify-start mb-5'>MAITREYA BUDDHA <br /> IN GESTURE OF <br /> FEARLESSNESS <br /> (ABHAYA MUDRA)</h1>
//       </div>


//       <div className='flex justify-start space-x-4 text-gray-600 text-base gap-4'>
//         <div className="bg-gray-200 p-2 rounded-full hover:bg-gray-50 border-2 cursor-pointer"><FaRegHeart /></div>
//         <div className="bg-gray-200 p-2 rounded-full hover:bg-gray-50 border-2 cursor-pointer"><BsShare /></div>
//         <div className="bg-gray-200 p-2 rounded-full hover:bg-gray-50 border-2 cursor-pointer"><SlEye /></div>
//       </div><br />

//       <div className="text-gray-700 text-sm">
//         <p>Dynasty: Ahichchhatra</p>
//         <p>Period: 200 CE</p>
//         <p>Material: Sandstone</p>
//         <p>Location: National Museum</p>
//       </div><br />

//       <div className="text-justify text-gray-500">
//         <h2 className="text-xl mb-2 text-gray-700">Description:</h2>
//         <p className="text-sm">Maitreya, the future Buddha to be, resides in the Tushita heaven as a bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the eighth Buddha, a successor of the seven historical Buddhas (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Buddha will be born in Ketumati, in present-day Varanasi, Uttar Pradesh. As a bodhisattva, Maitreya wears a heavily adorned with earrings, wristlets, necklaces, and an amulet. The</p>
//       </div>

//       <div className="flex items-center space-x-2 cursor-pointer hover:text-amber-200 w-fit">
//         <span className='text-amber-600 hover:text-amber-300'><FaArrowRightLong /></span>
//         <span className='text-amber-600 hover:text-amber-300'>Read More</span>
//       </div><br />

//       <div className="flex justify-between gap-2 mt-4">
//         <button className="px-6 py-2 border-2 rounded  border-amber-600  bg-amber-600 text-white shadow-md hover:bg-amber-900">Add To Collection</button>
//         <button className="px-6 py-2 border-2 rounded  border-amber-600 bg-white text-amber-600 shadow-md hover:bg-amber-100">SOUVENIR</button>
//       </div>
//     </section>
//   );
// }

// export default LeftSideBar;


import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { SlEye } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import './App.css'; // Import the new CSS file

const LeftSideBar = () => {
  return (
    <section className="left-sidebar">
      <div className="title">
        <h1 className='title-text'>MAITREYA BUDDHA <br /> IN GESTURE OF <br /> FEARLESSNESS <br /> (ABHAYA MUDRA)</h1>
      </div>

      <div className='icon-container'>
        <div className="icon"><FaRegHeart /></div>
        <div className="icon"><BsShare /></div>
        <div className="icon"><SlEye /></div>
      </div><br />

      <div className="details">
        <p>Dynasty: Ahichchhatra</p>
        <p>Period: 200 CE</p>
        <p>Material: Sandstone</p>
        <p>Location: National Museum</p>
      </div><br />

      <div className="description">
        <h2 className="description-title">Description:</h2>
        <p className="description-text">Maitreya, the future Buddha to be, resides in the Tushita heaven as a bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the eighth Buddha, a successor of the seven historical Buddhas (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Buddha will be born in Ketumati, in present-day Varanasi, Uttar Pradesh. As a bodhisattva, Maitreya wears a heavily adorned with earrings, wristlets, necklaces, and an amulet. The</p>
      </div>

      <div className="read-more">
        <span className='arrow-icon'><FaArrowRightLong /></span>
        <span className='read-more-text'>Read More</span>
      </div><br />

      <div className="buttons">
        <button className="add-to-collection">Add To Collection</button>
        <button className="souvenir">SOUVENIR</button>
      </div>
    </section>
  );
}

export default LeftSideBar;
