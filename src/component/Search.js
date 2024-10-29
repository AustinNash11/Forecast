import React, {useState} from "react";

function Search({setCity}){
    const [userInput, setUserInput] = useState('');

    const handleChange = (e)=>{
        setUserInput(e.target.value);
    }
    const handleClicked = ()=>{
        setCity(userInput);
    }
    const handleEnter = (e)=>{
        if(e.key === 'Enter'){
            handleClicked();
        }
    }
    return(
        <div>
            <input type="text" value = {userInput} onChange={handleChange} onKeyDown={handleEnter} placeholder="Enter a City"/>
            <button onClick={handleClicked}>Search</button>
        </div>
    );
}
export default Search;