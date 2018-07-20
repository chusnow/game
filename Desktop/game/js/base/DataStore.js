//变量,数据管理
export class DateStore {
  static getInstance (){
    if(!DateStore.instance){
      DateStore.instance = new DateStore();
    }
    return DateStore.instance;
  }
  constructor (){
    this.map = new Map();
  }
  put (key,value){
    this.map.set(key,value);
    return this;
  }
  get (key){
    return this.map.get(key)
  }
  destroy (){
    for(let value of this.map.values()){
          value = null;
    }
  }
}