function selectPosition(position){
    document.getElementsByClassName("active")[0].classList.remove("active");
    position.classList.add("active");

    console.log(position.classList[0]);
    if(position.classList[0] == "pos1")
    {
        for(i = 0; i < document.getElementsByClassName("pos-desc").length; i++)
        {
            document.getElementsByClassName("pos-desc")[i].style.visibility = "hidden";
        }
        document.getElementById("pos1-desc").style.visibility = "visible";
    }
    else if(position.classList[0] == "pos2")
    {
        
        for(i = 0; i < document.getElementsByClassName("pos-desc").length; i++)
        {
            document.getElementsByClassName("pos-desc")[i].style.visibility = "hidden";
        }
        document.getElementById("pos2-desc").style.visibility = "visible";
    }
    else if(position.classList[0] == "pos3")
    {
        
        for(i = 0; i < document.getElementsByClassName("pos-desc").length; i++)
        {
            document.getElementsByClassName("pos-desc")[i].style.visibility = "hidden";
        }
        document.getElementById("pos3-desc").style.visibility = "visible";
    }
    else if(position.classList[0] == "pos4")
    {
        
        for(i = 0; i < document.getElementsByClassName("pos-desc").length; i++)
        {
            document.getElementsByClassName("pos-desc")[i].style.visibility = "hidden";
        }
        document.getElementById("pos4-desc").style.visibility = "visible";
    }
    else if(position.classList[0] == "pos5")
    {
        
        for(i = 0; i < document.getElementsByClassName("pos-desc").length; i++)
        {
            document.getElementsByClassName("pos-desc")[i].style.visibility = "hidden";
        }
        document.getElementById("pos5-desc").style.visibility = "visible";
    }
}

function fadeNav(){


    window.addEventListener("scroll", function() {
        if (window.scrollY > 2000) {
            document.getElementsByTagName("nav")[0].style.animation = "fadeout linear 0.5s forwards";
        }
        else {
            document.getElementsByTagName("nav")[0].style.animation = "fadein linear 0.5s forwards";
        }
    },false);

   

   
}