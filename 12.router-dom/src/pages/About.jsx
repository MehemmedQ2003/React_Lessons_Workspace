import { Link, Outlet } from "react-router-dom"

const About = () => {
  return (
    <div style={{ padding: "10px" }}>
      <h1>About</h1>
        <Link style={{marginRight: "10px"}} to="/about/employee">Employee</Link>
        <Link style={{marginRight: "10px"}} to="/about/company">Company</Link>

        <Outlet />
    </div>
  )
}

export default About
