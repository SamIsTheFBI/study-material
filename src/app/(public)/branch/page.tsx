import React from 'react';
import Link from 'next/link';
import '@/styles/App.css';

// const images = Array.from({ length: 12 }, (_, index) => 'url(/assets/${index + 1}.png)');

const branchcode = [
  { code: "fy", img: "/assets/1.png" },
  { code: "cse", img: "/assets/2.png" },
  { code: "ece", img: "/assets/3.png" },
  { code: "eie", img: "/assets/4.png" },
  { code: "ee", img: "/assets/5.png" },
  { code: "me", img: "/assets/6.png" },
  { code: "pe", img: "/assets/7.png" },
  { code: "ce", img: "/assets/8.png" },
  { code: "che", img: "/assets/9.png" },
  { code: "phy", img: "/assets/10.png" },
  { code: "ch", img: "/assets/11.png" },
  { code: "mce", img: "/assets/12.png" }
]

const images = Array.from({ length: 20 }, (_, index) => `url(/assets/${index + 1}.png)`);


// const BranchPage: React.FC = () => {
//   return (
//     <div className="container">
//       {images.map((backgroundImage, index) => (
//         <Link key={index} href={`/branch/semester?branch=${index + 1}`} passHref>
//           <div className="element" key={index} style={{ backgroundImage }}>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

const BranchPage: React.FC = () => {
  return (
    <ul className='grid grid-cols-4 gap-x-14 gap-y-5 max-w-7xl mx-auto pb-20'>
      {branchcode.map((code) => (
        <li key={code.code} className='aspect-square w-80'>
          <Link href={`/branch/semester?branch=${code.code}`}>
            <img src={code.img} alt={code.code} className='w-full h-full object-cover' />
          </Link>
        </li>
      ))}
    </ul>
  );
};



export default BranchPage;
