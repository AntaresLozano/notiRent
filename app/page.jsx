import {getHouse} from './data/api'

function HomePage() {
  return (
    <div>
      {/* <h1>{house.title}</h1>
      <img src={house.url} /> */}
    </div>
  );
}


export async function getServerSideProps() {
    let house;
    try {
      house = await getHouse();
    } catch (e) {
      /**
       * If something goes wrong, we return a 404 page
       */
      return {
        notFound: true,
      };
    }

    if (!house) {
        /**
         * If we don't get a `house` back, we return a 404 page
         */
        return {
          notFound: true,
        };
      }
    
      return {
        props: {
          house,
        },
      };
    
}