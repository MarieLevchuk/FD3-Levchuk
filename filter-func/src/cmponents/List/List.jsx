import './List.css';

export default function List({words}){    
    return(
        <div className="List">
            {
                words.join('\n')
            }
        </div>
    );
}