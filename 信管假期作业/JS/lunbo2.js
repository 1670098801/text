//获取元素
var div =document.querySelector('.zhiboyou');
var imgs1=document.querySelectorAll("#imgs1 li"); //document--文件   获取照片
var next1 =div.querySelector('.next1'); //获取左箭头
var back1 =div.querySelector('.back1');//获取右箭头
var circlrs1 =document.querySelectorAll("#circles1 li"); // 获取点点
var currentIndex1=0;//currentIndex （当前索引）  当前索引的都为0层，代表我当前要显示第几张图片
                    //单独定义出来，方便我们后续操作，是一个变动的值,作为下标
//给每一个点点加一个属性，可自己命名
 for( var b=0; b<circlrs1.length;b++)
{  circlrs1[b].setAttribute('index',b)}                    


 //显示第一张照片，和按钮
  showimg1();

//addEventListener 附加侦听器     为 <button> 元素添加点击事件
  //鼠标进入div，左右箭头出现,
div.addEventListener('mouseover',function()
{
     const newLocal_1 = next1.style.opacity = .5;  // const  常数 new Local 新建本地
    const newLocal = back1.style.opacity = .5;
})
//鼠标移出div，左右箭头消失
div.addEventListener('mouseleave',function()
{
    next1.style.opacity = 0;
    back1.style.opacity = 0;
})
//点击上一张按钮的效果，索引值减 1
back1.addEventListener('click',function(){
    currentIndex1--;
    if(currentIndex1 == -1){
        currentIndex1= imgs1.length-1;
    }
    
    showimg1();
})
//点击下一张按钮的效果，索引值加 1
next1.addEventListener('click',function(){
   gonext1();
})
function gonext1(){
    currentIndex1++;
    if(currentIndex1 ==imgs1.length ){
        currentIndex1= 0;    
    }
    console.log(currentIndex1);
    showimg1();
}
//根据下标显示图片  “==” 比较数据的值  “ ===” 还要比较数据的类型--强等于    就像  1 和 “1”
function showimg1(){
for( var a =0;a<imgs1.length;a++){
    if( a===currentIndex1){
            imgs1[a].setAttribute('class','active1');}  //解释，如果i这个值等于currentindex（当前索引），那么给img[i]附加属性
            else{
                imgs1[a].removeAttribute('class');
            } 
    }

    for( var a =0;a<imgs1.length;a++){
        if( a===currentIndex1){
                circlrs1[a].setAttribute('class','activec1');}
                else{
                    circlrs1[a].removeAttribute('class');
                } 
        }
    
}
//setAttribute(string name, string value)：增加一个指定名称和值的新属性，或者把一个现有的属性设定为指定的值。
//Attribute  属性
for(var b =0;b< circlrs1.length; b++){
    circlrs1[b].addEventListener('click',function(Event){
        currentIndex1=Number( Event.target.getAttribute('index',b));
        showimg1();
    });
}









setInterval(function(){gonext1();},3000)
//setInterval 设置间隔