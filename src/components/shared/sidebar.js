import { Link } from "react-router-dom"
export const Sidebar = () => {
    return (
        <div className="flex-div">
            <aside className="lib-sidebar">
                <ul>
                    <Link to="/"><li><i className="sidebar-icon fas fa-home"></i><span>Home</span></li></Link>
                    <Link to="/videoListing"><li><i className="sidebar-icon fas fa-compass"></i><span>Explore</span></li></Link>
                    <Link to="/"><li><i className="sidebar-icon fas fa-film"></i><span>Watch later</span></li></Link>
                    <Link to="/"><li><i className="sidebar-icon fas fa-heart"></i><span>Liked videos</span></li></Link>
                    <Link to="/"><li><i className="sidebar-icon fas fa-history"></i><span>History</span></li></Link>
                </ul>
            </aside>
        </div>
    )
}