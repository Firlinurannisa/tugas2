import React from "react";
import dataAlbum from "./single-sample.js";
import Card from "./components/Card";

function App() {
    return (
        <div className="bg-light">
            <div className="container">
                <div className="row justify-content-center py-5">
                    <div className="col-md-4">
                        <Card
                            image={dataAlbum.album.images[0].url}
                            namaAlbum={dataAlbum.album.name}
                            artistName={dataAlbum.artists[0].name}
                            urlTo={dataAlbum.album.external_urls.spotify}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
