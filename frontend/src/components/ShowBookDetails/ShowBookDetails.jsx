import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ShowBookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8082/api/books/${id}`)
      .then(res => {
        setBook(res.data);
      })
      .catch(err => {
        console.log("Error from ShowBookDetails:", err);
        navigate('/books'); // Redireciona se não encontrar
      });
  }, [id, navigate]);

  // Formata a data para formato legível
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const [year, month, day] = dateString.split('T')[0].split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Detalhes do Livro</h2>
            <Link to="/books" className="btn btn-outline-secondary">
              <i className="fas fa-arrow-left me-2"></i>
              Voltar para Lista
            </Link>
          </div>

          <div className="card shadow">
            <div className="card-body">
              <dl className="row">
                <dt className="col-sm-3">Título:</dt>
                <dd className="col-sm-9">{book.title || 'N/A'}</dd>

                <dt className="col-sm-3">ISBN:</dt>
                <dd className="col-sm-9">{book.isbn || 'N/A'}</dd>

                <dt className="col-sm-3">Autor:</dt>
                <dd className="col-sm-9">{book.author || 'N/A'}</dd>

                <dt className="col-sm-3">Editora:</dt>
                <dd className="col-sm-9">{book.publisher || 'N/A'}</dd>

                <dt className="col-sm-3">Data de Publicação:</dt>
                <dd className="col-sm-9">{formatDate(book.published_date)}</dd>

                <dt className="col-sm-3">Descrição:</dt>
                <dd className="col-sm-9">
                  {book.description || 'Nenhuma descrição disponível'}
                </dd>
              </dl>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                <Link 
                  to={`/books/edit/${id}`} 
                  className="btn btn-primary me-md-2"
                >
                  <i className="fas fa-edit me-2"></i>
                  Editar Livro
                </Link>
                
                <Link 
                  to="/books" 
                  className="btn btn-outline-dark"
                >
                  <i className="fas fa-book me-2"></i>
                  Todos os Livros
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBookDetails;