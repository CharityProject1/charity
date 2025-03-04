// // import React from "react";

// // const BeneficiaryCard = ({ beneficiary, onDonate, onBack }) => {
// //   if (!beneficiary) return null;

// //   const openPdf = () => {
// //     if (beneficiary.pdfUrl) {
// //       window.open(beneficiary.pdfUrl, "_blank");
// //     }
// //   };

// //   return (
// //     <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
// //       <div className="bg-blue-500 text-white p-4">
// //         <h3 className="text-xl font-bold text-center">بطاقة المستفيد</h3>
// //       </div>

// //       <div className="p-6 space-y-4">
// //         <div className="flex justify-between">
// //           <span className="font-semibold">الحالة:</span>
// //           <span>{beneficiary.status}</span>
// //         </div>

// //         <div className="flex justify-between">
// //           <span className="font-semibold">النوع:</span>
// //           <span>{beneficiary.type}</span>
// //         </div>

// //         <div className="flex justify-between">
// //           <span className="font-semibold">العنوان:</span>
// //           <span>{beneficiary.address}</span>
// //         </div>

// //         <div className="flex justify-between">
// //           <span className="font-semibold">الاحتياجات:</span>
// //           <span>{beneficiary.needs?.join(", ")}</span>
// //         </div>

// //         <div className="border-t pt-4">
// //           <h4 className="font-semibold mb-2">الوصف:</h4>
// //           <p className="text-gray-700">{beneficiary.description}</p>
// //         </div>

// //         <div className="flex space-x-4 mt-6 justify-between" dir="ltr">
// //           <button
// //             onClick={onDonate}
// //             className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 flex-1"
// //           >
// //             تبرع الآن
// //           </button>

// //           {beneficiary.pdfUrl && (
// //             <button
// //               onClick={openPdf}
// //               className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 flex-1 text-center"
// //             >
// //               عرض المستندات
// //             </button>
// //           )}
// //         </div>

      
// //       </div>
// //     </div>
// //   );
// // };

// // export default BeneficiaryCard;
// // // import React from "react";

// // // const BeneficiaryCard = ({ onDonate }) => {
// // //   const beneficiary = {
// // //     status: "مستفيد نشط",
// // //     type: "أسرة محتاجة",
// // //     address: "الرياض، السعودية",
// // //     needs: ["ملابس شتوية", "أغطية", "مواد غذائية"],
// // //     description: "هذه الأسرة بحاجة إلى دعم سريع بسبب الظروف الاقتصادية الصعبة.",
// // //     pdfUrl: "https://example.com/document.pdf"
// // //   };

// // //   const openPdf = () => {
// // //     if (beneficiary.pdfUrl) {
// // //       window.open(beneficiary.pdfUrl, "_blank");
// // //     }
// // //   };

// // //   const details = [
// // //     { label: "الحالة", value: beneficiary.status },
// // //     { label: "النوع", value: beneficiary.type },
// // //     { label: "العنوان", value: beneficiary.address }
// // //   ];

// // //   return (
// // //     <div className="bg-white border rounded-lg overflow-hidden shadow-lg p-4">
// // //       <div className="bg-blue-500 text-white p-4 text-center">
// // //         <h3 className="text-xl font-bold">بطاقة المستفيد</h3>
// // //       </div>

// // //       <div className="p-6 space-y-4">
// // //         {details.map((detail, index) => (
// // //           <div key={index} className="flex justify-between">
// // //             <span className="font-semibold">{detail.label}:</span>
// // //             <span>{detail.value}</span>
// // //           </div>
// // //         ))}

// // //         <div>
// // //           <h4 className="font-semibold mb-2">الاحتياجات:</h4>
// // //           {beneficiary.needs.length > 0 ? (
// // //             <ul className="list-disc pl-5 text-gray-700 space-y-1">
// // //               {beneficiary.needs.map((need, index) => (
// // //                 <li key={index}>{need}</li>
// // //               ))}
// // //             </ul>
// // //           ) : (
// // //             <p className="text-gray-500">لا توجد احتياجات محددة</p>
// // //           )}
// // //         </div>

// // //         <div className="border-t pt-4">
// // //           <h4 className="font-semibold mb-2">الوصف:</h4>
// // //           <p className="text-gray-700">{beneficiary.description}</p>
// // //         </div>

// // //         <div className="flex space-x-4 mt-6 justify-between" dir="ltr">
// // //           <button
// // //             onClick={onDonate}
// // //             className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 flex-1"
// // //           >
// // //             تبرع الآن
// // //           </button>

// // //           {beneficiary.pdfUrl && (
// // //             <button
// // //               onClick={openPdf}
// // //               className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 flex-1 text-center"
// // //             >
// // //               عرض المستندات
// // //             </button>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BeneficiaryCard;

// ///

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const BeneficiaryCard = ({ beneficiaryId, onDonate, onBack }) => {
// //   const [beneficiary, setBeneficiary] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   // جلب بيانات المستفيد عند تحميل المكون
// //   useEffect(() => {
// //     axios
// //       .get(`http://localhost:4000/api/beneficiary/${beneficiaryId}`)
// //       .then((response) => {
// //         setBeneficiary(response.data);
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         console.error("خطأ أثناء جلب بيانات المستفيد:", error);
// //         setLoading(false);
// //       });
// //   }, [beneficiaryId]);

// //   // دالة لفتح المستند إذا كان موجودًا
// //   const openPdf = () => {
// //     if (beneficiary.pdfUrl) {
// //       window.open(beneficiary.pdfUrl, "_blank");
// //     }
// //   };

// //   if (loading) {
// //     return <div>جاري تحميل البيانات...</div>;
// //   }

// //   if (!beneficiary) {
// //     return <div>لم يتم العثور على بيانات المستفيد.</div>;
// //   }

// //   // إذا لم تتم الموافقة على البيانات، لا نعرض بطاقة المستفيد
// //   if (!beneficiary.approved) {
// //     return <div>المستفيد غير معتمد بعد.</div>;
// //   }

// //   return (
// //     <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
// //       <div className="bg-blue-500 text-white p-4">
// //         <h3 className="text-xl font-bold text-center">بطاقة المستفيد</h3>
// //       </div>

// //       <div className="p-6 space-y-4">
// //         <div className="flex justify-between">
// //           <span className="font-semibold">الحالة:</span>
// //           <span>{beneficiary.status}</span>
// //         </div>

// //         <div className="flex justify-between">
// //           <span className="font-semibold">النوع:</span>
// //           <span>{beneficiary.type}</span>
// //         </div>

// //         <div className="flex justify-between">
// //           <span className="font-semibold">العنوان:</span>
// //           <span>{beneficiary.address}</span>
// //         </div>

// //         <div className="flex justify-between">
// //           <span className="font-semibold">الاحتياجات:</span>
// //           <span>{beneficiary.needs?.join(", ")}</span>
// //         </div>

// //         <div className="border-t pt-4">
// //           <h4 className="font-semibold mb-2">الوصف:</h4>
// //           <p className="text-gray-700">{beneficiary.description}</p>
// //         </div>

// //         <div className="flex space-x-4 mt-6 justify-between" dir="ltr">
// //           <button
// //             onClick={onDonate}
// //             className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 flex-1"
// //           >
// //             تبرع الآن
// //           </button>

// //           {beneficiary.pdfUrl && (
// //             <button
// //               onClick={openPdf}
// //               className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 flex-1 text-center"
// //             >
// //               عرض المستندات
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BeneficiaryCard;



// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const BeneficiaryCard = ({ beneficiaryId, onDonate, onBack }) => {
// //   const [beneficiary, setBeneficiary] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [donationMessage, setDonationMessage] = useState("");

// //   useEffect(() => {
// //     // جلب البيانات من الـ API
// //     axios
// //       .get("http://localhost:4000/api/beneficiariescard")
// //       .then((response) => {
// //         setBeneficiary(response.data.data);  // تخزين البيانات في state
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         console.error("خطأ أثناء جلب البيانات:", error);
// //         setLoading(false);
// //       });
// //   }, []);
  

// //   // دالة لفتح المستند إذا كان موجودًا
// //   const openPdf = () => {
// //     if (beneficiary.pdfUrl) {
// //       window.open(beneficiary.pdfUrl, "_blank");
// //     }
// //   };

// //   // دالة التبرع
// //   const handleDonate = () => {
// //     setDonationMessage("تم التبرع بنجاح! شكراً لمساعدتك.");
// //     onDonate();
// //   };

// //   if (loading) {
// //     return <div>جاري تحميل البيانات...</div>;
// //   }

// //   if (!beneficiary) {
// //     return <div>لم يتم العثور على بيانات المستفيد.</div>;
// //   }

// //   // إذا لم تتم الموافقة على البيانات، لا نعرض بطاقة المستفيد
// //   if (!beneficiary.approved) {
// //     return <div>المستفيد غير معتمد بعد.</div>;
// //   }

// //   return (
// //     <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
// //       <div className="bg-blue-500 text-white p-4">
// //         <h3 className="text-xl font-bold text-center">بطاقة المستفيد</h3>
// //       </div>

// //       <div className="p-6 space-y-4">
// //         {donationMessage && (
// //           <div className="text-green-500 font-semibold mt-4">{donationMessage}</div>
// //         )}

// //         <div className="flex justify-between my-2">
// //           <span className="font-semibold">الحالة:</span>
// //           <span className="text-gray-700">{beneficiary.status}</span>
// //         </div>

// //         <div className="flex justify-between my-2">
// //           <span className="font-semibold">النوع:</span>
// //           <span>{beneficiary.type}</span>
// //         </div>

// //         <div className="flex justify-between my-2">
// //           <span className="font-semibold">العنوان:</span>
// //           <span>{beneficiary.address}</span>
// //         </div>

// //         <div className="flex justify-between my-2">
// //           <span className="font-semibold">الاحتياجات:</span>
// //           <span>{beneficiary.needs?.join(", ")}</span>
// //         </div>

// //         <div className="border-t pt-4">
// //           <h4 className="font-semibold mb-2">الوصف:</h4>
// //           <p className="text-gray-700">{beneficiary.description}</p>
// //         </div>

// //         <div className="flex space-x-4 mt-6 justify-between" dir="ltr">
// //           <button
// //             onClick={handleDonate}
// //             className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 flex-1"
// //           >
// //             تبرع الآن
// //           </button>

// //           {beneficiary.pdfUrl && (
// //             <button
// //               onClick={openPdf}
// //               className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 flex-1 text-center"
// //             >
// //               عرض المستندات
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BeneficiaryCard;


// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const BeneficiaryCard = ({ beneficiaryId, onDonate, onBack }) => {
// //   const [beneficiary, setBeneficiary] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [donationMessage, setDonationMessage] = useState("");

// //   // useEffect(() => {
// //   //   axios
// //   //     .get("http://localhost:4000/api/beneficiariescard")
// //   //     .then((response) => {
// //   //       console.log(response.data);  // تحقق من البيانات هنا
// //   //       setBeneficiary(response.data.data);  // تخزين البيانات في state
// //   //       setLoading(false);
// //   //     })
// //   //     .catch((error) => {
// //   //       console.error("خطأ أثناء جلب البيانات:", error);
// //   //       setLoading(false);
// //   //     });
// //   // }, []);
// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:4000/api/beneficiariescard")
// //       .then((response) => {
// //         console.log(response.data);  // تحقق من البيانات هنا
// //         setBeneficiary(response.data.data[0]);  // تخزين الكائن الأول من المصفوفة
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         console.error("خطأ أثناء جلب البيانات:", error);
// //         setLoading(false);
// //       });
// //   }, []);
  
// //   // دالة لفتح المستند إذا كان موجودًا
// //   const openPdf = () => {
// //     if (beneficiary.pdfUrl||true) {
// //       window.open(beneficiary.pdfUrl, "_blank");
// //     }
// //   };

// //   // دالة التبرع
// //   const handleDonate = () => {
// //     setDonationMessage("تم التبرع بنجاح! شكراً لمساعدتك.");
// //     onDonate();
// //   };

// //   if (loading) {
// //     return <div>جاري تحميل البيانات...</div>;
// //   }

// //   if (!beneficiary) {
// //     return <div>لم يتم العثور على بيانات المستفيد.</div>;
// //   }

// //   // إذا لم تتم الموافقة على البيانات أو إذا كانت الحالة غير "موافق عليه"، لا نعرض بطاقة المستفيد
// //   if (beneficiary.status !== "موافق عليه") {
// //     return <div>المستفيد غير معتمد بعد أو الحالة غير "موافق عليه".</div>;
// //   }

// //   return (
// //     <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
// //       <div className="bg-blue-500 text-white p-4">
// //         <h3 className="text-xl font-bold text-center">بطاقة المستفيد</h3>
// //       </div>

// //       <div className="p-6 space-y-4">
// //         {donationMessage && (
// //           <div className="text-green-500 font-semibold mt-4">{donationMessage}</div>
// //         )}

// //         <div className="flex justify-between my-2">
// //           <span className="font-semibold">الحالة:</span>
// //           <span className="text-gray-700">{beneficiary.statusPerson}</span>
// //         </div>

// //         <div className="flex justify-between my-2">
// //           <span className="font-semibold">النوع:</span>
// //           <span>{beneficiary.type}</span>
// //         </div>

// //         <div className="flex justify-between my-2">
// //           <span className="font-semibold">العنوان:</span>
// //           <span>{beneficiary.address}</span>
// //         </div>

// //         {/* <div className="flex justify-between my-2">
// //           <span className="font-semibold">الاحتياجات:</span>
// //           <span>{beneficiary.needs?.join(", ")}</span>
// //         </div> */}
// // <div className="flex justify-between my-2">
// //   <span className="font-semibold">الاحتياجات:</span>
// //   <span>
// //     {
// //       beneficiary.needs && typeof beneficiary.needs === 'object' 
// //       ? Object.keys(beneficiary.needs).filter(key => beneficiary.needs[key]).join(", ") 
// //       : "لا توجد احتياجات محددة"
// //     }
// //   </span>
// // </div>

// //         <div className="border-t pt-4">
// //           <h4 className="font-semibold mb-2">الوصف:</h4>
// //           <p className="text-gray-700">{beneficiary.description}</p>
// //         </div>

// //         <div className="flex space-x-4 mt-6 justify-between" dir="ltr">
// //           <button
// //             onClick={handleDonate}
// //             className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 flex-1"
// //           >
// //             تبرع الآن
// //           </button>

// //           {beneficiary.pdfUrl && (
// //             <button
// //               onClick={openPdf}
// //               className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 flex-1 text-center"
// //             >
// //               عرض المستندات
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BeneficiaryCard;


// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const BeneficiaryCard = ({ beneficiaryId, onDonate, onBack }) => {
// //   const [beneficiary, setBeneficiary] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [donationMessage, setDonationMessage] = useState("");

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:4000/api/beneficiariescard")
// //       .then((response) => {
// //         console.log(response.data);  // تحقق من البيانات هنا
// //         setBeneficiary(response.data.data);  // تخزين الكائن الأول من المصفوفة
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         console.error("خطأ أثناء جلب البيانات:", error);
// //         setLoading(false);
// //       });
// //   }, []);
  
// //   // دالة لفتح المستند إذا كان موجودًا
// //   const openPdf = () => {
// //     if (beneficiary.pdfUrl) {
// //       window.open(beneficiary.pdfUrl, "_blank");
// //     }
// //   };

// //   // دالة التبرع
// //   const handleDonate = () => {
// //     setDonationMessage("تم التبرع بنجاح! شكراً لمساعدتك.");
// //     onDonate();
// //   };

// //   if (loading) {
// //     return <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg shadow">
// //       <div className="text-gray-600 text-lg">جاري تحميل البيانات...</div>
// //     </div>;
// //   }

// //   if (!beneficiary) {
// //     return <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg shadow">
// //       <div className="text-gray-600 text-lg">لم يتم العثور على بيانات المستفيد.</div>
// //     </div>;
// //   }

// //   // إذا لم تتم الموافقة على البيانات أو إذا كانت الحالة غير "موافق عليه"، لا نعرض بطاقة المستفيد
// //   if (beneficiary.status !== "موافق عليه") {
// //     return <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg shadow">
// //       <div className="text-gray-600 text-lg">المستفيد غير معتمد بعد أو الحالة غير "موافق عليه".</div>
// //     </div>;
// //   }

// //   return (
// //     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl transform transition duration-500 hover:scale-105 hover:shadow-xl">
// //       <div className="md:flex flex-col">
// //         <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-4">
// //           <div className="text-white text-xl font-bold text-center">بطاقة المستفيد</div>
// //           <div className="text-blue-100 text-sm text-center mt-1">معلومات الحالة</div>
// //         </div>
        
// //         <div className="p-6">
// //           {donationMessage && (
// //             <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center font-medium">
// //               {donationMessage}
// //             </div>
// //           )}

// //           <div className="flex items-center justify-between py-2 border-b">
// //             <span className="font-bold text-gray-800">الحالة:</span>
// //             <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
// //               {beneficiary.statusPerson}
// //             </span>
// //           </div>

// //           <div className="flex items-center justify-between py-2 border-b">
// //             <span className="font-bold text-gray-800">النوع:</span>
// //             <span className="text-gray-700">{beneficiary.type}</span>
// //           </div>

// //           <div className="flex items-center justify-between py-2 border-b">
// //             <span className="font-bold text-gray-800">العنوان:</span>
// //             <span className="text-gray-700">{beneficiary.address}</span>
// //           </div>

// //           <div className="flex items-center justify-between py-2 border-b">
// //             <span className="font-bold text-gray-800">الاحتياجات:</span>
// //             <span className="text-gray-700">
// //               {
// //                 beneficiary.needs && typeof beneficiary.needs === 'object' 
// //                 ? Object.keys(beneficiary.needs).filter(key => beneficiary.needs[key]).join(", ") 
// //                 : "لا توجد احتياجات محددة"
// //               }
// //             </span>
// //           </div>

// //           <div className="mt-4">
// //             <h4 className="font-bold text-gray-800 mb-2">الوصف:</h4>
// //             <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
// //               {beneficiary.description}
// //             </p>
// //           </div>

// //           <div className="mt-6 flex gap-2" dir="ltr">
// //             <button
// //               onClick={handleDonate}
// //               className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition duration-300 shadow"
// //             >
// //               تبرع الآن
// //             </button>

// //             {beneficiary.pdfUrl && (
// //               <button
// //                 onClick={openPdf}
// //                 className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow"
// //               >
// //                 عرض المستندات
// //               </button>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BeneficiaryCard;







// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const BeneficiaryCard = ({ onDonate, onBack }) => {
// //   const [beneficiaries, setBeneficiaries] = useState([]);  // حفظ جميع المستفيدين
// //   const [loading, setLoading] = useState(true);
// //   const [donationMessage, setDonationMessage] = useState("");

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:4000/api/beneficiariescard")
// //       .then((response) => {
// //         console.log(response.data);  // تحقق من البيانات هنا
// //         setBeneficiaries(response.data.data);  // تخزين جميع المستفيدين
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         console.error("خطأ أثناء جلب البيانات:", error);
// //         setLoading(false);
// //       });
// //   }, []);

// //   // دالة لفتح المستند إذا كان موجودًا
// //   const openPdf = (pdfUrl) => {
// //     if (pdfUrl) {
// //       window.open(pdfUrl, "_blank");
// //     }
// //   };

// //   // دالة التبرع
// //   const handleDonate = () => {
// //     setDonationMessage("تم التبرع بنجاح! شكراً لمساعدتك.");
// //     onDonate();
// //   };

// //   if (loading) {
// //     return <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg shadow">
// //       <div className="text-gray-600 text-lg">جاري تحميل البيانات...</div>
// //     </div>;
// //   }

// //   if (beneficiaries.length === 0) {
// //     return <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg shadow">
// //       <div className="text-gray-600 text-lg">لم يتم العثور على بيانات المستفيدين.</div>
// //     </div>;
// //   }

// //   return (
// //     <div>
// //       {beneficiaries.filter(beneficiary => beneficiary.status === "موافق عليه").map((beneficiary) => (
// //         <div key={beneficiary.id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl transform transition duration-500 hover:scale-105 hover:shadow-xl">
// //           <div className="md:flex flex-col">
// //             <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-4">
// //               <div className="text-white text-xl font-bold text-center">بطاقة المستفيد</div>
// //               <div className="text-blue-100 text-sm text-center mt-1">معلومات الحالة</div>
// //             </div>
            
// //             <div className="p-6">
// //               {donationMessage && (
// //                 <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center font-medium">
// //                   {donationMessage}
// //                 </div>
// //               )}

// //               <div className="flex items-center justify-between py-2 border-b">
// //                 <span className="font-bold text-gray-800">الحالة:</span>
// //                 <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
// //                   {beneficiary.statusPerson}
// //                 </span>
// //               </div>

// //               <div className="flex items-center justify-between py-2 border-b">
// //                 <span className="font-bold text-gray-800">النوع:</span>
// //                 <span className="text-gray-700">{beneficiary.type}</span>
// //               </div>

// //               <div className="flex items-center justify-between py-2 border-b">
// //                 <span className="font-bold text-gray-800">العنوان:</span>
// //                 <span className="text-gray-700">{beneficiary.address}</span>
// //               </div>

// //               <div className="flex items-center justify-between py-2 border-b">
// //                 <span className="font-bold text-gray-800">الاحتياجات:</span>
// //                 <span className="text-gray-700">
// //                   {
// //                     beneficiary.needs && typeof beneficiary.needs === 'object' 
// //                     ? Object.keys(beneficiary.needs).filter(key => beneficiary.needs[key]).join(", ") 
// //                     : "لا توجد احتياجات محددة"
// //                   }
// //                 </span>
// //               </div>

// //               <div className="mt-4">
// //                 <h4 className="font-bold text-gray-800 mb-2">الوصف:</h4>
// //                 <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
// //                   {beneficiary.needsDescription}
// //                 </p>
// //               </div>

// //               <div className="mt-6 flex gap-2" dir="ltr">
// //                 <button
// //                   onClick={handleDonate}
// //                   className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition duration-300 shadow"
// //                 >
// //                   تبرع الآن
// //                 </button>

// //                 {beneficiary.pdfUrl && (
// //                   <button
// //                     onClick={() => openPdf(beneficiary.pdfUrl)}
// //                     className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow"
// //                   >
// //                     عرض المستندات
// //                   </button>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default BeneficiaryCard;





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// const BeneficiaryCard = ({ onDonate, onBack }) => {
//   const [beneficiaries, setBeneficiaries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [donationMessages, setDonationMessages] = useState({});

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/api/beneficiariescard")
//       .then((response) => {
//         console.log(response.data);
//         setBeneficiaries(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("خطأ أثناء جلب البيانات:", error);
//         setLoading(false);
//       });
//   }, []);

//   // دالة لفتح المستند إذا كان موجودًا
//   const openPdf = (documentPath) => {
//     if (documentPath) {
//       // استبدال `\` بـ `/` لضمان التوافق مع الروابط في المتصفح
//       const formattedPath = documentPath.replace(/\\/g, "/");
//       const fullUrl = `http://localhost:4000/${formattedPath}`;
//       window.open(fullUrl, "_blank");
//     } else {
//       console.error("المستند غير موجود.");
//     }
//   };
  

//   // دالة التبرع لمستفيد محدد
//   const handleDonate = (beneficiaryId) => {
//     setDonationMessages(prev => ({
//       ...prev,
//       [beneficiaryId]: "تم التبرع بنجاح! شكراً لمساعدتك."
//     }));
//     if (onDonate) onDonate(beneficiaryId);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg shadow">
//         <div className="text-gray-600 text-lg">جاري تحميل البيانات...</div>
//       </div>
//     );
//   }

//   if (beneficiaries.length === 0) {
//     return (
//       <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg shadow">
//         <div className="text-gray-600 text-lg">لم يتم العثور على بيانات المستفيدين.</div>
//       </div>
//     );
//   }

//   // فلترة المستفيدين المعتمدين
//   const approvedBeneficiaries = beneficiaries.filter(
//     (beneficiary) => beneficiary.status === "موافق عليه"
//   );

//   return (
//     <div className="container mx-auto px-4 mt-12 mb-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "dir="rtl">
//         {approvedBeneficiaries.map((beneficiary) => (
//           <div
//             key={beneficiary.id || beneficiary._id}
//             className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
//           >
//             <div className="bg-gradient-to-r bg-[#394867] text-white p-4">
//               <div className="text-white text-xl font-bold text-center">بطاقة المستفيد</div>
//               <div className="text-blue-100 text-sm text-center mt-1">معلومات الحالة</div>
//             </div>

//             <div className="p-6">
//               {donationMessages[beneficiary.id || beneficiary._id] && (
//                 <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center font-medium">
//                   {donationMessages[beneficiary.id || beneficiary._id]}
//                 </div>
//               )}

//               <div className="flex items-center justify-between py-2 border-b">
//                 <span className="font-bold text-gray-800">الحالة:</span>
//                 <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
//                   {beneficiary.statusPerson}
//                 </span>
//               </div>

//               <div className="flex items-center justify-between py-2 border-b">
//                 <span className="font-bold text-gray-800">النوع:</span>
//                 <span className="text-gray-700">{beneficiary.type}</span>
//               </div>

//               <div className="flex items-center justify-between py-2 border-b">
//                 <span className="font-bold text-gray-800">العنوان:</span>
//                 <span className="text-gray-700">{beneficiary.address}</span>
//               </div>

//               <div className="flex items-center justify-between py-2 border-b">
//                 <span className="font-bold text-gray-800">الاحتياجات:</span>
//                 <span className="text-gray-700">
//                   {beneficiary.needs && typeof beneficiary.needs === "object"
//                     ? Object.keys(beneficiary.needs)
//                         .filter((key) => beneficiary.needs[key])
//                         .join(", ")
//                     : "لا توجد احتياجات محددة"}
//                 </span>
//               </div>

//               <div className="mt-4">
//                 <h4 className="font-bold text-gray-800 mb-2">الوصف:</h4>
//                 <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
//                   {beneficiary.needsDescription}
//                 </p>
//               </div>

//               <div className="mt-6 flex gap-2" dir="ltr">
//               <Link to="/PaymentPage">   <button
//                   onClick={() => handleDonate(beneficiary.id || beneficiary._id)}
//                   className="flex-1 bg-gradient-to-r bg-[#394867]  text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition duration-300 shadow"
//                 >
//                   تبرع الآن
//                 </button>
// </Link>
             
//   <button
//     onClick={() => openPdf(beneficiary.document)}
//     className="flex-1 bg-gradient-to-r bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow"
//   >
//     عرض المستندات
//   </button>


//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BeneficiaryCard;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BeneficiaryCard = ({ onDonate }) => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [donationMessages, setDonationMessages] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/beneficiariescard")
      .then((response) => {
        setBeneficiaries(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("خطأ أثناء جلب البيانات:", error);
        setLoading(false);
      });
  }, []);

  const openPdf = (documentPath) => {
    if (documentPath) {
      const formattedPath = documentPath.replace(/\\/g, "/");
      const fullUrl = `http://localhost:4000/${formattedPath}`;
      window.open(fullUrl, "_blank");
    } else {
      console.error("المستند غير موجود.");
    }
  };

  const handleDonate = (beneficiaryId) => {
    setDonationMessages((prev) => ({
      ...prev,
      [beneficiaryId]: "تم التبرع بنجاح! شكراً لمساعدتك."
    }));
    if (onDonate) onDonate(beneficiaryId);
  };

  const statusMapping = {
    needy: "محتاج",
    orphan: "يتيم",
    disabled: "ذوي الاحتياجات الخاصة",
  };

  const typeMapping = {
    individual: "فرد",
    family: "عائلة",
  };

  if (loading) {
    return <div className="text-center text-gray-600">جاري تحميل البيانات...</div>;
  }

  const approvedBeneficiaries = beneficiaries.filter(
    (beneficiary) => beneficiary.status === "موافق عليه"
  );

  return (
    <div className="container mx-auto px-4 mt-12 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir="rtl">
        {approvedBeneficiaries.map((beneficiary) => (
          <div
            key={beneficiary.id || beneficiary._id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div className="bg-[#394867] text-white p-4 text-center font-bold">
              بطاقة المستفيد
            </div>

            <div className="p-6">
              {donationMessages[beneficiary.id || beneficiary._id] && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center font-medium">
                  {donationMessages[beneficiary.id || beneficiary._id]}
                </div>
              )}

              <div className="flex items-center justify-between py-2 border-b">
                <span className="font-bold text-gray-800">الحالة:</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  {statusMapping[beneficiary.statusPerson] || "غير محدد"}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <span className="font-bold text-gray-800">النوع:</span>
                <span className="text-gray-700">
                  {typeMapping[beneficiary.type] || "غير محدد"}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <span className="font-bold text-gray-800">العنوان:</span>
                <span className="text-gray-700">{beneficiary.address}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <span className="font-bold text-gray-800">الاحتياجات:</span>
                <span className="text-gray-700">
                  {beneficiary.needs && typeof beneficiary.needs === "object"
                    ? Object.keys(beneficiary.needs)
                        .filter((key) => beneficiary.needs[key])
                        .map((key) => (key === "food" ? "طعام" : key === "books" ? "كتب" : "ملابس"))
                        .join(", ")
                    : "لا توجد احتياجات محددة"}
                </span>
              </div>

              <div className="mt-4">
                <h4 className="font-bold text-gray-800 mb-2">الوصف:</h4>
                <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
                  {beneficiary.needsDescription}
                </p>
              </div>

              <div className="mt-6 flex gap-2" dir="ltr">
                <Link to="/PaymentPage">
                  <button
                    onClick={() => handleDonate(beneficiary.id || beneficiary._id)}
                    className="flex-1 bg-[#394867] text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition duration-300 shadow"
                  >
                    تبرع الآن
                  </button>
                </Link>

                <button
                  onClick={() => openPdf(beneficiary.document)}
                  className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow"
                >
                  عرض المستندات
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeneficiaryCard;