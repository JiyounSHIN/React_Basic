import React from 'react';
import Main from "./Main";
import "./style.css";
import styled from "styled-components";
import {useHistory} from "react-router-dom";


const Day = (props) => {
    const history = useHistory();
    const my_lists = [<button id="circle1"/>,<button id="circle1"/>,<button id="circle2"/>,<button id="circle2"/>,<button id="circle2"/>];
    // const [count, setCount] = React.useState(3);
    // console.log(count)
    // count circle_count = Array.from({ length : count}), (v,i) => i); 
    
    // 클래스형이 아니라서, 함수에 선언을 해줘야한다. ;;
    // const addNemo = () =>  {
    //     setCount(count +1);
    // } 
    
    return (
        <div className="border">
            <h2> <b style={{background: "", fontSize: "25px",margin:"10px"}}>화요일</b> 평점 남기기</h2>
            <div>
                <div className="day">
                    <div>{my_lists}</div>
                </div>
            </div>
            <button className="button" style={{background : "#2663A3", blockSize:"50px"}} onClick={() => {props.history.push("/")}}>평점남기기</button>
        </div>
        
    );
}


export default Day;