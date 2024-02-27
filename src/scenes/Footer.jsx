import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-48 bg-black pt-2">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-gray">
            DYLAN MATTHEWS
          </p>
          <p className="font-playfair text-md text-gray">
            ©2024 MATTHEWS. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
