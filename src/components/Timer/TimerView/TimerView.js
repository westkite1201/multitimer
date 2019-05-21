import React, { Component } from 'react'
import TimerItem from '../TimerItem'
import io from 'socket.io-client';
import { observer, inject, } from 'mobx-react'
class TimerView extends Component {
    state = {
        socket : ''
    }
    componentDidMount(){
        const {setSocketConnection} = this.props;
        setSocketConnection();
    }


   render() {
       const {stopTimer} = this.props;
        return (
            <div>
                <TimerItem/>
                <button onClick = { () => stopTimer('name',1)}> 버튼 클릭 </button>       
            </div>

        )
    }
}
export default inject(({ timer }) => ({
    setSocketConnection : timer.setSocketConnection,
    stopTimer : timer.stopTimer,
  }))(observer(TimerView));