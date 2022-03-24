import React,{useState} from 'react';

const Param = (props) => {
    console.log(props);
    let parameter = props.match.params.id;
    const [param, setParam] = useState(parameter);
    return(
        isNaN(param) ? <h1>The Word is: {param}</h1> : <h1>The Number is: {param}</h1>
    );
}
export default Param;