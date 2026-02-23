import { Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Link to={`/course/${course.id}`} className="block no-underline">
    <div className="group bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-all hover:-translate-y-1">
    <div
      className="
        group
        bg-white
        rounded-lg
        shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]
        overflow-hidden
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        active:scale-[0.98]
        focus-within:ring-2
        focus-within:ring-[#F54900]/40
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="
            w-full
            h-40
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />

        {/* Level Badge */}
        <span
          className={`absolute top-2 right-2 px-2 py-1 text-xs rounded-full transition ${
            course.level === "Beginner"
              ? "bg-green-100 text-green-700"
              : course.level === "Intermediate"
              ? "bg-blue-100 text-blue-700"
              : "bg-purple-100 text-purple-700"
          }`}
        >
          {course.level}
        </span>
      </div>

      {/* Course Info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-[#F54900] font-regular mb-1">
          {course.category.toUpperCase()}
        </p>

        {/* Title */}
        <h3 className="font-medium text-sm mb-2 transition-colors group-hover:text-[#F54900]">
          {course.title}
        </h3>

        {/* Instructor */}
        <p className="text-xs text-gray-500 mb-2">
          Instructor: {course.instructor}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-gray-400" />
            <span>{course.duration} weeks</span>
          </div>

          <div className="flex items-center gap-1">
            <Users size={14} className="text-gray-400" />
            <span>{course.students.toLocaleString()}</span>
          </div>

          <span>⭐ {course.rating}</span>
        </div>
      </div>
    </div>
    </div>
    </Link>
  );
};

export default CourseCard;