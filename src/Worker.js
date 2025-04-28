// backgroundWorker.js

// Web Worker 的自执行函数
(function() {
    // 监听主线程的消息
    self.addEventListener('message', function(e) {
      // 当收到开始计时的指令时
      if (e.data && e.data.command === 'start') {
        const startTime = e.data.time;
  
        // 设置一个内部变量来记录上一次的时间
        let lastTime = startTime;
  
        // 创建一个定时器，每隔一秒钟发送一次消息到主线程
        setInterval(function() {
          const now = Date.now();
          const elapsedTime = now - startTime;
  
          // 发送经过的时间为消息
          self.postMessage({
            elapsedTime: elapsedTime
          });
  
          // 更新 lastTime 为当前时间
          lastTime = now;
        }, 1000);
      }
    });
})();