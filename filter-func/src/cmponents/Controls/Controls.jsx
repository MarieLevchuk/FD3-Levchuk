import './Controls.css';

export default function Controls(){
    return(
        <div className="Controls">
            <input className="Controls__sort" type="checkbox" checked={''} onChange={''}/>
            <input className="Controls__search" type="text" value={''} onChange={''}/>
            <input className="Controls__reset" type="button" value="Сброс" onClick={''} />
        </div>
    );
}