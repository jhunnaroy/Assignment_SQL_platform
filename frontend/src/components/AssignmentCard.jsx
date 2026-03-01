


import { useNavigate } from "react-router-dom";

const AssignmentCard = ({ assignment }) => {
  const navigate = useNavigate();

  const color =
    assignment.difficulty === "Easy"
      ? "#16a34a"
      : assignment.difficulty === "Medium"
      ? "#f59e0b"
      : "#dc2626";

  return (
    <div className="card">
      <h3>{assignment.title}</h3>

      <span className="difficulty" style={{ background: color }}>
        {assignment.difficulty}
      </span>

      <p>{assignment.description}</p>

      <button onClick={() => navigate(`/solve/${assignment.id}`)}>
        Solve
      </button>
    </div>
  );
};

export default AssignmentCard;