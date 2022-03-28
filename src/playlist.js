import React from "React";

const playlist = ({playlist}) =>
(
    <li>
        <div>image={playlist.dataAlbum.album.images[0].url}</div>
        <div>namaAlbum={playlist.dataAlbum.album.name}</div>
        <div>artistName={playlist.dataAlbum.artists[0].name}</div>
        <div>urlTo={playlist.dataAlbum.album.external_urls.spotify}</div>
    </li>
)

export default playlist;