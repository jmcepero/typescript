import { useState } from "react";
import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {

    const { valor, acumular } = useCounter(0);

    return (
        <>
            <h3>Contador Con Hook <small>{valor}</small></h3>
            <br />
            <button className="btn btn-primary" onClick={() => acumular(1)}>
                Incrementar
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => acumular(-1)}>
                Decrementar
            </button>
        </>
    )
}
