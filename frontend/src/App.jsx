import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import Home from "../src/components/home/Home";
import Profile from "./components/profile/Profile";
import Books from "./components/books/Books";
import BooksUpdate from "./components/booksUpdate/booksUpdate";
import CreateBook from "./components/CreateBook/CreateBook";
import ShowBookDetails from "./components/ShowBookDetails/ShowBookDetails";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/edit/:id" element={<BooksUpdate />} />
          <Route path="/books/view/:id" element={<ShowBookDetails />} />
          <Route path="/books/add" element={<CreateBook />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
