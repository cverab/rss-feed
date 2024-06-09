import "../../App.css";

function Dummy({ mensaje }) {
    return (
        <div className="card">
            <div className="header">
                <div className="publisher datagrid">{mensaje}</div>
                <div className="fecha datagrid">{mensaje}</div>
            </div>
            <h3 className='datagrid'>{mensaje}</h3>
            <p className='datagrid'>{mensaje}</p>
        </div>)
}

export default Dummy;