let yellow = "#ffd500";
let gray = "rgb(204, 204, 204)";
let active;

function toggleColor(colors, color){
    if(color == colors[0])
        return colors[1];
    else
        return colors[0];
}

function mouseover(curr){
    $(curr).css("fill", toggleColor([gray, yellow], $(curr).css("fill")));
}

function changeColor(curr, color){
    $(curr).css("fill", color);
    $(curr).on("mouseleave", function (){
        $(curr).css("fill", color);
    })
}

$(()=>{
    let path = "#pol-map g path";
    let regions = true;
    $("#regions").css("background-color", yellow);

    $("#regions, #townships").on("click", function(){
        for(let town of $(path))
            changeColor(town, gray);
        $("#regions, #townships").css("background-color", "white");
        $(this).css("background-color", yellow);
        if($(this).attr("id") == "regions") regions = true;
        else regions = false;
        console.log(regions);
    })



    $(path).on("mouseenter mouseleave", function(){
        if(regions && this.parentElement != active){
            for(let town of $(this.parentElement.children)){
                if($(town).attr("fill") != yellow)
                    mouseover(town);
            }

        }
        else
            mouseover(this);
    })

    $(path).on("click", function (){
        for(let town of $(path)){
            changeColor(town, gray);
        }
        if(regions){
            active = this.parentElement;
            for(let town of $(this.parentElement.children)){
                changeColor(town, yellow);
            }
            console.log($(active).attr("id"));
        }else{
            changeColor(this, yellow);
            console.log($(this).attr("name"));
        }

    })

    $("ellipse").on("click", function(){
        $("#city-info").fadeOut("fast", function(){
            document.getElementById("city-info").innerText = $(this).attr("info");
            $("#city-info").fadeIn("fast", function(){
                document.getElementById("city").innerText = $(this).attr("name");
            });
        });
    })
})