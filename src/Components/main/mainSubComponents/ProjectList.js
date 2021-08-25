import styles from "./ProjectList.module.scss";
import ProjectItem from "./ProjectItem";
import projectData from "../../../projectData/projectData";

const ProjectList = () => {
  return (
    <ul>
      {projectData.map((item) => (
        <ProjectItem img={item.img} alt={item.alt} />
      ))}
    </ul>
  );
};

export default ProjectList;
