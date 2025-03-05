// ProjectDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectDetailsPage = () => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/projects/${id}`) 
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => console.error("Error fetching project details:", error));
  }, [id]);

  if (!project) return <div>جاري تحميل البيانات...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#2D336B]">{project.title}</h1>
      <p className="text-gray-600 mt-4">{project.description}</p>
      <div className="mt-6">
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
      </div>
      <div className="mt-6">
        <span className="font-bold text-[#2D336B]">الهدف:</span> {project.goal} دينار أردني
      </div>
      <div className="mt-4">
        <span className="font-bold text-[#2D336B]">تم جمعه:</span> {project.raised} دينار أردني
      </div>
      {/* يمكنك إضافة المزيد من التفاصيل حسب الحاجة */}
    </div>
  );
};

export default ProjectDetailsPage;
