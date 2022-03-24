import React,{useState} from 'react';

const WordStyle = (props) => {
    console.log(props.match);
    const [word, setWord] = useState(props.match.params.word)
    const [color1, setColor1] = useState(props.match.params.color1)
    const [color2, setColor2] = useState(props.match.params.color2)
    
    const style = {
        margin:"10px",
        color: `${color1}`,
        backgroundColor: `${color2}`,
        boxShadow:"-1px 1px 7px 0px #C0C0C0",
        border: "2px solid black"
    };
    
    return(
        <h1 style={style}>The Word is {word}</h1>
        );
}
export default WordStyle;