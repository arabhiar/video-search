import React, { useState, useEffect } from "react";
import useVideos from "../hooks/useVideos";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default function App() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("ReactJS");

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>

                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={onVideoSelect}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
