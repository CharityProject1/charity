import React, { useState } from "react";
import {
  Heart,
  DollarSign,
  Users,
  Info,
  Calendar,
  Phone,
  Home,
  User,
  LogIn,
  LogOut,
  Menu,
} from "lucide-react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div className="w-full">
      {/* Top header with logo and secondary elements */}
      <div className="bg-white shadow-lg py-4">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Heart className="h-10 w-10 text-[#394867] mr-3" />
              <span className="font-bold text-[#394867] text-3xl">جود</span>
            </div>
            <span className="text-gray-800 text-lg hidden md:block">
              معاً لمستقبل أفضل
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <button className="bg-[#394867] text-white hover:bg-gray-100 px-5 py-2 rounded-md font-bold flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
              <span>تبرع الآن</span>
            </button>

            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white overflow-hidden">
                    <img
                      src="/api/placeholder/40/40"
                      alt="صورة الملف الشخصي"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>

                {showProfileMenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <User className="h-4 w-4 mr-2" />
                      <span>الملف الشخصي</span>
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      <span>تبرعاتي</span>
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>أنشطتي</span>
                    </a>
                    <div className="border-t border-gray-200 my-1"></div>
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="block w-full text-right px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      <span>تسجيل الخروج</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="flex items-center bg-[#394867] hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  <span>تسجيل الدخول</span>
                </button>
                <button className="flex items-center text-[#394867] hover:text-gray-200 transition duration-300">
                  <User className="h-4 w-4 mr-2" />
                  <span>إنشاء حساب</span>
                </button>
              </div>
            )}

            <div className="text-[#394867] text-right">
              <div className="font-bold">اتصل بنا</div>
              <div>+970 123 456 789</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-xl">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-center">
            <div className="flex space-x-1">
              <a
                href="#"
                className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
              >
                <Home className="h-5 w-5 mr-2" />
                <span>الرئيسية</span>
              </a>
              <a
                href="#"
                className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
              >
                <Info className="h-5 w-5 mr-2" />
                <span>من نحن</span>
              </a>
              <a
                href="AboutUs"
                className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
              >
                <Heart className="h-5 w-5 mr-2" />
                <span>مشاريعنا</span>
              </a>
              <a
                href="#"
                className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
              >
                <Calendar className="h-5 w-5 mr-2" />
                <span>الفعاليات</span>
              </a>
              <a
                href="#"
                className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
              >
                <Users className="h-5 w-5 mr-2" />
                <span>المتطوعون</span>
              </a>
              <a
                href="#"
                className="flex items-center py-4 px-6 text-[#394867] hover:bg-gray-100 font-medium transition duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span>اتصل بنا</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;