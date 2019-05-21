
import TimerStore from './timer'
class RootStore {
    constructor() {
      this.timer = new TimerStore(this);
    }
  }
  
export default RootStore;