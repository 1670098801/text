//获取元素
var div =document.querySelector('.lunbo');
var imgs=document.querySelectorAll("#imgs li "); //document--文件   获取照片
var next =div.querySelector('.next'); //获取左箭头
var back =div.querySelector('.back');//获取右箭头
var circlrs =document.querySelectorAll("#circles li"); // 获取点点
var currentIndex=0;//currentIndex （当前索引）  当前索引的都为0层，代表我当前要显示第几张图片
                    //单独定义出来，方便我们后续操作，是一个变动的值,作为下标
//给每一个点点加一个属性，可自己命名
 for( var j=0; j<circlrs.length;j++)
{  circlrs[j].setAttribute('index',j)}                    


 //显示第一张照片，和按钮
  showimg();

//addEventListener 附加侦听器     为 <button> 元素添加点击事件
  //鼠标进入div，左右箭头出现,
div.addEventListener('mouseover',function()
{
     const newLocal_1 = next.style.opacity = .5;  // const  常数 new Local 新建本地
    const newLocal = back.style.opacity = .5;
})
//鼠标移出div，左右箭头消失
div.addEventListener('mouseleave',function()
{
    next.style.opacity = 0;
    back.style.opacity = 0;
})
//点击上一张按钮的效果，索引值减 1
back.addEventListener('click',function(){
    currentIndex--;
    if(currentIndex == -1){
        currentIndex= imgs.length-1;
    }
    
    showimg();
})
//点击下一张按钮的效果，索引值加 1
next.addEventListener('click',function(){
   gonext();
})
function gonext(){
    currentIndex++;
    if(currentIndex ==imgs.length ){
        currentIndex= 0;    
    }
    console.log(currentIndex);
    showimg();
}
//根据下标显示图片  “==” 比较数据的值  “ ===” 还要比较数据的类型--强等于    就像  1 和 “1”
function showimg(){
for( var i =0;i<imgs.length;i++){
    if( i===currentIndex){
            imgs[i].setAttribute('class','active');}  //解释，如果i这个值等于currentindex（当前索引），那么给img[i]附加属性
            else{
                imgs[i].removeAttribute('class');
            } 
    }

    for( var i =0;i<imgs.length;i++){
        if( i===currentIndex){
                circlrs[i].setAttribute('class','activec');}
                else{
                    circlrs[i].removeAttribute('class');
                } 
        }
    
}
//setAttribute(string name, string value)：增加一个指定名称和值的新属性，或者把一个现有的属性设定为指定的值。
//Attribute  属性
for(var j =0;j< circlrs.length; j++){
    circlrs[j].addEventListener('click',function(Event){
        currentIndex=Number( Event.target.getAttribute('index',j));
        showimg();
    });
}









setInterval(function(){gonext();},3000)
//setInterval 设置间隔