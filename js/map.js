let yellow = "#ffd500";
let gray = "rgb(204, 204, 204)";
let lightBlue = "#008080";
let darkBlue = "#003752";
let active;

function toggleItems(items, curr){
    if(curr == items[0])
        return items[1];
    else
        return items[0];
}

function mouseover(curr){
    $(curr).css("fill", toggleItems([gray, yellow], $(curr).css("fill")));
}

function changeColor(curr, color){
    $(curr).css("fill", color);
    $(curr).on("mouseleave", function (){
        $(curr).css("fill", color);
    })
}

function changeInfo(element){
    $("#info").fadeOut("fast", function(){
        document.getElementById("info").innerText = $(element).attr("info");
        $("#info").fadeIn("fast", function(){
            document.getElementById("city").innerText = $(element).attr("name");
        });
    });
}

$(()=>{
    let path = "#pol-map g path";
    let regions = true;

    $("#regions").css("background-color", yellow);
    changeColor("ellipse#ljubljana", lightBlue);
    changeInfo("ellipse#ljubljana");
    active = document.getElementById("osrednjeslovenska");
    for(let town of $("#pol-map #osrednjeslovenska *"))
        changeColor(town, yellow);

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
            console.log(this.parentElement);
            console.log(active);
            for(let town of $(this.parentElement.children)){
                if($(town).attr("fill") != yellow)
                    mouseover(town);
            }

        }
        else if(!regions && this.parentElement != active)
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
            console.log($(active));
        }else{
            changeColor(this, yellow);
            console.log($(this).attr("name"));
        }

    })

    $("ellipse").on("mouseenter mouseleave", function(){
        $(this).css("stroke-width", toggleItems(["1.5px", "3px"], $(this).css("stroke-width")));
    })

    $("ellipse").on("click", function(){
        for(let city of $("ellipse")){
            changeColor(city, darkBlue);
        }
        changeColor(this, lightBlue);
        changeInfo(this);
    })
})
