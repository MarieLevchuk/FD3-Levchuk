import './Shop.css';

export default function Shop({shopname, address}){
    return (
        <div className="Shop__info">
            <div className="Shop__name">{shopname}</div>
            <div className="Shop__address">{address}</div>
        </div>
    );
}