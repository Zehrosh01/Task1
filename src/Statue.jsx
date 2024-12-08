// import React from 'react'
// import statue from './assets/statue.png';

// const Statue = () => {
//   return (
//      <section className='flex justify-center mt-40'>
//       <div>
//         <img src={statue} alt="" className='h-96' />
//       </div>
//      </section>
//   )
// }

// export default Statue

import React from 'react';
import statue from './assets/statue.png';
import './App.css'; // Import the new CSS file

const Statue = () => {
  return (
     <section className="statue-section">
      <div className="statue-container">
        <img src={statue} alt="Statue" className="statue-image" />
      </div>
     </section>
  )
}

export default Statue;
