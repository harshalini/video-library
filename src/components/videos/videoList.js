import { useVideo } from "../../contexts/videolist-context";
export const VideoList = () => {
    const { video } = useVideo();
    return (
        <div className="videos-grid">
            {video.map((mp4) => (
            <div class="ui-component card card-with-badge">
                <div class="card-image">
                    <img src={`https://img.youtube.com/vi/${mp4._id}/hqdefault.jpg`} />
                </div>
                <div class="top-badge">
                    <i class="fas fa-clock watch-later-btn"></i>
                    <i class="far fa-stream playlist-btn"></i>
                </div>
                <div class="card-text">
                    <span className="card-title">{mp4.title}</span>
                    <p className="creator-name">{mp4.creator}</p>
                    <div class="price video-stats">
                        <p style={{color: "var(--white)"}}>Views: {mp4.views}</p>
                        <i class="fa-solid fa-thumbs-up like-btn"></i>
                    </div>
                </div>
            </div>
             ))}
        </div>
    )
}