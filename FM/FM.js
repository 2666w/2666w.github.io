// 音源列表数组
const audioSources = [
    { name: "FM92.4-南海广播", url: "https://radiopull.radiofoshan.com.cn/live/1400820947_BSID_42_audio.m3u8" ,img:"./img/924.jpg"},
    { name: "FM94.6-佛山综合广播", url: "https://radiopull.radiofoshan.com.cn/live/1400820947_BSID_46_audio.m3u8" ,img:"./img/946.jpg"},
    { name: "FM88.3-高明广播", url: "https://radiopull.radiofoshan.com.cn/live/1400820947_BSID_43_audio.m3u8" ,img:"./img/883.jpg"},
    { name: "FM90.1-顺德广播", url: "https://radiopull.radiofoshan.com.cn/live/1400820947_BSID_44_audio.m3u8" ,img:"./img/901.jpg"},
    { name: "FM90.6-三水广播", url: "https://radiopull.radiofoshan.com.cn/live/1400820947_BSID_45_audio.m3u8" ,img:"./img/906.jpg"},
    { name: "FM98.5-佛山音乐广播", url: "https://radiopull.radiofoshan.com.cn/live/1400820947_BSID_41_audio.m3u8" ,img:"./img/985.jpg"},
    { name: "FM88.0-广州都市生活", url: "https://tencentplay.gztv.com/live/fm880.m3u8?txSecret=43e759eb546ad0658f0903e5ac8d7733&txTime=18ed764ce11" ,img:"./img/880.jpg"},
    { name: "FM106.1-广州交通广播", url: "https://tencentplay.gztv.com/live/fm1061.m3u8?txSecret=cc7b1a4166f1d00d8d9e64717b5a6cc4&txTime=18ed7702c5a" ,img:"./img/1061.jpg"},
    { name: "FM96.2-广州新闻资讯", url: "https://tencentplay.gztv.com/live/fm962.m3u8?txSecret=6c9997d52e9fbe1c3a10e83f28570f27&txTime=18ed775ec73" ,img:"./img/962.jpg"},
    { name: "FM102.7-广州汽车音乐", url: "https://tencentplay.gztv.com/live/fm1027.m3u8?txSecret=cf78ef371503e3544e3db79b399e9a64&txTime=18ed7783401" ,img:"./img/1027.jpg"},
    { name: "FM91.4-广东新闻广播", url: "https://rlizhi.gdtv.cn/audio/fm914.m3u8?auth_key=1713010004-0-0-5a8799112f1a94e64f77bdc634ff45f6" ,img:"./img/914.jpg"},
    { name: "FM97.4-珠江经济台", url: "https://rlizhi.gdtv.cn/audio/fm974.m3u8?auth_key=1713010743-0-0-c993c098fcf838e051d28e18125244e3" ,img:"./img/974.jpg"},
    { name: "FM99.3-音乐之声", url: "https://rlizhi.gdtv.cn/audio/fm993.m3u8?auth_key=1713010841-0-0-a875739c7f6676212946f295c66cfffb" ,img:"./img/993.jpg"},
    { name: "FM105.2-交通之声", url: "https://rlizhi.gdtv.cn/audio/fm1052.m3u8?auth_key=1713010913-0-0-c57def6c586a9bcfaec343a579ea5209" ,img:"./img/1052.jpg"},
    { name: "FM93.6-南方生活广播", url: "https://rlizhi.gdtv.cn/audio/fm936.m3u8?auth_key=1713010992-0-0-6d2a6ff3decd4e53a9a1f44734e6dfdd" ,img:"./img/936.jpg"},
    { name: "FM103.6-城市之声", url: "https://rlizhi.gdtv.cn/audio/fm1036.m3u8?auth_key=1713011037-0-0-e78726e0384cd8702af4a7e5653f5173" ,img:"./img/1036.jpg"},
    { name: "FM95.3-股市广播", url: "https://rlizhi.gdtv.cn/audio/fm953.m3u8?auth_key=1713011195-0-0-b69dbfdc7404e2da5dd68abdbc8ce545" ,img:"./img/953.jpg"},
    { name: "FM107.7-文体广播", url: "https://rlizhi.gdtv.cn/audio/fm1077.m3u8?auth_key=1713011243-0-0-6aed285e5abf0ff10ef2a9a80337598e" ,img:"./img/1077.jpg"},
    { name: "FM105.7-珠江之声", url: "https://rlizhi.gdtv.cn/audio/fm1057.m3u8?auth_key=1713011299-0-0-fbdfeff3173b721d0f19b538623ad637" ,img:"./img/1057.jpg"},
    // 更多音源...
];

//监听player-content1
const playerContent1 = document.getElementById('player-content1');

// 获取暂停播放按钮 
const pausePlayBtn = document.getElementById('pause-play-btn');
// 设置初始状态为播放
pausePlayBtn.style.backgroundImage = 'url(img/play.png)';

// 为 prev 和 next 按钮添加事件监听器
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
prevBtn.addEventListener('click', playPrevAudio);
nextBtn.addEventListener('click', playNextAudio);

//音量
const volumeContainer = document.getElementById('volume-container');
const volumeBarContainer = document.getElementById('volume-bar');
volumeBarContainer.style.display = 'none';

// 初始化列表
createAudioList(audioSources);
// 获取菜单按钮
const menuBtn = document.querySelector('.menu');
// 获取音源列表
const audioList = document.getElementById('audio-list');
// 点击菜单按钮时切换音源列表的显示状态
menuBtn.addEventListener('click', function() {
    audioList.classList.toggle('active');
});
// 动态创建音源列表项
function createAudioList(audioSources) {
    const listContainer = document.getElementById('audio-list-ul');
    audioSources.forEach(source => {
        const listItem = document.createElement('li');
        listItem.textContent = source.name;
        listItem.addEventListener('click', () => {
            playAudioSource(source.url);
            showAudioImage(source.img);
            updateMusicName(source.name); // 更新音乐名称
            pausePlayBtn.style.backgroundImage = 'url(img/pause.png)'; // 更新按钮为“暂停”
        });
        listContainer.appendChild(listItem);
    });
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

    player.src({ type: 'application/x-mpegURL', src: url });
    player.ready(function() {
        this.play();
    });

    // 监听播放器的时间更新事件
    player.on('timeupdate', function() {
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

    // 获取音量调节滑块元素
    const volumeBar = document.getElementById('volume-bar');
    // 监听音量滑块变化事件
    volumeBar.addEventListener('input', function() {
        // 获取滑块当前值
        const volume = parseFloat(volumeBar.value) / 100;
        // 设置播放器音量
        player.volume(volume);
    });
    // 添加喇叭图标的隐藏式动画
    volumeContainer.addEventListener('click'/*mouseenter*/, function() {
        volumeBarContainer.style.display = 'block';
    });
    volumeContainer.addEventListener('mouseleave', function() {
        volumeBarContainer.style.display = 'none';
    });
}

// 辅助函数，确保时间显示为两位数
function padZero(num) {
return (num < 10 ? '0' : '') + num;
}

// 添加暂停播放按钮的点击事件处理程序
pausePlayBtn.addEventListener('click', togglePausePlay);
// 切换播放状态的函数
function togglePausePlay() {
    if (!player) {
        console.log("Player is not initialized");
        playRandomAudio();
    }

    if (player.paused()) {
        console.log("Audio is paused, playing now");
        player.play();
        pausePlayBtn.style.backgroundImage = 'url(img/pause.png)';
    } else {
        console.log("Audio is playing, pausing now");
        player.pause();        
        pausePlayBtn.style.backgroundImage = 'url(img/play.png)';
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
    imgElement.addEventListener('dragstart', function(event) {
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
    pausePlayBtn.style.backgroundImage = 'url(img/pause.png)';
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
    pausePlayBtn.style.backgroundImage = 'url(img/pause.png)';
}

// 从音频列表中随机选择一条链接进行播放的函数
function playRandomAudio() {
    const randomIndex = Math.floor(Math.random() * audioSources.length);
    const randomSource = audioSources[randomIndex];
    pausePlayBtn.style.backgroundImage = 'url(img/pause.png)';
    playAudioSource(randomSource.url);
    showAudioImage(randomSource.img);
    updateMusicName(randomSource.name);
}

/*禁止鼠标的右击操作查看源代码*/
document.oncontextmenu = function(){
    return false;
}




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