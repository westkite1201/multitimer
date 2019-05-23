import React, { Component } from 'react'
import Switch from "react-switch";
import { observer, inject, } from 'mobx-react'
import './TimerItem.scss'
import _ from 'lodash'
class TimerItem extends Component {

    state = { checked: false, };

  componentDidMount(){
    this.setTimer();
  } 
  setTimer = () =>{
    const { timerSetting } = this.props;
    let timerObj = {
      name  : 'number',
      number : 1,
      time : 1000,
      msg : 'setting',
      checked : false,
    }
    timerSetting(timerObj);
  }

  handleChange = (checked) => {
    const {timer ,name, number} = this.props;
    //name , number를  name= number , number = 1인걸로 
    timer.get()




  }


  runTimer = () => {
    let name = 'number';
    let idx = 1;
    let time = 1000;
    const { timerMessage } = this.props;
    timerMessage(name, idx, time);
  }

  switchChange = (checked) =>{
    const { timerMap, 
            startTimer,
            stopTimer } = this.props; 
    
    timerMap.get("number_1").checked = !checked
    let timerObj =  timerMap.get("number_1");
    if(!checked){ //true면 실행 
      startTimer(timerObj)
    }else{ //false 면 stop
      stopTimer(timerObj)
    }

  }


  render() {
    console.log('render')
    const { index,timerMap } = this.props;
    /* 초기 렌더링 오류 막기  */
    if ( _.isNil(timerMap.get("number_1"))){
      return null;
    }
    let checked = timerMap.get("number_1").checked;

    return (
      <div className = "timer-wrapper">
        <div className = "remain">
          {timerMap.get("number_1").remainTime.hour}
          {timerMap.get("number_1").remainTime.minute}
          {timerMap.get("number_1").remainTime.second}
          남은 시간: 00.00.00
          </div>
          <div>
          <Switch
              onChange={() => this.switchChange(checked)}
              checked={_.isNil(checked) ? false : checked}
              className="react-switch"
            />
          </div>
          <button onClick = {this.test}> 버튼 </button>
      </div>
    )
  }
}

export default inject(({ timer }) => ({
  timerSetting : timer.timerSetting,
  startTimer : timer.startTimer,
  stopTimer : timer.stopTimer,
  setStartStopTimer : timer.setStartStopTimer,
  timerMap : timer.timerMap
}))(observer(TimerItem));
