import { SearchBar } from "../sreens/SearchBar"
import { ResultsPokemon } from "../sreens/ResultsPokemon"

export const PokeSearch = () => {
    return(
        <div className='SearchAndResults'>
            <SearchBar/>
            <ResultsPokemon/>
        </div>
    )
}