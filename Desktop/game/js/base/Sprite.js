//精灵的基类，负责初始化加载资源和大小以及位置
import {DateStore} from './DataStore.js'
export class Sprite {
  constructor(ctx = null,
    img = null,
    srcY = 0,
    srcX = 0,
    srcW = 0,
    srcH = 0,
    x = 0, y = 0,
    width = 0, height = 0) {
    
      this.ctx = ctx,
      this.img = img,
      this.srcY = srcY,
      this.srcX = srcX,
      this.srcW = srcW,
      this.srcH = srcH,
      this.x = x,
      this.y = y,
      this.width = width,
      this.height = height
     
      
  }
  /**
   * img 传入的Image对象
   * srcY 要裁剪的起始Y坐标
   * srcX 要裁剪的起始X坐标
   * srcW 裁剪的宽度
   * srcH 裁剪的高度
   * y放置y坐标
   * x放置x坐标
   * width 要使用的宽度
   * height 要使用的高度
   */
  draw() {
      this.ctx.drawImage(
        this.img ,
        this.srcY ,
        this.srcX ,
        this.srcW ,
        this.srcH ,
        this.x ,
        this.y ,
        this.width ,
        this.height ,
      );
  }
}