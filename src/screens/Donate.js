import Header from '../components/Header';
import Footer from '../components/Footer';

import image7 from '../images/image7.png';

function Donate() {
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
            {/* navbar */}
            <Header />

            {/* carousel */}
            <div
                id="carouselExampleCaptions"
                className="carousel slide carousel-fade"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={image7}
                            className="d-block w-100"
                            alt="image unavailable"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="fs-1 fw-bold">
                                YOUR SUPPORT MATTERS
                            </h1>
                            <h2 className="fs-1 fw-bold">
                                Contribute to help us provide essential food
                                support to those in need
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container font-weight-bold mt-5 text-center">
                <h2 className="text-danger">
                    Enter following details to Donate Food
                </h2>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col" />
                    <div className="col-md-6">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label
                                    htmlFor="inputfirst4"
                                    className="form-label"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputfirst4"
                                />
                            </div>
                            <div className="col-md-6">
                                <label
                                    htmlFor="inputlast4"
                                    className="form-label"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputlast4"
                                />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label
                                    htmlFor="inputEmail4"
                                    className="form-label"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail4"
                                />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label
                                    htmlFor="inputmobile4"
                                    className="form-label"
                                >
                                    Mobile No.
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputmobile4"
                                />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label
                                    htmlFor="inputfoodname4"
                                    className="form-label"
                                >
                                    Food Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputfoodname4"
                                />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label
                                    htmlFor="inputfunname4"
                                    className="form-label"
                                >
                                    Function Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputfunname4"
                                />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label
                                    htmlFor="inputtype4"
                                    className="form-label"
                                >
                                    Food Type
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputtype4"
                                />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label
                                    htmlFor="inputquantity4"
                                    className="form-label"
                                >
                                    Quantity
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputquantity4"
                                />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label
                                    htmlFor="inputlevel4"
                                    className="form-label"
                                >
                                    Hygiene Level
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputlevel4"
                                />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label
                                    htmlFor="inputcook4"
                                    className="form-label"
                                >
                                    Coooked Time
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputcook4"
                                />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label
                                    htmlFor="inputexpiry4"
                                    className="form-label"
                                >
                                    Expiry Time
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputexpirye4"
                                />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label
                                    htmlFor="inputtime4"
                                    className="form-label"
                                >
                                    Current Time
                                </label>
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    id="inputtime4"
                                />
                            </div>
                            <div className="col-12 mt-2">
                                <label
                                    htmlFor="inputdesc"
                                    className="form-label"
                                >
                                    Food Description
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputdesc"
                                />
                            </div>
                            <div className="col-12 mt-2">
                                <label
                                    htmlFor="inputAddress"
                                    className="form-label"
                                >
                                    Current Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress"
                                />
                            </div>
                            <div className="col-md-4 mt-2">
                                <label
                                    htmlFor="inputCity"
                                    className="form-label"
                                >
                                    City
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputCity"
                                />
                            </div>
                            <div className="col-md-4 mt-2">
                                <label
                                    htmlFor="inputstate"
                                    className="form-label"
                                >
                                    State
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputstate"
                                />
                            </div>
                            <div className="col-md-4 mt-2">
                                <label
                                    htmlFor="inputZip"
                                    className="form-label"
                                >
                                    Pin Code
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputZip"
                                />
                            </div>
                            <div className="col-md-4 mt-2">
                                <label htmlFor="exampleFormControlFile1">
                                    Upload Food Image
                                </label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="exampleFormControlFile1"
                                />
                            </div>
                            <div className="col-md-12 text-center mt-4 mb-5">
                                <button
                                    type="submit"
                                    className="btn btn-danger align-self-center"
                                >
                                    Donate
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col" />
                </div>
            </div>
            {/* footer */}
            <Footer />
            {/* Optional JavaScript */}
            {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </div>
    )
}
export default Donate;
