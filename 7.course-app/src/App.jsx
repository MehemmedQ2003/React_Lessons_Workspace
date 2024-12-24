import './App.css'
import Course from './components/Course'
import Header from './components/Header'
import { courses } from "./Data"
import "./css/Course.css"

function App() {
  console.log(courses)
  return (
    <div>
      <Header />
      <div className='course-main'>
        {
          courses?.map((course, index) => (
            <Course key={index} course={course}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
