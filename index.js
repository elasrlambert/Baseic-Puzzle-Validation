window.onload = function() {
    // console.log('JS引入成功！');

    // 初始化 initialization
    var mouseTrigger = document.getElementsByClassName('trigger-box')[0]
    var moveTrigger = document.getElementsByClassName('triggered-box')[0]
    var targetTrigger = document.getElementsByClassName('target-box')[0]
    var movingArea = document.getElementsByClassName('bottom')[0]



    //Add event listener for 'mouseTrigger' and 'movingArea'
    //为 'mouseTrigger' 和 'movingArea' 添加事件监听器。
    mouseTrigger.addEventListener('mousedown',function () {
        movingArea.addEventListener('mousemove',function(e){
            boxMove(e)
            
        })
    })
    // Add event mouseup listener for mouseTrigger,
    // do deferent event depend on the certain limit range.
    // 计算误差，根据误差是否在一定的范围内来执行不同的行为 
    mouseTrigger.addEventListener('mouseup',function () {

        var difference = parseInt(moveTrigger.style.left) - parseInt(targetTrigger.style.left);
        console.log('误差为 ==> ',difference);
        if ( difference <= 25 && difference >= -25 ) {
            alert('succeed !')
            history.go(0)
        }else{
            alert('fail !')
            history.go(0)
        }
    })
    function boxMove(e) {
        if (e) {

            mouseTrigger.style = 'position: absolute;'
            // "(-50)" is the half of the box's with
            // "(-50)" 是盒子的一半宽度，计算出来是盒子中心到左边的距离。
            mouseTrigger.style.left = e.offsetX + (-50) + 'px';

            moveTrigger.style = 'position: absolute;'
            moveTrigger.style.left = e.offsetX + (-50) + 'px';

            
        }
    }
    // Generate random positions in the range for the target box
    // 为目标盒子生成范围内的随机位置
    function randomLocation(min,max){
            var Range = max - min;
            var Rand = Math.random();
            var num = min + Math.round(Rand * Range); //四舍五入
            // console.log('随机位置 ==> ',num);
            targetTrigger.style = 'position: absolute;'
            targetTrigger.style.left = num + 'px'
    }
    randomLocation(100,500)
    console.warn('喜欢请给这个项目一颗星星~','\n','Plz give it a star if you like this project~');
}
