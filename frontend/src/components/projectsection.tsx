import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

import projectImage1 from "../assets/mlautomatic.jpg";
import projectImage2 from "../assets/ml2.webp";
import projectImage3 from "../assets/s1.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  reverse: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Predictive Maintenance of Sensors Using Machine Learning",
    description:
      "Developed a machine learning model to predict when sensors might fail. This helps avoid breakdowns by alerting teams before problems happen, saving time and cost.",
    image: projectImage1,
    link: "/mldetails",
  },
  {
    id: 2,
    title: "Automatic Traffic Management System Using IoT",
    description:
      "Built a traffic system using sensors and Arduino that changes signal timing based on real-time traffic. It helps reduce waiting time and gives priority to emergency vehicles.",
    image: projectImage2,
    link: "/trafficproject",
  },
  {
    id: 3,
    title: "Interactive Excel Dashboard for Sales & Performance Tracking",
    description:
      "Created a smart Excel dashboard to track sales and team performance. It includes charts, filters, and KPIs to help managers understand data quickly and make better decisions.",
    image: projectImage3,
    link: "/excel-dashboard",
  },
];

const ProjectCard = ({ title, description, image, link, reverse }: ProjectCardProps) => (
  <div
    className={`flex flex-col-reverse ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } items-center justify-center bg-white rounded-[20px]  shadow-md overflow-hidden w-full max-w-6xl mx-auto my-10 h-auto md:h-[420px]`}
  >
    <div className="md:w-1/2 w-full px-8 py-10 flex flex-col justify-center items-center md:items-start text-center md:text-left">
      <h3 className="text-2xl md:text-2xl xl:text-3xl font-semibold mb-4 font-playfair text-black">
        {title}
      </h3>
      <p className="text-m md:text-base xl:text-lg mb-6 text-gray-600 font-nunito">
        {description}
      </p>
      <Link
        to={link}
        className="border border-gray-800 text-black px-4 py-2 rounded-md text-sm hover:bg-yellow-400 transition font-roboto"
      >
        View Project
      </Link>
    </div>
    <div className="md:w-1/2 w-full h-60 md:h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center"
      />
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 pt-28 bg-[#f6f6f6] scroll-mt-20">
      <h2 className="text-center text-4xl md:text-3xl xl:text-6xl font-bold mb-8 font-playfair text-gray-900">
        Projects
      </h2>

      <div className="space-y-10">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} {...project} reverse={idx % 2 !== 0} />
        ))}
      </div>

      <div className="mt-20 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="flex gap-6 text-2xl text-gray-700">
          <a
            href="https://www.linkedin.com/in/divya-shree-h-m-4a1947258/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:divyashreehm2704@gmail.com"
            className="hover:text-red-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm text-gray-500 font-nunito">
          © 2025 Divya Shree H M.
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
