
export const TiposBasicos = () => {
  let nombre: string | number = "Fernando";
  nombre = 123;

  const cnombre: string = 'Fernando';
  const edad: number = 35;
  const isActivo: boolean = true;
  const poderes: string[] = ['Volar', 'Velocidad', 'Teletransportacion']
  return (
    <>
      <h3>TiposBasicos</h3>
      {nombre}, {edad}, {(isActivo) ? 'Activo' : 'Inactivo'}
      <br/>
      {poderes.join(',')}
    </>
  )
}
