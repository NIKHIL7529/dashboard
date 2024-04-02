import ProjectItem from "../ProjectItem/ProjectItem";
import image from "../../images/unsplash1.jpg";

export default function ProjectList() {
  const projects = [
    {
      id: 1,
      title: "Default Project",
      stories: [
        {
          id: 11,
          coverImage: image,
          title: "AI Character Demo Storyboard",
          lastUpdated: "19 Mar 24",
        },
      ],
    },
  ];

  return (
    <div>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}
