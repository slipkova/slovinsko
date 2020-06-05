$(()=>{
    let cents = ["6.-14.", "16.", "17.", "18.", "19.", "20."];
    let centu = document.getElementById("centu");
    let yeye = document.getElementById("years");
    let info = document.getElementById("info");
    let his = document.getElementById("main-info");

    //vytvori div pro kazde stoleti
    for(let cent of cents){
        centu.innerHTML += "<div class='col-2'>" + cent + " století</div>";
    }

    //vypise uvodni text
    his.innerText = "Slovinsko se nachází na území několika menších historických zemí, jeho jádrem je někdejší Kraňsko. Po zániku Rakousko-Uherska " +
        "se jihoslovanské země postupně zformovaly v jugoslávské království. Za druhé světové války bylo území Slovinska rozděleno mezi Itálii, Německo " +
        "a Uhersko. V listopadu 1943 se Antifašistická rada národního osvobození Jugoslávie usnesla o obnovení Jugoslávie na federálním základě. Jednou z " +
        "federálních jednotek se mělo stát i Slovinsko. Za datum vzniku Slovinské republiky je považován 19. únor 1944, kdy byl v Črnomelju Slovinský národněosvobozenecký " +
        "výbor přeměněn v Slovinskou národněosvobozeneckou radu, v zásadě první slovinský parlament.\n" +
        "\n" +
        "Nezávislost na Jugoslávii vyhlásilo Slovinsko 25. června 1991. Na základě Brionské deklarace byla účinnost aktu vyhlášení nezávislosti na tři měsíce pozastavena. 2. října 1991" +
        " potvrdilo společné zasedání všech komor Skupščiny úmysl nabýt nezávislost okamžitě, jakmile uplyne tříměsíční moratorium smluvené Brionskou deklarací. Moratorium vypršelo 8. října 1991, " +
        "kdy Slovinsko definitivně získalo svou nezávislost na Jugoslávii.";

    //ulozi do pole divy se staletimi
    let centBtns = Array.from(centu.children);
    console.log(centBtns);

    let yeyeBtns;
    for(let btn of centBtns) {
        //po kliknuti na div se stoletim
        btn.addEventListener('click', function () {
            //pozadi divu se staletimi se zmeni na bile, pozadi divu, ktery byl vybran, se zmeni na zlute
            for (let color of centBtns) {
                $(color).css("background-color", "white");
            }
            $(btn).css("background-color", "#ffd500");

            his.innerText = "";
            $(info).fadeOut("fast", () => {

                //vypise divy s roky
                $(yeye).slideUp("slow", () => {
                    yeye.innerHTML = "";
                    for (let year of infoCenturies[centBtns.indexOf(btn)]) {
                        yeye.innerHTML += "<div>" + year.title + "</div>";
                    }
                    $(yeye.firstChild).css("background-color", "#003752");
                    $(yeye.firstChild).css("color", "white");

                    yeyeBtns = Array.from(yeye.children);
                    $(yeye).slideDown("slow", () => {
                        info.innerHTML = "<div>" + infoCenturies[centBtns.indexOf(btn)][0].text + "</div>";
                        $(info).fadeIn("fast");
                        //ulozi divy s roky do pole
                        yeyeBtns = Array.from(yeye.children);

                        for (let yeyeBtn of yeyeBtns) {
                            //po kliknuti na div s rokem
                            yeyeBtn.addEventListener('click', () => {
                                //zmizi predtim zobrazeny text
                                for(let color of yeyeBtns){
                                    $(color).css("background-color", "#eee");
                                    $(color).css("color", "black");
                                }
                                $(yeyeBtn).css("background-color", "#003752");
                                $(yeyeBtn).css("color", "white");

                                console.log(yeyeBtn);
                                $(info).fadeOut("fast", () => {
                                    //zobrazi se novy text se spravnym odsazenim shora
                                    info.innerHTML = "<div style='margin-top: " + yeyeBtns.indexOf(yeyeBtn) * 45 + "px;'>" + infoCenturies[centBtns.indexOf(btn)][yeyeBtns.indexOf(yeyeBtn)].text + "</div>";
                                    $(info).fadeIn("fast");
                                });
                            });
                        }
                    })
                })
            })
        })
    }
})



