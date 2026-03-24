import '../App.css'

function StatsCard({ label, value, color}){

    return(
        <div className={`stats-card ${color}`}>
            <h3>{label}</h3>
            <p>{value}</p>
        </div>
    );
}

export default StatsCard;