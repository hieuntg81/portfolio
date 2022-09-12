import "../../Assets/Styles/PageFour.css";
import "../../Assets/Styles/Font.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function PageFour() {
    return (
        <div className="page-4">
            <div className="layer-4-0">
            </div>
            <div className="layer-4-1">
            </div>
            <div className="layer-4-2">
                <div className="row page-4-container">
                    <span className="page-4-tittle">
                        Experience
                    </span>
                </div>
                <div className="row job-tittle-container">
                    <span className="job-tittle">
                        <b>FRONTEND DEVELOPER </b> @ IFI SOLUTION
                        <br/>
                        <span className="time-range">Dec 2016 - Apr 2019</span>
                    </span>
                    <div className="work-item">
                        Responsibility
                        <ul>
                            <li>Programming web application according to the customer's plan (energy
                                management system)
                            </li>
                            <li>Maintaining and developing new features.</li>
                            <li>Optimized across browsers IE 9+, Firefox 58+, Chrome 64+</li>
                            <li>Customize external javascript libraries: highcharts, Google Maps JavaScript API</li>
                        </ul>
                    </div>
                    <div className="work-item">
                        Technology
                        <ul>
                            <li>Frontend: AngularJS, Pure Javascript</li>
                            <li>Backend: Java 8 (Struts 2, Spring)</li>
                            <li>Project management: Redmine, Jira, Agile Scrum, Gitlab</li>
                            <li>Other: Git, IntelliJ</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PageFour;
