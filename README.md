🎓 Infnova Academy

A modern, dynamic course marketplace built with React, Tailwind CSS, and React Router. This project was developed as part of an internship evaluation, focusing on creating a data-driven, responsive user experience.

Shutterstock

🚀 Features
Dynamic Course Routing: Implemented a single-page architecture where course details are generated dynamically using useParams based on a centralized JSON data store.

Real-time Search Engine: A "Lifting State Up" pattern allows users to filter through courses by title or instructor instantly.

Responsive 12-Column Grid: A mobile-first design that transitions from a single column on mobile to a professional sidebar layout on desktop.

Sticky Conversion Point: The Enrollment Card uses sticky positioning to remain visible while users explore long course descriptions, optimizing for UX.

Interactive UI Components: Includes hover effects, active scaling on buttons, and custom-styled scrollbars.

🛠️ Tech Stack
Frontend: React 19 (Vite)

Styling: Tailwind CSS

Icons: Lucide-React

Routing: React Router DOM v6

State Management: React Hooks (useState, useEffect, useParams, useNavigate)

🏗️ Project Structure

src/
├── components/        # Reusable UI Atoms (Buttons, SearchBar, Cards)
├── data/              # Centralized course.js (The "Source of Truth")
├── pages/             # Page-level components (CoursesPage, CourseDetails)
└── App.jsx            # Routing configuration

 Key Technical Challenges Solved

1. Controlled Components & State Lifting
Solved the challenge of synchronizing the search input with the displayed course list. By lifting the search state to the CoursesPage parent, the application ensures that the "Showing X of Y" counter and the CoursesGrid stay perfectly in sync.

2. Dynamic Template Logic
Instead of hard-coding 8 different detail pages, I built one CourseDetails template. It uses the URL slug to find the correct object in the data array, ensuring the site is easily scalable—adding a 9th course only requires updating the JSON file.

3. Handling Browser Inconsistencies
Addressed accessibility and browser warnings by implementing proper id and name attributes for form fields and ensuring modern React 19 createRoot patterns were followed for performance.

4. Real-time Search Logic
Implemented a "Lifting State Up" pattern to sync the search input with the course catalog.

Derived State: Results are calculated during render, ensuring the "Showing X of Y" counter stays perfectly in sync without extra state bugs.

Normalization: Applied case-insensitive filtering across both course titles and instructor names.

5. Dynamic Template Mapping

Eliminated code duplication by building a single, context-aware CourseDetails page.

URL Parameters: Used useParams to fetch granular data (Learning points, Bios, Descriptions) based on the course ID.

DRY Architecture: Components like LearningList and InstructorBio are fully reusable, reducing the codebase size by 80%.


📥 Quick Start

📥 Installation & Setup


Step 1: Clone the repository
git clone https://github.com/Tesfa926/Infnova-Technologies-Internship-.git


Step 2:Install dependencies
npm install

Step 3: Run the development server
npm run dev