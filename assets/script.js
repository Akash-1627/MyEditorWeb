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
