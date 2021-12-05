let main = document.getElementsByTagName('main')[0];
let upperLeftCorner = document.getElementById('0');
let halfLeft = document.getElementById('1');
let lowerLeftCorner = document.getElementById('2');
let upperHalf = document.getElementById('3');
let half = document.getElementById('4');
let lowerHalf = document.getElementById('5');
let upperRighCorner = document.getElementById('6');
let halfRight = document.getElementById('7');
let lowerRightCorner = document.getElementById('8');

let imgUpperLeftCorner = document.getElementById('img0');
let imgHalfLeft = document.getElementById('img1');
let imgLowerLeftCorner = document.getElementById('img2');
let imgUpperHalf = document.getElementById('img3');
let imgHalf = document.getElementById('img4');
let imgLowerHalf = document.getElementById('img5');
let imgUpperRightCorner = document.getElementById('img6');
let imgHalfRight = document.getElementById('img7');
let imgLowerRightCorner = document.getElementById('img8');
let imgs = [imgUpperLeftCorner,imgHalfLeft,imgLowerLeftCorner,imgUpperHalf,imgHalf,imgLowerHalf,imgUpperRightCorner,imgHalfRight,imgLowerRightCorner];

let reference = document.createElement('button');
let reset = document.createElement('button');
let flag = true;

reference.innerHTML = 'Reference';
main.appendChild(reference);
reference.addEventListener('click', ()=>{
    if(flag === true){
        document.getElementsByClassName('container_jigSaw')[0].style.backgroundImage = 'url(../media/img/reference.logo.nogara.jpg)'
        flag = false
    }else{
        document.getElementsByClassName('container_jigSaw')[0].style.backgroundImage = 'none'
        flag = true
    }
})

reset.innerHTML = 'Reset';
main.appendChild(reset)
reset.addEventListener('click', ()=>{
    let containerImgs = document.getElementsByClassName('container_img')[0]
    let margin = 0;
    for(let index=0;index < imgs.length;index++){
        imgs[index].style.marginLeft = margin+'px'
        imgs[index].style.height = 312+'px'
        imgs[index].style.width = 312+'px'
        containerImgs.appendChild(imgs[index])
        margin+=4
    }
})

upperLeftCorner.draggable = true;
halfLeft.draggable = true;
lowerLeftCorner.draggable = true;
upperHalf.draggable = true;
half.draggable = true;
lowerHalf.draggable = true;
upperRighCorner.draggable = true;
halfRight.draggable = true;
lowerRightCorner.draggable = true;

const dragOver = event =>{ 
    event.preventDefault();
}

const droop = (event) =>{
    let data = event.dataTransfer.getData('text');
    if(data.slice(0-1) == event.target.id){
        let win = new Audio('../media/sound/win.mpeg')
        win.play()
        event.target.appendChild(document.getElementById(data))
        document.getElementById(data).style.marginLeft = 0
        document.getElementById(data).style.height = 96+'px'
        document.getElementById(data).style.width = 96+'px'
    }else{
        let failed = new Audio('../media/sound/error.mpeg')
        failed.play()
    }
}

const dragStart = event =>{
    (event.dataTransfer.setData('text',event.target.id));
}

upperLeftCorner.addEventListener('dragover',dragOver)
upperLeftCorner.addEventListener('drop',droop)
halfLeft.addEventListener('dragover',dragOver)
halfLeft.addEventListener('drop',droop)
lowerLeftCorner.addEventListener('dragover',dragOver)
lowerLeftCorner.addEventListener('drop',droop)
upperHalf.addEventListener('dragover',dragOver)
upperHalf.addEventListener('drop',droop)
half.addEventListener('dragover',dragOver)
half.addEventListener('drop',droop)
lowerHalf.addEventListener('dragover',dragOver)
lowerHalf.addEventListener('drop',droop)
upperRighCorner.addEventListener('dragover',dragOver)
upperRighCorner.addEventListener('drop',droop)
halfRight.addEventListener('dragover',dragOver)
halfRight.addEventListener('drop',droop)
lowerRightCorner.addEventListener('dragover',dragOver)
lowerRightCorner.addEventListener('drop',droop)

imgUpperLeftCorner.addEventListener('dragstart',dragStart)
imgHalfLeft.addEventListener('dragstart',dragStart)
imgLowerLeftCorner.addEventListener('dragstart',dragStart)
imgUpperHalf.addEventListener('dragstart',dragStart)
imgHalf.addEventListener('dragstart',dragStart)
imgLowerHalf.addEventListener('dragstart',dragStart)
imgUpperRightCorner.addEventListener('dragstart',dragStart)
imgHalfRight.addEventListener('dragstart',dragStart)
imgLowerRightCorner.addEventListener('dragstart',dragStart)