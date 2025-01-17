import { Cabecalho, Rodape } from '../page';

export default function Rota1() {
    return (
        <div>
            <Cabecalho />
            <h1>Bem-vindo à Rota 1</h1>
            <p>Essa é a página da Rota 1.</p>
            <Rodape />
        </div>
    );
}
