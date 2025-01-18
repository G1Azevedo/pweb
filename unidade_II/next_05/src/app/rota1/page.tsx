import Link from "next/link";

import ComponentB from '../componentB/page';

export function ComponentA() {
    return <div>Acredito que seja o componente A!</div>;
}

export default function Rota1() {
    return (
        <div>
            <h1 className="h1">Rota 1</h1>
            <p>LMensagem legal aqui.</p>
            <ComponentA />
            <ComponentB />
            <Link href="/login"><button className="text-white bg-blue-700 rounded-full px-4 py-2">Fazer login</button></Link>
        </div>
    );
}
