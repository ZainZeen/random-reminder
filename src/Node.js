const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');

// 用户设置的参数
const totalDuration = 3600; // 总时长，单位秒（例如1小时）
const randomRangeA = 300; // 随机间隔最小值，单位秒（例如5分钟）
const randomRangeB = 600; // 随机间隔最大值，单位秒（例如10分钟）

// 生成音频文件
function generateAudioFile() {
  const outputFilePath = path.join(__dirname, 'output_audio.mp3');
  let currentDuration = 0;

  function addSoundOrSilent() {
    const isSound = Math.random() < 0.5; // 随机决定播放声音或静音
    const duration = Math.floor(Math.random() * (randomRangeB - randomRangeA + 1)) + randomRangeA;

    if (currentDuration + duration > totalDuration) {
      duration = totalDuration - currentDuration;
    }

    if (isSound) {
      // 将提示音文件拼接到输出文件
      ffmpeg()
        .input('/path/to/your/sound.mp3')
        .inputOptions([-ss, '00:00:' + Math.floor(currentDuration / 3600), -to, '00:00:' + Math.floor((currentDuration + duration) / 3600)])
        .output(outputFilePath)
        .on('end', () => {
          currentDuration += duration;
          if (currentDuration < totalDuration) {
            setTimeout(addSoundOrSilent, 0);
          }
        })
        .run();
    } else {
      // 直接跳过静音部分
      currentDuration += duration;
      if (currentDuration < totalDuration) {
        setTimeout(addSoundOrSilent, 0);
      }
    }
  }

  // 从第一个声音开始
  addSoundOrSilent();
}

// 生成音频
generateAudioFile();