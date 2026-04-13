ReactDOM.createRoot(document.querySelector('#root')).render(<App></App>);

/*
import cards from './151'

function PokemonCard ({id,name}){
    return(

        <div className= 'card'>
        <img src={cards[id]} alt={name} ></img>
        <p>{name}</p>
        </div>
    )
}
*/

function App(){

const cards = [
  { id: "id_1",   title: "Bulbasaur",   img: "./151/SV3pt5_EN_1.png" },
  { id: "id_2",   title: "Ivysaur",     img: "./151/SV3pt5_EN_2.png" },
  { id: "id_3",   title: "Venusaur",    img: "./151/SV3pt5_EN_3.png" },
  { id: "id_4",   title: "Charmander",  img: "./151/SV3pt5_EN_4.png" },
  { id: "id_5",   title: "Charmeleon",  img: "./151/SV3pt5_EN_5.png" },
  { id: "id_6",   title: "Charizard",   img: "./151/SV3pt5_EN_6.png" },
  { id: "id_7",   title: "Squirtle",    img: "./151/SV3pt5_EN_7.png" },
  { id: "id_8",   title: "Wartortle",   img: "./151/SV3pt5_EN_8.png" },
  { id: "id_9",   title: "Blastoise",   img: "./151/SV3pt5_EN_9.png" },
  { id: "id_10",  title: "Caterpie",    img: "./151/SV3pt5_EN_10.png" },
  { id: "id_11",  title: "Metapod",     img: "./151/SV3pt5_EN_11.png" },
  { id: "id_12",  title: "Butterfree",  img: "./151/SV3pt5_EN_12.png" },
  { id: "id_13",  title: "Weedle",      img: "./151/SV3pt5_EN_13.png" },
  { id: "id_14",  title: "Kakuna",      img: "./151/SV3pt5_EN_14.png" },
  { id: "id_15",  title: "Beedrill",    img: "./151/SV3pt5_EN_15.png" },
  { id: "id_16",  title: "Pidgey",      img: "./151/SV3pt5_EN_16.png" },
  { id: "id_17",  title: "Pidgeotto",   img: "./151/SV3pt5_EN_17.png" },
  { id: "id_18",  title: "Pidgeot",     img: "./151/SV3pt5_EN_18.png" },
  { id: "id_19",  title: "Rattata",     img: "./151/SV3pt5_EN_19.png" },
  { id: "id_20",  title: "Raticate",    img: "./151/SV3pt5_EN_20.png" },
  { id: "id_21",  title: "Spearow",     img: "./151/SV3pt5_EN_21.png" },
  { id: "id_22",  title: "Fearow",      img: "./151/SV3pt5_EN_22.png" },
  { id: "id_23",  title: "Ekans",       img: "./151/SV3pt5_EN_23.png" },
  { id: "id_24",  title: "Arbok",       img: "./151/SV3pt5_EN_24.png" },
  { id: "id_25",  title: "Pikachu",     img: "./151/SV3pt5_EN_25.png" },
  { id: "id_26",  title: "Raichu",      img: "./151/SV3pt5_EN_26.png" },
  { id: "id_27",  title: "Sandshrew",   img: "./151/SV3pt5_EN_27.png" },
  { id: "id_28",  title: "Sandslash",   img: "./151/SV3pt5_EN_28.png" },
  { id: "id_29",  title: "Nidoran♀",   img: "./151/SV3pt5_EN_29.png" },
  { id: "id_30",  title: "Nidorina",    img: "./151/SV3pt5_EN_30.png" },
  { id: "id_31",  title: "Nidoqueen",   img: "./151/SV3pt5_EN_31.png" },
  { id: "id_32",  title: "Nidoran♂",   img: "./151/SV3pt5_EN_32.png" },
  { id: "id_33",  title: "Nidorino",    img: "./151/SV3pt5_EN_33.png" },
  { id: "id_34",  title: "Nidoking",    img: "./151/SV3pt5_EN_34.png" },
  { id: "id_35",  title: "Clefairy",    img: "./151/SV3pt5_EN_35.png" },
  { id: "id_36",  title: "Clefable",    img: "./151/SV3pt5_EN_36.png" },
  { id: "id_37",  title: "Vulpix",      img: "./151/SV3pt5_EN_37.png" },
  { id: "id_38",  title: "Ninetales",   img: "./151/SV3pt5_EN_38.png" },
  { id: "id_39",  title: "Jigglypuff",  img: "./151/SV3pt5_EN_39.png" },
  { id: "id_40",  title: "Wigglytuff",  img: "./151/SV3pt5_EN_40.png" },
  { id: "id_41",  title: "Zubat",       img: "./151/SV3pt5_EN_41.png" },
  { id: "id_42",  title: "Golbat",      img: "./151/SV3pt5_EN_42.png" },
  { id: "id_43",  title: "Oddish",      img: "./151/SV3pt5_EN_43.png" },
  { id: "id_44",  title: "Gloom",       img: "./151/SV3pt5_EN_44.png" },
  { id: "id_45",  title: "Vileplume",   img: "./151/SV3pt5_EN_45.png" },
  { id: "id_46",  title: "Paras",       img: "./151/SV3pt5_EN_46.png" },
  { id: "id_47",  title: "Parasect",    img: "./151/SV3pt5_EN_47.png" },
  { id: "id_48",  title: "Venonat",     img: "./151/SV3pt5_EN_48.png" },
  { id: "id_49",  title: "Venomoth",    img: "./151/SV3pt5_EN_49.png" },
  { id: "id_50",  title: "Diglett",     img: "./151/SV3pt5_EN_50.png" },
  { id: "id_51",  title: "Dugtrio",     img: "./151/SV3pt5_EN_51.png" },
  { id: "id_52",  title: "Meowth",      img: "./151/SV3pt5_EN_52.png" },
  { id: "id_53",  title: "Persian",     img: "./151/SV3pt5_EN_53.png" },
  { id: "id_54",  title: "Psyduck",     img: "./151/SV3pt5_EN_54.png" },
  { id: "id_55",  title: "Golduck",     img: "./151/SV3pt5_EN_55.png" },
  { id: "id_56",  title: "Mankey",      img: "./151/SV3pt5_EN_56.png" },
  { id: "id_57",  title: "Primeape",    img: "./151/SV3pt5_EN_57.png" },
  { id: "id_58",  title: "Growlithe",   img: "./151/SV3pt5_EN_58.png" },
  { id: "id_59",  title: "Arcanine",    img: "./151/SV3pt5_EN_59.png" },
  { id: "id_60",  title: "Poliwag",     img: "./151/SV3pt5_EN_60.png" },
  { id: "id_61",  title: "Poliwhirl",   img: "./151/SV3pt5_EN_61.png" },
  { id: "id_62",  title: "Poliwrath",   img: "./151/SV3pt5_EN_62.png" },
  { id: "id_63",  title: "Abra",        img: "./151/SV3pt5_EN_63.png" },
  { id: "id_64",  title: "Kadabra",     img: "./151/SV3pt5_EN_64.png" },
  { id: "id_65",  title: "Alakazam",    img: "./151/SV3pt5_EN_65.png" },
  { id: "id_66",  title: "Machop",      img: "./151/SV3pt5_EN_66.png" },
  { id: "id_67",  title: "Machoke",     img: "./151/SV3pt5_EN_67.png" },
  { id: "id_68",  title: "Machamp",     img: "./151/SV3pt5_EN_68.png" },
  { id: "id_69",  title: "Bellsprout",  img: "./151/SV3pt5_EN_69.png" },
  { id: "id_70",  title: "Weepinbell",  img: "./151/SV3pt5_EN_70.png" },
  { id: "id_71",  title: "Victreebel",  img: "./151/SV3pt5_EN_71.png" },
  { id: "id_72",  title: "Tentacool",   img: "./151/SV3pt5_EN_72.png" },
  { id: "id_73",  title: "Tentacruel",  img: "./151/SV3pt5_EN_73.png" },
  { id: "id_74",  title: "Geodude",     img: "./151/SV3pt5_EN_74.png" },
  { id: "id_75",  title: "Graveler",    img: "./151/SV3pt5_EN_75.png" },
  { id: "id_76",  title: "Golem",       img: "./151/SV3pt5_EN_76.png" },
  { id: "id_77",  title: "Ponyta",      img: "./151/SV3pt5_EN_77.png" },
  { id: "id_78",  title: "Rapidash",    img: "./151/SV3pt5_EN_78.png" },
  { id: "id_79",  title: "Slowpoke",    img: "./151/SV3pt5_EN_79.png" },
  { id: "id_80",  title: "Slowbro",     img: "./151/SV3pt5_EN_80.png" },
  { id: "id_81",  title: "Magnemite",   img: "./151/SV3pt5_EN_81.png" },
  { id: "id_82",  title: "Magneton",    img: "./151/SV3pt5_EN_82.png" },
  { id: "id_83",  title: "Farfetch'd",  img: "./151/SV3pt5_EN_83.png" },
  { id: "id_84",  title: "Doduo",       img: "./151/SV3pt5_EN_84.png" },
  { id: "id_85",  title: "Dodrio",      img: "./151/SV3pt5_EN_85.png" },
  { id: "id_86",  title: "Seel",        img: "./151/SV3pt5_EN_86.png" },
  { id: "id_87",  title: "Dewgong",     img: "./151/SV3pt5_EN_87.png" },
  { id: "id_88",  title: "Grimer",      img: "./151/SV3pt5_EN_88.png" },
  { id: "id_89",  title: "Muk",         img: "./151/SV3pt5_EN_89.png" },
  { id: "id_90",  title: "Shellder",    img: "./151/SV3pt5_EN_90.png" },
  { id: "id_91",  title: "Cloyster",    img: "./151/SV3pt5_EN_91.png" },
  { id: "id_92",  title: "Gastly",      img: "./151/SV3pt5_EN_92.png" },
  { id: "id_93",  title: "Haunter",     img: "./151/SV3pt5_EN_93.png" },
  { id: "id_94",  title: "Gengar",      img: "./151/SV3pt5_EN_94.png" },
  { id: "id_95",  title: "Onix",        img: "./151/SV3pt5_EN_95.png" },
  { id: "id_96",  title: "Drowzee",     img: "./151/SV3pt5_EN_96.png" },
  { id: "id_97",  title: "Hypno",       img: "./151/SV3pt5_EN_97.png" },
  { id: "id_98",  title: "Krabby",      img: "./151/SV3pt5_EN_98.png" },
  { id: "id_99",  title: "Kingler",     img: "./151/SV3pt5_EN_99.png" },
  { id: "id_100", title: "Voltorb",     img: "./151/SV3pt5_EN_100.png" },
  { id: "id_101", title: "Electrode",   img: "./151/SV3pt5_EN_101.png" },
  { id: "id_102", title: "Exeggcute",   img: "./151/SV3pt5_EN_102.png" },
  { id: "id_103", title: "Exeggutor",   img: "./151/SV3pt5_EN_103.png" },
  { id: "id_104", title: "Cubone",      img: "./151/SV3pt5_EN_104.png" },
  { id: "id_105", title: "Marowak",     img: "./151/SV3pt5_EN_105.png" },
  { id: "id_106", title: "Hitmonlee",   img: "./151/SV3pt5_EN_106.png" },
  { id: "id_107", title: "Hitmonchan",  img: "./151/SV3pt5_EN_107.png" },
  { id: "id_108", title: "Lickitung",   img: "./151/SV3pt5_EN_108.png" },
  { id: "id_109", title: "Koffing",     img: "./151/SV3pt5_EN_109.png" },
  { id: "id_110", title: "Weezing",     img: "./151/SV3pt5_EN_110.png" },
  { id: "id_111", title: "Rhyhorn",     img: "./151/SV3pt5_EN_111.png" },
  { id: "id_112", title: "Rhydon",      img: "./151/SV3pt5_EN_112.png" },
  { id: "id_113", title: "Chansey",     img: "./151/SV3pt5_EN_113.png" },
  { id: "id_114", title: "Tangela",     img: "./151/SV3pt5_EN_114.png" },
  { id: "id_115", title: "Kangaskhan",  img: "./151/SV3pt5_EN_115.png" },
  { id: "id_116", title: "Horsea",      img: "./151/SV3pt5_EN_116.png" },
  { id: "id_117", title: "Seadra",      img: "./151/SV3pt5_EN_117.png" },
  { id: "id_118", title: "Goldeen",     img: "./151/SV3pt5_EN_118.png" },
  { id: "id_119", title: "Seaking",     img: "./151/SV3pt5_EN_119.png" },
  { id: "id_120", title: "Staryu",      img: "./151/SV3pt5_EN_120.png" },
  { id: "id_121", title: "Starmie",     img: "./151/SV3pt5_EN_121.png" },
  { id: "id_122", title: "Mr. Mime",    img: "./151/SV3pt5_EN_122.png" },
  { id: "id_123", title: "Scyther",     img: "./151/SV3pt5_EN_123.png" },
  { id: "id_124", title: "Jynx",        img: "./151/SV3pt5_EN_124.png" },
  { id: "id_125", title: "Electabuzz",  img: "./151/SV3pt5_EN_125.png" },
  { id: "id_126", title: "Magmar",      img: "./151/SV3pt5_EN_126.png" },
  { id: "id_127", title: "Pinsir",      img: "./151/SV3pt5_EN_127.png" },
  { id: "id_128", title: "Tauros",      img: "./151/SV3pt5_EN_128.png" },
  { id: "id_129", title: "Magikarp",    img: "./151/SV3pt5_EN_129.png" },
  { id: "id_130", title: "Gyarados",    img: "./151/SV3pt5_EN_130.png" },
  { id: "id_131", title: "Lapras",      img: "./151/SV3pt5_EN_131.png" },
  { id: "id_132", title: "Ditto",       img: "./151/SV3pt5_EN_132.png" },
  { id: "id_133", title: "Eevee",       img: "./151/SV3pt5_EN_133.png" },
  { id: "id_134", title: "Vaporeon",    img: "./151/SV3pt5_EN_134.png" },
  { id: "id_135", title: "Jolteon",     img: "./151/SV3pt5_EN_135.png" },
  { id: "id_136", title: "Flareon",     img: "./151/SV3pt5_EN_136.png" },
  { id: "id_137", title: "Porygon",     img: "./151/SV3pt5_EN_137.png" },
  { id: "id_138", title: "Omanyte",     img: "./151/SV3pt5_EN_138.png" },
  { id: "id_139", title: "Omastar",     img: "./151/SV3pt5_EN_139.png" },
  { id: "id_140", title: "Kabuto",      img: "./151/SV3pt5_EN_140.png" },
  { id: "id_141", title: "Kabutops",    img: "./151/SV3pt5_EN_141.png" },
  { id: "id_142", title: "Aerodactyl",  img: "./151/SV3pt5_EN_142.png" },
  { id: "id_143", title: "Snorlax",     img: "./151/SV3pt5_EN_143.png" },
  { id: "id_144", title: "Articuno",    img: "./151/SV3pt5_EN_144.png" },
  { id: "id_145", title: "Zapdos",      img: "./151/SV3pt5_EN_145.png" },
  { id: "id_146", title: "Moltres",     img: "./151/SV3pt5_EN_146.png" },
  { id: "id_147", title: "Dratini",     img: "./151/SV3pt5_EN_147.png" },
  { id: "id_148", title: "Dragonair",   img: "./151/SV3pt5_EN_148.png" },
  { id: "id_149", title: "Dragonite",   img: "./151/SV3pt5_EN_149.png" },
  { id: "id_150", title: "Mewtwo",      img: "./151/SV3pt5_EN_150.png" },
  { id: "id_151", title: "Mew",         img: "./151/SV3pt5_EN_151.png" },
];



    return(

        <>
            <Header></Header>
            
            <Main>
                {cards.map(c=> <Div card = {c} key = {c.id}></Div>)}
            </Main>
            
        </>
    

    )



}



function Header(){
    return(

        <header> 
            <h1>
                Pokemon
            </h1>
            <h2>
                1st generation 151 cards
            </h2>

        </header>
    )
}


function Main(props){
    return(
        <main>
            {props.children}

    </main>
    )
    
}

function Div(props){
    return(
        <div>
                <h2>{props.card.title}</h2>
                <div className="imgBox">
                    <img src={props.card.img} alt="" />
                </div>
            
        </div>
    )
}


function Footer(){

    return(
        <footer>
            <div>

            </div>
        </footer>
    )

}


