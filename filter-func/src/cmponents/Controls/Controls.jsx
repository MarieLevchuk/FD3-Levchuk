import './Controls.css';

export default function Controls(props){
    const handleSearch = (e) => {
        props.cbSearch(e.target.value);
    }
    const handleSort = (e) => {
        props.cbSort(e.target.checked);
    }
    const handleReset = () => {
        props.cbReset();
    }

    return(
        <div className="Controls">
            <input className="Controls__sort" type="checkbox" checked={props.sortAZ} onChange={handleSort}/>
            <input className="Controls__search" type="text" value={props.searchString} onChange={handleSearch}/>
            <input className="Controls__reset" type="button" value="Сброс" onClick={handleReset} />
        </div>
    );
}