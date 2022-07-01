import style from '../styles/teste.module.css';

export default function FuncaoDeTeste(props) {
    //Essa é o parametro que irá receber a propriedade   
    return (
        <div className={style.CorDeFundo}>
            {/* Eu não consigo acessar direto o meu objeto, 
            mas consigo acessar o que passei por argumento */}
            <h1>{props.teste}</h1>
        </div>
    )
}