import { Infinity as InfinityIcon } from 'lucide-react';
// Change the import name to an alias
import { 
  PlayCircle, 
  FileText, 
  Smartphone, 
  Trophy, 
  Share2, 
  Heart 
} from 'lucide-react';

const EnrollmentCard = () => {
  const inclusions = [
    { icon: <PlayCircle size={18} />, text: "24 hours on-demand video" },
    { icon: <FileText size={18} />, text: "12 downloadable resources" },
    { icon: <InfinityIcon size={18} />, text: "Full lifetime access" },
    { icon: <Smartphone size={18} />, text: "Access on mobile and Desktop" },
    { icon: <Trophy size={18} />, text: "Certificate of completion" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden sticky top-8">
      {/* Price Section */}
      <div className="p-8 pb-0">
        <div className="gap-3 mb-2">
          <p className="text-2xl font-medium">Enroll Today</p>
          <span className="text-gray-400 text-xl font-regular">Join 2,015 students already enrolled</span>

        </div>
        
      </div>

      {/* Buttons */}
      <div className="p-8 space-y-3">
        <button className="w-full bg-[#F54900] hover:bg-[#D43F00] text-white font-medium py-4 rounded-lg transition-colors shadow-lg shadow-[#F54900]/20 active:scale-[0.98]">
          Enroll Now
        </button>
        <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 font-bold py-4 rounded-lg transition-colors">
          Add to Whishlist
        </button>
        
        <p className="text-center text-xs text-gray-500 mt-4">
          30-Day Money-Back Guarantee
        </p>
      </div>

      {/* Course Inclusions */}
      <div className="p-8 pt-0 border-t border-gray-100 mt-4">
        <h4 className="font-bold text-gray-900 mb-4 pt-6">This course includes:</h4>
        <ul className="space-y-4">
          {inclusions.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
              <span className="text-gray-400">{item.icon}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Share/Actions */}
      <div className="flex border-t border-gray-100">
        <button className="flex-1 py-4 flex justify-center items-center gap-2 font-semibold text-sm hover:bg-gray-50 transition-colors border-r border-gray-100">
          <Share2 size={18} /> Share
        </button>
        <button className="flex-1 py-4 flex justify-center items-center gap-2 font-semibold text-sm hover:bg-gray-50 transition-colors">
          <Heart size={18} /> Gift Course
        </button>
      </div>
    </div>
  );
};

export default EnrollmentCard;