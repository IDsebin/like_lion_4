/* eslint-disable */    //사소한 경고 나타나지 않게하기 
import Hometown from './Hometown';
import Food from './Food';
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  let [이름, 이름변경] = useState(['김세빈']);
  let [이모티콘, 이모티콘변경] = useState(0);
  function 이름영어() {
    const newArray = [...이름];
    newArray[0] = 'kimsebin';
    이름변경(newArray);
  }
  
  return (
    <div className="App">
      <div className="black-nav">
          <div style = {{color : 'black', fontsize : '30px'}}>간단한 자기소개</div>
        </div>
        <button onClick={ 이름영어 }>이름영어로 변경</button>
        <div className="list">
        <h3>{ 이름[0] } <span onClick={ ()=>{ 이모티콘변경(이모티콘+1) } }>😊</span> { 이모티콘 } <div className='word'>이모티콘을 눌러주세요</div></h3>
          <p>1999.05.25</p>
          <hr/>
        </div>
        <Food name = '취미'/>
        <Hometown name = '고향'/>
    </div>
  );
}

export default App;
