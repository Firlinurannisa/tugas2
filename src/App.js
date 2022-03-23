import dataAlbum from "./single-sample.js";

function App() {
    return (
        <div className="bg-light">
            <div className="container">
                <div className="row justify-content-center py-5">
                    <div className="col-md-4">
                        <div className="card">
                            <img
                                src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"
                                className="card-img-top"
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {dataAlbum.album.name}
                                </h5>
                                <p className="card-text">
                                    <svg
                                        className="me-2"
                                        style={{
                                            width: "24px",
                                            height: "24px",
                                        }}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {dataAlbum.artists[0].name}
                                </p>
                                <a
                                    href={dataAlbum.album.external_urls.spotify}
                                    className="btn btn-primary w-100"
                                >
                                    Show This
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
