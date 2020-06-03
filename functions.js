let imgs = document.getElementsByName("img");
let srcs = ["img/testo.jpg", "img/done.jpg"];

function toggleImg(src1){
        if(src1 == srcs[0])
            return srcs[1];
        else
            return srcs[0];
}

$(function(){
    $(".hidden").toggle();
    $(".hidden-btn").on("click", ()=>{
        $("#the-special-one").attr("src", "img/recept.jpg");
        $("#the-second-specioal-one").attr("src", "img/dot.jpg");
        $(".hidden").toggle();
        $(".main").toggle();
        $("div.nav").css("background-color","purple");
        let i = 0;
        setInterval(()=>{
            for(let element of document.getElementsByClassName("blik")){

                    element.classList.toggle("haha");
            }
            if(i > 10){
                for(let img of imgs){
                    $(img).attr("src", toggleImg($(img).attr("src")));
                }
                i = 0;
            }
            i++;

        }, 50);




    })
})