function Signup() {
    return (
        <div>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        <title>We Don't Waste Food</title>

        <div className="container mt-5">
          <div className="row">
            <div className="col" />
            <div className="col-md-4">
              <form className="form-group">
                <h2 className="text-primary text-center">Sign Up</h2>
                <div className="col-xs-2 mt-2">
                  <label htmlFor="inputfirst4" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="inputfirst4" />
                </div>
                <div className="col-xs-2 mt-2">
                  <label htmlFor="inputEmail4" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-xs-2 mt-2">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="col-xs-2 mt-2">
                  <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword2" />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary mt-3 text-center">Sign Up</button>
                </div>
              </form>
            </div>
            <div className="col" />
          </div>
        </div>
      </div>
    )
}
export default Signup;