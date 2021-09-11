document.getElementById("n1").addEventListener("click", function(){
    n1 = document.getElementById("n2").value
    var n2 = parseInt(n1) + parseInt(1)
    n1 = document.getElementById("n2").value = n2
    document.getElementById("escreve").innerHTML = n2
})
document.getElementById("n3").addEventListener("click", function(){
    document.getElementById("caixa").style.display="flex"
    n1 = document.getElementById("n2").value
    document.getElementById("escreva2").innerHTML = n1
    document.getElementById("n1").style.display="none"
    document.getElementById("n11").style.display="block"
})
document.getElementById("close").addEventListener("click", function(){
    document.getElementById("caixa").style.display="none"
    document.getElementById("n11").style.display="none"
    document.getElementById("n1").style.display="block"
})
document.getElementById("n4").addEventListener("click", function(){
    n1 = document.getElementById("n2").value = 0
    document.getElementById("escreve").innerHTML = 0
})
var output = 0
document.getElementById("file").addEventListener("change", function(event){
    output = URL.createObjectURL(event.target.files[0]);
    document.getElementById("img").style.backgroundImage="url("+ output+")"
})
var m1 = 0
var n1 = 0
document.getElementById("btnu").addEventListener("click", function(){
    document.getElementById("caixa").style.display="none"
    m1 = document.getElementById("n2").value
    var n2 = 0
    var n5 = 0
    n2 = document.getElementById("m1").value
    n5 = document.getElementById("m2").value
    var n1 = document.getElementById("pont")
    var box = document.createElement("div")
    box.setAttribute("class", "box all21")
    var sec = document.createElement("section")
    var sec2 = document.createElement("section")
    var div = document.createElement("img")
    var h1 = document.createElement("h1")
    var h11 = document.createElement("h1")
    var h12 = document.createElement("h1")
    var p = document.createElement("p")
    var a = document.createElement("a")
    var input = document.createElement("input")
    sec.setAttribute("class", "j1")
    sec2.setAttribute("class", "j2")
    div.setAttribute("class", "img img1")
    div.setAttribute("src", output)
    h1.setAttribute("class" , "nome")
    h11.setAttribute("class" , "nome nome1")
    h12.setAttribute("class" , "nome nome2")
    h12.setAttribute("id" , "all")
    h12.addEventListener("click", function(){
        var n32 = parseInt(n0) + parseInt(1) 
        var k1 = "o"+n32
        var n1 = document.getElementById(k1).remove()
        var n33 = n0 - 1 + 1
        n0 = document.getElementById("n0").value = n33
        var j1 = 0
        j1 = document.querySelectorAll(".all21").length
        document.getElementById("ko1").innerHTML = j1 + " Rank"
        if(j1 <= "1"){
            document.getElementById("ko1").innerHTML = j1 + " Rank"
            document.getElementById("mais1").innerHTML = "Your rank"
        }
        if(j1 >= 2){
            document.getElementById("ko1").innerHTML = j1 + " Ranks"
            document.getElementById("mais1").innerHTML = "Your ranks"
        }
    })
    h12.innerHTML ="X"
    p.setAttribute("style" , "color: white; margin-bottom:6px;")
    a.setAttribute("href", n5)
    input.setAttribute("type","number")
    var be = -m1
    var n0 = 0
    n0 = document.getElementById("n0").value
    var n31 = parseInt(n0) + parseInt(1) 
    document.getElementById("n0").value = n31
    box.setAttribute("style" ,"order:"+be+";")
    a.setAttribute("target" , "_blank")
    a.setAttribute("class", "a")
    a.innerHTML = n5
    h1.innerHTML = n2
    h11.innerHTML = "O"+n31
    input.style.display="none"
    input.setAttribute("value",n31)
    p.innerHTML = "Clicks: " + m1
    n1.appendChild(box)
    box.setAttribute("id","o"+n31)
    box.appendChild(sec)
    box.appendChild(sec2)
    sec.appendChild(div)
    sec.appendChild(h1)
    sec.appendChild(h11)
    sec.appendChild(h12)
    sec.appendChild(input)
    sec2.appendChild(p)
    sec2.appendChild(a)
    document.getElementById("n11").style.display="none"
    document.getElementById("n1").style.display="block"
    if (n2 ==""){
        h1.innerHTML = "Anonymous"
    }
    if (n5 ==""){
        a.setAttribute("href","https://www.youtube.com/channel/UCLu6cjJleT7yAXoz3zme6Vw")
        a.innerHTML = "Print / Video"
    }
    if(n2 != ""){
        document.getElementById("m1").value = ""
    }
    if(n5 !=""){
        document.getElementById("m2").value = ""
    }
    if (output == ""){
        div.setAttribute("src" , "img/n3.png")
    }
    if (output != ""){
        document.getElementById("file").value =""
        var nj1 =document.getElementById("img")
        nj1.style.backgroundImage="url("+"nada"+")"
        output = 0
    }
    var j1 = 0
    j1 = document.querySelectorAll(".all21").length
    document.getElementById("ko1").innerHTML = j1 + " Rank"
    if(j1 <= "1"){
        document.getElementById("ko1").innerHTML = j1 + " Rank"
        document.getElementById("mais1").innerHTML = "Your rank"
    }
    if(j1 >= 2){
        document.getElementById("ko1").innerHTML = j1 + " Ranks"
        document.getElementById("mais1").innerHTML = "Your ranks"
    }
})
document.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        const n2 = document.querySelectorAll(".all21")
        n2.forEach(element => {
            element.remove()
            var j1 = 0
            j1 = document.querySelectorAll(".all21").length
            document.getElementById("ko1").innerHTML = j1 + " Rank"
            if(j1 <= "1"){
                document.getElementById("ko1").innerHTML = j1 + " Rank"
                document.getElementById("mais1").innerHTML = "Your rank"
            }
            if(j1 >= 2){
                document.getElementById("ko1").innerHTML = j1 + " Ranks"
                document.getElementById("mais1").innerHTML = "Your ranks"
            }
        });
    }
})
document.addEventListener("scroll",function(event){
    var y = window.pageYOffset;
    if(y >= 303){
        document.getElementById("back").style.visibility="visible"
        document.getElementById("back").style.opacity="1"
        document.getElementById("back").style.bottom="0"
    }
    else{
        document.getElementById("back").style.visibility="hidden"
        document.getElementById("back").style.opacity="0"
        document.getElementById("back").style.bottom="-1000px"
    }
})
document.getElementById("back").addEventListener("click",function(){
    document.documentElement.scrollTop = 0
})