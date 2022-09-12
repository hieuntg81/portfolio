import "../../Assets/Styles/PageSeven.css";
import "../../Assets/Styles/Font.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function PageSeven() {

    return (
        <div className="page-7">
            <div className="layer-7-0">
            </div>
            <div className="layer-7-1">
            </div>
            <div className="layer-7-2">
                <div className="row job-tittle-container">
                    <span className="job-tittle">
                        <b>BACKEND DEVELOPER </b> @ VNPAY
                        <br/>
                        <span className="time-range">Dec 2020 - Nov 2021</span>
                    </span>
                    <div className="work-item">
                        Responsibility
                        <ul>
                            <li>Developing services of buying and selling bus tickets and airport shuttle tickets</li>
                            <li>Project planning (waterfall)</li>
                            <li>Write tests: write unit tests and integration tests</li>
                            <li>Writing documents for partners and client-side teams</li>
                            <li>Monitoring backend system</li>
                            <li>Analysis of business model and solutions</li>
                            <li>Configuration of CI/CD system on Gitlab</li>
                            <li>Training employees</li>
                        </ul>
                    </div>
                    <div className="work-item">
                        Technology
                        <ul>
                            <li>Backend: Java 11 (Spring), PostgreSQL, Elasticsearch</li>
                            <li>Project management: Jira, Gitlab</li>
                            <li>Other: Gitlab (CI/CD), SmartGit, Redis, Kafka, Docker, ELK Stack</li>
                        </ul>
                    </div>
                    <div className="work-item">
                        Key learning points
                        <ul>
                            <li>Merchant Integration, System Design.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageSeven;
