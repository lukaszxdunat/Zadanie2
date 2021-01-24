// Funckja umozliwiajca wyszukiwanie globalne
import React from 'react'

export const GlobalFilterComp = ({filter, setFilter}) => {
    return (
     <span>
         Szukaj: {' '}
         <input value={filter || ''}
         onChange={e=> setFilter(e.target.value)}/>
     </span>
    )
}
export default GlobalFilterComp;