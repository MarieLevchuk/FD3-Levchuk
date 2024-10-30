import { useEffect, useState } from 'react';
import Controls from '../Controls/Controls';
import List from '../List/List';
import './Filter.css';

export default function Filter(props){

    const [words, setWords] = useState(props.words);
    const [sortAZ, setSortAZ] = useState(false);
    const [searchString, setSearchString] = useState('');

    useEffect(()=>{
        filter();
    }, [sortAZ, searchString]);

    const filter = () => {
        let wordsCopy = [...props.words]; 

        if(searchString){ 
            wordsCopy = wordsCopy.filter(word => word.includes(searchString));
        }

        if(sortAZ){
            wordsCopy.sort();
        }

        setWords(wordsCopy);
    }

    const sort = (sortValue) => {
        setSortAZ(sortValue); 
    }

    const search = (searchValue) => {
        setSearchString(searchValue);
    }

    const reset = () => {
        setSortAZ(false);
        setSearchString('');
    }

    return(
        <div className="Filter">
            <Controls 
                searchString={searchString}
                sortAZ={sortAZ}
                cbSort={sort}
                cbSearch={search}
                cbReset={reset}
            />
            <List words={words}/>
        </div>
    );
}