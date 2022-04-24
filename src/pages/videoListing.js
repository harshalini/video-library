import { Navbar, Sidebar, VideoList } from "../components/allComp"
export const VideoListing = () => {
    return (
        <>
        <Navbar />
        <div className="videolist-container">
        <Sidebar />
        <VideoList />
        </div>
        </>
    )
}