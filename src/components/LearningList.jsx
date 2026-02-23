import { CheckCircle2, BookOpen } from 'lucide-react';

// Accept { items } as a prop
const LearningList = ({ items = [] }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="text-[#F54900]" size={24} />
        <h2 className="text-xl font-bold text-gray-900">What You'll Learn</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
        {/* Map through the dynamic items from course.js */}
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <CheckCircle2 className="text-green-500 shrink-0" size={20} />
            <span className="text-gray-700 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningList;