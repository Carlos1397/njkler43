import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor() {
    super();
    this.state = {
      filtro: "",
    }
    this.actualizarFiltro = this.actualizarFiltro.bind(this);
  }
  actualizarFiltro(e) {
    this.setState({
      filtro: e.target.value
    })
  }
  render() {
    const { filtro } = this.state;
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" value={filtro} onChange={this.actualizarFiltro} />
        </div>
        <ul>
          {posts.filter(post => post.title.toLowerCase().includes(filtro.toLowerCase())).map((postitem, index) => (
            <li key={index}>
              <a alt="no se encontro enlace" href={postitem.url}><img alt={`No se encontro image ${postitem.image}`} src={postitem.image} />
                <p>{postitem.title}</p>
              </a>
            </li>
          ))}
        </ul>

      </div >
    )
  }
}


export default App


