import React, {Component} from "react";
import "../../Assets/Styles/Book.css"
import $ from 'jquery';
import Cover from './Cover';
import PageTwo from './Page2';
import PageThree from './Page3';
import PageFour from './Page4';
import PageFive from './Page5';
import PageSix from './Page6';
import PageSeven from './Page7';
import PageEight from './Page8';
import PageNine from './Page9';
import PageTen from "./Page10";

class Book extends Component {

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
                <div className="page" id="page-1">
                    <Cover/>
                </div>
                <div className="page" id="page-2">
                    <PageTwo/>
                </div>
                <div className="page" id="page-3">
                    <PageThree/>
                </div>
                <div className="page" id="page-4">
                    <PageFour/>
                </div>
                <div className="page" id="page-5">
                    <PageFive/>
                </div>
                <div className="page" id="page-6">
                    <PageSix/>
                </div>
                <div className="page" id="page-7">
                    <PageSeven/>
                </div>
                <div className="page" id="page-8">
                    <PageEight/>
                </div>
                <div className="page" id="page-9">
                    <PageNine/>
                </div>
                <div className="page" id="page-10">
                    <PageTen/>
                </div>
            </div>
        )

    }
}

export default Book;
