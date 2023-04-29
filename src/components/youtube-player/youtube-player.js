import React, { useEffect, useRef } from 'react';

function YouTubePlayer({ videoId }) {
    const playerRef = useRef(null);

    useEffect(() => {
        // Загрузить YouTube API и инициализировать
        const tag = document.createElement('script');
        tag.src = `https://www.youtube.com/iframe_api?key=${"AIzaSyASE1yL21tcq9Wq-C84yqFTxQRbuTUHAkg"}`;

        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            // Создать новый YouTube-плеер
            new window.YT.Player(playerRef.current, {
                videoId: videoId,
                playerVars: {
                    autoplay: 1,
                },
            });
        };

        // Очистить предыдущий плеер, если есть
        return () => {
            if (playerRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                playerRef.current.innerHTML = '';
            }
        };
    }, [videoId]);

    return (
        <div ref={playerRef}>
            {/* Плеер YouTube будет загружен здесь */}
        </div>
    );
}

export default YouTubePlayer;
