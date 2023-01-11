function run(){
    let htmlcode = document.querySelector(".editor #htmlcode").value;
    let csscode = "<style>"+document.querySelector(".editor #csscode").value+"</style>";
    let jscode = document.querySelector(".editor #jscode").value;
    let output = document.querySelector(".editor #output");
    let output1 = document.querySelector(".editor #output1");
    output.contentDocument.body.innerHTML = htmlcode+csscode;
    output1.contentDocument.body.innerHTML = htmlcode+csscode;
    output.contentWindow.eval(jscode);
    output1.contentWindow.eval(jscode);

}
document.querySelector(".editor #htmlcode").addEventListener("keyup",run);
document.querySelector(".editor #csscode").addEventListener("keyup",run);
document.querySelector(".editor #jscode").addEventListener("keyup",run);


document.getElementById('output').contentWindow.document.body.style.color='white';
document.getElementById('output1').contentWindow.document.body.style.color='white';



let check = document.getElementById('flexSwitchCheckDefault');
console.log(check.value);
check.addEventListener("click", function(){
    let val = document.getElementById('flexSwitchCheckDefault').checked;
    if(val){
        document.getElementById('output').contentWindow.document.body.style.color='black';
        document.getElementById('output1').contentWindow.document.body.style.color='black';
        document.getElementById('nav').style.backgroundColor = '#fff';
        document.getElementById('navval').style.color = 'black';
        document.getElementById('label').style.color = 'black';
        document.getElementById('label1').style.color = 'black';
        document.getElementById('output').style.backgroundColor = 'lightgrey';
        document.getElementById('output1').style.backgroundColor = 'lightgrey';
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
        document.getElementById('csscode').style.color = 'black';
        document.getElementById('jscode').style.backgroundColor = 'lightgrey';
        document.getElementById('jscode').style.color = 'black';
        document.getElementById('bodycol').style.backgroundColor = '#fff';
        document.getElementById('btn1').style.color = '#111';
        document.getElementById('btn2').style.color = '#111';
        document.getElementById('btn1').style.border = '1px solid #111';
        document.getElementById('btn2').style.border = '1px solid #111';
    }
    if(!val){
        document.getElementById('output').contentWindow.document.body.style.color='white';
        document.getElementById('output1').contentWindow.document.body.style.color='white';
        document.getElementById('nav').style.backgroundColor = '#222';
        document.getElementById('navval').style.color = '#fff';
        document.getElementById('label').style.color = '#fff';
        document.getElementById('label1').style.color = '#fff';
        document.getElementById('output').style.backgroundColor = '#222';
        document.getElementById('output1').style.backgroundColor = '#222';
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
        document.getElementById('csscode').style.color = '#fff';
        document.getElementById('jscode').style.backgroundColor = '#222';
        document.getElementById('jscode').style.color = '#fff';
        document.getElementById('bodycol').style.backgroundColor = '#666';
        document.getElementById('btn1').style.color = '#fff';
        document.getElementById('btn2').style.color = '#fff';
        document.getElementById('btn1').style.border = '1px solid #fff';
        document.getElementById('btn2').style.border = '1px solid #fff';
    }

    
})
// if(check.checked){
//     document.getElementsByClassName('navbar').style.background = '#fff';
// }

function button1(){
    let out1 = document.getElementById('output1');
    let out2 = document.getElementById('output');
    out1.style.display = 'block';
    out2.style.display = 'none';
    
}

function button2(){
    let out1 = document.getElementById('output1');
    let out2 = document.getElementById('output');
    out2.style.display = 'block';
    out1.style.display = 'none';
    
}