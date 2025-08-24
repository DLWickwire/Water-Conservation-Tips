onEvent("esButton", "click", function () {
    setText("text", "En lugar de comprar botellas de agua desechables, usa una botella rellenable. Las botellas de agua de un solo uso llenan los vertederos y retienen agua valiosa.");
});

onEvent("enButton", "click", function () {
    setText("text", "Instead of buying disposable water bottles, use a refillable bottle. One use water bottles fill our landfills and trap valuable water.");
});

onEvent("plasticBottle", "click", function () {
    document.getElementById("plasticBottle").src = "plastic-bottle-no.png";
    console.log(document.getElementById("plasticBottle"));
    console.log("click");
});

onEvent("glassBottle", "click", function () {
    document.getElementById("glassBottle").style.bottom = "75px"
    document.getElementById("faucet").style.bottom = "175px"
    console.log("click")
});
document.getElementById("faucet").addEventListener("click",function(){

})

