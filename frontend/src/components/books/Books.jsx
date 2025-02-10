import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Books() {
  const navi = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowBookList");
      });
  }, []);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/books/${id}`)
      .then(() => {
        setBooks(books.filter((book) => book._id !== id));
      })
      .catch((err) => {
        console.log("Error deleting book:", err);
      });
  };

  return (
    <div className="p-2">
      <div className="bg-white rounded shadow-sm p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="display-4 text-center">Books</h4>
          <Link to="/books/add" className="btn btn-outline-success">
            <i className="bi bi-plus-lg me-2"></i>Create Book
          </Link>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>ISBN</th>
              <th>Author</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.isbn}</td>
                <td>{book.author}</td>
                <td className="text-end">
                  <div className="btn-group">
                    <Link
                      to={`/books/view/${book._id}`}
                      className="btn btn-sm btn-info"
                    >
                      <i className="fas fa-eye fs-6"></i>
                    </Link>

                    <Link
                      to={`/books/edit/${book._id}`}
                      className="btn btn-sm btn-secondary"
                    >
                      <i className="fas fa-pencil fs-6"></i>
                    </Link>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => onDeleteClick(book._id)}
                    >
                      <i className="fas fa-trash fs-6"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Books;