// // // import React, { useState } from "react";
// // // import {
// // //   Heart,
// // //   DollarSign,
// // //   Users,
// // //   Info,
// // //   Calendar,
// // //   Phone,
// // //   Home,
// // //   User,
// // //   LogIn,
// // //   LogOut,
// // //   Menu,
// // // } from "lucide-react";

// // // const Navbar = () => {
// // //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// // //   const [showProfileMenu, setShowProfileMenu] = useState(false);

// // //   const toggleProfileMenu = () => {
// // //     setShowProfileMenu(!showProfileMenu);
// // //   };

// // //   return (
// // //     <div className="w-full">
// // //       {/* Top header with logo and secondary elements */}
// // //       <div className="bg-white shadow-lg py-4">
// // //         <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
// // //           <div className="flex items-center space-x-4">
// // //             <div className="flex items-center">
// // //               <Heart className="h-10 w-10 text-[#394867] mr-3" />
// // //               <span className="font-bold text-[#394867] text-3xl">جود</span>
// // //             </div>
// // //             <span className="text-gray-800 text-lg hidden md:block">
// // //               معاً لمستقبل أفضل
// // //             </span>
// // //           </div>

// // //           <div className="flex items-center space-x-6">
// // //             <button className="bg-[#394867] text-white hover:bg-gray-100 px-5 py-2 rounded-md font-bold flex items-center">
// // //               <DollarSign className="h-5 w-5 mr-2" />
// // //               <span>تبرع الآن</span>
// // //             </button>

// // //             {isLoggedIn ? (
// // //               <div className="relative">
// // //                 <button
// // //                   onClick={toggleProfileMenu}
// // //                   className="flex items-center space-x-2 focus:outline-none"
// // //                 >
// // //                   <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white overflow-hidden">
// // //                     <img
// // //                       src="/api/placeholder/40/40"
// // //                       alt="صورة الملف الشخصي"
// // //                       className="w-full h-full object-cover"
// // //                     />
// // //                   </div>
// // //                 </button>

// // //                 {showProfileMenu && (
// // //                   <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
// // //                     <a
// // //                       href="#"
// // //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
// // //                     >
// // //                       <User className="h-4 w-4 mr-2" />
// // //                       <span>الملف الشخصي</span>
// // //                     </a>
// // //                     <a
// // //                       href="#"
// // //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
// // //                     >
// // //                       <Heart className="h-4 w-4 mr-2" />
// // //                       <span>تبرعاتي</span>
// // //                     </a>
// // //                     <a
// // //                       href="#"
// // //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
// // //                     >
// // //                       <Calendar className="h-4 w-4 mr-2" />
// // //                       <span>أنشطتي</span>
// // //                     </a>
// // //                     <div className="border-t border-gray-200 my-1"></div>
// // //                     <button
// // //                       onClick={() => setIsLoggedIn(false)}
// // //                       className="block w-full text-right px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center"
// // //                     >
// // //                       <LogOut className="h-4 w-4 mr-2" />
// // //                       <span>تسجيل الخروج</span>
// // //                     </button>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             ) : (
// // //               <div className="flex items-center space-x-3">
// // //                 <button
// // //                   onClick={() => setIsLoggedIn(true)}
// // //                   className="flex items-center bg-[#394867] hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300"
// // //                 >
// // //                   <LogIn className="h-4 w-4 mr-2" />
// // //                   <span>تسجيل الدخول</span>
// // //                 </button>
// // //                 <button className="flex items-center text-[#394867] hover:text-gray-200 transition duration-300">
// // //                   <User className="h-4 w-4 mr-2" />
// // //                   <span>إنشاء حساب</span>
// // //                 </button>
// // //               </div>
// // //             )}

// // //             <div className="text-[#394867] text-right">
// // //               <div className="font-bold">اتصل بنا</div>
// // //               <div>+970 123 456 789</div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Main navigation */}
// // //       <nav className="bg-white shadow-xl">
// // //         <div className="max-w-6xl mx-auto px-8">
// // //           <div className="flex justify-center">
// // //             <div className="flex space-x-1">
// // //               <a
// // //                 href="#"
// // //                 className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
// // //               >
// // //                 <Home className="h-5 w-5 mr-2" />
// // //                 <span>الرئيسية</span>
// // //               </a>
// // //               <a
// // //                 href="#"
// // //                 className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
// // //               >
// // //                 <Info className="h-5 w-5 mr-2" />
// // //                 <span>من نحن</span>
// // //               </a>
// // //               <a
// // //                 href="AboutUs"
// // //                 className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
// // //               >
// // //                 <Heart className="h-5 w-5 mr-2" />
// // //                 <span>مشاريعنا</span>
// // //               </a>
// // //               <a
// // //                 href="#"
// // //                 className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
// // //               >
// // //                 <Calendar className="h-5 w-5 mr-2" />
// // //                 <span>الفعاليات</span>
// // //               </a>
// // //               <a
// // //                 href="#"
// // //                 className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
// // //               >
// // //                 <Users className="h-5 w-5 mr-2" />
// // //                 <span>المتطوعون</span>
// // //               </a>
// // //               <a
// // //                 href="#"
// // //                 className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
// // //               >
// // //                 <Phone className="h-5 w-5 mr-2" />
// // //                 <span>اتصل بنا</span>
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </nav>
// // //     </div>
// // //   );
// // // };

// // // export default Navbar;



// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   Heart,
// //   DollarSign,
// //   Users,
// //   Info,
// //   Calendar,
// //   Phone,
// //   Home,
// //   User,
// //   LogIn,
// //   LogOut,
// //   Menu,
// //   X,
// //   ChevronDown,
// // } from "lucide-react";

// // const Navbar = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [showProfileMenu, setShowProfileMenu] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const toggleProfileMenu = () => {
// //     setShowProfileMenu(!showProfileMenu);
// //   };

// //   const toggleMobileMenu = () => {
// //     setIsMobileMenuOpen(!isMobileMenuOpen);
// //   };

// //   return (
// //     <div className="w-full" dir="rtl">
// //       {/* Top header with logo and secondary elements */}
// //       <div className="bg-white shadow-lg py-4">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
// //           {/* Logo and Slogan - Right side in RTL */}
// //           <div className="flex items-center">
// //             <div className="flex items-center">
// //               <span className="font-bold text-[#394867] text-3xl ml-3">
// //                 جود
// //               </span>
// //               <Heart className="h-10 w-10 text-[#394867]" />
// //             </div>
// //             <span className="text-gray-800 text-lg mr-4 hidden md:block">
// //               معاً لمستقبل أفضل
// //             </span>
// //           </div>

// //           {/* Contact and buttons - Left side in RTL */}
// //           <div className="flex items-center space-x-reverse space-x-6">
// //             {/* Mobile menu button */}
// //             <button
// //               className="md:hidden text-[#394867] p-2 focus:outline-none"
// //               onClick={toggleMobileMenu}
// //             >
// //               {isMobileMenuOpen ? (
// //                 <X className="h-6 w-6" />
// //               ) : (
// //                 <Menu className="h-6 w-6" />
// //               )}
// //             </button>

// //             {/* Contact info */}
// //             <div className="text-[#394867] text-right hidden sm:block">
// //               <div className="font-bold">اتصل بنا</div>
// //               <div dir="ltr" className="text-right">
// //                 +970 123 456 789
// //               </div>
// //             </div>

// //             {/* Login/Profile section */}
// //             {isLoggedIn ? (
// //               <div className="relative">
// //                 <button
// //                   onClick={toggleProfileMenu}
// //                   className="flex items-center focus:outline-none"
// //                 >
// //                   <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white overflow-hidden">
// //                     <img
// //                       src="/api/placeholder/40/40"
// //                       alt="صورة الملف الشخصي"
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </div>
// //                   <ChevronDown className="h-4 w-4 mr-1 text-[#394867]" />
// //                 </button>

// //                 {showProfileMenu && (
// //                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
// //                     <Link
// //                       to="/"
// //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
// //                     >
// //                       <User className="h-4 w-4 ml-2" />
// //                       <span>الملف الشخصي</span>
// //                     </Link>
// //                     <a
// //                       href="#"
// //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
// //                     >
// //                       <Heart className="h-4 w-4 ml-2" />
// //                       <span>تبرعاتي</span>
// //                     </a>
// //                     <a
// //                       href="#"
// //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
// //                     >
// //                       <Calendar className="h-4 w-4 ml-2" />
// //                       <span>أنشطتي</span>
// //                     </a>
// //                     <div className="border-t border-gray-200 my-1"></div>
// //                     <button
// //                       onClick={() => setIsLoggedIn(false)}
// //                       className="block w-full text-right px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center"
// //                     >
// //                       <LogOut className="h-4 w-4 ml-2" />
// //                       <span>تسجيل الخروج</span>
// //                     </button>
// //                   </div>
// //                 )}
// //               </div>
// //             ) : (
// //               <div className="flex items-center space-x-reverse space-x-3">

// //               <Link to={"/Login"}>

              

// //                 <button
// //                   onClick={() => setIsLoggedIn(true)}
// //                   className="hidden sm:flex items-center bg-[#394867] hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300"
// //                 >
// //                   <span>تسجيل الدخول</span>
// //                   <LogIn className="h-4 w-4 mr-2" />

// //                 </button></Link>
// //                 <Link to={"/Signup"}>

// //                 </button>

// //                 <button className="hidden sm:flex items-center text-[#394867] hover:text-gray-600 transition duration-300">
// //                   <span>إنشاء حساب</span>
// //                   <User className="h-4 w-4 mr-2" />
// //                 </button>
// //                 </Link>
// //               </div>
// //             )}





// //             {/* Donate button always visible */}
// //             <Link to="/PaymentPage">
// //               <button className="bg-[#394867] text-white hover:bg-gray-600 px-3 sm:px-5 py-2 rounded-md font-bold flex items-center transition duration-300">
// //                 <span>تبرع الآن</span>
// //                 <DollarSign className="h-5 w-5 mr-2" />
// //               </button>
// //             </Link>

// //           </div>
// //         </div>
// //       </div>

// //       {/* Main navigation */}
// //       <nav className="bg-white shadow-xl">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //           {/* Desktop Navigation */}
// //           <div className="hidden md:flex justify-center">
// //             <div className="flex">
// //               <Link
// //                 to="/"
// //                 className="flex items-center py-4 px-3 sm:px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300 border-b-2 border-transparent hover:border-[#394867]"
// //               >
// //                 <Home className="h-5 w-5 ml-2" />
// //                 <span>الرئيسية</span>
// //               </Link>
// //               <Link
// //                 to="/aboutUs"
// //                 className="flex items-center py-4 px-3 sm:px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300 border-b-2 border-transparent hover:border-[#394867]"
// //               >
// //                 <Info className="h-5 w-5 ml-2" />
// //                 <span>من نحن</span>
// //               </Link>
// //               <Link
// //                 to="/card"
// //                 className="flex items-center py-4 px-3 sm:px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300 border-b-2 border-transparent hover:border-[#394867]"
// //               >
// //                 <Heart className="h-5 w-5 ml-2" />
// //                 <span>مشاريعنا</span>
// //               </Link>
// //               <Link
// //                 to="/Donate"
// //                 className="flex items-center py-4 px-3 sm:px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300 border-b-2 border-transparent hover:border-[#394867]"
// //               >
// //                 <Calendar className="h-5 w-5 ml-2" />
// //                 <span>الفعاليات</span>
// //               </Link>
// //               <Link
// //                 to="#"
// //                 className="flex items-center py-4 px-3 sm:px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300 border-b-2 border-transparent hover:border-[#394867]"
// //               >
// //                 <Users className="h-5 w-5 ml-2" />
// //                 <span>المتطوعون</span>
// //               </Link>
// //               <a
// //                 href="#"
// //                 className="flex items-center py-4 px-3 sm:px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300 border-b-2 border-transparent hover:border-[#394867]"
// //               >
// //                 <Phone className="h-5 w-5 ml-2" />
// //                 <span>اتصل بنا</span>
// //               </a>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Mobile Navigation Menu */}
// //         {isMobileMenuOpen && (
// //           <div className="md:hidden bg-white border-t border-gray-200 shadow-inner">
// //             <div className="px-4 pt-2 pb-3 space-y-1">
// //               <Link
// //                 to="/"
// //                 className="block py-3 px-4 text-[#394867] hover:bg-gray-100 font-medium border-r-4 border-transparent hover:border-[#394867] flex items-center"
// //               >
// //                 <Home className="h-5 w-5 ml-3" />
// //                 <span>الرئيسية</span>
// //               </Link>
// //               <Link
// //                 to="/aboutUs"
// //                 className="block py-3 px-4 text-[#394867] hover:bg-gray-100 font-medium border-r-4 border-transparent hover:border-[#394867] flex items-center"
// //               >
// //                 <Info className="h-5 w-5 ml-3" />
// //                 <span>من نحن</span>
// //               </Link>
// //               <Link
// //                 to="/card"
// //                 className="block py-3 px-4 text-[#394867] hover:bg-gray-100 font-medium border-r-4 border-transparent hover:border-[#394867] flex items-center"
// //               >
// //                 <Heart className="h-5 w-5 ml-3" />
// //                 <span>مشاريعنا</span>
// //               </Link>
// //               <Link
// //                 to="/Donate"
// //                 className="block py-3 px-4 text-[#394867] hover:bg-gray-100 font-medium border-r-4 border-transparent hover:border-[#394867] flex items-center"
// //               >
// //                 <Calendar className="h-5 w-5 ml-3" />
// //                 <span>الفعاليات</span>
// //               </Link>
// //               <Link
// //                 to="#"
// //                 className="block py-3 px-4 text-[#394867] hover:bg-gray-100 font-medium border-r-4 border-transparent hover:border-[#394867] flex items-center"
// //               >
// //                 <Users className="h-5 w-5 ml-3" />
// //                 <span>المتطوعون</span>
// //               </Link>
// //               <a
// //                 href="#"
// //                 className="block py-3 px-4 text-[#394867] hover:bg-gray-100 font-medium border-r-4 border-transparent hover:border-[#394867] flex items-center"
// //               >
// //                 <Phone className="h-5 w-5 ml-3" />
// //                 <span>اتصل بنا</span>
// //               </a>

// //               {/* Mobile login buttons */}
// //               {!isLoggedIn && (
// //                 <div className="pt-4 pb-3 border-t border-gray-200">
// //                   <div className="flex items-center justify-center space-x-reverse space-x-4 mt-3">
// //                     <button
// //                       onClick={() => setIsLoggedIn(true)}
// //                       className="flex items-center bg-[#394867] hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300"
// //                     >
// //                       <span>تسجيل الدخول</span>
// //                       <LogIn className="h-4 w-4 mr-2" />
// //                     </button>
// //                     <button className="flex items-center text-[#394867] hover:text-gray-600 transition duration-300">
// //                       <span>إنشاء حساب</span>
// //                       <User className="h-4 w-4 mr-2" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         )}
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Navbar;
// // import React, { useState } from "react";
// // import {
// //   Heart,
// //   DollarSign,
// //   Users,
// //   Info,
// //   Calendar,
// //   Phone,
// //   Home,
// //   User,
// //   LogIn,
// //   LogOut,
// //   Menu,
// // } from "lucide-react";

// // const Navbar = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [showProfileMenu, setShowProfileMenu] = useState(false);

// //   const toggleProfileMenu = () => {
// //     setShowProfileMenu(!showProfileMenu);
// //   };

// //   return (
// //     <div className="w-full">
// //       {/* Top header with logo and secondary elements */}
// //       <div className="bg-white shadow-lg py-4">
// //         <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
// //           <div className="flex items-center space-x-4">
// //             <div className="flex items-center">
// //               <Heart className="h-10 w-10 text-[#394867] mr-3" />
// //               <span className="font-bold text-[#394867] text-3xl">جود</span>
// //             </div>
// //             <span className="text-gray-800 text-lg hidden md:block">
// //               معاً لمستقبل أفضل
// //             </span>
// //           </div>

// //           <div className="flex items-center space-x-6">
// //             <button className="bg-[#394867] text-white hover:bg-gray-100 px-5 py-2 rounded-md font-bold flex items-center">
// //               <DollarSign className="h-5 w-5 mr-2" />
// //               <span>تبرع الآن</span>
// //             </button>

// //             {isLoggedIn ? (
// //               <div className="relative">
// //                 <button
// //                   onClick={toggleProfileMenu}
// //                   className="flex items-center space-x-2 focus:outline-none"
// //                 >
// //                   <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white overflow-hidden">
// //                     <img
// //                       src="/api/placeholder/40/40"
// //                       alt="صورة الملف الشخصي"
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </div>
// //                 </button>

// //                 {showProfileMenu && (
// //                   <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
// //                     <a
// //                       href="#"
// //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
// //                     >
// //                       <User className="h-4 w-4 mr-2" />
// //                       <span>الملف الشخصي</span>
// //                     </a>
// //                     <a
// //                       href="#"
// //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
// //                     >
// //                       <Heart className="h-4 w-4 mr-2" />
// //                       <span>تبرعاتي</span>
// //                     </a>
// //                     <a
// //                       href="#"
// //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
// //                     >
// //                       <Calendar className="h-4 w-4 mr-2" />
// //                       <span>أنشطتي</span>
// //                     </a>
// //                     <div className="border-t border-gray-200 my-1"></div>
// //                     <button
// //                       onClick={() => setIsLoggedIn(false)}
// //                       className="block w-full text-right px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center"
// //                     >
// //                       <LogOut className="h-4 w-4 mr-2" />
// //                       <span>تسجيل الخروج</span>
// //                     </button>
// //                   </div>
// //                 )}
// //               </div>
// //             ) : (
// //               <div className="flex items-center space-x-3">
// //                 <button
// //                   onClick={() => setIsLoggedIn(true)}
// //                   className="flex items-center bg-[#394867] hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300"
// //                 >
// //                   <LogIn className="h-4 w-4 mr-2" />
// //                   <span>تسجيل الدخول</span>
// //                 </button>
// //                 <button className="flex items-center text-[#394867] hover:text-gray-200 transition duration-300">
// //                   <User className="h-4 w-4 mr-2" />
// //                   <span>إنشاء حساب</span>
// //                 </button>
// //               </div>
// //             )}

// //             <div className="text-[#394867] text-right">
// //               <div className="font-bold">اتصل بنا</div>
// //               <div>+970 123 456 789</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main navigation */}
// //       <nav className="bg-white shadow-xl">
// //         <div className="max-w-6xl mx-auto px-8">
// //           <div className="flex justify-center">
// //             <div className="flex space-x-1">
// //               <a
// //                 href="#"
// //                 className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
// //               >
// //                 <Home className="h-5 w-5 mr-2" />
// //                 <span>الرئيسية</span>
// //               </a>
// //               <a
// //                 href="#"
// //                 className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
// //               >
// //                 <Info className="h-5 w-5 mr-2" />
// //                 <span>من نحن</span>
// //               </a>
// //               <a
// //                 href="AboutUs"
// //                 className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
// //               >
// //                 <Heart className="h-5 w-5 mr-2" />
// //                 <span>مشاريعنا</span>
// //               </a>
// //               <a
// //                 href="#"
// //                 className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
// //               >
// //                 <Calendar className="h-5 w-5 mr-2" />
// //                 <span>الفعاليات</span>
// //               </a>
// //               <a
// //                 href="#"
// //                 className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
// //               >
// //                 <Users className="h-5 w-5 mr-2" />
// //                 <span>المتطوعون</span>
// //               </a>
// //               <a
// //                 href="#"
// //                 className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
// //               >
// //                 <Phone className="h-5 w-5 mr-2" />
// //                 <span>اتصل بنا</span>
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Navbar;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Heart,
//   DollarSign,
//   Users,
//   Info,
//   Calendar,
//   Phone,
//   Home,
//   User,
//   LogIn,
//   LogOut,
//   Menu,
//   X,
//   ChevronDown,
// } from "lucide-react";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleProfileMenu = () => {
//     setShowProfileMenu(!showProfileMenu);
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="w-full" dir="rtl">
//       {/* Top header with logo and secondary elements */}
//       <div className="bg-white shadow-lg py-4">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//           {/* Logo and Slogan - Right side in RTL */}
//           <div className="flex items-center">
//             <div className="flex items-center">
//               <span className="font-bold text-[#394867] text-3xl ml-3">
//                 جود
//               </span>
//               <Heart className="h-10 w-10 text-[#394867]" />
//             </div>
//             <span className="text-gray-800 text-lg mr-4 hidden md:block">
//               معاً لمستقبل أفضل
//             </span>
//           </div>

//           {/* Contact and buttons - Left side in RTL */}
//           <div className="flex items-center space-x-reverse space-x-6">
//             {/* Mobile menu button */}
//             <button
//               className="md:hidden text-[#394867] p-2 focus:outline-none"
//               onClick={toggleMobileMenu}
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>

//             {/* Contact info */}
//             <div className="text-[#394867] text-right hidden sm:block">
//               <div className="font-bold">اتصل بنا</div>
//               <div dir="ltr" className="text-right">
//                 +970 123 456 789
//               </div>
//             </div>

//             {/* Login/Profile section */}
//             {isLoggedIn ? (
//               <div className="relative">
//                 <button
//                   onClick={toggleProfileMenu}
//                   className="flex items-center focus:outline-none"
//                 >
//                   <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white overflow-hidden">
//                     <img
//                       src="/api/placeholder/40/40"
//                       alt="صورة الملف الشخصي"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <ChevronDown className="h-4 w-4 mr-1 text-[#394867]" />
//                 </button>

//                 {showProfileMenu && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//                     <Link
//                       to="/"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
//                     >
//                       <User className="h-4 w-4 ml-2" />
//                       <span>الملف الشخصي</span>
//                     </Link>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
//                     >
//                       <Heart className="h-4 w-4 ml-2" />
//                       <span>تبرعاتي</span>
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
//                     >
//                       <Calendar className="h-4 w-4 ml-2" />
//                       <span>أنشطتي</span>
//                     </a>
//                     <div className="border-t border-gray-200 my-1"></div>
//                     <button
//                       onClick={() => setIsLoggedIn(false)}
//                       className="block w-full text-right px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center"
//                     >
//                       <LogOut className="h-4 w-4 ml-2" />
//                       <span>تسجيل الخروج</span>
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="flex items-center space-x-reverse space-x-3">
//               <Link to={"/Login"}>
//                 <button
//                   onClick={() => setIsLoggedIn(true)}
//                   className="hidden sm:flex items-center bg-[#394867] hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300"
//                 >
//                   <span>تسجيل الدخول</span>
//                   <LogIn className="h-4 w-4 mr-2" />
//                 </button></Link>
//                 <Link to={"/Signup"}>
//                 <button className="hidden sm:flex items-center text-[#394867] hover:text-gray-600 transition duration-300">
//                   <span>إنشاء حساب</span>
//                   <User className="h-4 w-4 mr-2" />
//                 </button>
//                 </Link>
//               </div>
//             )}

//             {/* Donate button always visible */}
//             <Link to="/PaymentPage">
//               <button className="bg-[#394867] text-white hover:bg-gray-600 px-3 sm:px-5 py-2 rounded-md font-bold flex items-center transition duration-300">
//                 <span>تبرع الآن</span>
//                 <DollarSign className="h-5 w-5 mr-2" />
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Main navigation */}
//       <nav className="bg-white shadow-xl">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex justify-center">
//             <div className="flex">
//               <Link
//                 to="/"
//                 className="flex items-center py-4 px-3 sm:px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300 border-b-2 border-transparent hover:border-[#394867]"
//               >
//                 <Home className="h-5 w-5 ml-2" />
//                 <span>الرئيسية</span>
//               </Link>
//               <Link
//                 to="/aboutUs"
//                 className="flex items-center py-4 px-3 sm:px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300 border-b-2 border-transparent hover:border-[#394867]"
//               >
//                 <Info className="h-5 w-5 ml-2" />
//                 <span>من نحن</span>
//               </Link>
//               <Link
//                 to="/card"
//                 className="flex items-center py-4 px-3 sm:px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300 border-b-2 border-transparent hover:border-[#394867]"
//               >
//                 <Heart className="h-5 w-5 ml-2" />
//                 <span>مشاريعنا</span>
//               </Link>
//               <Link
//                 to="/Donate"
//                 className="flex items-center py-4 px-3 sm:px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300 border-b-2 border-transparent hover:border-[#394867]"
//               >
//                 <Calendar className="h-5 w-5 ml-2" />
//                 <span>الفعاليات</span>
//               </Link>
//               <Link
//                 to="#"
//                 className="flex items-center py-4 px-3 sm:px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300 border-b-2 border-transparent hover:border-[#394867]"
//               >
//                 <Users className="h-5 w-5 ml-2" />
//                 <span>المتطوعون</span>
//               </Link>
//               <a
//                 href="#"
//                 className="flex items-center py-4 px-3 sm:px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300 border-b-2 border-transparent hover:border-[#394867]"
//               >
//                 <Phone className="h-5 w-5 ml-2" />
//                 <span>اتصل بنا</span>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-200 shadow-inner">
//             <div className="px-4 pt-2 pb-3 space-y-1">
//               <Link
//                 to="/"
//                 className="block py-3 px-4 text-[#394867] hover:bg-gray-100 font-medium border-r-4 border-transparent hover:border-[#394867] flex items-center"
//               >
//                 <Home className="h-5 w-5 ml-3" />
//                 <span>الرئيسية</span>
//               </Link>
//               <Link
//                 to="/aboutUs"
//                 className="block py-3 px-4 text-[#394867] hover:bg-gray-100 font-medium border-r-4 border-transparent hover:border-[#394867] flex items-center"
//               >
//                 <Info className="h-5 w-5 ml-3" />
//                 <span>من نحن</span>
//               </Link>
//               <Link
//                 to="/card"
//                 className="block py-3 px-4 text-[#394867] hover:bg-gray-100 font-medium border-r-4 border-transparent hover:border-[#394867] flex items-center"
//               >
//                 <Heart className="h-5 w-5 ml-3" />
//                 <span>مشاريعنا</span>
//               </Link>
//               <Link
//                 to="/Donate"
//                 className="block py-3 px-4 text-[#394867] hover:bg-gray-100 font-medium border-r-4 border-transparent hover:border-[#394867] flex items-center"
//               >
//                 <Calendar className="h-5 w-5 ml-3" />
//                 <span>الفعاليات</span>
//               </Link>
//               <Link
//                 to="#"
//                 className="block py-3 px-4 text-[#394867] hover:bg-gray-100 font-medium border-r-4 border-transparent hover:border-[#394867] flex items-center"
//               >
//                 <Users className="h-5 w-5 ml-3" />
//                 <span>المتطوعون</span>
//               </Link>
//               <a
//                 href="#"
//                 className="block py-3 px-4 text-[#394867] hover:bg-gray-100 font-medium border-r-4 border-transparent hover:border-[#394867] flex items-center"
//               >
//                 <Phone className="h-5 w-5 ml-3" />
//                 <span>اتصل بنا</span>
//               </a>

//               {/* Mobile login buttons */}
//               {!isLoggedIn && (
//                 <div className="pt-4 pb-3 border-t border-gray-200">
//                   <div className="flex items-center justify-center space-x-reverse space-x-4 mt-3">
//                     <button
//                       onClick={() => setIsLoggedIn(true)}
//                       className="flex items-center bg-[#394867] hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300"
//                     >
//                       <span>تسجيل الدخول</span>
//                       <LogIn className="h-4 w-4 mr-2" />
//                     </button>
//                     <button className="flex items-center text-[#394867] hover:text-gray-600 transition duration-300">
//                       <span>إنشاء حساب</span>
//                       <User className="h-4 w-4 mr-2" />
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


///

// import { useState, useEffect } from "react";
// import { Search, Heart, Link } from "lucide-react";
// import { Link as RouterLink } from "react-router-dom";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   // إضافة تأثير التمرير
//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white shadow-lg py-2"
//           : "bg-white/80 backdrop-blur-md py-4"
//       }`}
//       dir="rtl" // تغيير الاتجاه إلى اليمين لليسار
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* Logo with animation */}
//         <div className="flex items-center">
//           <Heart className="w-6 h-6 text-rose-500 mr-2 animate-pulse" />
//           <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent">
//             جود
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="flex space-x-8 text-gray-700">
//           <RouterLink to="/">
//             <span className="font-medium hover:text-blue-600 transition-colors">
//               الرئيسية
//             </span>
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
//           </RouterLink>
//           <RouterLink to="/aboutUs">
//             <span className="font-medium hover:text-blue-600 transition-colors">
//               من نحن
//             </span>
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
//           </RouterLink>
//           <RouterLink to="/card">
//             <span className="font-medium hover:text-blue-600 transition-colors">
//               مشاريعنا
//             </span>
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
//           </RouterLink>
//           <RouterLink to="/Donate">
//             <span className="font-medium hover:text-blue-600 transition-colors">
//               الفعاليات
//             </span>
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
//           </RouterLink>
//         </div>

//         {/* Actions */}
//         <div className="flex items-center space-x-4">
//           <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
//             <Search className="w-5 h-5" />
//           </button>
//           <RouterLink to="/PaymentPage">
//             <button className="bg-[#394867] text-white hover:bg-gray-600 px-3 sm:px-5 py-2 rounded-md font-bold flex items-center transition duration-300">
//               <span>تبرع الآن</span>
//               <Heart className="h-5 w-5 mr-2" />
//             </button>
//           </RouterLink>

//           <RouterLink to="/Login">
//             <button className="bg-white border border-gray-200 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
//               تسجيل الدخول
//             </button>
//           </RouterLink>

//           <RouterLink to="/Signup">
//             <button className="bg-white border border-gray-200 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
//               إنشاء حساب
//             </button>
//           </RouterLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { Search, Heart } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* تحديد ارتفاع للـ Navbar لتجنب التداخل */}
      <div className="h-16"></div> 
      
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 h-16 flex items-center ${
          scrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-md"
        }`}
        dir="rtl"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Heart className="w-6 h-6 text-rose-500 mr-2 animate-pulse" />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent">
              جود
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="flex space-x-8 text-gray-700">
            <RouterLink to="/" className="font-medium hover:text-blue-600 transition-colors">
              الرئيسية
            </RouterLink>
            <RouterLink to="/aboutUs" className="font-medium hover:text-blue-600 transition-colors">
              من نحن
            </RouterLink>
            <RouterLink to="/card" className="font-medium hover:text-blue-600 transition-colors">
              مشاريعنا
            </RouterLink>
            <RouterLink to="/Donate" className="font-medium hover:text-blue-600 transition-colors">
              الفعاليات
            </RouterLink>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <RouterLink to="/PaymentPage">
              <button className="bg-[#394867] text-white hover:bg-gray-600 px-3 sm:px-5 py-2 rounded-md font-bold flex items-center transition duration-300">
                <span>تبرع الآن</span>
                <Heart className="h-5 w-5 mr-2" />
              </button>
            </RouterLink>

            <RouterLink to="/Login">
              <button className="bg-white border border-gray-200 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                تسجيل الدخول
              </button>
            </RouterLink>

            <RouterLink to="/Signup">
              <button className="bg-white border border-gray-200 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                إنشاء حساب
              </button>
            </RouterLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
