import ProjectCard from "../components/ProjectCard"; 
export default function Projects() {
  const projects = [
    { title: "Projet 1", link: "https://github.com/hajerouk/TasksManager" },
    { title: "Projet 2", link: "https://github.com/hajerouk/user-list-app"},
    { title: "Projet 3", link: "https://github.com/hajerouk/FifaCardPlayer" },
  ];
       
  return (
  
   <div style={{ padding: "50px", display: "grid", gap: "20px", justifyContent: "center" }}>
      <h1 style={{ textAlign: "center" }}>Mes Projets</h1>
      {projects.map((p, i) => <ProjectCard key={i} title={p.title} link={p.link} />)}
    </div>
  );
}
