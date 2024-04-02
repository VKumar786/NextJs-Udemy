import Link from "next/link";
import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Chandrayaan program",
      slug: "chandrayaan-project",
    },
    {
      name: "Mangalyaan program",
      slug: "mangalyaan-project",
    },
    {
      name: "Gaganyaan program",
      slug: "gaganyaan-project",
    },
  ];
  return (
    <div>
      {projects.map((project, index) => {
        const { slug, name } = project;
        return (
          <Link
            href={{
              pathname: "/project/[slug]", // `/project/${project.slug}`
              query: { slug },
            }}
            as={`/project/${slug}`}
            key={name + slug}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default Projects;
