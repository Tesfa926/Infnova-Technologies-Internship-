import { User, Award, PlayCircle, Users } from 'lucide-react';

const InstructorBio = ({ name, role, bio, image }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-8">
        <User className="text-[#F54900]" size={24} />
        <h2 className="text-xl font-bold text-gray-900">Instructor</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
        <img 
          src={image || "../src/images/default-avatar.jpg"} // Dynamic Image
          alt={name} 
          className="w-24 h-24 rounded-full object-cover border-4 border-[#F54900]/10"
        />
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
          <p className="text-[#F54900] font-medium">{role}</p>
          
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
             {/* Note: You can add these stats to your JSON later if you want them dynamic too! */}
            <div className="flex items-center gap-1"><Award size={16} /><span>Expertise Verified</span></div>
            <div className="flex items-center gap-1"><Users size={16} /><span>Top Rated</span></div>
          </div>
        </div>
      </div>

      <div className="text-gray-700 leading-relaxed border-t border-gray-100 pt-6">
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default InstructorBio;