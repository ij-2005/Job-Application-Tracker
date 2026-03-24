import ApplicationRow from "./ApplicationRow";
import '../App.css';

function ApplicationTable({ applications, onEdit, onDelete }) {
  return (
    <table className="application-table">
      <thead>
        <tr>
          <th>Company</th>
          <th>Role</th>
          <th>Status</th>
          <th>Date Applied</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {applications.map(app => (
          <ApplicationRow 
            key={app.id} 
            app={app} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))}
      </tbody>
    </table>
  );
}

export default ApplicationTable;
