import Header from '../components/Header';
import Footer from '../components/Footer';

function Contributors() {
    return (
        <div>
            {/* Required meta tags */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            {/* Bootstrap CSS */}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
            <title>We Don't Waste Food</title>
            {/* navbar */}
            <Header />
            <div className="container font-weight-bold mt-5 text-center">
                <h2 className="text-primary"><u>Rank of Donators</u></h2>
            </div>
            <table className="container table-bordered table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Team Name</th>
                        <th scope="col">Team Type</th>
                        <th scope="col">Total Donated</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Feeding Poor</td>
                        <td>NGO</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Mahesh Vegada</td>
                        <td>Personal</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Honest Restaurant</td>
                        <td>Personal</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
            <div className="container font-weight-bold mt-5 text-center">
                <h2 className="text-danger"><u>Rank of Receiver</u></h2>
            </div>
            <table className="container table-bordered table table-striped mb-5">
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Team Name</th>
                        <th scope="col">Team Type</th>
                        <th scope="col">Total Received</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Feeding India</td>
                        <td>NGO</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>DDU Team</td>
                        <td>Team</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Shyam Makwana</td>
                        <td>Personal</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
            {/* footer */}
            <Footer />
        </div>
    )
}
export default Contributors;