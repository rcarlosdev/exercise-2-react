import React, { useEffect, useState } from "react";

function Clock(props) {
    const [fecha, setFecha] = useState(new Date());
    const [edad, setEdad] = useState(0);
    const [nombre, setNombre] = useState("Carlos");
    const [apellidos, setApellidos] = useState("Restrepo");

    let intervalo = 0;

    const tick = () => {
        setEdad(edad + 1);
        setFecha(new Date());
    };

    useEffect(() => {
        intervalo = setInterval(() => tick(), 1000);
    });

    useEffect(() => {
        return () => {
            clearInterval(intervalo);
        };
    }, [fecha, edad]);

    return (
        <div>
            <h2>
                Hora Actual: {fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {nombre} {apellidos}
            </h3>
            <h1>Edad: {edad}</h1>
        </div>
    );
}

export default Clock;
