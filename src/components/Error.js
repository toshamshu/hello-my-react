import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Error page</h1>
            <h2>Oops there is an error !!!</h2>
            <h2>{err.status} - {err.statusText}</h2>
            <h2>{err.data}</h2>            
        </div>
    )
};
export default Error;