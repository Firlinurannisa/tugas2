import React from "react";
import dataAlbum from "./all-sample.js";
// import Card from "./components/Card";
import ListPlaylist from './ListPlaylist.js';

class App extends React.component {
    constructor(props) {
        super(props);
        this.state = {playlists:all-sample};
    }

    render() {
        return (
            <div classname="App">
                <div className="header">
                    Playlist
                </div>
                <ListPalylist playlists={this.state.playlists} />
            </div>
        );
    };
};


// function App() {
//     return (
//         <div className="bg-light">
//             <div className="container">
//                 <div className="row justify-content-center py-5">
//                     <div className="col-md-4">
//                         <Card
//                             image={dataAlbum.album.images[0].url}
//                             namaAlbum={dataAlbum.album.name}
//                             artistName={dataAlbum.artists[0].name}
//                             urlTo={dataAlbum.album.external_urls.spotify}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default App;
