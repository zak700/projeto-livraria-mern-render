import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";
import Layout from "./components/sidebar/Layout";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route exact path="/books" element={<ShowBookList />} />
            <Route path="/create-book" element={<CreateBook />} />
            <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
            <Route path="/show-book/:id" element={<ShowBookDetails />} />
            <Route path='/home' element={<h1 className='test-text'>Home page</h1>}></Route>
            <Route path='/profile' element={<h1 className='test-text'>Profile page</h1>}></Route>
            <Route path='/messages' element={<h1 className='test-text'>Messages page</h1>}></Route>
            <Route path='/history' element={<h1 className='test-text'>History page</h1>}></Route>
            <Route path='/tasks' element={<h1 className='test-text'>Tasks page</h1>}></Route>
            <Route path='/communities' element={<h1 className='test-text'>Communities page</h1>}></Route>
            <Route path='/settings' element={<h1 className='test-text'>Settings page</h1>}></Route>
            <Route path='/support' element={<h1 className='test-text'>Support page</h1>}></Route>
            <Route path='/privacy' element={<h1 className='test-text'>Privacy page</h1>}></Route>
            <Route path='*' element={<h1 className='test-text'>Page not found!</h1>}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};
export default App;
