// src/utils/eventBus.ts
import mitt from 'mitt';

// 定义所有事件名及其携带的数据类型
type Events = {
  'give-money': number;             // 传钱事件，携带数字
};

const eventBus = mitt<Events>();

export default eventBus;