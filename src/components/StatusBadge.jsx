import '../App.css'

function StatusBadge({ status }) {
  const getColorClass = (status) => {
    switch (status) {
      case "Applied":
        return "badge blue";
      case "Interview":
        return "badge orange";
      case "Offer":
        return "badge green";
      case "Rejected":
        return "badge red";
      case "Assessment":
        return "badge purple";
      default:
        return "badge gray";
    }
  };

  return (
    <span className={getColorClass(status)}>
      {status}
    </span>
  );
}

export default StatusBadge;
