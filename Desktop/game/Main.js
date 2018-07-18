
import { ResourcesLoad} from './js/base/ResourcesLoad.js'
export class Main {
    constructor (){
       this.canvas = wx.createCanvas();
       var ctx = this.canvas.getContext('2d')
       const loader = ResourcesLoad.create();
       loader.onLaded(map => this.onResourcesFirstLoad(map))
    }
    onResourcesFirstLoad(map){
      console.log(map)
    }
}