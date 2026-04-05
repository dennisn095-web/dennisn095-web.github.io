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

];

    return(

        <>
            <Header></Header>
            
            <Main>
                <Div></Div>
                <Div></Div>
                <Div></Div>
                <Div></Div>
                <Div></Div>
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


function Main(){
    return(
        <main>
        

    </main>
    )
    
}

function Div(){
    return(
        <div>
                
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


