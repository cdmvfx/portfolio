import Icon from "astro-icon";
import { useState } from "react";
import { TbBrandMeta } from "react-icons/tb/index.js";
import { FaAngleUp, FaAngleDown } from "react-icons/fa/index.js";
import { FiExternalLink } from "react-icons/fi/index.js";

interface Course {
  name: string;
  progress: string;
  url: string;
}

interface Certificate {
  name: string;
  progress: string;
  url: string;
  courses: Course[];
}

const Certificates = () => {

  const [activeCertificate, setActiveCertificate] = useState(-1);

	const handleCertificateChange = (index: number) => {
		if (activeCertificate === index) {
			setActiveCertificate(-1);
		}
		else {
			setActiveCertificate(index);
		}
	}

  const certificates = [
    {
      name: "Meta Front-End Developer",
      progress: "In Progress",
      url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      courses: [
        {
          name: "Intro to Front-End Development",
          progress: "Complete",
          url: "https://coursera.org/share/875471809dae3fb44bf83f75bbcb4b68",
        },
        {
          name: "Programming with JavaScript",
          progress: "Complete",
          url: "https://coursera.org/share/c74af4f65a362eadd4ddb3c736032e3a",
        },
      ],
    },
    {
      name: "Meta Back-End Developer",
      progress: "In Progress",
      url: "https://www.coursera.org/professional-certificates/meta-back-end-developer",
      courses: [
        {
          name: "Intro to Back-End Development",
          progress: "Complete",
          url: "https://coursera.org/share/f464787f960f3edf617e459cf5a349e0",
        },
        {
          name: "Programming in Python",
          progress: "Complete",
          url: "https://coursera.org/share/03332fbd9888a020cc12fa33e2b7f6f4",
        },
        {
          name: "Version Control",
          progress: "Complete",
          url: "https://coursera.org/share/1af1741369fbcd71de0c16ce5fcb5f81",
        },
        {
          name: "Databases",
          progress: "In Progress",
          url: "",
        },
      ],
    }
  ];

  return certificates.map((certificate, index) => (
    <div className="">
      <div
        className={`flex py-2 justify-between items-center transition-all hover:text-emerald-300 cursor-pointer `}
        onClick={() => handleCertificateChange(index)}
      >
        <div className="flex items-center">
          <TbBrandMeta className="text-2xl mr-2" />
          {certificate.name}
        </div>
        <div>
          <div className=" text-emerald-600 text-2xl">
            {activeCertificate === index ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>
      </div>
      <div
        className={`transition-all ${
          activeCertificate === index ? "" : "max-h-0"
        } overflow-hidden`}
      >
        {certificate.courses &&
          certificate.courses.map((course, courseIndex) => (
            <a
              href={course.url}
              target="_blank"
              className={`flex justify-between items-center p-4 ${
                courseIndex !== certificate.courses.length - 1 ? "border-b" : ""
              } border-b-emerald-700 transition-all hover:text-emerald-300 text-xs`}
            >
              <div>{course.name}</div>
              <div>
                <FiExternalLink />
              </div>
            </a>
          ))}
      </div>
    </div>
  ));
};

export default Certificates;
