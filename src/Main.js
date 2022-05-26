import React, {useState} from 'react';
import "./style.css";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import { render } from '@testing-library/react';


const Main = (props) => {
    const history = useHistory();
    const circle1= <button id="circle1"/>;
    const circle2= <button id="circle2"/>;
    // const listArr = [];
    const [listArr, setlistArr] = useState([circle2,circle2,circle2,circle2,circle2]);


    // const weekArr = ["일","월","화","수","목","금","토"];         // --> 요일 구현 중... 실패 ;; 
    // const rendering = () => {
    //     const result = [];
    //     for (let i=0; i<weekArr.length ; i++) {
    //         result.push(<span key={i}>{weekArr[i]}</span>);
    //     } return result;
    // };
    const getRandom1 = () => Math.floor(Math.random()*5)+1; // 1~5 까지 랜덤 함수
    const getRandom2 = () => Math.floor(Math.random()*5)+1;
    const getRandom3 = () => Math.floor(Math.random()*5)+1;
    const getRandom4 = () => Math.floor(Math.random()*5)+1;
    const getRandom5 = () => Math.floor(Math.random()*5)+1;
    const getRandom6 = () => Math.floor(Math.random()*5)+1;
    const getRandom7 = () => Math.floor(Math.random()*5)+1;
    console.log(getRandom1(),getRandom2()); 
    const sum = (getRandom1() + getRandom2() + getRandom3() + getRandom4() + getRandom5() + getRandom6() + getRandom7())/7;
    const [avg, setAvg] = useState(sum.toFixed(1));
    const reset = () => {
        setAvg(avg => 0.0);         // --> reset 버튼 동작이 안됨;;; 
    };
    console.log(null);
    console.log(avg, setAvg);


    return (
        <div className="border">
            <h1>내 일주일은?</h1>
            <hr/>
            <div>
                <div className="day"> 
                    <b style={{fontSize: "25px",margin:"10px"}}>일</b>
                        <div>{
                            listArr     //--> 어떻게 값을 넣어야 할지 ㅠㅠ 
                        }</div> 
                    <div id="triangle" onClick={() => {history.push("/day")}}></div>
                </div>
            </div> 
            <div>
                <div className="day"> 
                    <b style={{fontSize: "25px",margin:"10px"}}>월</b>
                        <div>{
                            listArr     //--> 어떻게 값을 넣어야 할지 ㅠㅠ 
                        }</div> 
                    <div id="triangle" onClick={() => {history.push("/day")}}></div>
                </div>
            </div> 
            <div>
                <div className="day">
                    <b style={{fontSize: "25px",margin:"10px"}}>화</b>
                        <div>{
                            listArr     //--> 어떻게 값을 넣어야 할지 ㅠㅠ 
                        }</div> 
                    <div id="triangle" onClick={() => {history.push("/day")}}></div>
                </div>
            </div> 
            <div>
                <div className="day"> 
                    <b style={{fontSize: "25px",margin:"10px"}}>수</b>
                        <div>{
                            listArr     //--> 어떻게 값을 넣어야 할지 ㅠㅠ 
                        }</div> 
                    <div id="triangle" onClick={() => {history.push("/day")}}></div>
                </div>
            </div> 
            <div>
                <div className="day">
                    <b style={{fontSize: "25px",margin:"10px"}}>목</b>
                        <div>{
                            listArr     //--> 어떻게 값을 넣어야 할지 ㅠㅠ 
                        }</div> 
                    <div id="triangle" onClick={() => {history.push("/day")}}></div>
                </div>
            </div> 
            <div>
                <div className="day"> 
                    <b style={{fontSize: "25px",margin:"10px"}}>금</b>
                        <div>{
                            listArr     //--> 어떻게 값을 넣어야 할지 ㅠㅠ 
                        }</div> 
                    <div id="triangle" onClick={() => {history.push("/day")}}></div>
                </div>
            </div> 
            <div>
                <div className="day"> 
                    <b style={{fontSize: "25px",margin:"10px"}}>토</b>
                        <div>{
                            listArr     //--> 어떻게 값을 넣어야 할지 ㅠㅠ 
                        }</div> 
                    <div id="triangle" onClick={() => {history.push("/day")}}></div>
                </div>
            </div> 
            <hr/>
            <b style={{color :"#2663A3", fontSize :"30px"}}> 평균평점 : {avg} </b>
            <br/><button className="button" style={{background : "#2663A3", blockSize:"50px"}} onclick={() => reset} >reset</button>
        </div>
        
    ); 
}


export default Main;