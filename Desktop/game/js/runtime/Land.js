//移动陆地
import { Sprite } from '../base/Sprite.js';
import { DataStore } from "../base/DataStore.js";

export class Land extends Sprite {
  constructor(ctx, image) {
    super(ctx, image,
      0, 0,
      image.width,
      image.height,
      0, 732 - image.height,
      image.width, image.height);
    //地板的水平变化坐标
    this.landX = 0;
    //地板的移动速度
    this.landSpeed = 2
  }
  draw() {
    this.landX = this.landX + this.landSpeed;
    if(this.landX >= (this.img.width - 412 )){
      this.landX = 0;
    }
    console.log(this.img.width)
    super.draw(this.img,
      this.srcX,
      this.srcY,
      this.srcW,
      this.srcH,
      -this.landX,
      this.y,
      this.width,
      this.height)
   
  }
}