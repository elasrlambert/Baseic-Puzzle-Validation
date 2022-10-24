window.onload = function() {
    console.log('JS引入成功！');

    // 初始化
    var mouseTrigger = document.getElementsByClassName('trigger-box')[0]
    var moveTrigger = document.getElementsByClassName('triggered-box')[0]
    var targetTrigger = document.getElementsByClassName('target-box')[0]
    var bottom = document.getElementsByClassName('bottom')[0]



    //鼠标事件有一个回调函数，它的参数是e（也可以改成其它名字）
    mouseTrigger.addEventListener('mousedown',function () {
        bottom.addEventListener('mousemove',function(e){
            boxMove(e)
            
        })
    })
    mouseTrigger.addEventListener('mouseup',function (e) {
        boxMove(e)
        var difference = parseInt(moveTrigger.style.left) - parseInt(targetTrigger.style.left);
        console.log('误差为 ==> ',difference);
        if ( difference <= 25 && difference >= -25 ) {
            alert('成功！')
            history.go(0)
        }else{
            alert('失败！')
            history.go(0)
        }
    })
    function boxMove(e) {
        if (e) {

            mouseTrigger.style = 'position: absolute;'
            mouseTrigger.style.left = e.offsetX + (-50) + 'px';

            moveTrigger.style = 'position: absolute;'
            moveTrigger.style.left = e.offsetX + (-50) + 'px';

            // console.log('鼠标的位置',e.offsetX);
            //这是行内样式，所以外联的css样式获取不到。
            // console.log('盒子的位置',mouseTrigger.style.left);
            
        }
    }
    //生成随机范围
    function randomLocation(min,max){
            var Range = max - min;
            var Rand = Math.random();
            var num = min + Math.round(Rand * Range); //四舍五入
            console.log('随机位置 ==> ',num);
            targetTrigger.style = 'position: absolute;'
            targetTrigger.style.left = num + 'px'
    }
    randomLocation(100,500)
}