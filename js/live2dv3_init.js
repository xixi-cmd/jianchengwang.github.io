<!------ 位置可自定义 ------>
document.write('<div class="Canvas" style="position: fixed; right: 10px; bottom: 10px;z-index: 99999999" id="L2dCanvas"></div>');
<!------ 依赖 JS ------>
<!---- 可选 ---->
<!-- 兼容低版本浏览器 -->
document.write('<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"> </script>');
<!-- 音频播放兼容 -->
document.write('<script src="https://cdn.jsdelivr.net/npm/howler@2.1.3/dist/howler.min.js"></script>');
<!---- 必需 ---->
document.write('<script src="https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/pixi.js@4.6.1/dist/pixi.min.js"></script>');
<!-- live2dv3.js -->
document.write('<script src="https://cdn.jsdelivr.net/npm/live2dv3@1.2.2/live2dv3.min.js"></script>');
<!------ 加载Live2d模型 ------>

window.onload = () => {
    new l2dViewer({
        el: document.getElementById('L2dCanvas'), // 要添加Live2d的元素
        basePath: 'https://github.com/jianchengwang/live2d_models/tree/main/moc3/', // 模型根目录
        modelName: 'yichui_2', // 模型名称
        sounds: [ // 触摸播放声音
            // 'sounds/demo.mp3', // 相对路径是相对于模型文件夹
            'https://cdn.jsdelivr.net/npm/live2dv3@latest/assets/biaoqiang_3/sounds/demo.mp3' // 也可以是网址
        ]
    })
}