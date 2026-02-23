import { useParams,useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

import CourseDescription from "../components/CourseDescription";
import CourseHero from "../components/CourseHero";
import EnrollmentCard from "../components/EnrollmentsCard";
import InstructorBio from "../components/InstructorBio";
import LearningList from "../components/LearningList";
import Navbar from "../components/Navbar";


function CoursesDetails(){
    const { id } = useParams(); // Grabs the "id" from the URL path /course/:id

    const navigate = useNavigate(); // For the back button

    // Find the course that matches the ID in the URL
  const course = courses.find((c) => c.id === id);

  // Basic UX: Handle if a user types a wrong URL
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Course not found!</h2>
      </div>
    );
  }
return (
    <main className="min-h-screen bg-[#F9FAFB] pb-20">
      <Navbar />

      {/* 1. Dynamic Hero: pass the whole course object */}
      <CourseHero course={course} onBack={() => navigate(-1)} />

      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            {/* 2. Dynamic Sections */}
            <LearningList items={course.learningPoints} />
            <CourseDescription description={course.description} />
            <InstructorBio 
              name={course.instructor} 
              role={course.instructorRole} 
              bio={course.instructorBio} 
              image={course.instructorImage}
            />
          </div>
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-8">
             {/* 3. Dynamic Sidebar */}
              <EnrollmentCard 
                price={course.price} 
                originalPrice={course.originalPrice} 
                inclusions={course.courseInclusions} 
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );

}
export default CoursesDetails;
