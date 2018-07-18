//资源文件加载，确保canvas加载完，渲染
import { Resources } from "./Resources.js";
export class ResourcesLoad {
  constructor() {
    this.map = new Map(Resources);
    for (let [key, value] of this.map) {
      const image = wx.createImage();
      image.src = value;
      this.map.set(key, image);
      console.log(this.map)
    }
  }
  onLaded(callback) {
    let loadedCont = 0;
    for (let value of this.map.values()) { 
        value.onload  = ()=>{
          loadedCont ++ ;
          if (loadedCont >= this.map.size){
            callback(this.map)
          }
        }
    }
  }
  static create(){
    return new ResourcesLoad();
  }
}