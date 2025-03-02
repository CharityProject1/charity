import React, { useState } from "react";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-3xl font-bold mb-8 text-right text-gray-800">إتمام الدفع</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* المبلغ الإجمالي والطرق الدفع */}
        <div className="bg-white p-6 rounded-lg shadow-md order-2 md:order-1">
          <h3 className="text-xl font-semibold mb-4 text-right">طريقة الدفع</h3>
          
          <div className="space-y-3 mb-6">
            <div 
              className={`border rounded-lg p-4 flex items-center justify-between cursor-pointer ${paymentMethod === "card" ? "border-blue-500 bg-blue-50" : ""}`}
              onClick={() => setPaymentMethod("card")}
            >
              <div className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "card" ? "border-blue-500" : "border-gray-300"}`}>
                  {paymentMethod === "card" && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
                </div>
              </div>
              <span className="font-medium">الدفع بالبطاقة</span>
            </div>
            
            <div 
              className={`border rounded-lg p-4 flex items-center justify-between cursor-pointer ${paymentMethod === "samsung" ? "border-blue-500 bg-blue-50" : ""}`}
              onClick={() => setPaymentMethod("samsung")}
            >
              <div className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "samsung" ? "border-blue-500" : "border-gray-300"}`}>
                  {paymentMethod === "samsung" && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
                </div>
              </div>
              <span className="font-medium">Samsung Pay</span>
            </div>
            
            <div 
              className={`border rounded-lg p-4 flex items-center justify-between cursor-pointer ${paymentMethod === "cash" ? "border-blue-500 bg-blue-50" : ""}`}
              onClick={() => setPaymentMethod("cash")}
            >
              <div className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "cash" ? "border-blue-500" : "border-gray-300"}`}>
                  {paymentMethod === "cash" && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
                </div>
              </div>
              <span className="font-medium">الدفع نقداً عند الاستلام</span>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg text-center mb-6">
            <h3 className="text-lg font-semibold mb-2">المبلغ الإجمالي</h3>
            <p className="text-3xl font-bold text-blue-600">6467.00</p>
            <p className="text-gray-600">درهم إماراتي</p>
          </div>
          
          <button className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 font-semibold text-lg">
            {paymentMethod === "cash" ? "تأكيد الطلب" : "إتمام الدفع"}
          </button>
          
          {paymentMethod === "cash" && (
            <p className="mt-2 text-sm text-gray-600 text-right">
              سيتم التواصل معك لتأكيد العنوان وتفاصيل التسليم
            </p>
          )}
        </div>
        
        {/* بيانات المستخدم */}
        <div className="bg-white p-6 rounded-lg shadow-md order-1 md:order-2">
          <h3 className="text-xl font-semibold mb-4 text-right">بيانات المستخدم</h3>
          
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="block text-right text-gray-700 font-medium">الاسم بالكامل</label>
              <input
                type="text"
                value="Ahmad Tabaza"
                className="w-full border rounded-lg px-3 py-2 text-right bg-gray-50"
                disabled
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-right text-gray-700 font-medium">رقم الهاتف</label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                <span className="mr-2 text-gray-600">🇦🇪 +971</span>
                <input type="text" value="050 123 4567" className="w-full text-right bg-gray-50" disabled />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="block text-right text-gray-700 font-medium">البريد الإلكتروني</label>
              <input
                type="email"
                value="ahmadtabaza272@gmail.com"
                className="w-full border rounded-lg px-3 py-2 text-right bg-gray-50"
                disabled
              />
            </div>
            
            {paymentMethod === "cash" && (
              <div className="space-y-1">
                <label className="block text-right text-gray-700 font-medium">العنوان</label>
                <textarea
                  placeholder="يرجى إدخال العنوان بالتفصيل..."
                  className="w-full border rounded-lg px-3 py-2 text-right h-24"
                ></textarea>
              </div>
            )}
            
            <div className="mt-4">
              <p className="text-gray-600 text-right text-sm mb-2">أنا لست برنامج روبوت</p>
              <div className="border rounded-lg w-full h-16 flex items-center justify-center bg-gray-50">
                reCAPTCHA
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}