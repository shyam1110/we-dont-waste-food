import Header from '../components/Header';
import Footer from '../components/Footer';

import image8 from '../images/image8.png';
import dalbhat from '../images/dalbhat.jpg';
import khicadi from '../images/khicadi.jpg';
import pavbhaji from '../images/pavbhaji.jpg';
import rotli from '../images/rotli.jpg';

function ReqForFood() {
    return (
        <div>
            {/* Required meta tags */}
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            {/* Bootstrap CSS */}
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossOrigin="anonymous"
            />
            <title>We Don't Waste Food</title>
            <Header/>
            {/* carousel */}
            <div
                id="carouselExampleCaptions"
                className="carousel slide carousel-fade"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={image8}
                            className="d-block w-100"
                            alt="image unavailable"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="fs-1 fw-bold">
                                BECOME A HUNGER HERO
                            </h1>
                            <h2 className="fs-1 fw-bold">
                                Join our community of passionate Hunger Heroes
                                and lead a movement towards zero hunger
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-1 text-primary">Roti</h3>
                                <p className="d-inline-block mb-2">
                                    Quantity : 10 Dishes
                                </p>
                                <p className="d-inline-block mb-2">
                                    Expiry Time : 2 hrs
                                </p>
                                <p className="card-text mb-auto">
                                    Best quality of Roti with a great taste.
                                </p>
                                <div className>
                                    <button
                                        type="submit"
                                        className="btn btn-danger align-self-center"
                                    >
                                        Receive
                                    </button>
                                </div>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img
                                    className="bd-placeholder-img"
                                    width={250}
                                    height={250}
                                    src={rotli}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-1 text-primary">
                                    Pav - Bhaji
                                </h3>
                                <p className="d-inline-block mb-2">
                                    Quantity : 15 Dishes
                                </p>
                                <p className="d-inline-block mb-2">
                                    Expiry Time : 1.5 hrs
                                </p>
                                <p className="card-text mb-auto">
                                    Best quality of Pav-Bhaji with a great
                                    taste.
                                </p>
                                <div className>
                                    <button
                                        type="submit"
                                        className="btn btn-danger align-self-center"
                                    >
                                        Receive
                                    </button>
                                </div>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img
                                    className="bd-placeholder-img"
                                    width={250}
                                    height={250}
                                    src={pavbhaji}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-1 text-primary">Khicadi</h3>
                                <p className="d-inline-block mb-2">
                                    Quantity : 20 Bowl
                                </p>
                                <p className="d-inline-block mb-2">
                                    Expiry Time : 2 hrs
                                </p>
                                <p className="card-text mb-auto">
                                    Best quality of Khicadi with a great taste.
                                </p>
                                <div className>
                                    <button
                                        type="submit"
                                        className="btn btn-danger align-self-center"
                                    >
                                        Receive
                                    </button>
                                </div>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img
                                    className="bd-placeholder-img"
                                    width={250}
                                    height={250}
                                    src={khicadi}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-1 text-primary">
                                    Dal - Bhat
                                </h3>
                                <p className="d-inline-block mb-2">
                                    Quantity : 12 Dishes
                                </p>
                                <p className="d-inline-block mb-2">
                                    Expiry Time : 1.3 hrs
                                </p>
                                <p className="card-text mb-auto">
                                    Best quality of Dal-Bhat with a great taste.
                                </p>
                                <div className>
                                    <button
                                        type="submit"
                                        className="btn btn-danger align-self-center"
                                    >
                                        Receive
                                    </button>
                                </div>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img
                                    className="bd-placeholder-img"
                                    width={250}
                                    height={250}
                                    src={dalbhat}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <Footer/>
        </div>
    )
}

export default ReqForFood;
