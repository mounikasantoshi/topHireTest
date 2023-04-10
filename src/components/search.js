import React,{useEffect, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const handleInputChange = (event) => {
    setQuery(event.target.value.toUpperCase());
  };
  useEffect(()=>{
    fetch(`http://www.mocky.io/v2/5ba8efb23100007200c2750c`)
    .then((response) => response.json())
    .then((data) => setResults(data))
    .then(()=>{
      setSearchResults(results.filter((r)=>{
        return r.name.toUpperCase().includes(query)||r.pincode.toUpperCase().includes(query)
       ||r.address.toUpperCase().includes(query)||r.id.toUpperCase().includes(query)||r.items.join('').toUpperCase().includes(query)
      }))
    })},[query])
 
const onClickClose=()=>{
  setQuery('')
}

  return (
    <div className='cardsearch'>
      <div className='searchField'>
     <SearchIcon className='colorblur'/>  
      <input className='inputField' placeholder='search user by name,id,address....' type="text" value={query} onChange={handleInputChange} />
    <CloseIcon onClick={()=>onClickClose()} className='colorblur'/>
    </div>
      <hr/>
      <div className='scroll'>
        {query!==''&&(searchResults.length!==0?searchResults.map((result) => (
          <div key={result.id} className='resultrow'>
            <div className={result.id.toUpperCase().includes(query)?'textHighlet':''}>{result.id}</div>
            <div className={result.name.toUpperCase().includes(query)?'textHighlet':''}>{result.name}</div>
            <div className={result.address.toUpperCase().includes(query)?'textHighlet':''}>{result.address}</div>
            <div className={result.pincode.toUpperCase().includes(query)?'textHighlet':''}>{result.pincode}</div>
            {result.items.map((item,i)=>(<div key={i}className={item.toUpperCase().includes(query)?'textHighlet':''}>{item}</div>))}
            <hr/>
          </div>
        )):<div className='pd'>no user found</div>)}
      </div>
    </div>
  );
}

export default Search
