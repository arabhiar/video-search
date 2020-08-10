import { useState, useEffect } from "react";

import youTube from "../api/youtube";
const KEY = "AIzaSyBSI5MTsYRveNu-EfRNBhjMsh3EzJqdmrQ";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youTube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                type: "video",
                maxResults: 5,
                key: KEY,
            },
        });
        setVideos(response.data.items);
    };

    return [videos, search];
};

export default useVideos;
