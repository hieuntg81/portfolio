import "../../Assets/Styles/PageTen.css";
import "../../Assets/Styles/Font.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebook} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import {AiFillPhone} from "react-icons/ai";

function PageTen() {

    return (
        <div className="page-10">
            <div className="row">
                <div className="col">
                    Contact
                    <br/>
                    <FaFacebook/> huienium
                    <br/>
                    <SiGmail/> hieuntg81@gmail.com
                    <br/>
                    <AiFillPhone/> 0963660205
                </div>
            </div>
        </div>
    );
}

export default PageTen;
