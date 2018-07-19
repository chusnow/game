//背景
import { Sprite} from '../base/Sprite.js'
export class BackGround extends Sprite {
  constructor(ctx,image){
    super(ctx,image,  // 调用父类方法
            0,0,
            image.width,image.height,
            0,0,
            412,732
            );
  }
}