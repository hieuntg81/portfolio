import "../../Assets/Styles/PageEight.css";
import "../../Assets/Styles/Font.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function PageEight() {

    return (
        <div className="page-8">
            <div className="layer-8-0">
            </div>
            <div className="layer-8-1">
            </div>
            <div className="layer-8-2">
                <div className="row job-tittle-container">
                    <span className="job-tittle">
                        <b>BACKEND DEVELOPER </b> @ ATM Online
                        <br/>
                        <span className="time-range">Nov 2021 - July 2022</span>
                    </span>
                    <div className="work-item">
                        Responsibility
                        <ul>
                            <li>Programming web application according to the customer's plan (lending system)</li>
                            <li>Maintaining and developing new features.</li>
                            <li>Analysis of business model and solutions</li>
                            <li>Integrating with major payment gateways like VNPay, GPay, SCB, VNPT EPay to help funding and getting repayment from users.</li>
                        </ul>
                    </div>
                    <div className="work-item">
                        Technology
                        <ul>
                            <li>Backend: Java 8 (Spring), PostgreSQL, Elasticsearch</li>
                            <li>Project management: Jira, Gitlab</li>
                            <li>Other: Gitlab</li>
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

export default PageEight;
