import '../App.css'

function StatsCard({ label, value, color}){

    return(
        <div className={`stats-card ${color}`}>
            <p>{label}: {value}</p>
        </div>
    );
}

export default StatsCard;