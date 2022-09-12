import "../../Assets/Styles/PageThree.css";
import "../../Assets/Styles/Global.css";
import "../../Assets/Styles/Font.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function PageThree() {
    return (
        <div className="page-3">
            <div className="row">
                <div className="col">
                    <span className="page-3-tittle">
                        Education
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col study-info under-line">
                    <span>
                        <b>2018, Information technology</b>
                        <br/>
                        Hanoi Open University
                        <br/>
                        3.0 GPA
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col study-info">
                    <span>
                        <b>2019, Higher Diploma in Software Engineering</b>
                        <br/>
                        Aprotrain Aptech
                        <br/>
                        3.0 GPA
                    </span>
                </div>
            </div>
            <div className="row">

            </div>
        </div>
    );
}

export default PageThree;
