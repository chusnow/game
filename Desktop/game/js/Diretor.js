//导演类，控制游戏逻辑

import { DateStore} from './base/DataStore.js'
export class Diretor {
 
  static getInstance(){  //实现构造器的单例模式，多次调用执行一次
    if(!Diretor.instance){
      Diretor.instance = new Diretor();
    }
    return Diretor.instance;
  }
  constructor() {
    this.dataStore = DateStore.getInstance();
  }
  run(){
     this.dataStore.get('background').draw();
     this.dataStore.get('land').draw();
     requestAnimationFrame(() => this.run())
  }
}