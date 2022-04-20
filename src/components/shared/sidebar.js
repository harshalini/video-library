export const Sidebar = () => {
    return (
        <div className="flex-div">
        <aside className="lib-sidebar">
            <ul>
                <a href="#"><li><i className="sidebar-icon fas fa-home"></i><span>Home</span></li></a>
                <a href="#"><li><i className="sidebar-icon fas fa-compass"></i><span>Explore</span></li></a>
                <a href="#"><li><i className="sidebar-icon fas fa-film"></i><span>Watch later</span></li></a>
                <a href="#"><li><i className="sidebar-icon fas fa-heart"></i><span>Liked videos</span></li></a>
                <a href="#"><li><i className="sidebar-icon fas fa-history"></i><span>History</span></li></a>
            </ul>
        </aside>
        <div className="header">
            <img src="../assets/header-img.svg" className="header-img"></img>
            <a><i className="explore-btn fas fa-play-circle"></i></a>
        </div>
        </div>
    )
}