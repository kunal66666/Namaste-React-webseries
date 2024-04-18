import {useRouteError} from 'react-router-dom';


// usehint this dom we can get exact error

const Error=()=>{
    const err= useRouteError();
    console.log(err);
    return( <div>
        <h1>oops!</h1>
        <h2>something went wrong</h2>
        <h3>{err.status}</h3>
    </div>
    )
}

export default Error;