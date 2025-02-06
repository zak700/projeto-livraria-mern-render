import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BookForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const [book, setBook] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  });

  // Carrega os dados do livro se estiver em modo de edição
  useEffect(() => {
    if (isEditMode) {
      axios.get(`http://localhost:8082/api/books/${id}`)
        .then(res => setBook(res.data))
        .catch(err => console.log("Error fetching book:", err));
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const request = isEditMode 
      ? axios.put(`http://localhost:8082/api/books/${id}`, book)
      : axios.post("http://localhost:8082/api/books", book);

    request.then(() => {
      navigate(isEditMode ? `/books` : "/books");
    })
    .catch(err => {
      console.log("Error:", err.response?.data || err.message);
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>{isEditMode ? "Edit Book" : "Add New Book"}</h2>
            <Link to="/books" className="btn btn-outline-secondary">
              <i className="fas fa-arrow-left me-2"></i>
              Back to List
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* Title */}
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

              {/* ISBN */}
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

              {/* Author */}
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

              {/* Publisher */}
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

              {/* Published Date */}
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

              {/* Description */}
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
                  {isEditMode ? "Update Book" : "Add Book"}
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

export default BookForm;