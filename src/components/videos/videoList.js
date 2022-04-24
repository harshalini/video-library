import { useVideo } from "../../contexts/videolist-context";
export const VideoList = () => {
    const { video } = useVideo();
    return (
        <div className="videos-grid">
            {video.map(({_id, title, creator, views}) => (
            <div class="ui-component card card-with-badge">
                <div class="card-image">
                    <img src={`https://img.youtube.com/vi/${_id}/hqdefault.jpg`} />
                </div>
                <div class="top-badge">
                    <i class="fas fa-clock watch-later-btn"></i>
                    <i class="far fa-stream playlist-btn"></i>
                </div>
                <div class="card-text">
                    <span className="card-title">{title}</span>
                    <p className="creator-name">{creator}</p>
                    <div class="price video-stats">
                        <p style={{color: "var(--white)"}}>Views: {views}</p>
                        <i class="fa-solid fa-thumbs-up like-btn"></i>
                    </div>
                </div>
            </div>
             ))}
        </div>
    )
}