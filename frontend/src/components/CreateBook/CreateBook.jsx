import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:8082/api/books", book)
      .then(() => {
        navigate("/books");
      })
      .catch(err => {
        console.log("Error creating book:", err.response?.data || err.message);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Add New Book</h2>
            <Link to="/books" className="btn btn-outline-secondary">
              <i className="fas fa-arrow-left me-2"></i>
              Back to List
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* Campos mantidos iguais ao EditBook */}
              <div className="col-md-12">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={book.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="isbn" className="form-label">ISBN</label>
                <input
                  type="text"
                  className="form-control"
                  id="isbn"
                  name="isbn"
                  value={book.isbn}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="author" className="form-label">Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  value={book.author}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="publisher" className="form-label">Publisher</label>
                <input
                  type="text"
                  className="form-control"
                  id="publisher"
                  name="publisher"
                  value={book.publisher}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="published_date" className="form-label">Published Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="published_date"
                  name="published_date"
                  value={book.published_date}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="4"
                  value={book.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-12 d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                <button type="submit" className="btn btn-primary me-md-2">
                  Add Book
                </button>
                <Link to="/books" className="btn btn-outline-secondary">Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;