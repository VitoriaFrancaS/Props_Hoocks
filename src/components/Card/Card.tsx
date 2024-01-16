import './Card.css'

// argumentos/parametros = propriedades/props

//modelos de tipagem
//funciona como uma classe = está definindo uma tipagem
//criar estrutura de tipagem e organizar as "classes" no react
interface CardProps {
    titulo: string;
     descricao: string;
}

function Card({titulo, descricao}: CardProps) {
    return (
        <div className="card">
            <h1>{titulo}</h1>
            <p>{descricao}</p>
        </div>
    )
}

export default Card
