import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoursesPage from './pages/CoursesPage';
import CourseDetails from './pages/CourseDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoursesPage /> } />
        {/* Dynamic route for details */}
        <Route path="/course/:id" element={<CourseDetails />} />
      </Routes>
    </Router>
  )
}

export default App;