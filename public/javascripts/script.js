document.querySelector("#files").addEventListener("click", function(dets){
    if(dets.target.id === "editbtn"){
      document.querySelector("#overlay").style.display = "initial";
      document.querySelector("#overlay #filenameinput").value = dets.target.dataset.filename;
      document.querySelector("#changeform").setAttribute("action", `/update/${dets.target.dataset.filename}`)
    }
})



function formopen(){
    var filei = document.querySelector("#fileicon")
var form = document.querySelector("#filecreateform")

filei.addEventListener("click",function(){
    donoOff()
    form.style.display = "initial";

})

var folderi = document.querySelector("#foldericon")
var formf = document.querySelector("#foldercreateform")


folderi.addEventListener("click",function(){  donoOff()
    formf.style.display = "initial";

})
}

formopen()

window.addEventListener("keydown",function(dets){
    if(dets.keyCode === 27){
        donoOff()
    }
})
    function donoOff(){
        var forms = document.querySelectorAll("#form-div form")
        forms.forEach(function(forrm){
            forrm.style.display = "none"
            
        })
    }
  


function closetab() {
    var closefile = document.querySelector("#fileopen-nav")
var closefileI = document.querySelector("#fileopen-nav i")

closefileI.addEventListener("click", function(){
    closefile.style.display="none"
})
}


function closevscode(){

    var topRightClose = document.querySelector("#top-right i:nth-child(5)")
    var mainwindow = document.querySelector("#main")

    topRightClose.addEventListener("click",function(){
        mainwindow.style.display="none";
    })
}




