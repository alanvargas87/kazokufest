let nocmode=document.getElementById('nocmode')
nocmode.addEventListener('change',(event)=>{
    let checked=event.target.ckecked;
    document.body.classList.toggle('dark');
    if(checked==true){
        label_nocmode.style.color="yellow"
    }else{
        label_nocmode.style.color="white"
    }
})