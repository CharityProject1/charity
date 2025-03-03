import { useState } from "react";
import Swal from "sweetalert2";

const cardTypes = [
  { name: "MasterCard", color: "bg-blue-700", prefix: /^5[1-5]/, logo: "/api/placeholder/60/40" },
  { name: "Visa", color: "bg-yellow-500", prefix: /^4/, logo: "/api/placeholder/60/40" },
  { name: "Diners Club", color: "bg-gray-600", prefix: /^3[689]/, logo: "/api/placeholder/60/40" },
  { name: "American Express", color: "bg-green-700", prefix: /^3[47]/, logo: "/api/placeholder/60/40" },
  { name: "Discover", color: "bg-blue-400", prefix: /^65/, logo: "/api/placeholder/60/40" },
  { name: "Dankort", color: "bg-blue-700", prefix: /^5019/, logo: "/api/placeholder/60/40" },
];

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cashAmount, setCashAmount] = useState("");

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || "";
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    const value = formatCardNumber(e.target.value);
    setCardNumber(value);
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2)}`;
    }
    
    return v;
  };

  const handleExpiryChange = (e) => {
    const value = formatExpiry(e.target.value.replace(/[^0-9]/g, "").slice(0, 4));
    setExpiry(value);
  };

  const handlePayment = () => {
    if (paymentMethod === "cash") {
      Swal.fire("تم الدفع بنجاح!", `المبلغ المدفوع: ${cashAmount} دينار`, "success");
    } else {
      Swal.fire("تم الدفع بنجاح!", "تمت معالجة عملية الدفع ببطاقتك", "success");
    }
  };

  const detectedCard = cardTypes.find((card) => card.prefix.test(cardNumber.replace(/\s/g, ""))) || null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-xl border border-gray-100">
        <h2 className="text-2xl font-bold text-center text-gray-800 border-b pb-4">اختر طريقة الدفع</h2>
        
        <div className="flex justify-around bg-gray-50 p-3 rounded-lg">
          <label className="flex items-center cursor-pointer">
            <input 
              type="radio" 
              value="cash" 
              checked={paymentMethod === "cash"} 
              onChange={() => setPaymentMethod("cash")}
              className="w-4 h-4 text-blue-600" 
            />
            <span className="mr-2 text-gray-700 font-medium">نقدًا</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input 
              type="radio" 
              value="credit" 
              checked={paymentMethod === "credit"} 
              onChange={() => setPaymentMethod("credit")}
              className="w-4 h-4 text-blue-600" 
            />
            <span className="mr-2 text-gray-700 font-medium">بطاقة ائتمان</span>
          </label>
        </div>
        
        {paymentMethod === "cash" ? (
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-2 text-right">أدخل المبلغ النقدي</label>
            <div className="relative">
              <input 
                type="number" 
                value={cashAmount} 
                onChange={(e) => setCashAmount(e.target.value)} 
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-right" 
                placeholder="أدخل المبلغ"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">دينار</span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {detectedCard && (
              <div className="flex justify-end items-center space-x-2">
                <span className="text-sm text-gray-600">نوع البطاقة:</span>
                <span className="font-medium text-gray-700">{detectedCard.name}</span>
                <img src={detectedCard.logo} alt={detectedCard.name} className="w-10 h-6 object-contain" />
              </div>
            )}
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 mb-2 text-right">رقم البطاقة</label>
              <input 
                type="text" 
                value={cardNumber} 
                onChange={handleCardNumberChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-right" 
                placeholder="1234 5678 9012 3456" 
                maxLength={19} 
                dir="ltr"
              />
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 mb-2 text-right">اسم حامل البطاقة</label>
              <input 
                type="text" 
                value={cardHolder} 
                onChange={(e) => setCardHolder(e.target.value.toUpperCase())} 
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-right" 
                placeholder="الاسم الكامل" 
              />
            </div>
            
            <div className="flex space-x-4 rtl:space-x-reverse">
              <div className="w-1/2 bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-2 text-right">تاريخ الانتهاء</label>
                <input 
                  type="text" 
                  value={expiry} 
                  onChange={handleExpiryChange} 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-center" 
                  placeholder="MM/YY" 
                  maxLength={5}
                  dir="ltr"
                />
              </div>
              <div className="w-1/2 bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-2 text-right">رمز CVC</label>
                <input 
                  type="text" 
                  value={cvc} 
                  onChange={(e) => setCvc(e.target.value.replace(/[^0-9]/g, ""))} 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-center" 
                  placeholder="123" 
                  maxLength={3}
                  dir="ltr"
                />
              </div>
            </div>
          </div>
        )}
        
        
        <button 
          className="w-full py-4 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-200 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={handlePayment}
        >
          {paymentMethod === "cash" ? "الدفع نقدًا" : "ادفع الآن"}
        </button>
      </div>
      
    </div>
  );
}