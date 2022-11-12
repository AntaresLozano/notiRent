  const baseUrl = 'https://www.simi-api.com/ApiSimiweb/response/v2.1.3/filtroInmueble/limite/1/total/12/departamento/0/ciudad/';

  const complementUrl = '/zona/0/barrio/0/tipoInm/0/tipOper/0/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/desc/banios/0/alcobas/0/garajes/0/sede/0';

  const codeCities = [['Medellín', '25974'], ['Bello', '26019'], ['Envigado', '25999'], ['Sabaneta', '26020']];

export async function getHouse() {
    // const randomHouse = getRandomInt(1, 12);
    const house = await fetch(baseUrl + codeCities[1] + complementUrl, {
        method: 'GET',
        mode: 'cors',
        headers: {              
          'authorization': 'Basic QXV0aG9yaXphdGlvbjpYNTVTVXV3MEN2VEx0MXRZV1FDU3lieE5LQVVORGFBaExrb3hwRmN0LTY0OQ=='
        }
      }).then((response) => response.json());  
    return house;
  }