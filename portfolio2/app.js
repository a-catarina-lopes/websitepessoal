
const slider=document.querySelector('.imgs');


for(let i=1; i<6;i++){
    
    const img=document.createElement("img");
    img.src="img/fotos/img"+i+".jpg";
    img.className = "img"+i;
    //img.setAttribute("style","position:relative;");
    //img.setAttribute("style","top:280;");
    //img.setAttribute("style","right:200;");
    slider.appendChild(img);
}

const thumb1=document.querySelector('.img'+1);
const thumb2=document.querySelector('.img'+2);
const thumb3=document.querySelector('.img'+3);
const thumb4=document.querySelector('.img'+4);
const thumb5=document.querySelector('.img'+5);

    

thumb1.onmousedown=(event)=>{

    const shiftX1 =event.clientX - thumb1.getBoundingClientRect().left;
        //console.log(shiftX);
    
        const shiftY1 =event.clientY - thumb1.getBoundingClientRect().top;
        //console.log(shiftY);
    
        const onMouseMove1 = (event) =>{
            let newLeft1 =event.clientX-shiftX1-slider.getBoundingClientRect().left;
            let newTop1 =event.clientY-shiftY1-slider.getBoundingClientRect().top;
    
            //if (newLeft<0){
            //    newLeft=0;
            //}
    
            if (newTop1<0){
                newTop1=0;
            }
    
            let rightEdge1 = slider.offsetWidth-thumb1.offsetWidth;
            let topEdge1 = slider.offsetHeight-thumb1.offsetHeight;
    
            if (newLeft1 > rightEdge1) {
                newLeft1 = rightEdge1;
            }
    
            if (newTop1 > topEdge1) {
                newTop1 = topEdge1;
            }
          
            thumb1.style.left = newLeft1 + "px";
            thumb1.style.top = newTop1 + "px";
        };
    
        const onMouseUp1 = () => {
            document.removeEventListener("mousemove", onMouseMove1);
            document.removeEventListener("mouseup", onMouseUp1);
          };
    
          document.addEventListener("mousemove", onMouseMove1);
      document.addEventListener("mouseup", onMouseUp1);
    
    };
    
    thumb1.ondragstart = function () {
        return false;
    };

////////////////////////////////////////////////////////////////////////////
thumb2.onmousedown=(event)=>{

    const shiftX2 =event.clientX - thumb2.getBoundingClientRect().left;
        //console.log(shiftX);
    
        const shiftY2 =event.clientY - thumb2.getBoundingClientRect().top;
        //console.log(shiftY);
    
        const onMouseMove2 = (event) =>{
            let newLeft2 =event.clientX-shiftX2-slider.getBoundingClientRect().left;
            let newTop2 =event.clientY-shiftY2-slider.getBoundingClientRect().top;
    
            //if (newLeft<0){
            //    newLeft=0;
            //}
    
            if (newTop2<0){
                newTop2=0;
            }
    
            let rightEdge2 = slider.offsetWidth-thumb2.offsetWidth;
            let topEdge2 = slider.offsetHeight-thumb2.offsetHeight;
    
            if (newLeft2 > rightEdge2) {
                newLeft2 = rightEdge2;
            }
    
            if (newTop2 > topEdge2) {
                newTop2 = topEdge2;
            }
          
            thumb2.style.left = newLeft2 + "px";
            thumb2.style.top = newTop2 + "px";
        };
    
        const onMouseUp2 = () => {
            document.removeEventListener("mousemove", onMouseMove2);
            document.removeEventListener("mouseup", onMouseUp2);
          };
    
          document.addEventListener("mousemove", onMouseMove2);
      document.addEventListener("mouseup", onMouseUp2);
    
    };
    
    thumb2.ondragstart = function () {
        return false;
    };

    ////////////////////////////////////////////////////////////////////////////
thumb3.onmousedown=(event)=>{

    const shiftX3 =event.clientX - thumb3.getBoundingClientRect().left;
        //console.log(shiftX);
    
        const shiftY3 =event.clientY - thumb3.getBoundingClientRect().top;
        //console.log(shiftY);
    
        const onMouseMove3 = (event) =>{
            let newLeft3 =event.clientX-shiftX3-slider.getBoundingClientRect().left;
            let newTop3 =event.clientY-shiftY3-slider.getBoundingClientRect().top;
    
            //if (newLeft<0){
            //    newLeft=0;
            //}
    
            if (newTop3<0){
                newTop3=0;
            }
    
            let rightEdge3 = slider.offsetWidth-thumb3.offsetWidth;
            let topEdge3 = slider.offsetHeight-thumb3.offsetHeight;
    
            if (newLeft3 > rightEdge3) {
                newLeft3 = rightEdge3;
            }
    
            if (newTop3 > topEdge3) {
                newTop3 = topEdge3;
            }
          
            thumb3.style.left = newLeft3 + "px";
            thumb3.style.top = newTop3 + "px";
        };
    
        const onMouseUp3 = () => {
            document.removeEventListener("mousemove", onMouseMove3);
            document.removeEventListener("mouseup", onMouseUp3);
          };
    
          document.addEventListener("mousemove", onMouseMove3);
      document.addEventListener("mouseup", onMouseUp3);
    
    };
    
    thumb3.ondragstart = function () {
        return false;
    };

////////////////////////////////////////////////////////////////////////////
thumb4.onmousedown=(event)=>{

    const shiftX4 =event.clientX - thumb4.getBoundingClientRect().left;
        //console.log(shiftX);
    
        const shiftY4 =event.clientY - thumb4.getBoundingClientRect().top;
        //console.log(shiftY);
    
        const onMouseMove4 = (event) =>{
            let newLeft4 =event.clientX-shiftX4-slider.getBoundingClientRect().left;
            let newTop4 =event.clientY-shiftY4-slider.getBoundingClientRect().top;
    
            //if (newLeft<0){
            //    newLeft=0;
            //}
    
            if (newTop4<0){
                newTop4=0;
            }
    
            let rightEdge4 = slider.offsetWidth-thumb4.offsetWidth;
            let topEdge4 = slider.offsetHeight-thumb4.offsetHeight;
    
            if (newLeft4 > rightEdge4) {
                newLeft4 = rightEdge4;
            }
    
            if (newTop4 > topEdge4) {
                newTop4 = topEdge4;
            }
          
            thumb4.style.left = newLeft4 + "px";
            thumb4.style.top = newTop4 + "px";
        };
    
        const onMouseUp4 = () => {
            document.removeEventListener("mousemove", onMouseMove4);
            document.removeEventListener("mouseup", onMouseUp4);
          };
    
          document.addEventListener("mousemove", onMouseMove4);
      document.addEventListener("mouseup", onMouseUp4);
    
    };
    
    thumb4.ondragstart = function () {
        return false;
    };


////////////////////////////////////////////////////////////////////////////
thumb5.onmousedown=(event)=>{

    const shiftX5 =event.clientX - thumb5.getBoundingClientRect().left;
        //console.log(shiftX);
    
        const shiftY5 =event.clientY - thumb5.getBoundingClientRect().top;
        //console.log(shiftY);
    
        const onMouseMove5 = (event) =>{
            let newLeft5 =event.clientX-shiftX5-slider.getBoundingClientRect().left;
            let newTop5 =event.clientY-shiftY5-slider.getBoundingClientRect().top;
    
            //if (newLeft<0){
            //    newLeft=0;
            //}
    
            if (newTop5<0){
                newTop5=0;
            }
    
            let rightEdge5 = slider.offsetWidth-thumb5.offsetWidth;
            let topEdge5 = slider.offsetHeight-thumb5.offsetHeight;
    
            if (newLeft5 > rightEdge5) {
                newLeft5 = rightEdge5;
            }
    
            if (newTop5 > topEdge5) {
                newTop4 = topEdge5;
            }
          
            thumb5.style.left = newLeft5 + "px";
            thumb5.style.top = newTop5 + "px";
        };
    
        const onMouseUp5 = () => {
            document.removeEventListener("mousemove", onMouseMove5);
            document.removeEventListener("mouseup", onMouseUp5);
          };
    
          document.addEventListener("mousemove", onMouseMove5);
      document.addEventListener("mouseup", onMouseUp5);
    
    };
    
    thumb5.ondragstart = function () {
        return false;
    };










/*
const slider=document.querySelector('.home');
console.log(slider);

const thumb=document.querySelector('.img1');

console.log(thumb);

thumb.onmousedown=(event)=>{
    const shiftX =event.clientX - thumb.getBoundingClientRect().left;
    console.log(shiftX);

    const shiftY =event.clientY - thumb.getBoundingClientRect().top;
    console.log(shiftY);

    const onMouseMove = (event) =>{
        let newLeft =event.clientX-shiftX-slider.getBoundingClientRect().left;
        let newTop =event.clientY-shiftY-slider.getBoundingClientRect().top;

        //if (newLeft<0){
        //    newLeft=0;
        //}

        if (newTop<0){
            newTop=0;
        }

        let rightEdge = slider.offsetWidth-thumb.offsetWidth;
        let topEdge = slider.offsetHeight-thumb.offsetHeight;

        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        if (newTop > topEdge) {
            newTop = topEdge;
        }
      
        thumb.style.left = newLeft + "px";
        thumb.style.top = newTop + "px";
    };

    const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

};

thumb.ondragstart = function () {
    return false;
};
*/

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

//console.log("2");
/*
const source = document.querySelector('.img1');
console.log(source);
const target = document.querySelector('.home');
//console.log(target);

source.addEventListener('dragstart',(e)=>{
    console.log("arrastado");
    e.dataTransfer.setData('text/plain',e.target.id);
});

target.addEventListener('dragover',(e)=>{
    e.preventDefault();
})

target.addEventListener('drop',(e)=>{
    e.preventDefault();
    const sourceID = e.dataTransfer.getData('text/plain');
    console.log(sourceID);
    e.target.appendChild(document.getElementById(sourceID));
    console.log("largado");
})
*/