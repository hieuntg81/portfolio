import React, {Component} from "react";
import "../../Assets/Styles/CoverPage.css"

class CoverPage extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        let pages = document.getElementsByClassName('page');
        for (let i = 0; i < pages.length; i++) {
            let page = pages[i];

            if (i % 2 === 0) {
                page.style.zIndex = (pages.length - i);
            }
        }

        for (let i = 0; i < pages.length; i++) {
            pages[i].pageNum = i + 1;
            pages[i].onclick = function () {
                if (this.pageNum % 2 === 0) {
                    this.classList.remove('flipped');
                    this.previousElementSibling.classList.remove('flipped');
                } else {
                    this.classList.add('flipped');
                    this.nextElementSibling.classList.add('flipped');
                }
            }
        }
    }

    render() {
        return (
            <div id="pages" className="pages">
                <div className="page" id="page-1">1</div>
                <div className="page" id="page-2">2</div>
                <div className="page" id="page-3">3</div>
                <div className="page" id="page-4">4</div>
                <div className="page" id="page-5">5</div>
                <div className="page" id="page-6">6</div>
                <div className="page" id="page-7">7</div>
                <div className="page" id="page-8">8</div>
            </div>
        )

    }
}

export default CoverPage;
