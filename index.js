for(var index=0; index<document.querySelectorAll("button").length;index++){
    document.querySelectorAll(".drum")[index].addEventListener("click",function (){
        buttonLight(`${this.innerHTML}`); 
        makeSound(`${this.innerHTML}`);
    });
}    
    document.addEventListener("keypress",function (event) {
        buttonLight(event.key);
        makeSound(event.key);
        
        
    });
    function buttonLight(currentKey){
        let key=document.querySelector("."+currentKey);
        key.classList.add("pressed");
        setTimeout(() => {
            key.classList.remove("pressed");
        }, 200);

                
    }
    function makeSound(key){
        switch (key){
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                this.style.color="white";
            break;
            case "a":
                var audio= new Audio("sounds/tom-2.mp3");
                audio.play();
                this.style.color="white";
            break;
            case "s":
                var audio= new Audio("sounds/tom-3.mp3");
                audio.play();
                this.style.color="white";
            break;
            case "d":
                var audio= new Audio("sounds/tom-4.mp3");
                audio.play();
                this.style.color="white";
            break;
            case "j":
                var audio= new Audio("sounds/kick-bass.mp3 ")
                audio.play();
                this.style.color="white";
            break;
            case "k":
                var audio= new Audio("sounds/crash.mp3");
                audio.play();
                this.style.color="white";
            break;
            case "l":
                var audio= new Audio("sounds/snare.mp3");
                audio.play();
                this.style.color="white";
            break;
            default:
                audio.play();
        
    }           
}

