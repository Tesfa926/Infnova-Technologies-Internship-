import { AlignLeft } from 'lucide-react';

const CourseDescription = ({ description }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <AlignLeft className="text-[#F54900]" size={24} />
        <h2 className="text-xl font-bold text-gray-900">Course Description</h2>
      </div>

      <div className="text-gray-700 leading-relaxed">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CourseDescription;