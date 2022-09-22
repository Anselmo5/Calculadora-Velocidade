const a = document.getElementById('a').value ;
const b = document.getElementById('b').value ;
const c = document.getElementById('c').value ;
const d = document.getElementById('d').value ;

function clikc(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let x = parseInt(a) / parseInt(b)

    document.getElementById("d").value = x
    document.getElementById("c").value += x
}



function lim(){
    document.getElementById("a").value = a
    document.getElementById("b").value = b
    document.getElementById("d").value = d
    document.getElementById("c").value = c
 
   a = (" ")
   b = (" ")
   d = (" ")
   c = (" ")
  

}