function onclickfunc(){
    console.log("This is an event function")
}

const keyPressEvent=() =>{
    console.log("Your are pressing key");
    

}
//event listener

const box= document.getElementById('box-2')
box.addEventListener('click',() =>{
    console.log("click has been trigger-1");
    

})
box.addEventListener('click',() =>{
    console.log("click has been trigger-2");
    

})