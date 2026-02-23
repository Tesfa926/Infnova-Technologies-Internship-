import { useState } from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CoursesGrid from "../components/CoursesGrid";
import { courses } from "../data/courses"
import Footer from "../components/Footer";

function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic: Check if title or instructor matches the search
  const filteredCourses = courses.filter((course) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      course.title.toLowerCase().includes(searchLower) ||
      course.instructor.toLowerCase().includes(searchLower)
    );
  });
  
  return (
    <>
      <Navbar />
      <div className="pt-[80px]">
        <Hero />
      </div>

      <div className="pt-[32px]">
        {/* Pass the setter to SearchBar */}
       <SearchBar searchQuery={searchQuery} onSearch={(value) => setSearchQuery(value)} />
      </div>

      <div className="p-8 max-w-7xl mx-auto">
        {/* Dynamic "Showing X of Y" */}
        <p className="text-gray-500 mb-6 font-medium">
          Showing <span className="text-black">{filteredCourses.length}</span>{" "}
          of {courses.length} courses
        </p>

        {/* Pass ONLY the filtered list to the grid */}
        {filteredCourses.length > 0 ? (
  <CoursesGrid courses={filteredCourses} />
) : (
  <div className="text-center py-20">
    <p className="text-gray-500 text-lg">No courses found matching "{searchQuery}"</p>
    <button 
      onClick={() => setSearchQuery("")}
      className="text-[#F54900] font-bold mt-2 hover:underline"
    >
      Clear all filters
    </button>
  </div>
)}
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </>
  );
}
export default CoursesPage;
