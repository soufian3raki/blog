export const Youtube = ({ videoId }) => {
    return (
        /*<iframe
            src={'https://open.spotify.com/embed/episode/${episode}'}
            width="100%"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
        ></iframe>*/

        <iframe
            title={videoId}
            src={`https://www.youtube.com/embed/${videoId}`}
            width="1243" height="696"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
        />
    )
}

