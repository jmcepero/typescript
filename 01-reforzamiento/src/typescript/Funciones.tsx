
export const Funciones = () => {

    const sumar = (a: number, b: number):number => {
        return a + b
    }

    return (
        <>
            <h3>Funciones</h3>
            <br/>
            <span>El resultado es: </span>{ sumar(4,6) }
        </>
    )
}
