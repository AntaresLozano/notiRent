import { getHouse } from "./data/api";
import './styles/page.css';

export default async function HomePage() {
  const casas1 = await getHouse();

  const casas = casas1[1];

   console.log(casas)
  // let image = casas.foto1
  // let nombre = casas.Tipo_Inmueble + ' ' + casas.Zona ;
  // let precio = casas.Canon;
  // let ubi = casas.Ciudad + ' ' + casas.Barrio;
  // let hab = casas.Alcobas;
  // let area = casas.AreaLote;
  // let banos = casas.banios;
  // let description = casas.descripcionlarga
  return (
    <>
      <div className="body">
        {/* <img className="image_inmueble" src={casas.foto1} style={{maxWidth: '300px', margin: '0 auto'}} /> */}
            <div className="card" style={{width: '300px', margin: '0 auto'}}>
                <div className="card-body">
                    <div>
                    <img src={casas.foto1} className="card-img-top" alt="..."/>
                    <h5 className="card-title">{casas.Canon}</h5>
                    <p className="card-text">{casas.Ciudad + ' ' + casas.Barrio}</p>
                    <p className="card-text">Casa con {casas.Alcobas} alcobas, y {casas.banios} baños con un área de {casas.AreaConstruida} mt2</p>
                    <a href="#" className="btn btn-primary">Ver</a>
                </div>
        </div>
          {/* <ul className="contenedor_listado">
            <li className="item_listado">Precio: {casas.Canon} </li>
            <li className="item_listado">Ubicacion: {casas.Ciudad + ' ' + casas.Barrio} </li>
            <li className="item_listado">Habitaciones: {casas.Alcobas} </li>
          </ul>
          <ul className="contenedor_listado">
            <li className="item_listado">Area: {casas.AreaLot} </li>
            <li className="item_listado">Baños: {casas.banios} </li>
            <li className="item_listado">Desciption: {casas.descripcionlarga} </li>
          </ul> */}
        </div>
      </div>
    </>
  );
}
