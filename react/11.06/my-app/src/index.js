import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


function App() {
    return (
        <div className="App">
            <Card
                endereco='https://www.petz.com.br/blog/wp-content/uploads/2017/11/cachorrinho.jpg'
                alt='cachorro olhar fofo'
                nome='Belo Cachorro'
                subtitulo='Que olhar de pidão, fofoooooo'
                texto='Doggo ipsum what a nice floof long water shoob what a nice floof doge, puggo dat tungg tho. Borkdrive vvv dat tungg tho very jealous pupper, pupperino woofer. Ur givin me a spook heck wow such tempt such treat doggorino shoob snoot, puggo extremely cuuuuuute lotsa pats h*ck shoober. Pupperino what a nice floof heckin maximum borkdrive, very hand that feed shibe long woofer'
            />

            <Card
                endereco='https://image.cachorrogato.com.br/textimages/cachorrinho-ideal'
                alt='cachorro no campo'
                nome='Cachorro no campo'
                subtitulo='amei este cachorrinho'
                texto='Doggo ipsum what a nice floof long water shoob what a nice floof doge, puggo dat tungg tho. Borkdrive vvv dat tungg tho very jealous pupper, pupperino woofer. Ur givin me a spook heck wow such tempt such treat doggorino shoob snoot, puggo extremely cuuuuuute lotsa pats h*ck shoober. Pupperino what a nice floof heckin maximum borkdrive, very hand that feed shibe long woofer'
            />
        </div>
    );
}


function Card(props) {
    return (
        <div className="comentario">
            <img className='comentario__perfil' src={props.endereco} alt={props.alt} />
            <div>
                <h2 className='comentario__nome'>{props.nome}</h2>
                <h3 className='comentario__subtitulo'>{props.subtitulo}</h3>
                <hr />
                <p>{props.texto}</p>
            </div>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
