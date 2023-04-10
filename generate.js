function generate(text,e){

    if(e.keyCode==13&&text!="")
    {
        e.target.blur()
        var input=document.getElementById("input")
        var loader=document.getElementById("loader")
        var art=document.getElementById("art")
        input.value=null
        loader.className="loader"
        art.hidden=true
        setTimeout(() => {  
            loader.className=null
            art.hidden=false
            art.src="library/rich.jpg"
         }, 5000);
    
    }

}