import styles from "./ProjectItem.module.scss";
const ProjectItem = ({ img, alt }) => {
  return (
    <li>
      <img src={img} alt={alt} />
    </li>
  );
};

export default ProjectItem;
