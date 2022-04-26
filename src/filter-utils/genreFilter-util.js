import { useFilteredData } from "../contexts/filter-context";
export const GetFilteredVideos = (filteredVideos) => {
    const { state: { videoGenre } } = useFilteredData()
    videoGenre.length !== 0 ?
        filteredVideos = filteredVideos.filter(({ genre }) => videoGenre.includes(genre)) :
        filteredVideos;
    return filteredVideos;
}