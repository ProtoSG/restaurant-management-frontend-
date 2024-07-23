export default function Title() {
  const date = new Date()

  const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const formattedDate = `${daysOfWeek[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} del ${date.getFullYear()}`;

  return (
    <div>
      <h1 className="font-semibold text-3xl">Cevichería el 23</h1>
      <span className="text-text"> {formattedDate}</span>
    </div>
  )
}

