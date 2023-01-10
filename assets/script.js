function run(){
    let htmlcode = document.querySelector(".editor #htmlcode").value;
    let csscode = "<style>"+document.querySelector(".editor #csscode").value+"</style>";
    let jscode = document.querySelector(".editor #jscode").value;
    let output = document.querySelector(".editor #output");
    output.contentDocument.body.innerHTML = htmlcode+csscode;
    output.contentWindow.eval(jscode);

}
document.querySelector(".editor #htmlcode").addEventListener("keyup",run);
document.querySelector(".editor #csscode").addEventListener("keyup",run);
document.querySelector(".editor #jscode").addEventListener("keyup",run);


document.getElementById('output').contentWindow.document.body.style.color='white';



let check = document.getElementById('flexSwitchCheckDefault');
console.log(check.value);
check.addEventListener("click", function(){
    let val = document.getElementById('flexSwitchCheckDefault').checked;
    if(val){
        document.getElementById('output').contentWindow.document.body.style.color='black';
        document.getElementById('nav').style.backgroundColor = '#fff';
        document.getElementById('navval').style.color = 'black';
        document.getElementById('label').style.color = 'black';
        document.getElementById('label1').style.color = 'black';
        document.getElementById('output').style.backgroundColor = 'lightgrey';
        document.getElementById('titl1').style.color = 'black';
        document.getElementById('titl1').style.border = '2px solid #111';
        document.getElementById('titl2').style.color = 'black';
        document.getElementById('titl2').style.border = '2px solid #111';
        document.getElementById('titl3').style.color = 'black';
        document.getElementById('titl3').style.border = '2px solid #111';
        document.getElementById('are1').style.backgroundColor = 'lightgrey';
        document.getElementById('are1').style.height = '26.9%';
        document.getElementById('are2').style.backgroundColor = 'lightgrey';
        document.getElementById('are2').style.height = '26.9%';
        document.getElementById('are3').style.backgroundColor = 'lightgrey';
        document.getElementById('are3').style.height = '26.9%';
        document.getElementById('titl1').style.backgroundColor = '#fff';
        document.getElementById('titl2').style.backgroundColor = '#fff';
        document.getElementById('titl3').style.backgroundColor = '#fff';
        document.getElementById('htmlcode').style.backgroundColor = 'lightgrey';
        document.getElementById('htmlcode').style.color = 'black';
        document.getElementById('csscode').style.backgroundColor = 'lightgrey';
        document.getElementById('htmlcode').style.color = 'black';
        document.getElementById('jscode').style.backgroundColor = 'lightgrey';
        document.getElementById('htmlcode').style.color = 'black';
        document.getElementById('bodycol').style.backgroundColor = '#fff';
    }
    if(!val){
        document.getElementById('output').contentWindow.document.body.style.color='white';
        document.getElementById('nav').style.backgroundColor = '#222';
        document.getElementById('navval').style.color = '#fff';
        document.getElementById('label').style.color = '#fff';
        document.getElementById('label1').style.color = '#fff';
        document.getElementById('output').style.backgroundColor = '#222';
        document.getElementById('titl1').style.color = '#fff';
        document.getElementById('titl1').style.border = 'none';
        document.getElementById('titl2').style.color = '#fff';
        document.getElementById('titl2').style.border = 'none';
        document.getElementById('titl3').style.color = '#fff';
        document.getElementById('titl3').style.border = 'none';
        document.getElementById('are1').style.backgroundColor = '#222';
        document.getElementById('are1').style.height = '27.4%';
        document.getElementById('are2').style.backgroundColor = '#222';
        document.getElementById('are2').style.height = '27.4%';
        document.getElementById('are3').style.backgroundColor = '#222';
        document.getElementById('are3').style.height = '27.4%';
        document.getElementById('titl1').style.backgroundColor = '#111';
        document.getElementById('titl2').style.backgroundColor = '#111';
        document.getElementById('titl3').style.backgroundColor = '#111';
        document.getElementById('htmlcode').style.backgroundColor = '#222';
        document.getElementById('htmlcode').style.color = '#fff';
        document.getElementById('csscode').style.backgroundColor = '#222';
        document.getElementById('htmlcode').style.color = '#fff';
        document.getElementById('jscode').style.backgroundColor = '#222';
        document.getElementById('htmlcode').style.color = '#fff';
        document.getElementById('bodycol').style.backgroundColor = '#666';
    }
    
})
// if(check.checked){
//     document.getElementsByClassName('navbar').style.background = '#fff';
// }