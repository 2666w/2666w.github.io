// 音源列表数组
const audioSources = [
    { fm: "92.4", name: "FM92.4-南海广播", url: "https://radiopull.radiofoshan.com.cn/live/1400820947_BSID_42_audio.m3u8", img: "./img/924.jpg" },
    { fm: "94.6", name: "FM94.6-佛山综合广播", url: "https://radiopull.radiofoshan.com.cn/live/1400820947_BSID_46_audio.m3u8", img: "./img/946.jpg" },
    { fm: "88.3", name: "FM88.3-高明广播", url: "https://radiopull.radiofoshan.com.cn/live/1400820947_BSID_43_audio.m3u8", img: "./img/883.jpg" },
    { fm: "90.1", name: "FM90.1-顺德广播", url: "https://radiopull.radiofoshan.com.cn/live/1400820947_BSID_44_audio.m3u8", img: "./img/901.jpg" },
    { fm: "90.6", name: "FM90.6-三水广播", url: "https://radiopull.radiofoshan.com.cn/live/1400820947_BSID_45_audio.m3u8", img: "./img/906.jpg" },
    { fm: "98.5", name: "FM98.5-佛山音乐广播", url: "https://radiopull.radiofoshan.com.cn/live/1400820947_BSID_41_audio.m3u8", img: "./img/985.jpg" },
    { fm: "88.0", name: "FM88.0-广州都市生活", url: "https://tencentplay.gztv.com/live/fm880.m3u8?txSecret=43e759eb546ad0658f0903e5ac8d7733&txTime=18ed764ce11", img: "./img/880.jpg" },
    { fm: "106.1", name: "FM106.1-广州交通广播", url: "https://tencentplay.gztv.com/live/fm1061.m3u8?txSecret=cc7b1a4166f1d00d8d9e64717b5a6cc4&txTime=18ed7702c5a", img: "./img/1061.jpg" },
    { fm: "96.2", name: "FM96.2-广州新闻资讯", url: "https://tencentplay.gztv.com/live/fm962.m3u8?txSecret=6c9997d52e9fbe1c3a10e83f28570f27&txTime=18ed775ec73", img: "./img/962.jpg" },
    { fm: "102.7", name: "FM102.7-广州汽车音乐", url: "https://tencentplay.gztv.com/live/fm1027.m3u8?txSecret=cf78ef371503e3544e3db79b399e9a64&txTime=18ed7783401", img: "./img/1027.jpg" },
    { fm: "91.4", name: "FM91.4-广东新闻广播", url: "https://lhttp.qingting.fm/live/1254/64k.mp3", img: "./img/914.jpg" },
    { fm: "97.4", name: "FM97.4-珠江经济台", url: "https://lhttp.qingting.fm/live/1259/64k.mp3", img: "./img/974.jpg" },
    { fm: "99.3", name: "FM99.3-音乐之声", url: "https://lhttp.qingting.fm/live/1260/64k.mp3", img: "./img/993.jpg" },
    { fm: "105.2", name: "FM105.2-交通之声", url: "https://lhttp.qingting.fm/live/1262/64k.mp3", img: "./img/1052.jpg" },
    { fm: "93.6", name: "FM93.6-南方生活广播", url: "https://lhttp.qingting.fm/live/468/64k.mp3", img: "./img/936.jpg" },
    { fm: "103.6", name: "FM103.6-城市之声", url: "https://lhttp.qingting.fm/live/469/64k.mp3", img: "./img/1036.jpg" },
    { fm: "95.3", name: "FM95.3-股市广播", url: "https://lhttp.qingting.fm/live/4847/64k.mp3", img: "./img/953.jpg" },
    { fm: "107.7", name: "FM107.7-文体广播", url: "https://lhttp.qingting.fm/live/471/64k.mp3", img: "./img/1077.jpg" },
    { fm: "105.7", name: "FM105.7-珠江之声", url: "https://lhttp.qingting.fm/live/470/64k.mp3", img: "./img/1057.jpg" },
    // 更多音源...
];

// SVG
const prevSVG = '<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="424"><path d="M409.6 379.965l290.673-183.214c43.049-27.136 77.967-8.396 77.967 42.046v546.406c0 50.36-34.857 69.223-77.967 42.046L409.6 644.035V757.76a81.92 81.92 0 1 1-163.84 0V266.24a81.92 81.92 0 1 1 163.84 0v113.725z" fill="#333333" p-id="425"></path></svg>'
const playSVG = '<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="402"><path d="M245.76 785.203V238.797c0-50.442 34.918-69.182 77.967-42.046l422.196 266.117c43.11 27.157 43.069 71.128 0 98.284L323.727 827.249c-43.11 27.177-77.967 8.315-77.967-42.046z" fill="#333333" p-id="403"></path></svg>'
const pauseSVG = '<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="347"><path d="M327.68 184.32a81.92 81.92 0 0 1 81.92 81.92v491.52a81.92 81.92 0 1 1-163.84 0V266.24a81.92 81.92 0 0 1 81.92-81.92z m368.64 0a81.92 81.92 0 0 1 81.92 81.92v491.52a81.92 81.92 0 1 1-163.84 0V266.24a81.92 81.92 0 0 1 81.92-81.92z" fill="#333333" p-id="348"></path></svg>'
const nextSVG = '<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="435"><path d="M614.4 379.965V266.24a81.92 81.92 0 1 1 163.84 0v491.52a81.92 81.92 0 1 1-163.84 0V644.035L323.727 827.249c-43.11 27.177-77.967 8.315-77.967-42.046V238.797c0-50.442 34.918-69.182 77.967-42.046L614.4 379.965z" fill="#333333" p-id="436"></path></svg>'
//const soundSVG = '<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="490"><path d="M552.96 152.064v719.872c0 16.118-12.698 29.184-28.365 29.184a67.482 67.482 0 0 1-48.394-20.644L329.359 729.354a74.547 74.547 0 0 0-53.493-22.794H250.47c-104.386 0-189.03-87.101-189.03-194.56s84.644-194.56 189.03-194.56h25.396c20.07 0 39.3-8.192 53.473-22.794L476.18 143.503a67.482 67.482 0 0 1 48.436-20.623c15.646 0 28.344 13.066 28.344 29.184z m216.965 101.58a39.936 39.936 0 0 1 0-57.425 42.25 42.25 0 0 1 58.778 0c178.483 174.408 178.483 457.154 0 631.562a42.25 42.25 0 0 1-58.778 0 39.936 39.936 0 0 1 0-57.405 359.506 359.506 0 0 0 0-516.752zM666.542 373.884a39.731 39.731 0 0 1 0-55.235 37.52 37.52 0 0 1 53.944 0c104.305 106.783 104.305 279.921 0 386.704a37.52 37.52 0 0 1-53.944 0 39.731 39.731 0 0 1 0-55.235c74.486-76.288 74.486-199.946 0-276.234z" fill="#333333" p-id="491"></path></svg>'
const menuSVG = '<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2920"><path d="M64 64h896v128H64V64z m0 768h896v128H64v-128z m0-384h896v128H64V448z" fill="#262626" p-id="2921"></path></svg>'

// 定义不同音量状态的 SVG 图标
const muteSvg = `<path d="M552.96 152.064v719.872c0 16.118-12.698 29.184-28.365 29.184a67.482 67.482 0 0 1-48.394-20.644L329.359 729.354a74.547 74.547 0 0 0-53.493-22.794H250.47c-104.386 0-189.03-87.101-189.03-194.56s84.644-194.56 189.03-194.56h25.396c20.07 0 39.3-8.192 53.473-22.794L476.18 143.503a67.482 67.482 0 0 1 48.436-20.623c15.646 0 28.344 13.066 28.344 29.184z m400.507 514.662a31.068 31.068 0 0 1-41.41 2.294l-88.167-70.656a40.243 40.243 0 0 0-50.34 0l-88.166 70.656a31.068 31.068 0 0 1-43.684-43.684l70.656-88.166a40.243 40.243 0 0 0 0-50.34L641.7 398.664a31.068 31.068 0 0 1 43.684-43.684l88.166 70.656c14.705 11.796 35.635 11.796 50.34 0l88.166-70.656a31.068 31.068 0 0 1 43.684 43.684l-70.656 88.166a40.243 40.243 0 0 0 0 50.34l70.656 88.166a31.068 31.068 0 0 1-2.273 41.41z" fill="#333333" p-id="893"></path>`;
const lowVolumeSvg = `<path d="m 552.96 152.064 v 719.872 c 0 16.118 -12.698 29.184 -28.365 29.184 a 67.482 67.482 0 0 1 -48.394 -20.644 l -146.842 -151.122 a 74.547 74.547 0 0 0 -53.493 -22.794 h -25.396 c -104.386 0 -189.03 -87.101 -189.03 -194.56 s 84.644 -194.56 189.03 -194.56 h 25.396 c 20.07 0 39.3 -8.192 53.473 -22.794 l 146.841 -151.143 a 67.482 67.482 0 0 1 48.436 -20.623 c 15.646 0 28.344 13.066 28.344 29.184 z z z m 27.04 359.936 a 1 1 0 0 0 96 0 a 1 1 0 0 0 -96 0" fill="#333333"></path>`;
const mediumVolumeSvg = `<path d="M 552.96 152.064 v 719.872 c 0 16.118 -12.698 29.184 -28.365 29.184 a 67.482 67.482 0 0 1 -48.394 -20.644 L 329.359 729.354 a 74.547 74.547 0 0 0 -53.493 -22.794 H 250.47 c -104.386 0 -189.03 -87.101 -189.03 -194.56 s 84.644 -194.56 189.03 -194.56 h 25.396 c 20.07 0 39.3 -8.192 53.473 -22.794 L 476.18 143.503 a 67.482 67.482 0 0 1 48.436 -20.623 c 15.646 0 28.344 13.066 28.344 29.184 z z M 666.542 373.884 a 39.731 39.731 0 0 1 0 -55.235 a 37.52 37.52 0 0 1 53.944 0 c 104.305 106.783 104.305 279.921 0 386.704 a 37.52 37.52 0 0 1 -53.944 0 a 39.731 39.731 0 0 1 0 -55.235 c 74.486 -76.288 74.486 -199.946 0 -276.234 z" fill="#333333" p-id="893"></path>`;
const highVolumeSvg = '<path d="M552.96 152.064v719.872c0 16.118-12.698 29.184-28.365 29.184a67.482 67.482 0 0 1-48.394-20.644L329.359 729.354a74.547 74.547 0 0 0-53.493-22.794H250.47c-104.386 0-189.03-87.101-189.03-194.56s84.644-194.56 189.03-194.56h25.396c20.07 0 39.3-8.192 53.473-22.794L476.18 143.503a67.482 67.482 0 0 1 48.436-20.623c15.646 0 28.344 13.066 28.344 29.184z m216.965 101.58a39.936 39.936 0 0 1 0-57.425 42.25 42.25 0 0 1 58.778 0c178.483 174.408 178.483 457.154 0 631.562a42.25 42.25 0 0 1-58.778 0 39.936 39.936 0 0 1 0-57.405 359.506 359.506 0 0 0 0-516.752zM666.542 373.884a39.731 39.731 0 0 1 0-55.235 37.52 37.52 0 0 1 53.944 0c104.305 106.783 104.305 279.921 0 386.704a37.52 37.52 0 0 1-53.944 0 39.731 39.731 0 0 1 0-55.235c74.486-76.288 74.486-199.946 0-276.234z" fill="#333333" p-id="491"></path>';

//监听player-content1
const playerContent1 = document.getElementById('player-content1');

// 获取暂停播放按钮 
const pausePlayBtn = document.getElementById('pause-play-btn');
const imageContainer = document.getElementById('imageContainer');

// 为 prev 和 next 按钮添加事件监听器
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
prevBtn.addEventListener('click', playPrevAudio);
nextBtn.addEventListener('click', playNextAudio);

//音量
const volumeContainer = document.getElementById('volume-container');
const volumeBarContainer = document.getElementById('volume-bar');
const volumeIcon = document.getElementById('volume-icon');

// 初始化列表
createAudioList(audioSources);
// 获取菜单按钮
const menuBtn = document.querySelector('.menu');
// 获取音源列表
const audioList = document.getElementById('audio-list');
// 点击菜单按钮时切换音源列表的显示状态
menuBtn.addEventListener('click', function () {
    audioList.classList.toggle('active');
});
// 动态创建音源列表项
function createAudioList(audioSources) {
    const listContainer = document.getElementById('audio-list-ul');
    //audioSources.sort((a, b) => a.fm - b.fm); // 正序排列
    audioSources.forEach(source => {
        const listItem = document.createElement('li');
        listItem.textContent = source.name;
        listItem.addEventListener('click', () => {
            playAudioSource(source.url);
            showAudioImage(source.img);
            updateMusicName(source.name); // 更新音乐名称
            pausePlayBtn.innerHTML = pauseSVG; // 更新按钮为“暂停”
        });
        listContainer.appendChild(listItem);
    });
    // 设置最后一个列表项的margin
    if (listContainer.children.length > 0) {
        const lastItem = listContainer.lastElementChild;
        lastItem.style.marginBottom = '0'; // 根据需要调整具体属性和值
    }
}


// 播放音源的函数  
let player = null;
function playAudioSource(url) {
    if (!player) {
        player = videojs('audio');
    }
    // 在切换音频时重置计时
    const currentTimeElement = document.getElementById('current-time');
    currentTimeElement.textContent = '';/*00:00*/

    player.src({ src: url });
    player.ready(function () {
        this.play();
    });

    // 监听播放器的时间更新事件
    player.on('timeupdate', function () {
        // 获取当前播放时间，单位为秒
        const currentTime = player.currentTime();
        // 将时间转换为分:秒的格式
        const minutes = Math.floor(currentTime / 60);
        const seconds = Math.floor(currentTime % 60);
        // 格式化时间，确保分和秒都是两位数
        const formattedTime = padZero(minutes) + ':' + padZero(seconds);
        // 将格式化后的时间显示在页面上
        const currentTimeElement = document.getElementById('current-time');
        currentTimeElement.textContent = formattedTime;
    });

    // 添加播放和暂停事件监听器-playerContent1&图片
    player.on('play', function () {
        playerContent1.classList.add('active');
        const audio_img = document.getElementById('audioimg');
        const musicImgs = document.getElementById('imageContainer');
        audio_img.classList.add('rotateAnimation');
        musicImgs.classList.add('active');
    });
    player.on('pause', function () {
        playerContent1.classList.remove('active');
        const audio_img = document.getElementById('audioimg');
        const musicImgs = document.getElementById('imageContainer');
        audio_img.classList.remove('rotateAnimation');
        musicImgs.classList.remove('active');
    });
}

// 辅助函数，确保时间显示为两位数
function padZero(num) {
    return (num < 10 ? '0' : '') + num;
}

// 添加暂停播放按钮的点击事件处理程序
pausePlayBtn.addEventListener('click', togglePausePlay);
imageContainer.addEventListener('click', togglePausePlay);
// 切换播放状态的函数
function togglePausePlay() {
    if (!player) {
        console.log("Player is not initialized");
        playRandomAudio();
    }

    if (player.paused()) {
        console.log("Audio is paused, playing now");
        player.play();
        pausePlayBtn.innerHTML = pauseSVG;
    } else {
        console.log("Audio is playing, pausing now");
        player.pause();
        pausePlayBtn.innerHTML = playSVG;
    }
}

// 获取音量调节滑块元素
const volumeBar = document.getElementById('volume-bar');
let currentVolume = Number(volumeBar.value);
// 监听音量滑块变化事件
volumeBar.addEventListener('input', function () {
    // 获取滑块当前值
    const volume = parseFloat(volumeBar.value) / 100;
    // 设置播放器音量
    currentVolume = Number(volumeBar.value);
    videojs('audio').volume(volume);
    volumeIco();
});

// 添加喇叭图标的隐藏式动画
let timeoutId;  // 用于存储setTimeout的返回ID
volumeContainer.addEventListener('mouseenter'/*click*/, function () {
    volumeBarContainer.style.display = 'block';
    // 监听滚轮事件
    volumeContainer.addEventListener('wheel', handleWheelEvent, { passive: false });
    // 取消之前的setTimeout操作
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
});
volumeContainer.addEventListener('mouseleave', function () {
    // 延时
    timeoutId = setTimeout(() => {
        volumeBarContainer.style.display = 'none';
        // 移除监听滚轮事件
        volumeContainer.removeEventListener('wheel', handleWheelEvent);
    }, 500)
});
volumeIcon.addEventListener('touchstart'/*click*/, function () {
    if (volumeBarContainer.style.display === 'none') {
        volumeBarContainer.style.display = 'block';
    } else if (volumeBarContainer.style.display === 'block') {
        togglemute(false);
    }
}, { passive: false });

// 定义滚轮事件的回调函数
function handleWheelEvent(event) {
    // 阻止默认行为，防止页面滚动
    event.preventDefault();

    if (event.deltaY > 0) {
        // 滚轮向下，减少音量
        decrease();
    } else {
        // 滚轮向上，增加音量
        increase();
    }
}

// 音量图标切换逻辑
volumeIcon.addEventListener('mousedown'/*mouseenter*/, togglemute);

// 静音    
class Volumes {
    constructor() {
        this.volume = parseFloat(volumeBar.value) / 100;
        this.play = videojs('audio');
        this.ismute = false;
    }

    mute() {
        if (!this.ismute) {
            this.play.volume(0);
            this.ismute = true;
        }
        return this.ismute;
    }

    unmute(volume) {
        if (this.ismute) {
            if (volume) {
                this.play.volume(volume);
            }
            else if (currentVolume) {
                const volume = parseFloat(currentVolume) / 100;
                this.play.volume(volume);
            }

            else {
                this.play.volume(this.volume);
            }
            this.ismute = false;
        }
        return this.ismute;
    }
}

let v = new Volumes();
function togglemute(touch) {
    if (touch === undefined) {
        touch = false;
    }
    if (isTouchDevice() && touch) {
        return;
    };
    if (v.ismute) {
        //console.log("unmute");
        v.unmute();
        volumeIco();
    } else {
        //console.log("mute");
        v.mute();
        volumeIcon.innerHTML = muteSvg;
    }
}

function volumeIco() {
    const volume = volumeBar.value;
    if (v.ismute) return;

    if (volume == 0) {
        // 静音图标
        volumeIcon.innerHTML = muteSvg;
    } else if (volume <= 33) {
        // 低音量图标
        volumeIcon.innerHTML = lowVolumeSvg;
    }
    else if (volume <= 66) {
        // 中音量图标
        volumeIcon.innerHTML = mediumVolumeSvg;
    } else {
        // 高音量图标
        volumeIcon.innerHTML = highVolumeSvg;
    }
}

// 更新音乐名称
function updateMusicName(name) {
    const musicNameElement = document.querySelector('.music-name');
    musicNameElement.textContent = name;
}
//图片
function showAudioImage(img) {
    const imageContainer = document.getElementById('imageContainer');
    const imgElement = document.createElement('img');
    imgElement.src = img;
    imgElement.id = 'audioimg';
    imgElement.draggable = 'true'; // 将draggable属性设置为true
    imageContainer.innerHTML = ''; // 清空容器内容  
    // 添加dragstart事件监听器，阻止默认行为
    imgElement.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });
    imageContainer.appendChild(imgElement); // 将图片添加到容器中
}

// 播放上一首音频的函数
function playPrevAudio() {
    if (!player) {
        console.log("Player is not initialized");
        playRandomAudio();
    }

    const currentIndex = audioSources.findIndex(source => source.url === player.src());
    const prevIndex = currentIndex === 0 ? audioSources.length - 1 : currentIndex - 1;
    const prevSource = audioSources[prevIndex];
    playAudioSource(prevSource.url);
    showAudioImage(prevSource.img);
    updateMusicName(prevSource.name);
    pausePlayBtn.innerHTML = pauseSVG;
}

// 播放下一首音频的函数
function playNextAudio() {
    if (!player) {
        console.log("Player is not initialized");
        playRandomAudio();
    }

    const currentIndex = audioSources.findIndex(source => source.url === player.src());
    const nextIndex = currentIndex === audioSources.length - 1 ? 0 : currentIndex + 1;
    const nextSource = audioSources[nextIndex];
    playAudioSource(nextSource.url);
    showAudioImage(nextSource.img);
    updateMusicName(nextSource.name);
    pausePlayBtn.innerHTML = pauseSVG;
}

// 从音频列表中随机选择一条链接进行播放的函数
function playRandomAudio() {
    const randomIndex = Math.floor(Math.random() * audioSources.length);
    const randomSource = audioSources[randomIndex];
    pausePlayBtn.innerHTML = pauseSVG;
    playAudioSource(randomSource.url);
    showAudioImage(randomSource.img);
    updateMusicName(randomSource.name);
}

// 增加音量
function increase() {
    currentVolume = Math.min(currentVolume + 10, 100); // 防止大于 100
    // 更新音量条的值
    volumeBar.value = currentVolume;
    volumeIco();
    if (v.ismute) return;
    const volume = parseFloat(volumeBar.value) / 100;
    videojs('audio').volume(volume);
}

// 减小音量
function decrease() {
    currentVolume = Math.max(0, currentVolume - 10); // 防止小于 0
    // 更新音量条的值
    volumeBar.value = currentVolume;
    volumeIco();
    if (v.ismute) return;
    const volume = parseFloat(volumeBar.value) / 100;
    videojs('audio').volume(volume);
}


/*禁止鼠标的右击操作查看源代码*/
document.oncontextmenu = function () {
    return false;
}

// pc端显示滚轮
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

if (!isTouchDevice()) {
    const listul = document.getElementById('audio-list-ul')
    listul.style.overflow = 'auto';
    audioList.style.paddingRight = '2px';
}


// 快捷键
window.addEventListener('keydown', function (event) {
    // 检查是否按下了空格键（使用现代标准 event.code）
    if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();  // 阻止默认行为（如页面滚动）
        togglePausePlay();
    }
    else if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
        event.preventDefault();  // 阻止默认行为（如页面滚动）
        playPrevAudio();
    }
    else if (event.code === 'KeyD' || event.code === 'ArrowRight') {
        event.preventDefault();  // 阻止默认行为（如页面滚动）
        playNextAudio();
    }
    else if (event.code === 'KeyW' || event.code === 'ArrowUp') {
        event.preventDefault();  // 阻止默认行为（如页面滚动）
        increase();
    }
    else if (event.code === 'KeyS' || event.code === 'ArrowDown') {
        event.preventDefault();  // 阻止默认行为（如页面滚动）
        decrease();
    }
    else if (event.ctrlKey || event.shiftKey) {
        event.preventDefault();  // 阻止默认行为（如页面滚动）
        audioList.classList.toggle('active');;
    }

    else if (event.code === 'Tab' || event.code === 'Backspace') {
        event.preventDefault();  // 阻止默认行为（如页面滚动）
        togglemute();
    }
});

/* 以下为背景JS */
drawStars();
//画星空背景
function drawStars() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight,

        hue = 217, //色调色彩
        stars = [], //保存所有星星
        count = 0,  //用于计算星星
        maxStars = 1300; //星星数量
    
    //canvas2是用来创建星星的源图像，即母版，
    //根据星星自身属性的大小来设置
    var canvas2 = document.createElement('canvas'),
        ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
    //创建径向渐变，从坐标(half，half)半径为0的圆开始，
    //到坐标为(half,half)半径为half的圆结束
    var half = canvas2.width / 2,
        gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#CCC');
    //hsl是另一种颜色的表示方式，
    //h->hue,代表色调色彩，0为red，120为green，240为blue
    //s->saturation，代表饱和度，0%-100%
    //l->lightness，代表亮度，0%为black，100%位white
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    // End cache
    function random(min, max) {
        if(arguments.length < 2) {
            max = min;
            min = 0;
        }

        if(min > max) {
            var hold = max;
            max = min;
            min = hold;
        }
        
        //返回min和max之间的一个随机值
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
        var max = Math.max(x, y),
            diameter = Math.round(Math.sqrt(max * max + max * max));
        //星星移动范围，值越大范围越小，
        return diameter / 2;
    }

    var Star = function() {
        //星星移动的半径
        this.orbitRadius = random(maxOrbit(w, h));
        //星星大小，半径越小，星星也越小，即外面的星星会比较大
        this.radius = random(60, this.orbitRadius) / 8;
        //所有星星都是以屏幕的中心为圆心
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        //星星在旋转圆圈位置的角度,每次增加speed值的角度
        //利用正弦余弦算出真正的x、y位置
        this.timePassed = random(0, maxStars);
        //星星移动速度
        this.speed = random(this.orbitRadius) / 500000;
        //星星图像的透明度
        this.alpha = random(2, 10) / 10;

        count++;
        stars[count] = this;
    }

    Star.prototype.draw = function() {
        //星星围绕在以屏幕中心为圆心，半径为orbitRadius的圆旋转
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
            y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
            twinkle = random(10);
        
        //星星每次移动会有1/10的几率变亮或者变暗
        if(twinkle === 1 && this.alpha > 0) {
            //透明度降低，变暗
            this.alpha -= 0.05;
        } else if(twinkle === 2 && this.alpha < 1) {
            //透明度升高，变亮
            this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
        //使用canvas2作为源图像来创建星星，
        //位置在x - this.radius / 2, y - this.radius / 2
        //大小为 this.radius
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
        //没旋转一次，角度就会增加
        this.timePassed += this.speed;
    }
    
    //初始化所有星星
    for(var i = 0; i < maxStars; i++) {
        new Star();
    }

    function animation() {
        //以新图像覆盖已有图像的方式进行绘制背景颜色
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.5; //尾巴
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
        ctx.fillRect(0, 0, w, h)

        //源图像和目标图像同时显示，重叠部分叠加颜色效果
        ctx.globalCompositeOperation = 'lighter';
        for(var i = 1, l = stars.length; i < l; i++) {
            stars[i].draw();
        };
        
        //调用该方法执行动画，并且在重绘的时候调用指定的函数来更新动画
        //回调的次数通常是每秒60次
        window.requestAnimationFrame(animation);
    }

    animation();
}