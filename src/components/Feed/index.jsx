import "../../App.css";

const Feed = ({ publisher, title, link, date }) => {
    let fechaActual = new Date();
    let formatted = { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: true };
    let dateFormatted = new Date(date).toLocaleDateString("es-CO", formatted);
    let fechaArticulo = new Date(date);
    let diferenciaEnMilisegundos = fechaActual - fechaArticulo;
    let diferenciaEnSegundos = Math.floor(diferenciaEnMilisegundos / 1000);
    let diferenciaEnMinutos = Math.floor(diferenciaEnSegundos / 60);
    let diferenciaEnHoras = Math.floor(diferenciaEnMinutos / 60);
    const dynamicStyle = {
        backgroundColor: getColorBasedOnLength(publisher.length),
        border: getColorBasedOnLength(publisher.length)
    };
    function getColorBasedOnLength(length) {
        if (length <= 5) {
            return '#65abc3';
        } else if (length <= 10) {
            return '#356c99';
        } else if (length <= 15) {
            return '#3255bd';
        } else {
            return '#191970';
        }
    }
    return (
        <div className="card">
            <div className="header">
                {(publisher) ? (
                    <div className="publisher" style={dynamicStyle}>{publisher}</div>
                ) : (
                    <div className="publisher" style={dynamicStyle}>El Olfato</div>
                )}
                {(diferenciaEnHoras > 24) ? (
                    <div className="fecha">{dateFormatted}</div>
                ) : (
                    (diferenciaEnMinutos < 60) ? (
                        <div className="fecha">{`Hace ${diferenciaEnMinutos} minutos`}</div>
                    ) : (
                        <div className="fecha">{`Hace ${diferenciaEnHoras} horas`}</div>
                    )
                )}
            </div>
            <h3>{title}</h3>
            <a href={link} target="_blank" rel="noopener noreferrer">Leer más</a>
        </div>
    );
};

export default Feed;