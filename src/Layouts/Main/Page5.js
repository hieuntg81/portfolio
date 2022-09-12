import "../../Assets/Styles/PageFive.css";
import "../../Assets/Styles/Font.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function PageFive() {
    return (
        <div className="page-5">
            <div className="layer-5-0">
            </div>
            <div className="layer-5-1">
            </div>
            <div className="layer-5-2">
                <div className="row job-tittle-container">
                    <span className="job-tittle">
                        <b>GOLANG INTERN </b> @ VinID
                        <br/>
                        <span className="time-range">Jun 2019 - Dec 2019</span>
                    </span>
                    <div className="work-item">
                        Responsibility
                        <ul>
                            <li>Learning knowledge of Golang programming language </li>
                            <li>Developing features for Scan&Go: support for operation</li>
                            <li>Basic Optimized query MySQL</li>
                        </ul>
                    </div>
                    <div className="work-item">
                        Technology
                        <ul>
                            <li>Backend: Golang (Gorm, Beego, Orm)</li>
                            <li>Project management: Jira, Agile Scrum</li>
                            <li>Other: Git, Goland, DataGrip</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PageFive;
