

import { useEffect, useState } from "react";
import API from "../api/api";
import AssignmentCard from "../components/AssignmentCard";

const Dashboard = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await API.get("/assignments");
        setAssignments(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <div className="container">
      <h2>Assignments</h2>

      {assignments.map((a) => (
        <AssignmentCard key={a.id} assignment={a} />
      ))}
    </div>
  );
};

export default Dashboard;