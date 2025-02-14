import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const baseURL = "http://localhost:5000/"
  const baseURL = process.env.REACT_APP_API_URL+"/api/";

  const [movies,setMovies]=useState([]);

  useEffect(() => {  
    fetchMovies();
  }, []);

 
const fetchMovies = async () => {
  const response = await axios.get(baseURL+"movies");
  setMovies(response.data);
  console.log(response.data);
}
  return (
    <div className="container mt-3">
      <h1>Movies Management</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Year</th>
            <th>Diretor</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.director}</td>
           </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
