import { getHouse } from "./data/api";
import './styles/page.css';
import Swal from 'sweetalert2';

export const disparar = () =>{
    Swal.fire({
        title: 'Aporta!',
        text: '¿Quieres aportar por este apartamento?',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
  }

export default async function HomePage() {
  const casas1 = await getHouse();

  const casas = casas1[1];
   const Swal = require('sweetalert2')

  return (
    <>
      <div className="body">
        {/* <img className="image_inmueble" src={casas.foto1} style={{maxWidth: '300px', margin: '0 auto'}} /> */}
            <div>

            </div>
            <h3 style={{textAlign: 'center'}}>Nuevo apartamento encontrado en tu zona</h3>

            <div className="card" style={{width: '300px', margin: '0 auto'}}>
                <div className="card-body">
                    <div>
                    <img src={casas.foto1} className="card-img-top" alt="..."/>
                    <h5 className="card-title">{casas.Canon}</h5>
                    <p className="card-text">{casas.Ciudad + ' ' + casas.Barrio}</p>
                    <p className="card-text">Apartamento con {casas.Alcobas} alcobas, y {casas.banios} baños con un área de {casas.AreaConstruida} mt2</p>
                    <a href="#" className="btn btn-primary" onClick={disparar()}>Ver</a>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
