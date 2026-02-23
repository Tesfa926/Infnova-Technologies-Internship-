import { Star, Clock, Users, User, ChevronLeft } from "lucide-react";


const CourseHero = ({onBack,course}) => {

  // Fallback check: If course is somehow undefined, don't crash the app
  if (!course) return null;

  // Optional: Add a fallback so it doesn't crash if onBack is missing
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.back();
    }
  };
  const stats = [
    {
      icon: <User size={18} />,
      label: "Instructor:",
      value: course.instructor
    },
    { icon: <Clock size={18} />, label: "", value: `${course.duration} weeks`},
    { icon: <Users size={18} />, label: "", value: `${course.students.toLocaleString()} enrolled` },
    {
      icon: <Star size={18} className="text-yellow-400 fill-current" />,
      label: "",
      value: `${course.rating} rating`,
    },
  ];

  return (
    <section className="w-full">
      {/* 1. Back Navigation - 57px from top as requested */}
      <div className="max-w-7xl mx-auto px-8 py-4 mt-[70px]">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="p-2 ml-1 font-medium text-sm">Back to Courses</span>
        </button>
      </div>

      {/* 2. Main Hero Content - Fixed 372px height & Gradient */}
      <div
        className="w-full md:h-[372px] text-white overflow-hidden"
        style={{
          background: "linear-gradient(90deg, #F54900 0%, #FF6900 100%)",
          paddingTop: "48px",
          paddingLeft: "32px",
          paddingRight: "32px",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-start">
          {/* Left Side: Info */}
          <div className="space-y-5">
            <span className="uppercase tracking-widest text-xs font-regular opacity-90">
              {course.category} {/* DYNAMIC */}
            </span>
            <h1 className="text-3xl md:text-5xl font-medium leading-tight">
              {course.title} {/* DYNAMIC */}
            </h1>
            <p className="text-base md:text-lg opacity-90 max-w-xl font-regular leading-relaxed">
              {course.description} {/* DYNAMIC */}
            </p>

            {/* Stats Row - Fixed to stay in one row as much as possible */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm md:text-base whitespace-nowrap">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="opacity-90">{stat.icon}</span>
                  <p>
                    {stat.label && (
                      <span className="opacity-70 mr-1">{stat.label}</span>
                    )}
                    <span className="font-regular">{stat.value}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Level Badge */}
            <div className="inline-flex px-4 py-1.5 bg-[#DBEAFE] rounded-full text-xs font-regular text-[#193CB8] uppercase tracking-wide">
             {course.level} Level {/* DYNAMIC */}
            </div>
          </div>

          {/* Right Side: Image - Fixed visibility and shadow */}
          <div className="flex justify-center lg:justify-end pb-8 lg:pb-0">
            <img
            src={course.image}   /* DYNAMIC */  
              alt={course.title}
              className="rounded-xl object-cover w-[280px] h-[185px] md:w-[324px] md:h-[215px] transition-all duration-300"
              style={{
                boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
