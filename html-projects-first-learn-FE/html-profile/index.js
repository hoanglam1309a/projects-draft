function color(colorNew){
    var valueColorOld= document.getElementById("text").style.color;
    var valueColorNew=colorNew.style.backgroundColor;
    document.getElementById("text").style.color=valueColorNew;
    document.getElementById("sub_wel").style.color=valueColorNew;
    document.getElementById("subject").style.color=valueColorNew;
    document.getElementById("sub_chess").style.color=valueColorNew;
    document.getElementById("sub_country").style.color=valueColorNew;
    document.getElementById("sub_school").style.color=valueColorNew;
}