import {H1, Caixa} from '../Styles/PagEventosEmpr.js'

import foto1 from '../imgs/image6.png'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../Styles/PagEmpresas.css'

const PagAddEventosEmpreendedorismo = () => {
    return(
        <Caixa>
            <H1>Eventos de Empreendedorismo:</H1>

            <Card style={{ width: '355px', height:'355px', background: 'linear-gradient( #2D0065 50%, #5A00CB)',fontSize:'24px'  }}>
      <Card.Img variant="top" src={foto1} />
      <Card.Body>
        <Card.Title style={{ color: '#fff', marginLeft: '20px', marginTop: '20px' }}>Gerenciamento de Dados</Card.Title>
        <Card.Text style={{color:'#fff', width:'344px', marginLeft: '20px', marginTop: '10px', fontSize:'20px' }}>
        is simply dummy text of the printing and typesetting industry.
        </Card.Text >
        <Button variant="primary" className="important-padding" style={{border: 'none', color: '#fff', fontSize: '20px', backgroundColor: 'rgba(255, 255, 255, 0.29)' }}>
  saber mais
</Button>



      </Card.Body>
    </Card>

        </Caixa>
    )
}
export default PagAddEventosEmpreendedorismo