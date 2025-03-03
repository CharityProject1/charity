// import React from 'react';

// const Donate = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F9FC]">
//       <div className="w-full max-w-6xl px-4 py-12">
//         <h1 className="text-4xl font-bold mb-12 text-[#2D336B] text-center relative">
//           التبرعات
//           <span className="block h-1 w-24 bg-[#A9B5DF] mx-auto mt-4 rounded-full"></span>
//         </h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Food Donation Card */}
//           <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
//             <div className="h-32 bg-[#2D336B] flex items-center justify-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//             </div>
//             <div className="p-6 text-center border-t-4 border-[#A9B5DF]">
//               <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">تبرع بطعام</h2>
//               <p className="text-gray-600 mb-6">ساهم في توفير وجبات طعام للأسر المحتاجة.</p>
//               <button className="bg-[#A9B5DF] hover:bg-[#2D336B] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
//                 تبرع الآن
//               </button>
//             </div>
//           </div>
          
//           {/* Clothes Donation Card */}
//           <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
//             <div className="h-32 bg-[#2D336B] flex items-center justify-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
//               </svg>
//             </div>
//             <div className="p-6 text-center border-t-4 border-[#A9B5DF]">
//               <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">تبرع بملابس</h2>
//               <p className="text-gray-600 mb-6">تبرع بملابس جديدة أو مستعملة بحالة جيدة.</p>
//               <button className="bg-[#A9B5DF] hover:bg-[#2D336B] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
//                 تبرع الآن
//               </button>
//             </div>
//           </div>
          
//           {/* Books Donation Card */}
//           <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
//             <div className="h-32 bg-[#2D336B] flex items-center justify-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//               </svg>
//             </div>
//             <div className="p-6 text-center border-t-4 border-[#A9B5DF]">
//               <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">تبرع بكتب</h2>
//               <p className="text-gray-600 mb-6">ساهم في توفير الكتب للطلاب المحتاجين.</p>
//               <button className="bg-[#A9B5DF] hover:bg-[#2D336B] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
//                 تبرع الآن
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Donate;
import React, { useState } from 'react';

const Donate = () => {
  const [activeTab, setActiveTab] = useState('donations');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F9FC]">
      <div className="w-full max-w-6xl px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#2D336B] text-center relative">
          التبرعات
          <span className="block h-1 w-24 bg-[#A9B5DF] mx-auto mt-4 rounded-full"></span>
        </h1>
        
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full shadow-md p-1 flex">
            <button 
              onClick={() => setActiveTab('donations')}
              className={`px-6 py-2 rounded-full text-center transition-colors duration-300 ${
                activeTab === 'donations' ? 'bg-[#2D336B] text-white' : 'text-[#2D336B]'
              }`}
            >
              التبرعات العينية
            </button>
            <button 
              onClick={() => setActiveTab('charity')}
              className={`px-6 py-2 rounded-full text-center transition-colors duration-300 ${
                activeTab === 'charity' ? 'bg-[#2D336B] text-white' : 'text-[#2D336B]'
              }`}
            >
              الصدقات
            </button>
          </div>
        </div>

        {/* In-kind Donations Section */}
        {activeTab === 'donations' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Food Donation Card */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-32 bg-[#2D336B] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6 text-center border-t-4 border-[#A9B5DF]">
                <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">تبرع بطعام</h2>
                <p className="text-gray-600 mb-6">ساهم في توفير وجبات طعام للأسر المحتاجة.</p>
                <button className="bg-[#A9B5DF] hover:bg-[#2D336B] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                  تبرع الآن
                </button>
              </div>
            </div>
            
            {/* Clothes Donation Card */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-32 bg-[#2D336B] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div className="p-6 text-center border-t-4 border-[#A9B5DF]">
                <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">تبرع بملابس</h2>
                <p className="text-gray-600 mb-6">تبرع بملابس جديدة أو مستعملة بحالة جيدة.</p>
                <button className="bg-[#A9B5DF] hover:bg-[#2D336B] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                  تبرع الآن
                </button>
              </div>
            </div>
            
            {/* Books Donation Card */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-32 bg-[#2D336B] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6 text-center border-t-4 border-[#A9B5DF]">
                <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">تبرع بكتب</h2>
                <p className="text-gray-600 mb-6">ساهم في توفير الكتب للطلاب المحتاجين.</p>
                <button className="bg-[#A9B5DF] hover:bg-[#2D336B] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                  تبرع الآن
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Charity Section */}
        {activeTab === 'charity' && (
          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[#2D336B] mb-4">الصدقات</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">تصدق بما تيسر من المال لدعم مشاريع الخير ومساعدة المحتاجين. الصدقة تطفئ غضب الرب وتمحو الخطيئة كما يمحو الماء النار.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Iftar Sa'im Card */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-40 bg-gradient-to-r from-[#2D336B] to-[#3D4380] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="p-6 text-center border-t-4 border-[#A9B5DF]">
                  <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">إفطار صائم</h2>
                  <p className="text-gray-600 mb-6">من فطر صائماً كان له مثل أجره من غير أن ينقص من أجر الصائم شيء.</p>
                  <div className="mb-6">
                    <span className="block text-sm text-gray-500 mb-2">قيمة إفطار صائم</span>
                    <span className="text-xl font-bold text-[#2D336B]">20 ريال</span>
                  </div>
                  <button className="bg-[#A9B5DF] hover:bg-[#2D336B] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                    تبرع الآن
                  </button>
                </div>
              </div>
              
              {/* Orphan Sponsorship Card */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-40 bg-gradient-to-r from-[#2D336B] to-[#3D4380] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="p-6 text-center border-t-4 border-[#A9B5DF]">
                  <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">كفالة يتيم</h2>
                  <p className="text-gray-600 mb-6">أنا وكافل اليتيم في الجنة كهاتين. وأشار بالسبابة والوسطى.</p>
                  <div className="mb-6">
                    <span className="block text-sm text-gray-500 mb-2">قيمة الكفالة الشهرية</span>
                    <span className="text-xl font-bold text-[#2D336B]">300 ريال</span>
                  </div>
                  <button className="bg-[#A9B5DF] hover:bg-[#2D336B] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                    تبرع الآن
                  </button>
                </div>
              </div>
              
              {/* Zakat Card */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-40 bg-gradient-to-r from-[#2D336B] to-[#3D4380] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="p-6 text-center border-t-4 border-[#A9B5DF]">
                  <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">الزكاة</h2>
                  <p className="text-gray-600 mb-6">أخرج زكاة مالك لتطهير أموالك وسد حاجة الفقراء والمساكين.</p>
                  <div className="flex justify-center gap-4 mb-6">
                    <button className="border border-[#A9B5DF] text-[#2D336B] font-medium py-2 px-4 rounded-lg hover:bg-[#F0F3FA] transition-colors duration-300">
                      حاسبة الزكاة
                    </button>
                  </div>
                  <button className="bg-[#A9B5DF] hover:bg-[#2D336B] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                    تبرع الآن
                  </button>
                </div>
              </div>
              
              {/* Sadaqah Jariyah Card */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-40 bg-gradient-to-r from-[#2D336B] to-[#3D4380] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-6 text-center border-t-4 border-[#A9B5DF]">
                  <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">صدقة جارية</h2>
                  <p className="text-gray-600 mb-6">ساهم في بناء المساجد وحفر الآبار ومشاريع الصدقات الجارية.</p>
                  <div className="mb-6">
                    <span className="block text-sm text-gray-500 mb-2">تبرع بأي مبلغ</span>
                  </div>
                  <button className="bg-[#A9B5DF] hover:bg-[#2D336B] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                    تبرع الآن
                  </button>
                </div>
              </div>
              
              {/* Feed the Poor Card */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-40 bg-gradient-to-r from-[#2D336B] to-[#3D4380] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6 text-center border-t-4 border-[#A9B5DF]">
                  <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">إطعام مسكين</h2>
                  <p className="text-gray-600 mb-6">ما آمن بي من بات شبعان وجاره جائع إلى جنبه وهو يعلم به.</p>
                  <div className="mb-6">
                    <span className="block text-sm text-gray-500 mb-2">قيمة إطعام مسكين</span>
                    <span className="text-xl font-bold text-[#2D336B]">15 ريال</span>
                  </div>
                  <button className="bg-[#A9B5DF] hover:bg-[#2D336B] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                    تبرع الآن
                  </button>
                </div>
              </div>
              
              {/* Charity Fund Card */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-40 bg-gradient-to-r from-[#2D336B] to-[#3D4380] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="p-6 text-center border-t-4 border-[#A9B5DF]">
                  <h2 className="text-2xl font-bold mb-4 text-[#2D336B]">صندوق الخيرات</h2>
                  <p className="text-gray-600 mb-6">صندوق عام للتبرعات يتم توجيهها للأكثر احتياجاً.</p>
                  <div className="mb-6">
                    <span className="block text-sm text-gray-500 mb-2">تبرع بأي مبلغ</span>
                  </div>
                  <button className="bg-[#A9B5DF] hover:bg-[#2D336B] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                    تبرع الآن
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donate;