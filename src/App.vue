<style scoped lang="scss">
// 移除/隐藏 Webkit内核浏览器中<input type="number">元素的上下箭头控件
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
.p-switch {
  position: fixed;
  right: 100px;
  top: 20px;
  margin: 30px auto 0;
  width: 200px;
  height: 40px;
  color: white;
  cursor: pointer;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  border-radius: 4px;
  background-color: rgb(70, 113, 245);
  z-index: 2;
}
#app {
  overflow-x: hidden;
  overflow-y: auto;
  position: relative; 
  height: 100vh; /* 使用视口高度 */
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  transform-origin: center center; /* 设置缩放的原点为中心 */
  transform: scale(1); /* 可以设置为其他值来缩放页面 */
  transition: transform 0.3s ease; /* 平滑过渡缩放效果 */
  color: #000;
}
.p-test {
  padding: 60px;
  text-align: center;
  flex-direction: column; /* 子元素垂直排列 */

  max-width: 100%; /* 确保 .p-test 不会小于其内容的宽度 */
  display: flex; /* 使用弹性盒子布局 */
  align-items: center; /* 水平居中对齐 */
  justify-content: center; /* 垂直居中 */
  overflow-x: hidden;
  overflow-y: auto;
  ul {
    padding: 30px 20px;
    top: 50px;
    left: 50px;
    text-align: center;
    font-weight: bold;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    list-style-type: none; /* Remove default list bullets */
    margin: 0; /* Remove default margin */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; /* 保持列方向布局 */
  }
  li {
    margin-top: 14px;
    font-size: 16px !important;
    font-size: inherit !important;
    list-style: none;
    min-width: 230px;
    align-items: center;
    margin-bottom: 10px;
    &.toggle-item {
      align-items: flex-start; /* 确保label和toggle-switch在垂直方向上对齐 */
    }
  }
  li:nth-child(1) {
    margin: 0
  }
  label {
    display: inline-block;
    margin-right: 10px; /* 为开关按钮留出空间 */
    height: 24px;
    line-height: 24px;
    font-size: 16px !important;
    font-size: inherit !important;
  }
  .label {
    width: 140px;
    text-align: right;
  }
  .switch {
    width: 160px;
    margin-right: 100px;
    text-align: right;
  }
  input {
    display: inline-block;
    padding: 0 10px;
    width: 150px;
    height: 24px;
    line-height: 24px;
    outline: none;
    background-color: white;
    font-size: 15px !important;
    border: solid 1px gray;
    border-radius: 2px;
    text-decoration: none;
    color: black;
    &:hover {outline: none;}
  }
  .btn {
    margin: 30px auto 5px;
    width: 200px;
    height: 40px;
    color: white;
    height: 40px;
    line-height: 40px;
    font-size: 20px !important;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    border-radius: 30px;
    border: solid 1px;
  }
  /* 添加点击后状态的按钮样式 */
  .btn-inverse {
    background-color: white !important; /* 反转后的颜色 */
    color: rgb(70, 113, 245); /* 文字颜色反转 */
    border-radius: 30px;
    transition: background-color 0.3s; /* 平滑过渡颜色变化 */
    border: solid 1px rgb(70, 113, 245);
    height: 40px;
    line-height: 40px;
  } 
  .topBar {
    display: flex;
    justify-content: space-between;
    align-items: center; /* 垂直居中对齐 */
    height: 60px;
    padding: 0 20px; 
    position: fixed;
    top: 3.6%;
    left: 0;
    right: 0;
    z-index: 1000; 
  }
  .homepage {
    position: absolute;
    // top: 6%; /* 根据需要调整 */
    left: 5%; 
    cursor: pointer;
    font-size: larger !important;
    color: #000;
  }
  .tool-container {
    position: absolute;
    // top: 4%; /* 根据需要调整 */
    right: 3%; 
    cursor: pointer;
  }
  .tool {
    padding: 10px;
    width: 40px;
    height: auto;
    text-align: center;
    border-radius: 5px; /* 添加圆角 */
    user-select: none; /* 防止用户选择文本 */
    color: #000;
    cursor: pointer;
    transition: transform 0.2s ease; /* 平滑过渡效果 */
  }
  .tool:hover {
    filter: brightness(0.7);
    transform: scale(1.1); /* 放大图片10% */
  }
  .settings-list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
    border-radius: 8px; 
    padding-left: 3px;
    padding-right: 35px;
    width: 320px;
    z-index: 10;
    color: #000;
    background-color: white;
    font-size: 16px !important;
    padding-bottom: 15px;
  }
  body:not(:empty) .settings-list {
    background-color: inherit;  /* 如果页面不为空，则继承页面背景色 */
  }
  .settings-list li {
    display: flex; /* 使用弹性盒子布局 */
    align-items: center; /* 垂直居中对齐 */
    margin-bottom: 10px; /* 列表项之间的间距 */
  }
  .settings-list .label {
    margin-right: 8px;
    white-space: nowrap; /* 防止标签换行 */
  }
  .input-with-unit {
    white-space: nowrap; /* 防止输入框和单位标签换行 */
    text-align: center;
    padding: 0 10px;
  }
  .settings-list li input{
    width: 100px;
    margin-right: 8px;
  }
  .disabled-input {
    opacity: 0.5; /* 降低透明度来表示禁用状态 */
    background-color: #eee; /* 设置一个不同的背景色 */
    cursor: not-allowed; /* 改变鼠标悬停时的光标形状 */
    color: #999; /* 改变文本颜色 */
  }
  .unit-label {
    width: 32px;
    white-space: nowrap; /* 防止时间单位标签换行 */
  }
  .arrow-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .arrow-container img {
    width: 15px;
    height: auto;
    padding-left: -5px;
    cursor: pointer;
    margin: -2px;
    transition: transform 0.3s ease, opacity 0.3s ease; /* 平滑过渡效果 */
  }
  .arrow-container img:hover {
    /* 鼠标悬停时的样式 */
    filter: brightness(0.7); /* 减少亮度，使图片颜色变深 */
    transform: scale(1.1); /* 将图片放大10% */
  }
  .audio {
    font-size: 22px !important;
    margin-top: 40px;
    margin-bottom: 30px;
    font-weight: bolder;
    color: #000;
  }
  .popup {
    position: fixed; /* 绝对定位，相对于浏览器窗口 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 居中 */
    padding: 20px;
    background-color: white;
    border-radius: 10px; /* 圆角效果 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 轻微的阴影，增加立体感 */
    z-index: 100; /* 确保弹窗在最上层 */
    min-width: 300px;
    max-width: 90%; /* 最大宽度，避免在小屏幕上溢出 */
    max-height: 90%; /* 最大高度，可根据需要调整 */
    overflow-y: auto; /* 如果内容超出，显示滚动条 */
    color: #000;
  }
  .clockBox {
    position: relative; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; /* 垂直排列子元素 */
    padding: 20px; 
  }
  .clock {
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    font-size: 45px !important;
    font-weight: 500;
    width: 400px;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
    color: #000;
  }
}
@media (max-width: 5000px) {
  /* 对于小屏幕的样式调整 */
  .p-test {
    padding: 0; /* 移除内边距 */
  }
  .settings-panel {
    width: 100%; /* 使设置面板宽度适应屏幕宽度 */
    padding: 10px; /* 添加一些内边距 */
  }
}
html{
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0; /* 移除默认的边距 */
  padding: 0; /* 移除默认的内边距 */
  height: 100%; /* 确保高度填满视口 */
  width: 100%; /* 确保宽度填满视口 */
}
.toggle-switch {
  margin-left: auto; /* 将开关按钮推到右侧 */
  margin-right: 0; /* 确保没有右侧外边距 */
  display: inline-block;
  position: relative;
  left: -12px;
  width: 40px; /* 调整宽度 */
  height: 24px; /* 调整高度 */
  cursor: pointer;
}
.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.toggle-switch-checkbox {
  display: none; /* 隐藏复选框 */
}
.toggle-switch-label {
  display: block;
  position: relative;
}
.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 45px;
  background-color: #ccc;
  transition: .4s;
  border-radius: 24px; /* 调整圆角 */
}
.toggle-slider:before {
  position: absolute;
  content: "";
  height: 19px; /* 调整高度 */
  width: 19px; /* 调整宽度 */
  left: 3px;
  bottom: 2.5px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}
input:checked + .toggle-slider {
  background-color: rgb(70, 113, 245);
  // background-color: #db3a3a;
}
input:checked + .toggle-slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(20px); /* 根据新宽度调整滑动距离 */
}
.toggle-switch .toggle-slider.round {
  border-radius: 24px; /* 调整圆角 */
}
.toggle-slider.round:before {
  border-radius: 50%;
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.site-footer {
  background-color: #333;  /* #5B5656 */
  color: #A19D9D; 
  padding: 20px 0; 
  width: 100%; 
  text-align: center; 
  position: absolute;
  bottom: -28%; 
  left: 0; 
  right: 0;
}
.container {
  width: 95%; 
  margin: 0 auto; 
  padding: 0 5%; 
}
.footer-columns {
  display: grid; 
  grid-template-columns: repeat(2, 1fr); /* 每行两列 */
  gap: 10px; /* 网格项之间的间隙 */
  justify-content: center; 
}
.footer-column {
  padding: 10px; 
  text-align: left; 
}
.footer-column h4 {
  margin: 0 auto; 
}
.footer-fontStyle1 {
  color:  #A19D9D; 
  text-decoration: none; 
  font-weight: bold; 
}
.footer-fontStyle2 {
  color: #ffffff; 
  text-decoration: none; 
  font-weight: bold; 
}
.footer-fontStyle2:hover {
  text-decoration: underline; /* 鼠标悬停时下划线 */
}
/* 媒体查询：当屏幕宽度小于400px时 */
@media screen and (max-width: 400px) {
  .footer-columns {
    grid-template-columns: 1fr; /* 每个元素占一行 */
  }
  .site-footer {
    margin-top: 200px;
    width: 100%;
    bottom: -50%; 
    overflow-y: auto;
  }
  .display-column {
    display: none; /* 仅隐藏带有 display-column 类的元素 */
  }
}
</style>

<template>
  <section>
    <section class="p-test">
      <div class="topBar">
        <div class="homepage" ref="homepageRef"><b>网站主页</b></div>
        <div class="tool-container">
          <img class="tool" v-bind:src="volume" alt="铃声/静音" @click="toggleMute">
          <a href="https://www.yuque.com/u43692620/yyl2g7/xsd0kkos7yzok1x9?singleDoc#" target="_blank">
            <img class="tool" src="/static/疑问.png" alt="疑问" @click="showPopup = !showPopup" >
          </a>
          <img class="tool" src="/static/设置.png" alt="Settings" @click="toggleSettings">
        </div>
      </div>
      <div class="audio">随机提示音</div> 
      <div class="clockBox">
        <div class="clock">
          <p v-if="durationClock">
            <!-- 专注模式 -->
            {{ formattedDurationMin }} : {{ formattedDurationTimeSec }}
          </p>
          <p v-if="relaxationClock">
            <!-- 休息模式 -->
            {{ formattedRelaxationMin }} : {{ formattedMinSec }}
          </p>
          <p v-if="currentClock" style="font-size: 35px; width: 450px;">
            <!-- 无限模式 -->
            {{ formattedCurrentHour }} : {{ formattedCurrentMin }} : {{ formattedCurrentTimeSec }}
          </p>
        </div>
        <circle-progress
          v-if="isShow"
          ref="$circle"
          class="progress"
          key="duration-model"
          :isAnimation="false"
          :isRound="true"
          :width="width"
          :radius="radius"
          :progress="getProgress"
          :barColor="getBarColor"
          :duration="durationTimeMin"
          :timeFunction="timeFunction"
          :backgroundColor="backgroundColor"
        >
        </circle-progress>
      </div>
      <div class="settings-panel" v-if="settingsVisible" @click.stop>
        <ul class="settings-list"> 
          <div style="font-size: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计时选项</div>
          <li class="flex-container">
            <label class="label" for="duration">专注时间 :</label>
            <input v-model="durationTimeMin" type="number" placeholder="5 ~ 360" 
            :disabled="durationClock && currentTime != 0" :class="{ 'input-with-unit': true, 'disabled-input': durationClock && currentTime != 0 }">
              <label for="duration" class="unit-label">分钟</label>
              <div class="placeholder-box" style="width: 13px; height: 26px;"></div>
          </li>
          <li class="flex-container">
            <label class="label" for="randomRangeA">随机范围(a):</label>
            <input v-model.number="randomRangeA" type="number" :class="{ 'input-with-unit': true, 'disabled-input': durationClock && currentTime != 0 }"
            :placeholder="placeholderText1" :disabled="durationClock && currentTime != 0" min="1">
              <label for="randomRangeA" v-if="isInMinutes" class="unit-label">分钟</label>
              <label for="randomRangeA" v-else class="unit-label">秒</label>
              <div class="arrow-container">
                <img src="/static/upArrow.png" @click="toggleUnit">
                <img src="/static/downArrow.png" @click="toggleUnit">
              </div>
          </li>
          <li class="flex-container">
            <label class="label" for="randomRangeB">随机范围(b):</label>
            <input v-model.number="randomRangeB" type="number" :class="{ 'input-with-unit': true, 'disabled-input': durationClock && currentTime != 0 }"
            :placeholder="placeholderText2" :disabled="durationClock && currentTime != 0" min="1">
              <label for="randomRangeB" v-if="isInMinutes" class="unit-label">分钟</label>
              <label for="randomRangeB" v-else class="unit-label">秒</label>
              <div class="arrow-container">
                <img src="/static/upArrow.png" @click="toggleUnit">
                <img src="/static/downArrow.png" @click="toggleUnit">
              </div>
          </li>
          <li class="flex-container">
            <label class="label" for="microBreak">微休息时间 :</label>
            <input v-model.number="microBreakTime" type="number" :placeholder="placeholderText3" :min="1" 
            :disabled="durationClock && audio1Played" class="input-with-unit">
              <label for="microBreak" v-if="isInMinutes1" class="unit-label">分钟</label>
              <label for="microBreak" v-else class="unit-label">秒</label>
              <div class="arrow-container">
                <img src="/static/upArrow.png" @click="toggleUnit1">
                <img src="/static/downArrow.png" @click="toggleUnit1">
              </div> 
          </li>
          <li style="width: 100%; border-bottom: 1px dashed #ccc; margin: 10px -12px 5px 12px;"></li>
          <li class="flex-container">
            <label class="label" for="relaxation">休息时间 :</label>
            <input v-model="relaxationTimeMin" type="number" :placeholder="placeholderText4"
            :disabled="relaxationClock" :class="{ 'input-with-unit': true, 'disabled-input': relaxationClock }">
               <label for="relaxation" class="unit-label">分钟</label>
              <div class="placeholder-box" style="width: 13px; height: 26px;"></div>
          </li>
          <li>
            <label for="PassRelaxation" class="switch">休息倒计时</label>
            <label class="toggle-switch">
              <input type="checkbox" v-model="toggleState" @change="handleToggleChange" id="PassRelaxation">
              <span class="toggle-slider round" :style="toggleState ? { backgroundColor: currentTextColor } : null"></span>
            </label>
          </li>
          <li>
            <label for="backstage1" class="switch">网页后台模式</label>
            <label class="toggle-switch">
              <input type="checkbox" id="backstage1" v-model="backstage1" @click="toggleBackstage">
              <span class="toggle-slider round" :style="backstage1 ? { backgroundColor: currentTextColor } : null"></span>
            </label>
          </li>
        </ul>
      </div>
      <div class="button">
        <li>
          <div class="btn" :class="{ 'btn-inverse': isBtnInverse }" 
          :style="{ color:currentTextColor, backgroundColor: currentBarColor, borderColor: currentBarColor }" 
          @click="toggleAnimation1 " v-if="durationClock || currentClock">
            {{ currentTime == 0 && !isPlaying ? '开始' : (isPlaying ? '暂停' : '继续专注') }}
          </div>
          <div class="btn" :class="{ 'btn-inverse': isBtnInverse }" 
          :style="{ color: 'white' , backgroundColor: currentBarColor, borderColor: currentBarColor }" 
          @click="toggleAnimation2" v-if="relaxationClock">
            {{ currentTime == 0 && !isPlaying ? '开始休息' : '跳过休息'}}
          </div>
        </li>
        <li v-if=" !isBtnInverse && currentTime != 0 && !relaxationClock">
          <div class="btn btn-inverse" 
          :style="{ color: currentBarColor, borderColor: currentBarColor }" 
          @click="endTime">结束</div>
        </li>  
        <li v-if="currentTime == 0 && relaxationClock">
          <div class="btn btn-inverse" 
          :style="{ color: currentBarColor, borderColor: currentBarColor }" 
          @click="endTime">跳过休息</div>
        </li>
      </div>
      <footer class="site-footer">
        <div class="container">
          <div class="footer-columns">
            <div class="footer-column">
              <h4><a class="footer-fontStyle1" href="https://beian.miit.gov.cn/?spm=a313x.collections_index.i7.3.d50a3a81XeVKfC#/Integrated/index" target="_blank">粤ICP备2025407260号</a></h4>
            </div>
            <div class="footer-column display-column">
              <h4 class="footer-fontStyle1"></h4>
            </div>
            <div class="footer-column">
              <h4><a class="footer-fontStyle2" href="https://space.bilibili.com/2229541" target="_blank">bilibili</a></h4>
            </div>
            <div class="footer-column">
              <h4><a class="footer-fontStyle2" href="https://www.youtube.com/@%E6%8B%A9%E6%81%A9" target="_blank">YouTube</a></h4>
            </div>
            <div class="footer-column">
              <h4><a class="footer-fontStyle2" href="https://www.xiaohongshu.com/user/profile/67f75c3b000000000d0087a2?xsec_token=YBJ6OWTehSqVc3T1f95vfHqtqnD61CCW8U4KPRmQcAaT4=&xsec_source=app_share&xhsshare=CopyLink&appuid=67f75c3b000000000d0087a2&apptime=1745817830&share_id=39bdce69a9794581b93c81f30140b902" target="_blank">小红书</a></h4>
            </div>
            <div class="footer-column">
              <h4><a class="footer-fontStyle2" href="https://www.zhihu.com/people/ZainZeen" target="_blank">知乎</a></h4>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </section>
</template>

<script>
import CircleProgress from './components/index.vue'
export default {
  name: 'AudioGenerator',
  components: {
    CircleProgress,
  },
  data() {
    return {
      isShow: true,
      width: 270, // 圆的直径
      radius: 6,  // 进度条的宽度
      barColor: {
        // focus: '#22A4F1', 
        focus: 'rgb(70, 113, 245)', // 专注模式颜色
        relaxation: '#07C160', // 休息模式颜色
        infinite: 'orange', // 无限模式颜色
      },
      backgroundColor: '#E3E3E3',
      timeFunction: 'cubic-bezier(0.99, 0.01, 0.22, 0.94)',
      intervalTimer: null,  // 时钟计时器
      randomTimer: null,  // 用于随机提示音的计时器
      currentTime: 0,  // 当前时间
      randomTime: 0,  // 随机提示音时间
      pausedRandomTime: 0, // 用于保存暂停时的 randomTime
      durationTimeMin: 90, // 专注模式时长
      relaxationTimeMin: 20, // 休息模式时长
      microBreakTime: 10, // 微休息时间

      isPlaying: false, // 控制进度条的播放状态
      isBtnInverse: false, // 用于跟踪按钮颜色状态
      animationInterval: null, // 动画定时器
      pausedTime: 0, // 暂停时的当前时间
      settingsVisible: false, // 控制<ul>显示或隐藏的状态
      volume: "/static/铃声.png",
      isMute: false, // 初始为非静音状态
      showPopup: false, // 控制弹窗显示的数据属性
      isCompleted: false, // 表示进度条是否完成
      toggleState: true,  // 休息倒计时
      toggleState1: false, // 自动下一个专注 (开关)
      toggleState2: false, // 自动休息 (开关)
      durationClock: true,
      relaxationClock: false,
      currentClock: false,
      toggleState3: false, // 无限模式 (开关)
      focusSessionCount: 0, // 已经完成的专注轮数
      maxFocusSessions: null,  // 用户设置的自动专注次数
      randomRangeA: 2, // 随机范围（a）
      randomRangeB: 5, // 随机范围（b）
      randomTimeSec: null, // 存储随机选择的时间点（秒）
      audio1Played: false, // 用于标记第一个音频是否已播放
      audio2Played: false, // 用于标记是否准备播放第二个音频
      audioPath1: '/static/提示音A.mp3', // 音频文件路径（休息）
      audioPath2: '/static/提示音B.mp3', // 音频文件路径（专注）
      audioPath3: '/static/提示音C.mp3', // 音频文件路径（结束）
      isInMinutes: true, // 默认单位为分钟
      isInMinutes1: false, // 默认单位为秒
      secondAudioTimeoutId: null,
      audio1: null,
      audio2: null,
      isEndTimeClicked: false, 
      isActive: true,
      backgroundTime: '', // 进入后台的时间
      foregroundTime: '',   // 再次回到前台的时间
      levelTimeSec:'', // 离开前台的秒数
      backgroundDuration: '',
      shouldPlayRingOnResume: false, 
      lastRandomTime: 0,
      isStateSaved: false,
      backstage1: false,   // 后台模式
      endCheckInterval: null, // 结束音定时器

      // backstage2: false,
      // audioModel: 0, // 播放口
    }
  },
  computed: {
    currentBarColor() {
      // 根据当前模式返回对应的颜色
      if (this.currentClock) {
        return this.barColor.infinite;
      } else if (this.relaxationClock) {
        return this.barColor.relaxation;
      } else {
        return this.barColor.focus;
      }
    },
    currentTextColor() {
      // 根据当前模式返回对应的颜色
      if (this.currentClock && this.isPlaying) {
        return this.barColor.infinite;
      } else if (this.relaxationClock && this.isPlaying) {
        return this.barColor.relaxation;
      } else if (this.durationClock && this.isPlaying){
        return this.barColor.focus;
      }
    },
    getBarColor() {
      // 根据当前模式返回对应的颜色
      if (this.relaxationClock) {
        return this.barColor.relaxation;
      } else if (this.durationClock) {
        return this.barColor.focus;
      } else if (this.currentClock) {
        return this.barColor.infinite;
      }
      return 'gray'; // 默认颜色
    },
    getProgress() {
      // 根据当前模式返回进度百分比
      if (this.currentClock) {
        // 无限模式进度条始终为100%
        return 100;
      } else if (this.relaxationClock) {
        // 休息模式的进度
        return (this.currentTime / this.Min) * 100;
      } else if (this.durationClock) {
        // 专注模式的进度
        return (this.currentTime / this.durationTime) * 100;
      }
      return 0; // 默认进度
    },
    // 计算剩余分钟数，始终为两位数（专注）
    formattedDurationMin() {
      if(this.durationTimeMin - Math.ceil(this.currentTime / 60000) < 0) 
        return String(0).padStart(2, '0');
      else
        return String(this.durationTimeMin - Math.ceil(this.currentTime / 60000)).padStart(2, '0');
    },
    // 计算剩余秒数，始终为两位数
    formattedDurationTimeSec() {
      const remainingTimeMs = (this.durationTimeMin * 60000) - this.currentTime;
      const remainingSec = Math.floor(remainingTimeMs / 1000) % 60;
      if( remainingSec < 0)
        return String(0).padStart(2, '0');
      else
        return String(remainingSec).padStart(2, '0');
    },
    // 将总时长转换为秒
    durationTime: function() {
      return this.durationTimeMin * 60000;
    },
    // 计算剩余分钟数，始终为两位数（休息）
    formattedRelaxationMin() {
      if ((this.relaxationTimeMin - Math.ceil(this.currentTime / 60000)) < 0)
        return String(0).padStart(2, '0');
      else
        return String(this.relaxationTimeMin - Math.ceil(this.currentTime / 60000)).padStart(2, '0');
    },
    // 计算剩余秒数，始终为两位数
    formattedMinSec() {
      const remainingTimeMs = (this.relaxationTimeMin * 60000) - this.currentTime;
      const remainingSec = Math.floor(remainingTimeMs / 1000) % 60;
      if( remainingSec < 0)
        return String(0).padStart(2, '0');
      else
        return String(remainingSec).padStart(2, '0');
    },
    // 将总时长转换为秒
    Min: function() {
      return this.relaxationTimeMin * 60000;
    },
    // 计算格式化的小时数 （无限）
    formattedCurrentHour() {
      return this.pad(Math.floor(this.currentTime / 3.6e6));
    },
    // 计算格式化的分钟数
    formattedCurrentMin() {
      return this.pad(Math.floor((this.currentTime % 3.6e6) / 60000));
    },
    // 计算格式化的秒数
    formattedCurrentTimeSec() {
      return this.pad(Math.floor((this.currentTime % 60000) / 1000));
    },
    placeholderText1() {
      // 确定上限时间，如果 durationTimeMin 和 randomRangeB 都为空，则使用默认值 360
      let maxTime = 360;
      let activeTime;

      if (this.isInMinutes) {
        if (Number.isNaN(this.durationTimeMin)) {
          activeTime = maxTime;
        } else {
          activeTime = this.durationTimeMin;
        }
        if (!Number.isNaN(this.randomRangeB)) {
          activeTime = Math.min(activeTime, this.randomRangeB);
        }
      } else {
        if (Number.isNaN(this.durationTimeMin)) {
          activeTime = maxTime * 60;
        } else {
          activeTime = this.durationTimeMin * 60;
        }
        if (!Number.isNaN(this.randomRangeB)) {
          activeTime = Math.min(activeTime, this.randomRangeB * 60);
        }
      }
      // 如果 activeTime 小于 60 秒，并且 isInMinutes 为 false，则使用 durationTimeMin
      if (this.isInMinutes === false && activeTime < 60 && this.durationTimeMin === this.durationTimeMin) {
        activeTime = this.durationTimeMin;
      }

      // 确保 activeTime 不小于 60（如果设置为秒）
      const finalMaxTime = this.isInMinutes ? activeTime : Math.max(activeTime * 60, 60);
      // 设置 placeholder 文本
      return this.isInMinutes ? `1 ~ ${finalMaxTime}` : `60 ~ ${finalMaxTime}`;
    },
    placeholderText2() {
      // 确定上限时间，如果 durationTimeMin 为空，则使用默认值 360
      let maxTime = 360;
      if (!Number.isNaN(this.durationTimeMin)) {
        maxTime = this.durationTimeMin;
      }
      // 设置 placeholder 文本
      return this.isInMinutes
        ? `${this.randomRangeA !== this.randomRangeA ? '1' : this.randomRangeA} ~ ${maxTime}`
        : `${this.randomRangeA !== this.randomRangeA ? '60' : this.randomRangeA} ~ ${maxTime * 60}`;
    },
    placeholderText3() {
      return !this.isInMinutes1
        ? `1 ~ ${Number.isNaN(this.durationTimeMin) ? 360 * 60  : this.durationTimeMin * 60 }`
        : `1 ~ ${Number.isNaN(this.durationTimeMin) ? 360 : this.durationTimeMin }`;
    },
    placeholderText4() {
      return `1 ~ ${Number.isNaN(this.durationTimeMin) ? 360 : this.durationTimeMin}`;
    },
  },
  methods: {
    updateTitle() {
      if ( !document.hidden ){
        if (this.durationClock) {
          document.title = `专注模式 - ${this.formattedDurationMin}:${this.formattedDurationTimeSec}`;
        } else if (this.relaxationClock) {
          document.title = `休息模式 - ${this.formattedRelaxationMin}:${this.formattedMinSec}`;
        } else if (this.currentClock) {
          document.title = `无限模式 - ${this.formattedCurrentHour}:${this.formattedCurrentMin}:${this.formattedCurrentTimeSec}`;
        }
      } else {
        if ( !this.backstage1 )
          document.title = '⏰'; // 如果没有开启后台模式，设置默认标题
      }
    },
    // 辅助方法，用于确保时间格式始终为两位数
    pad(value) {
      return String(value).padStart(2, '0');
    },
    toggleUnit() {
      if (this.durationClock && this.currentTime !== 0) 
        return;
      // 根据传递的索引切换对应的时间单位状态
      this.isInMinutes = !this.isInMinutes;
    },
    toggleUnit1() {
      // 根据传递的索引切换对应的时间单位状态
      this.isInMinutes1 = !this.isInMinutes1;
    },
    toggleSwitch(id) {
      switch (id) {
        case 'autoStartNextFocus':
          this.isAutoStartNextFocusOn = !this.isAutoStartNextFocusOn;
          break;
        case 'autoRest':
          this.isAutoRestOn = !this.isAutoRestOn;
          break;
      }
    },
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    closePopup(event) {
      if (this.showPopup && (!this.$el.contains(event.target) || this.settingsVisible)) {
        this.showPopup = false;
      }
    },
    toggleSettings() {
      this.settingsVisible = !this.settingsVisible;
    },
    closeSettings(event) {
      this.saveDataToLocalStorage1();
      if (this.settingsVisible && (!this.$el.contains(event.target) || this.showPopup)) {
        this.settingsVisible = false;
      }
      if (this.durationTimeMin != this.durationTimeMin) 
        this.durationTimeMin = 90;
      if (this.durationTimeMin < 5)
        this.durationTimeMin = 5;
      if (this.relaxationTimeMin != this.relaxationTimeMin) 
        this.relaxationTimeMin = 20;
      if (this.relaxationTimeMin > this.durationTimeMin)
        this.relaxationTimeMin = this.durationTimeMin;
      if (this.isInMinutes) {
        if (this.randomRangeA !== this.randomRangeA)
          this.randomRangeA = 2;
        if (1 > this.randomRangeA)
          this.randomRangeA = 1;
        if (this.randomRangeA > this.durationTimeMin)
          this.randomRangeA = this.durationTimeMin;
        if (this.randomRangeB !== this.randomRangeB)
          this.randomRangeB = 5;
        if (this.randomRangeA > this.randomRangeB)
          this.randomRangeB = this.randomRangeA;
        if (this.randomRangeB > this.durationTimeMin)
          this.randomRangeB = this.durationTimeMin;
      } else {
        if (this.randomRangeA !== this.randomRangeA)
          this.randomRangeA = 120;
        if (60 > this.randomRangeA)
          this.randomRangeA = 60;
        if (this.randomRangeA > this.durationTimeMin * 60)
          this.randomRangeA = this.durationTimeMin * 60;
        if (this.randomRangeB !== this.randomRangeB)
          this.randomRangeB = 300;
        if (this.randomRangeA > this.randomRangeB)
          this.randomRangeB = this.randomRangeA;
        if (this.randomRangeB > this.durationTimeMin * 60)
          this.randomRangeB = this.durationTimeMin * 60;
      }
      if (this.isInMinutes1) {
        if(this.microBreakTime != this.microBreakTime || 1 > this.microBreakTime)
          this.microBreakTime = 1;
        if(this.microBreakTime > this.durationTimeMin)
          this.microBreakTime = this.durationTimeMin;
      }else {
        if(this.microBreakTime != this.microBreakTime)
          this.microBreakTime = 10;
        if(1 > this.microBreakTime)
          this.microBreakTime = 1;
        if(this.microBreakTime > this.durationTimeMin * 60)
          this.microBreakTime = this.durationTimeMin * 60;
      }
    },
    toggleBackstage() {
      this.backstage1 = !this.backstage1;
    },
    toggleMute() {
      this.isMute = !this.isMute;
      this.volume = this.isMute ? "/static/静音.png" : "/static/铃声.png";
    },
    toggleAnimation1() {
      this.shouldPlayRingOnResume = true; 
      if (this.isPlaying) {
        // 暂停动画
        clearInterval(this.intervalTimer);
        this.audio2.pause(); // 暂停音频播放
        this.audio2.currentTime = 0; // 将播放时间重置为音频开始位置
        // 保存 randomTime 的当前值
        this.pausedRandomTime = this.randomTime;
        // 立即清除 randomTimer
        if (this.randomTimer) {
          clearInterval(this.randomTimer);
        }
        if (this.audio2Played) {
          clearTimeout(this.secondAudioTimeoutId);
          this.randomTime = 0;
          this.playRandomSound();
        }   
      } else {
        // 从当前时间继续动画
        this.startOrContinueAnimation();
        // 重新设置 randomTimer
        this.setupRandomTimer();
      }
      // 切换播放状态和按钮颜色状态
      this.isPlaying = !this.isPlaying;
      this.isBtnInverse = !this.isBtnInverse;
    },
    toggleAnimation2() {
      if (this.relaxationClock) {
        if (this.currentTime == 0 && !this.isPlaying) {
          this.isPlaying = true;
          this.startTime(0);
        } else if (this.isPlaying) {
          // 如果计时器已经开始运行，则允许用户跳过休息并切换到专注模式
          this.handleEndOfRelaxation();
        }
      }
    },
    playRandomSound() {
      if (this.relaxationClock) return;
      this.rangeAInSec = this.isInMinutes ? this.randomRangeA * 60 : this.randomRangeA;
      this.rangeBInSec = this.isInMinutes ? this.randomRangeB * 60 : this.randomRangeB;
      const microBreakSec = this.isInMinutes1 ? this.microBreakTime * 60 : this.microBreakTime;
    
      // 随机选择一个时间点
      this.randomTimeSec = Math.floor(Math.random() * (this.rangeBInSec - this.rangeAInSec + 1)) + this.rangeAInSec;
      if (this.durationClock) {
        if (Math.floor(this.currentTime / 1000) + this.randomTimeSec + microBreakSec + 2 > this.durationTimeMin * 60) {
          this.randomTimeSec = this.durationTimeMin * 60 - Math.floor(this.currentTime / 1000) - microBreakSec - 6;
          if (this.randomTimeSec < this.randomRangeA) {
            return null;
          }
        }
      }

      if (Math.floor(this.randomTime / 1000) > this.randomTimeSec + microBreakSec) {
        this.randomTime = 0;
        this.playRandomSound();
      }

      // 如果已经有一个计时器在运行，则先清除
      if (this.randomTimer) {
        clearInterval(this.randomTimer);
      }

      if (this.randomTimeSec < 0) return null;

      // 重置音频播放状态
      this.audio1Played = false;
      this.audio2Played = false;

      // 设置计时器，每秒检查一次当前时间是否等于随机时间点
      if (this.isPlaying) {
        this.randomTimer = setInterval(() => {
          this.randomTime += 1000;
          const currentTimeSec = Math.floor(this.randomTime / 1000);

          // 提前10秒播放无声音频 先激活
          if (currentTimeSec === this.randomTimeSec - 10 || currentTimeSec === this.randomTimeSec + microBreakSec - 10) {
            this.playSound(this.audioPath1, '音频', 0.0001); // 无声播放
          }

          // 播放音频A
          if (currentTimeSec === this.randomTimeSec && !this.audio1Played) {
            this.audio1Played = true;
            this.playSound(this.audioPath1, '音频A', 1); // 正常播放
          }

          // 播放音频B
          if (currentTimeSec === this.randomTimeSec + microBreakSec && !this.audio2Played) {
            this.audio2Played = true;
            this.playSound(this.audioPath2, '音频B', 1); // 正常播放
            clearInterval(this.randomTimer);
            this.randomTime = 0;
            this.playRandomSound(); 
          }
        }, 1000);
      }
    },
    playSound(audioPath, audioName, volume) {
      if (document.hidden) return;
      if (this.relaxationClock) return;

      const audio = new Audio(audioPath);
      audio.volume = volume; // 设置音量

      if (!this.isMute && this.isPlaying) {
        audio.play().then(() => {
          if (volume === 0.0001) {
            console.log(`${audioName} 无声播放: ${audioPath}`);
          } else {
            console.log(`${audioName} 开始播放: ${audioPath}`);
          }
        }).catch(error => {
          console.error(`${audioName} 播放失败: ${audioPath}`, error);
        });

        audio.addEventListener('ended', () => {
          console.log(`${audioName} 播放结束: ${audioPath}`);
        });

        audio.addEventListener('error', (error) => {
          console.error(`${audioName} 播放错误: ${audioPath}`, error);
        });
      } else {
        setTimeout(() => {
          // 无论是否静音，重置随机时间计数器并重新开始计时
          this.randomTime = 0;
          this.playRandomSound(); // 重新开始随机时间计时
        }, microBreakSec * 1000);
      }
    },
    startOrContinueAnimation() {
      // 清除可能存在的旧计时器
      if (this.intervalTimer) {
        clearInterval(this.intervalTimer);
      }
      if ((this.currentTime == 0 && !this.isPlaying) || (this.isBtnInverse && this.isPlaying)) {
        if (this.shouldPlayRingOnResume && !this.isMute && !this.relaxationClock) {
          this.playRing();
          this.shouldPlayRingOnResume = false;
        }
      }
      // 如果是第一次开始，从0开始计时
      if (this.currentTime == 0) {
        if(this.durationClock) {
          this.audio1Played = false;
          this.randomTime = 0;
          this.playRandomSound();
        }
        this.startTime(0);
        return;
      }
      // 否则，从当前时间继续
      this.startTime(this.currentTime);
    },
    // 结束前10s 播放无声音频激活
    checkForEndOfDuration() {
      const currentTimeSec = Math.floor(this.currentTime / 1000);
      const durationTimeSec = this.durationTimeMin * 60;

      // console.log(currentTimeSec - durationTimeSec + 10);
      if (currentTimeSec === durationTimeSec - 10) {
        this.playSound(this.audioPath1, '音频C', 0.0001); // 无声播放
      }
    },
    startCheckingForEndOfDuration() {
      if (this.endCheckInterval) {
        clearInterval(this.endCheckInterval);
      }
      this.endCheckInterval = setInterval(() => {
        this.checkForEndOfDuration();
      }, 1000);
    },
    startTime(resumeTime) {
      this.intervalTimer = setInterval(() => {
        if (!this.isPlaying) {
          clearInterval(this.intervalTimer);
          clearInterval(this.randomTimer);
          return;
        }
        if (resumeTime >= this.durationTime && this.durationClock) {
          clearInterval(this.intervalTimer);
          if (this.toggleState)
            this.handleEndOfDuration();
          else 
            this.handleEndOfRelaxation();
          return;
        }
        else if (resumeTime >= this.Min && this.relaxationClock) {
          clearInterval(this.intervalTimer);
          this.handleEndOfRelaxation();
          return;
        }
        if (this.backgroundDuration && this.backgroundDuration !== '') {
          resumeTime = this.currentTime;
          if (!document.hidden) 
            this.backgroundDuration = '';
        }
        if (resumeTime === this.durationTimeMin * 60000 - 2000 && this.durationClock && !this.isMute) {
          this.playRing3();
        }
        this.currentTime = resumeTime;
        resumeTime += 100; // 根据实际动画速度调整增量，此处以0.1s为例
      }, 100);
    },
    setupRandomTimer() {
      // 清除可能存在的旧 randomTimer
      if (this.randomTimer) {
        clearInterval(this.randomTimer);
      }
      // 设置新的 randomTimer
      this.randomTimer = setInterval(() => {
        if (!this.isPlaying) {
          clearInterval(this.randomTimer); // 如果暂停，则清除 randomTimer
          return;
        }
        // 更新 randomTime
        this.randomTime += 1000;
        // 检查是否达到随机时间点
        if (this.randomTime == this.randomTimeSec * 1000 && !this.audio1Played) {
          // this.playSound(this.audioPath1);
          this.playSound(this.audioPath1, '音频A', 1);
          this.audio1Played = true;
        }

        // 后台模式 更新标题
        if ( this.backstage1 && document.hidden ){
          const departureTime = Math.floor((this.getCurrentTime() - this.backgroundTime) / 1000);   // 进入后台时长
          const remainingTimeSec = this.durationTimeMin * 60 - (departureTime + this.levelTimeSec);   // 剩余总时长(秒)
          const minutes = Math.floor(remainingTimeSec / 60); 
          const seconds = remainingTimeSec % 60; 

          if ( minutes >= 0 ) {
            if (this.durationClock) {
              document.title = `专注模式 - ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
            else if (this.relaxationClock) {
              document.title = `休息模式 - ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }

            // if (minutes === 0 && this.durationClock && !this.isMute) {
            //   if ( seconds === 10 )
            //     this.playSound(this.audioPath1, '音频C', 0.0001); // 无声播放
            //   if ( seconds === 2 )
            //     this.playSound(this.audioPath3, '音频C', 0.0001); // 无声播放
            // }
          } else {
            document.title = '⏰';
            if (this.toggleState)
              this.handleEndOfDuration();
            else {
              // this.isPlaying = false;
              this.handleEndOfRelaxation();
            }
          }
            
        }
      }, 1000);
    },
    handleEndOfDuration() {
      // 专注时间结束，开始休息时间
      this.currentTime = 0; // 重置当前时间
      this.durationClock = false; // 关闭专注模式计时
      this.relaxationClock = true; // 开启休息模式计时
      this.isBtnInverse = false;
      this.isPlaying = this.toggleState2; // 根据设置决定是否自动继续

      clearInterval(this.intervalTimer);
      clearInterval(this.randomTimer);
      if (this.isPlaying) 
        this.startTime(0); // 立即开始休息模式计时
    },
    handleEndOfRelaxation() {
      // 休息时间结束，开始新的专注时间
      this.currentTime = 0; // 重置当前时间
      this.relaxationClock = false; // 关闭休息模式计时
      this.durationClock = true; // 开启专注模式计时
      this.isPlaying = this.toggleState1; // 根据设置决定是否自动继续
      clearInterval(this.intervalTimer);
      if (this.isPlaying) {
        if (!this.isMute) {
          this.playRing();
        }
        this.startTime(this.durationClock); // 立即开始专注模式计时
        this.isBtnInverse = true;
      }
      else
        this.isBtnInverse = false;    
      this.randomTime = 0;
      this.playRandomSound();
    },
    endTime() {
      // 检查设备类型，如果是手机端，则刷新页面
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.isEndTimeClicked = true; // 设置标志
        this.saveDataToLocalStorage1();
        location.reload(); // 刷新页面
      }
      // 结束当前会话并重置专注轮数
      this.isPlaying = false;
      clearInterval(this.intervalTimer);
      clearInterval(this.randomTimer);
      this.randomTime = 0;
      this.currentTime = 0;
      this.focusSessionCount = 0; // 重置专注轮数
      this.isBtnInverse = false;
      this.audio2.pause(); // 暂停音频播放
      this.audio2.currentTime = 0; // 将播放时间重置为音频开始位置
      // this.audio2.load();   // 重新加载音频，这将重置播放头到开始位置，并且释放网络资源
      
      // 重置模式状态
      if(!this.currentClock){
        this.durationClock = true;
        this.relaxationClock = false;
        this.currentClock = false;
      }else {
        this.durationClock = false;
        this.relaxationClock = false;
        this.currentClock = true;
      }
    },
    toggleInfiniteMode() {
      this.toggleState3 = !this.toggleState3;
      // 切换到无限模式时，取消其他模式
      if (this.toggleState3) {
        clearInterval(this.intervalTimer);
        clearInterval(this.randomTimer);
        this.currentTime = 0;
        this.isPlaying = false;
        this.isBtnInverse = false;
        this.currentClock = true;
        this.durationClock = false;
        this.relaxationClock = false;
      } else {
        // 退出无限模式时，可以设置回专注模式或其他逻辑
        clearInterval(this.intervalTimer);
        clearInterval(this.randomTimer);
        this.currentTime = 0;
        this.isPlaying = false;
        this.isBtnInverse = false;
        this.currentClock = false;
        this.durationClock = true;
        this.relaxationClock = false;
        this.randomTime = 0;
        // this.playRandomSound();
      }
    },
    preLoadAudio() {
      // 预加载音频
      this.audio2 = new Audio(this.audioPath2);
      this.audio2.addEventListener('canplaythrough', () => {
        // 当音频可以无缓冲播放时触发
        console.log('音频预加载完成');
      });
      this.audio2.load(); // 触发加载音频资源
    },
    playRing() {
      if (this.audio2 && !this.isMute) {
        this.audio2.currentTime = 0; // 重置到音频开始位置
        this.audio2.play().catch((error) => {
          console.error('播放铃响出错:', error);
        });
      }
    },
    preLoadAudio1() {
      // 预加载音频
      this.audio1 = new Audio(this.audioPath1);
      this.audio1.addEventListener('canplaythrough', () => {
        // 当音频可以无缓冲播放时触发
        console.log('音频预加载完成');
      });
      this.audio1.load(); // 触发加载音频资源
    },
    playRing1() {
      if (this.audio1 && !this.isMute) {
        this.audio1.currentTime = 0; // 重置到音频开始位置
        this.audio1.play().catch((error) => {
          console.error('播放铃响出错:', error);
        });
      }
    },
    preLoadAudio3() {
      // 预加载音频
      this.audio3 = new Audio(this.audioPath3);
      this.audio3.addEventListener('canplaythrough', () => {
        // 当音频可以无缓冲播放时触发
        console.log('音频预加载完成');
      });
      this.audio3.load(); // 触发加载音频资源
    },
    playRing3() {
      if (this.audio3 && !this.isMute) {
        this.audio3.currentTime = 0; // 重置到音频开始位置
        this.audio3.play().catch((error) => {
          console.error('播放铃响出错:', error);
        });
      }
    },
    syncRandomTimeWithRefresh() {
      // 从localStorage加载最后保存时间的时间戳
      const storedData = localStorage.getItem('endTimeData');
      const parsedData = JSON.parse(storedData);
      const lastSaveTime = parsedData ? parsedData.lastSaveTime : this.getCurrentTime(); // 如果没有保存的数据，使用当前时间

      // 计算页面刷新所用的时间
      const refreshDuration = this.getCurrentTime() - lastSaveTime;

      // 同步randomTime，添加上刷新所用的时间
      if (this.randomTime && refreshDuration > 0) {
        this.randomTime += refreshDuration;
      }
    },
    saveDataToLocalStorage1() {
      //保存状态到本地存储
      localStorage.setItem('endTimeData', JSON.stringify({
        backgroundDuration: this.backgroundDuration,
        resumeTime: this.resumeTime,
        currentTime: this.currentTime,
        randomTime: this.randomTime,
        randomTimeSec: this.randomTimeSec,
        durationClock: this.durationClock,
        relaxationClock: this.relaxationClock,
        currentClock: this.currentClock, 
        durationTimeMin: this.durationTimeMin,
        randomRangeA: this.randomRangeA,
        randomRangeB: this.randomRangeB,
        microBreakTime: this.microBreakTime,
        relaxationTimeMin: this.relaxationTimeMin,
        maxFocusSessions: this.maxFocusSessions,
        toggleState: this.toggleState, 
        toggleState1: this.toggleState1, 
        toggleState2: this.toggleState2, 
        isInMinutes: this.isInMinutes,
        isInMinutes1: this.isInMinutes1,
        isEndTimeClicked: this.isEndTimeClicked,
        backgroundTime: this.backgroundTime,
        hiddenTime: this.hiddenTime,
        calibrationTime1: this.calibrationTime1,
        calibrationTime2: this.calibrationTime2,
        microBreakSec: this.microBreakSec,
        isPlaying: this.isPlaying,
        isBtnInverse: this.isBtnInverse,
        shouldPlayRingOnResume: this.shouldPlayRingOnResume,
        lastRandomTime: this.lastRandomTime,
        random: this.backstage1 ? this.random : undefined, // 仅在 !this.backstage1 时保存 random 属性
        isStateSaved: this.isStateSaved,
        backgroundRandom: this.backgroundRandom,
        audio1Played: this.audio1Played,
        backstage1: this.backstage1,
        isMute: this.isMute,
        volume: this.volume,
        levelTimeSec: this.levelTimeSec,
      }));
    }, 
    // 从本地存储加载数据并根据刷新方式恢复状态
    loadDataFromLocalStorage1() {
      // 加载本地存储中的数据
      const storedData = localStorage.getItem('endTimeData');
      const parsedData = JSON.parse(storedData);
      // 如果是由“结束”按钮触发的刷新，则从本地存储加载数据
      Object.assign(this, parsedData); 
      this.isEndTimeClicked = false; // 重置标志，避免重复加载 parsedData && parsedData.isEndTimeClicked
      this.saveDataToLocalStorage1();
      this.syncRandomTimeWithRefresh(); // 同步randomTime
    },
    getCurrentTime() {
      return new Date().getTime();
    },
    formatTime(time) {
      return new Date(time).toLocaleTimeString();
    },
    handleVisibilityChange() {
      if (document.hidden) {
        this.isActive = false;
        this.backgroundTime = this.getCurrentTime();
        this.calibrationTime1 = this.currentTime;
        this.levelTimeSec =  Math.floor(this.currentTime / 1000);
        if (!this.isStateSaved) {
          this.hiddenTime = this.getCurrentTime();
          this.calibrationTime2 = this.randomTime;
          this.isStateSaved = true;
        }
        // 每10秒保存一次状态并刷新页面
        this.intervalId = setInterval(() => {
          this.saveDataToLocalStorage1(); 
          location.reload();
        }, 10 * 1000); 
      } else {
        if (this.intervalId)
          clearInterval(this.intervalId);
        this.isActive = true;
        this.isStateSaved = false;
        this.foregroundTime = this.getCurrentTime();
        if (this.backgroundTime)
          this.backgroundDuration = this.foregroundTime - this.backgroundTime;
        if (!isNaN(this.backgroundDuration) && this.backgroundDuration !== null) {
          if (this.isPlaying) {
            this.currentTime = this.calibrationTime1 + this.backgroundDuration;
            this.randomTime = this.random;
            this.startOrContinueAnimation();
          }
        }
        if (this.isPlaying) {
          this.saveDataToLocalStorage1();
          location.reload();
        }
      }
    },
    setAutoRefresh() {
      const microBreakSec = this.isInMinutes1 ? this.microBreakTime * 60 : this.microBreakTime;
      if (!this.isPlaying) return;
      this.autoSaveInterval = setInterval(() => {
        if (document.hidden && this.hiddenTime) {
          this.backgroundRandom = this.getCurrentTime() - this.hiddenTime;
          if (this.isPlaying) {
            this.random = this.calibrationTime2 + this.backgroundRandom;
          }
        }
        // if (this.backstage1) {
        if(document.hidden) {
          if (Math.floor(this.random / 1000) >= this.randomTimeSec && this.durationClock) {
            if(this.randomTimeSec > 0 && !this.isMute && !this.audio1Played) {
              this.playRing1(); 
              this.audio1Played = true;
            }  
          }
          if (Math.floor(this.random / 1000) >= this.randomTimeSec + microBreakSec + 2 && this.durationClock) {
            if(this.randomTimeSec > 0 && !this.isMute)
              this.playRing(); 
            this.randomTime = 0;
            this.audio1Played = false;
            this.calibrationTime2 = this.randomTime;
            this.hiddenTime = this.getCurrentTime();
          }
        } else {
          if (Math.floor(this.randomTime / 1000) >= this.randomTimeSec && this.durationClock) {
            if(this.randomTimeSec > 0 && !this.isMute && !this.audio1Played) {
              this.playRing1(); 
              this.audio1Played = true;
            }
          }
          if (Math.floor(this.randomTime / 1000) >= this.randomTimeSec + microBreakSec + 2 && this.durationClock) {
            if(this.randomTimeSec > 0 && !this.isMute)
              this.playRing(); 
            this.randomTime = 0;
            this.audio1Played = false;
          }
        }
      // }
        if (Math.floor(this.currentTime / 1000) == this.durationTimeMin * 60 - 2 && this.durationClock && !this.isMute && this.backstage1) {
          this.playRing3();
        }
        if (this.currentTime >= this.durationTimeMin * 60000 && this.durationClock) {
          clearInterval(this.intervalTimer);
          if (this.toggleState)
            this.handleEndOfDuration();
          else {
            // this.isPlaying = false;
            this.handleEndOfRelaxation();
          }
        } else if (this.currentTime >= this.relaxationTimeMin * 60000 && this.relaxationClock) {
          clearInterval(this.intervalTimer);
          this.handleEndOfRelaxation();
        }
        this.saveDataToLocalStorage1();
      }, 1000); 
    },
    setAutoSave() {
      if (!this.isPlaying) return;
      if (!this.backstage1) return;
      this.autoRefreshInterval = setInterval(() => {
        this.saveDataToLocalStorage1();
        if(document.hidden){
          location.reload();
        }
      }, 13 * 1000);
    },
  },
  watch: {
    durationClock: 'updateTitle',
    relaxationClock: 'updateTitle',
    currentClock: 'updateTitle',
    formattedDurationMin: 'updateTitle',
    formattedDurationTimeSec: 'updateTitle',
    formattedRelaxationMin: 'updateTitle',
    formattedMinSec: 'updateTitle',
    formattedCurrentHour: 'updateTitle',
    formattedCurrentMin: 'updateTitle',
    formattedCurrentTimeSec: 'updateTitle',

    isPlaying(newValue) {
      if (newValue) {
        this.startOrContinueAnimation();
      } else {
        // 清除 randomTimer
        if (this.randomTimer) {
          clearInterval(this.randomTimer);
        }
        // 清除 intervalTimer
        if (this.intervalTimer) {
        clearInterval(this.intervalTimer);
        }
      }
    },
    // 监听durationTimeMin的变化
    durationTimeMin: function(newVal) {
      // 如果输入的是小数，则向下取整
      if (Math.floor(newVal) != newVal) {
        this.durationTimeMin = Math.floor(newVal);
        return;
      }
      // 限制durationTimeMin的值在1到360之间
      this.durationTimeMin = Math.min(Math.max(parseInt(newVal), 1), 360);
    },
    relaxationTimeMin:function(newVal) {
      // 如果输入的是小数，则向下取整
      if (Math.floor(newVal) != newVal) {
        this.relaxationTimeMin = Math.floor(newVal);
        return;
      }
      this.relaxationTimeMin = Math.min(Math.max(parseInt(newVal), 1), 360);
    },
    maxFocusSessions: function(newVal) {
      const parsedVal = parseInt(newVal);   // 将输入转换为整数
  
      // 确保 newVal 不是 null 且大于 0
      if (newVal !== null && parsedVal > 0) {
        // 如果输入有效，检查它是否大于 1000
        if (parsedVal > 1000) 
          this.maxFocusSessions = 1000; 
        else 
          this.maxFocusSessions = parsedVal;  
      }else if (newVal === null) 
        this.maxFocusSessions = null; // 如果输入为 null，则允许 this.maxFocusSessions 为 null
      else 
        this.maxFocusSessions = null; // 如果输入不满足条件（小于等于 0），则重置为 null
    },
    randomRangeA:function(newVal) {
      // 如果输入的是小数，则向下取整
      if (Math.floor(newVal) != newVal) {
        this.randomRangeA = Math.floor(newVal);
        return;
      }

      if (this.isInMinutes) {
        this.randomRangeA = Math.min(Math.max(parseInt(newVal), 1),this.durationTimeMin);
      }else {
        this.randomRangeA = Math.min(Math.max(parseInt(newVal), 1),this.durationTimeMin * 60);
      }
    },
    randomRangeB:function(newVal) {
      // 如果输入的是小数，则向下取整
      if (Math.floor(newVal) != newVal) {
        this.randomRangeB = Math.floor(newVal);
        return;
      }
      if (this.isInMinutes) {
        this.randomRangeB = Math.min(Math.max(parseInt(newVal), 1),this.durationTimeMin);
      }else {
        this.randomRangeB = Math.min(Math.max(parseInt(newVal), 1),this.durationTimeMin * 60);
      }
    },
    microBreakTime:function(newVal) {
      // 如果输入的是小数，则向下取整
      if (Math.floor(newVal) != newVal) {
        this.microBreakTime = Math.floor(newVal);
        return;
      }
      if (this.isInMinutes1) {
        this.microBreakTime = Math.min(Math.max(parseInt(newVal), 1),this.durationTimeMin);
      }else {
        this.microBreakTime = Math.min(Math.max(parseInt(newVal), 1),this.durationTimeMin * 60);
      }
    },
  },
  mounted() {
    // this.updateTitle();

    document.addEventListener('click', this.closePopup);
    document.addEventListener('click', this.closeSettings);

    this.preLoadAudio();
    this.preLoadAudio1();
    this.preLoadAudio3();

    this.loadDataFromLocalStorage1(); 
    if (this.currentTime > 0) {
      this.startOrContinueAnimation();
      this.setupRandomTimer();
    }
    this.setAutoRefresh();
    this.setAutoSave();
    this.startCheckingForEndOfDuration();
  },
  unmounted() {
    // 移除点击事件监听器
    document.removeEventListener('click', this.closePopup);
    document.removeEventListener('click', this.closeSettings);

    if (this.autoRefreshInterval) 
      clearInterval(this.autoRefreshInterval);
    if (this.autoSaveInterval) 
      clearInterval(this.autoSaveInterval); 
  },
  created() {
    this.backgroundTime = this.getCurrentTime();
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  },
  destroyed() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  },
  beforeDestroy() {
    // 保存播放位置和状态
    localStorage.setItem('playbackPosition', this.playbackPosition.toString());
    localStorage.setItem('isPlaying', this.isPlaying.toString());
    // 清除 audioContext 和音频 URL
    if (this.audioContext) {
      this.audioContext.close();
    }
    if (this.$refs.audioPlayer.src) {
      URL.revokeObjectURL(this.$refs.audioPlayer.src);
    }

    if (this.endCheckInterval) {
      clearInterval(this.endCheckInterval);
    }
  },
};
function writeString(view, offset, string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}
// 立即调用的函数表达式（IIFE）来避免污染全局命名空间
(function() {
  // 页面缩放函数
  const resizePage = () => {
    const base = window.ontouchstart === undefined ? 700 : 450;
    const rate = Math.min(window.innerWidth / base, window.innerHeight / base, 1);
    const body = document.getElementsByTagName('body')[0];

    body.style.width = window.innerWidth / rate + 'px';
    body.style.height = window.innerHeight / rate + 'px';
    body.style.position = 'absolute';
    body.style.left = (window.innerWidth - window.innerWidth / rate) / 2 + 'px';
    body.style.top = (window.innerHeight - window.innerHeight / rate) / 2 + 'px';
    body.style.transform = 'scale(' + rate + ')';
    body.style.transformOrigin = 'center center';
    body.style.transition = '0.5s transform';
    // body.style.overflow = 'hidden auto'; 
  };

  // 页面加载完成后执行一次
  window.addEventListener('load', resizePage);

  // 当窗口大小变化时执行
  window.addEventListener('resize', resizePage);

  // 初始执行
  resizePage();
})();
</script>
