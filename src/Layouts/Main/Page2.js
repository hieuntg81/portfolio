import "../../Assets/Styles/Book.css";
import "../../Assets/Styles/PageTwo.css";
import "../../Assets/Styles/Font.css";
import "../../Assets/Styles/Global.css";
import avatar from "../../Assets/Images/Avatar/avatar.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { SiGmail } from "react-icons/si";
function PageTwo() {
    return (
        <div className="page-2">
            <div className="layer-3">
            </div>
            <div className="layer-4">
                <div className="row row-layer-4-1">
                    <div className="col">
                        <img className="avatar-img" src={avatar}/>
                    </div>
                    <div className="col">
                        <span className="text-name">
                            <b>Hello, <br/>
                            I'm Hieu Nguyen
                        </b>
                        </span>

                    </div>
                </div>
                <div className="row">
                    <div className="col row-auth-info">
                        My full name is Nguyen Trung Hieu. You can also call me Kowalski. I was born in 1995 in Hanoi, the capital of Vietnam. And like many other Vietnamese, I like sports, especially football. I also love computers, both hardware and software. My profession is a programmer and I really enjoy this job as much as playing football.
                        <br/>
                        <br/>
                        <FaFacebook/> huienium
                        <br/>
                        <SiGmail/> hieuntg81@gmail.com
                        <br/>
                        <AiFillPhone/> 0963660205
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageTwo;
