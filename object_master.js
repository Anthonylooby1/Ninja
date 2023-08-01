const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
    // const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
    // console.log(bListPkmn)

    // const pkmnIds = pokémon.map( p => p.id )
    // console.log(pkmnIds)

    // const pkdiv = pokémon.filter((eachpoke)=> {
    //     return eachpoke.id % 3 == 0
    // })
    // console.log(pkdiv)

    // const pkType = pokémon.filter((eachpoke)=> {
    //     return eachpoke.types[0] == "fire" || eachpoke.types[1] == "fire"
    // })
    // console.log(pkType)

    // const moreType = pokémon.filter ((eachpoke) => {
    //     return eachpoke.types.length > 1
    // })
    // console.log(moreType)

    // const namePoke = pokémon.map((eachpoke)=> {
    //     return eachpoke.name
    // })
    // console.table(namePoke)

    // const pokeName = pokémon
    //                         .filter((eachpoke)=> eachpoke.id > 99)
    //                         .map((eachpoke)=>eachpoke.name);
    // console.log(pokeName)
    
    // const pokePoison = pokémon
    //                         .filter((eachpoke)=> eachpoke.types == "poison")
    //                         .map((eachpoke)=>eachpoke.name);
    // console.table(pokePoison)

    // const pokeFly = pokémon
    //                         .filter((eachpoke)=>eachpoke.types[1] == "flying")
    //                         .map((eachpoke)=>eachpoke.types[0])
    // console.log(pokeFly)  
    
    const pokeNormal = pokémon
                                .filter((eachpoke)=>eachpoke.types[0] == "normal" || eachpoke.types[1] == "normal")
                                .map((eachpoke)=> eachpoke.name).length
                                // num = pokeNormal.length
    console.log(pokeNormal)          
    
    

    //      COLLABORATORS: CHRISTIAN, RICHARD, DAISY, KYE, JOSH
    
    


