import { Navbar, Sidebar, VideoList } from "../components/allComp"
import { FilterChips } from "../components/videos/genreChips"
export const VideoListing = () => {
    return (
        <>
        <Navbar />
        <div className="videolist-container">
        <Sidebar />
        <FilterChips />
        <VideoList />
        </div>
        </>
    )
}