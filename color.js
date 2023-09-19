let out=document.getElementById("colo")
let b=document.getElementsByTagName("body")[0]
function change(){
    let arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let clr='#'
    let a;
    for(let i=0;i<6;i++){
    a=Math.floor(Math.random()*16)
    clr+=arr[a]
    }
    out.innerHTML=clr
    b.style.backgroundColor=clr
}
