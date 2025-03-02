// // import React from 'react';

// // const DonationCard = ({ image, title, description, goal, raised }) => {
// //   const progress = (raised / goal) * 100;
// //   return (
// //     <div className="font-sans" dir="rtl">
// //       <div className="mx-auto max-w-md bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
// //         {/* صورة البطاقة */}
// //         <div className="w-full h-64 overflow-hidden">
// //           <img 
// //             src={image} 
// //             alt={title} 
// //             className="w-full h-full object-cover"
// //           />
// //         </div>
        
// //         {/* محتوى البطاقة */}
// //         <div className="p-6">
// //           <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          
// //           <p className="text-gray-600 mb-4">{description}</p>
          
// //           {/* معلومات إضافية */}
// //           <div className="flex justify-between items-center mb-4">
// //             <div className="text-sm text-gray-500">الهدف: {goal} دولار</div>
// //             <div className="text-sm font-medium text-green-600">تم جمع: {raised} دولار</div>
// //           </div>
          
// //           {/* شريط التقدم */}
// //           <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
// //             <div className="bg-green-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
// //           </div>
          
// //           {/* أزرار التبرع والإضافة للسلة */}
// //           <div className="flex space-x-4 space-x-reverse">
// //             <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300">
// //               تبرع الآن
// //             </button>
// //             <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md font-medium transition-colors duration-300 flex items-center justify-center">
// //               <span>إضافة إلى السلة</span>
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
// //               </svg>
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const DonationSection = () => {
// //   const donations = [
// //     {
// //       image: "/api/placeholder/400/300", 
// //       title: "تبرع بالطعام", 
// //       description: "ساهم في تقديم وجبات للمحتاجين حول العالم.", 
// //       goal: 15000, 
// //       raised: 7500
// //     },
// //     {
// //       image: "/api/placeholder/400/300", 
// //       title: "تبرع بالكتب", 
// //       description: "ساعد في نشر المعرفة من خلال التبرع بالكتب.", 
// //       goal: 8000, 
// //       raised: 4500
// //     },
// //     {
// //       image: "/api/placeholder/400/300", 
// //       title: "تبرع بالملابس", 
// //       description: "امنح الدفء لمن يحتاج من خلال التبرع بالملابس.", 
// //       goal: 12000, 
// //       raised: 6000
// //     }
// //   ];

// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
// //       {donations.map((donation, index) => (
// //         <DonationCard key={index} {...donation} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default DonationSection;
// import React, { useState } from 'react';

// const DonationCard = ({ image, title, description, goal, raised }) => {
//   const progress = (raised / goal) * 100;
//   const [amount, setAmount] = useState('');

//   return (
//     <div className="font-sans" dir="rtl">
//       <div className="mx-auto max-w-md bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//         {/* صورة البطاقة */}
//         <div className="w-full h-64 overflow-hidden">
//           <img 
//             src={image} 
//             alt={title} 
//             className="w-full h-full object-cover"
//           />
//         </div>
        
//         {/* محتوى البطاقة */}
//         <div className="p-6">
//           <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          
//           <p className="text-gray-600 mb-4">{description}</p>
          
//           {/* معلومات إضافية */}
//           <div className="flex justify-between items-center mb-4">
//             <div className="text-sm text-gray-500">الهدف: {goal} دولار</div>
//             <div className="text-sm font-medium text-green-600">تم جمع: {raised} دولار</div>
//           </div>
          
//           {/* شريط التقدم */}
//           <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
//             <div className="bg-green-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
//           </div>
          
//           {/* إدخال مبلغ التبرع */}
//           <input 
//             type="number" 
//             value={amount} 
//             onChange={(e) => setAmount(e.target.value)} 
//             placeholder="أدخل المبلغ بالدينار الأردني" 
//             className="w-full border border-gray-300 rounded-md p-2 text-right mb-4"
//           />
          
//           {/* خط فاصل وكلمة تفاصيل */}
//           <hr className="my-2 border-gray-300" />
//           <p className="text-center text-gray-500 text-sm">تفاصيل</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DonationSection = () => {
//   const donations = [
//     {
//       image: "/api/placeholder/400/300", 
//       title: "تبرع بالطعام", 
//       description: "ساهم في تقديم وجبات للمحتاجين حول العالم.", 
//       goal: 15000, 
//       raised: 7500
//     },
//     {
//       image: "/api/placeholder/400/300", 
//       title: "تبرع بالكتب", 
//       description: "ساعد في نشر المعرفة من خلال التبرع بالكتب.", 
//       goal: 8000, 
//       raised: 4500
//     },
//     {
//       image: "/api/placeholder/400/300", 
//       title: "تبرع بالملابس", 
//       description: "امنح الدفء لمن يحتاج من خلال التبرع بالملابس.", 
//       goal: 12000, 
//       raised: 6000
//     }
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
//       {donations.map((donation, index) => (
//         <DonationCard key={index} {...donation} />
//       ))}
//     </div>
//   );
// };

// export default DonationSection;


import React, { useState } from 'react';

const DonationCard = ({ image, title, description, goal, raised }) => {
  const progress = (raised / goal) * 100;
  const [amount, setAmount] = useState('');

  return (
    <div className="font-sans" dir="rtl">
        <h1></h1>
      <div className="mx-auto max-w-md bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* صورة البطاقة */}
        <div className="w-full h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* محتوى البطاقة */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          
          <p className="text-gray-600 mb-4">{description}</p>
          
          {/* معلومات إضافية */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-500">الهدف: {goal} دولار</div>
            <div className="text-sm font-medium text-green-600">تم جمع: {raised} دولار</div>
          </div>
          
          {/* شريط التقدم */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          
          {/* إدخال مبلغ التبرع */}
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="أدخل المبلغ بالدينار الأردني" 
            className="w-full border border-gray-300 rounded-md p-2 text-right mb-4"
          />
          
          {/* زر التبرع */}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300">
            تبرع الآن
          </button>
          
          {/* خط فاصل وكلمة تفاصيل */}
          <hr className="my-2 border-gray-300" />
          <p className="text-center text-gray-500 text-sm">تفاصيل</p>
        </div>
      </div>
    </div>
  );
};
import axios from "axios";
import { useEffect } from 'react';
const DonationSection = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:4000/api/projects") // تعديل الرابط حسب السيرفر
          .then((response) => {
            setDonations(response.data);
          })
          .catch((error) => console.error("Error fetching projects:", error));
      }, []);

return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">المشاريع</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {donations.length > 0 ? (
          donations.map((donation, index) => (
            <DonationCard key={index} {...donation} />
          ))
        ) : (
          <p className="text-center text-gray-500">لا يوجد مشاريع حالياً</p>
        )}
      </div>
    </div>
  );
};

export default DonationSection;
