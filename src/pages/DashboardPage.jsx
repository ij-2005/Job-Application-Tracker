import '../App.css'
import { useNavigate } from "react-router-dom";

import Navbar from '../components/Navbar';
import StatsCard from '../components/StatsCard';
import SearchBar from '../components/SearchBar';
import ApplicationTable from '../components/ApplicationTable';

function DashboardPage(){
    // hardcoded NO BACKEND YET
    const applications = [ 
    { id: 1, company_name: "Google", job_title: "SWE", status: "Interview", date_applied: "2026-01-20" },
    { id: 2, company_name: "Stripe", job_title: "Backend", status: "Applied", date_applied: "2026-02-03" }
  ];

    const stats = { 
    total: 34,
    interview: 5,
    offers: 1,
    rejected: 10
  };

    const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const handleEdit = (id) => {
    console.log("Edit application:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete application:", id);
  };

    const navigate = useNavigate();
    
    const loginSite = () => {
        navigate("/");
    }
    return(
        <>
        <section id="center">
        <div className="dashboard-container">
            <Navbar />
      
            <div className="stats-bar">
                <StatsCard label="Total" value={stats.total} color="blue" />
                <StatsCard label="Interview" value={stats.interview} color="orange" />
                <StatsCard label="Offers" value={stats.offers} color="green" />
                <StatsCard label="Rejected" value={stats.rejected} color="red" />
            </div>

            <SearchBar onSearch={handleSearch} />

            <ApplicationTable 
                applications={applications} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
            />
        </div>
        </section>

        <p>Hello this is the dashboard page.</p>
        <button onClick={loginSite}>Back home.</button>
        </>
    )
}

export default DashboardPage