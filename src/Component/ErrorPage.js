import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const routingError = useRouteError();
    console.log("Routing error...", routingError);
    return (
        <div>
            <h1>Oops!! Some error occured.</h1>
            <h3>{routingError.status} : {routingError.error.message}</h3>
        </div>
    )
}

export default ErrorPage