import icon from "../assets/react-icon.png"
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img id="icon" src={icon} alt="" />
                <h1 id="logo-name">ReactFacts</h1>
            </div>
            <div className="project-desc">
                <h2>React Course - Project 1</h2>
            </div>
        </div>
    )
}