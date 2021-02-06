function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand mr-4" href="/">
                We Don't Waste Food
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/donate">
                            Donate
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/reqforfood">
                            Request For Food
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contributors">
                            Contributors
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">
                            Contact Us
                        </a>
                    </li>
                </ul>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a href="/login">
                        <button
                            className="btn btn-danger me-md-2"
                            type="button"
                        >
                            Login
                        </button>
                    </a>
                    <a href="/signup">
                        <button className="ml-2 btn btn-danger" type="button">
                            SignUp
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header
