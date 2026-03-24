import '../App.css'
import StatusBadge from "./StatusBadge";

function ApplicationRow({ app, onEdit, onDelete }){
    return(
        <tr>
            <td>{app.company_name}</td>
            <td>{app.job_title}</td>
            <td><StatusBadge status={app.status} /></td>
            <td>{app.date_applied}</td>
            <td>
                <button onClick={() => onEdit(app.id)}>Edit</button>
                <button onClick={() => onDelete(app.id)}>Delete</button>
            </td>
        </tr>
    );
}

export default ApplicationRow;