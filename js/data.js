
const infoCenturies = [
    // 6.-14. century
    [
        {
            "title":"Konec 6. století",
            "text":"Slované začínají osídlovat údolí řek Sávy, Drávy a Mury a pod nátlakem Avarů obsazují pobřeží Černého moře, Podunají, Jadranské pobřeží a okolí Balatonu."
        },
        {
            "title":"7. století",
            "text":"Kmeny západních Slovanů vytvářejí útvar spolu se slovanským vévodstvím Karantánským s centrem v současných rakouských Korutanech (Gosposvetsko polje)."
        },
        {
            "title":"745",
            "text":"Karantánie se stává součástí Franské říše. Slované jsou pokřtěni a pozvolna ztrácejí svou nezávislost."
        },
        {
            "title":"869-874",
            "text":"Kníže Kocel zakládá nezávislý stát Slovinců v Dolní Panonii. Má však jen krátkého trvání."
        },
        {
            "title":"9. století",
            "text":"Jak roste vliv křesťanství, jazyk Slovinců je více a více užíván pro účely náboženské. Frízinské památky, nejstarší dochovaný záznam slovinštiny, pocházejí právě z tohoto období."
        },
        {
            "title":"14. století",
            "text":"Habsburská monarchie ovládá všechna území Slovinců."
        }
    ],
    // 16. century
    [
        {
            "title":"1523",
            "text":"Hlavními nositeli církevní reformy byli vedle zapálených duchovních především studenti (mezi rokem 1517 a 1600 dvě třetiny studentů studovaly na německých univerzitách) a přistěhovalci (horníci, vojáci a obchodníci)."
        },
        {
            "title":"1551",
            "text":"Protestantský kazatel Primož Trubar vydává Katekizem, první knihu napsanou slovinsky."
        },
        {
            "title":"1573",
            "text":"Druhé slovinské povstání (Kraňsko, Štýrsko a Korutany), za vlády Maxmiliána II. kromě sociálních požadavků se objevují i požadavky politické, povstání bylo potlačeno šlechtou. Společenské problémy tehdejší doby se projevují i ve sporech mezi katolíky a protestanty."
        },
        {
            "title":"1584",
            "text":"Jurij Dalmatin překládá Bibli do slovinštiny. Adam Bohorič píše slovinskou gramatiku."
        }
    ],
    // 17. century
    [
        {
            "title":"1628",
            "text":"Současně s vrcholením protestantismu nastupuje období katolické protireformace. Ústřední postavou je nový císař Ferdinand II. Hlavní oporou mu je jezuitský řád (1586, Univerzita ve Štýrském Hradci) a vedení matričních knih, které zaručovaly lepší přehled o věřících. V čele rekatolizace ve Slovinsku stáli biskupové Martin Brenner a Tomaž Hren. Myšlenky protestantismu jsou úspěšně vymýceny nejprve ve městech. Do roku 1628 se ke katolické církvi vrací i většina šlechtického stavu. Ostatní jsou přinuceni k emigraci."
        },
        {
            "title":"1657",
            "text":"Pro kulturní vývoj slovinského národa nelze opominout velký význam Trubarova rozhodnutí pro užívání latinky pro samostatný slovinský jazyk, osamostatněný od chorvatštiny. Primož Trubar jako první požaduje, aby se ve školách vyučovala slovinština a slovinský katechismus."
        },
        {
            "title":"1693",
            "text":"V Lublani je založena Academia Operosorum Labacensium."
        }
    ],
    // 18. century
    [
        {
            "title":"1701",
            "text":"V Lublani je zřízena Academia Philharmonicorum Labacensis (předchůdce dnešní filharmonie)."
        },
        {
            "title":"1740",
            "text":"Dalším význačným obdobím pro dějiny slovinských zemí je období vlády Marie Terezie a posléze Josefa II., známé jako období reforem (reforma státní správy, daňového systému, vojska, patent o náboženské toleranci a zrušení nevolnictví)."
        },
        {
            "title":"1781",
            "text":"Omezuje pravomoce šlechtických stavů a do státního aparátu se dostává větší počet představitelů nižší šlechty a měšťanstva. V neposlední řadě spojuje jednotlivé územní celky do větších územních jednotek."
        }
    ],
    // 19. century
    [
        {
            "title":"1848",
            "text":"Slovinsští intelektuálové přicházejí na pražském Slovanském sjezdu s prvním politickým programem jednotného Slovinska (Slovenija zedinena)."
        },
        {
            "title":"1860",
            "text":"Začínají se formovat první politické platformy, z nichž zanedlouho vznikají politické strany."
        },
        {
            "title":"1813",
            "text":"Ač mají krátkého trvání, jde o jeden z mezníků slovinské historie. Napoleon Bonaparte přináší myšlenky nového společenského uspořádání (heslo: volnost, rovnost, bratrství) a zavádí je i na obsazeném území Habsburské monarchie."
        },
        {
            "title":"1867",
            "text":"Po překonání rozporů se v roce 1867 sdružují pod společným politickým programem, který slaví ve volbách do zemského sněmu velký úspěch. Dále vzniká řada různých kulturních organizací, sportovních spolků (Slovenska matica, Južni Sokol – po vzoru českého Sokola), rozvíjí se čítírenské hnutí (základna slovinské inteligence)."
        },

    ],
    // 20. cetury
    [
        {
            "title":"1918",
            "text":"V říjnu je vyhlášena nezávislost Slovinska na území bývalé rakouské monarchie a v prosinci vzniká Království Srbů, Chorvatů a Slovinců (srbská dynastie Karadjordjevičů). Vedvacátých letech značná politická nestabilita (vystřídalo se dobře dvacet vlád). Jugoslávie je od 1920-21 členem Malé dohody spolu s ČSR a Rumunskem. Šlo zde o snahu bybudovat funkční obranný systém ve střední Evropě."
        },
        {
            "title":"1929",
            "text":"Král Alexandr provedl státní převrat, rozzpustil parlamnet a nastolil osobní diktaturu. Název státu se mění na Království Jugoslávie (3.10.)."
        },
        {
            "title":"1934",
            "text":"Ve Francii proveden atentát na Alexandra, za jeho nedospělého syna Petra II. vládnou regenti."
        },
        {
            "title":"1941",
            "text":"6.4. ráno začíná bez vypovězení války náletem naBělehrad a některá další města německý útok na Jugoslávii. 10.4. ustašovci vyhlásili Nezávislý stát Chorvatsko (probíhá vysidlování Srbů, jejich násilná rekatolizace atd.). Jedinou silou schopnou nabídnout program celojugoslávský a nenacionalistický byli nakonec komunisté Josipa Broze. 22.6.1941 vyzývají k celonárodnímu povstání. Oficiální začátek povstání 7.7. 1941, vrchním velitelem sil národního osvobození byl Josip Broz Tito. Následují represivní akce Němců - padlo jim za oběť na 100 000 lidí."
        },
        {
            "title":"1945",
            "text":"Proces znárodnění začíná zákonem o zemědělské reformě v srpnu, který určoval maximální plochu, kterou lze vlastnit (20-30 ha obdělavatelné půdy). Soukromý sektor se dostává pod kontrolu státu. Až na výjimky (především Kosovo) je řadu let mezi nárosdnostmi klid."
        },
        {
            "title":"1948",
            "text":"Titova roztržka se Stalinem. V Jugoslávii probíhají čistky nespolehlivých kádrů. Zřízeny jsou koncentrační tábory pro politické vězně (Goli Otok)."
        },
        {
            "title":"1961",
            "text":"Založení Hnutí nezúčastněných, politického seskupení států stojících mimo úsřední politické bloky. Získalo Jugoslávii nemalou mezinárodní prestiž."
        },
        {
            "title":"1963",
            "text":"Nová ústava, jíž se mění název státu na Socialistickou federativní republiku Jugoslávie (SFRJ)."
        },
        {
            "title":"1980",
            "text":"4. května umírá v lublaňské nemocnici Josip Broz Tito."
        },
        {
            "title":"1988",
            "text":"Vojenský soud se třemi novináři (Janez Janša aj.) z časopisu Mladina vede k nespokojenosti a volání po nezávislosti Slovinska."
        },
    ],   
]

const infoDates = [
    // year 1990
    [
        {
            "date":"20. ledna",
            "text":"Slovinská delegace se naposledy zúčastňuje sjezdu Svazu komunistů Jugoslávie."
        },
        {
            "date":"23. prosince",
            "text":"V referendu se 88% hlasů Slovinci rozhodli pro nezávislost své země."
        }
    ],
    // year 1991
    [
        {
            "date":"25. června",
            "text":"Oficiální vyhlášení nezávislosti Slovinska."
        },
        {
            "date":"27. června",
            "text":"Reakce jugoslávské armády- obsazování strategických míst."
        },
        {
            "date":"7. července",
            "text":"Podpisem Brionské dohody končí jugoslávská armáda veškeré akce proti Slovinsku."
        },
        {
            "date":"25. října",
            "text":"Poslední jugoslávský voják opouští území Slovinska."
        },
        {
            "date":"23. prosince",
            "text":"Přijetí slovinské ústavy."
        }
    ],
    // year 1992
    [
        {
            "date":"15. ledna",
            "text":"Evropská unie oficiálně uznává Slovinsko."
        },
        {
            "date":"22. května",
            "text":"Slovinsko se stává řádným členem OSN."
        },
        {
            "date":"6. prosince",
            "text":"První svobodné volby. Dnešní slovinská politická scéna se vrací k tradičnímu rozvržení z doby mezi válkami. Významnou roli hraje jednak tradiční křesťanská demokracie (SLS), dále liberální strany (LDS). Dosud je silný podíl sociálních a postkomunistických stran. Odkazy na internetové stránky nejvýznamnějších stran uvádím v oddílu Linky. Prezidentem zůstává stále Milan Kučan, premiérem Janez Drnovšek."
        }
    ],
]