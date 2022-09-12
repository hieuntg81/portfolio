import logo from './logo.svg';
import './App.css';
import './Assets/Styles/Font.css';
import Book from "./Layouts/Main/Book";

function App() {
    document.title = 'Hieu\'s Portfolio';
    return (
        <div className="book">
            <Book/>
        </div>
    );
}

export default App;
