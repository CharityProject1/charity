import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          setError("يجب تسجيل الدخول لعرض هذه الصفحة.");
          return;
        }

        const response = await axios.get("http://localhost:4000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.user);
      } catch (err) {
        setError(err.response?.data?.message || "حدث خطأ أثناء جلب البيانات");
      }
    };

    fetchUserProfile();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (!user) {
    return <div className="text-center">جارٍ تحميل البيانات...</div>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">ملف المستخدم</h2>
      <p><strong>الاسم:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>البريد الإلكتروني:</strong> {user.email}</p>
      <p><strong>رقم الهاتف:</strong> {user.phoneNumber}</p>
      <p><strong>العنوان:</strong> {user.address}</p>
      <p><strong>الدور:</strong> {user.role}</p>
      <p><strong>الحالة:</strong> {user.status}</p>
    </div>
  );
};

export default Profile;
