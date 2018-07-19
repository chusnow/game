import { Animal} from './text/es5.js'
import { ResourcesLoad } from './js/base/ResourcesLoad.js'
import { Diretor } from './js/Diretor.js'
import { BackGround } from './js/runtime/BackGround.js'
import { DownPencil } from './js/runtime/DownPencil.js'
import { DateStore} from './js/base/DataStore.js'
export class Main {
  constructor() {
    this.canvas = wx.createCanvas();
    this.ctx = this.canvas.getContext('2d')
    this.dateStore = DateStore.getInstance();
    const loader = ResourcesLoad.create();
   
    loader.onLaded(map => this.onResourcesFirstLoad(map));
    
  }
  onResourcesFirstLoad(map) {
    this.dateStore.ctx = this.ctx;
    this.dateStore.res = map;
    // console.log(this.dateStore)
    // let background = new BackGround(this.ctx, map.get('backgorund'));
    // background.draw();
     this.init()
  }
  init (){
    this.dateStore.put('background',
    new BackGround(this.ctx, this.dateStore.res.get('backgorund')));
    Diretor.getInstance().run();
  }
}

