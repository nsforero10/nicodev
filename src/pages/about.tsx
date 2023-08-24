import * as React from "react";
import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";
import { HeadFC } from "gatsby";

export const Head: HeadFC = () => <title>Nico - Software engineer</title>;

const skills = [
  {
    name: "React",
    percentage: "w-[90%]",
  },
  {
    name: "CSS",
    percentage: "w-[90%]",
  },
  {
    name: "TypeScript",
    percentage: "w-[90%]",
  },
  {
    name: "Node",
    percentage: "w-[80%]",
  },
  {
    name: "Express",
    percentage: "w-[80%]",
  },
  {
    name: "Next.js",
    percentage: "w-[80%]",
  },
  {
    name: "Responsive design",
    percentage: "w-[70%]",
  },
  {
    name: "Flutter",
    percentage: "w-[60%]",
  },
];

const AboutPage = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);
  return (
    <>
      <main className="flex flex-col items-center bg-black bg-about-pattern bg-no-repeat bg-cover lg:h-screen">
        <NavBar currentPage="about" />
        <section className="flex flex-col grow pt-24 w-full">
          <h1 className="text-4xl font-display mt-4 text-center">ABOUT PAGE</h1>
          <div className="flex flex-col-reverse lg:flex-row grow mx-8 my-4 p-8 border border-teal gap-12">
            <article className="flex flex-col flex-1 items-center justify-between grow">
              <p className="font-thin text-lg">
                I am a Bilingual{" "}
                <span className="font-normal text-teal">Software Engineer</span>{" "}
                with 3+ years of expertise in web and mobile development using{" "}
                <strong>JavaScript</strong>, <strong>TypeScript</strong>, and{" "}
                <strong>React</strong> frameworks such as{" "}
                <strong>Next.js</strong>, as well as a working knowledge of{" "}
                <strong>Node</strong> and <strong>Express</strong>.
                <br />
                Experience designing, building, and maintaining scalable
                software solutions for a variety of sectors including{" "}
                <strong>fintech</strong>, <strong>robotics</strong>,{" "}
                <strong>real estate</strong>, and <strong>supply chain</strong>.
                Agile development methodologies, acting as a{" "}
                <strong>Team Player</strong> experience working in
                cross-functional teams. I'm passionate about using{" "}
                <span className="font-normal text-teal">technology</span> to
                solve{" "}
                <span className="font-normal text-teal">social problems</span>{" "}
                and{" "}
                <span className="font-normal text-teal">contribute people</span>
                <br />
                <br />
                Learn more about me -{" "}
                <a
                  download
                  href="/nicolas-forero-cv.pdf"
                  className="italic underline text-teal cursor-pointer"
                >
                  Download my Resume{" "}
                </a>
                <br />
                <br />
                I'm open to <strong>Job</strong> opportunities where I can
                contribute and grow. If you have an opportunity that matches my{" "}
                <span className="font-normal text-teal">skills</span> and{" "}
                <span className="font-normal text-teal">experiences</span>,
                don't hesitate talking to me
              </p>
              <div className=" w-min h-16 hover:animate-bounce block hover:z-[4] my-4">
                <button
                  className="relative bg-teal h-14 w-56 font-bold z-[2]"
                  onClick={() => setShowContactForm(true)}
                >
                  <a className="text-2xl text-black"> GET IN TOUCH</a>
                </button>
                <div className="relative bottom-12 left-2 border-2 border-solid border-dark-teal h-14 w-56 z-[1]"></div>
              </div>
            </article>
            <article className="flex flex-col flex-1 items-center grow justify-between">
              <img src="/profile-memoji.png" alt="Nico profile memoji" />
              <h1 className="text-4xl font-display m-2"> Main Skills</h1>
              <div className="flex flex-col grow font-bold w-full gap-2">
                {skills.map((skill) => {
                  return (
                    <div className="m-2">
                      <span className="text-lg mb-2">&gt; {skill.name}</span>
                      <div className="w-full h-5 border border-teal p-1 ">
                        <div className={`${skill.percentage} bg-teal h-full`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
        </section>
      </main>
      <ContactForm
        open={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </>
  );
};

export default AboutPage;
