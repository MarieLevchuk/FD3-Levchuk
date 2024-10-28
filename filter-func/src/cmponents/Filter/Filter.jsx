import Controls from '../Controls/Controls';
import List from '../List/List';
import './Filter.css';

export default function Filter({words}){
    return(
        <div className="Filter">
            <Controls />
            <List words={words}/>
        </div>
    );
}