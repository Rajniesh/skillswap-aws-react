import React from "react";
import "./Home.css";
function Home(){
    return(
        <div className="home-page">
            <h1>Welcome to SkillSwap!</h1>
            <p>Find and share skills with others. </p>
            <button onClick={()=>alert("Get started!")}></button>

        </div>
    )
}
export default Home;