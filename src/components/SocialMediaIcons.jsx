import { FaGithub } from "react-icons/fa6";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/dylnmtthws"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/DylnMtthws"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={32} />
      </a>
      {/* <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="/instagram.png" />
      </a> */}
    </div>
  );
};

export default SocialMediaIcons;
