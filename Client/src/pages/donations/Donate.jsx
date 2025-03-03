import React from 'react';

const Donate = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F9FC]">
      <div className="w-full max-w-6xl px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-[#2D336B] text-center relative">
          التبرعات
          <span className="block h-1 w-24 bg-[#A9B5DF] mx-auto mt-4 rounded-full"></span>
        </h1>
        
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
      </div>
    </div>
  );
};

export default Donate;