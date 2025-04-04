import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from 'react-icons/bs';
const SocialsDiv = () => {
  return (
    <div className="flex gap-3 my-3 text-2xl ml-1">
      <a target="_blank" href="https://www.linkedin.com/in/shivashree-bhandari-01560033b/">
        <BsLinkedin />
      </a>
      <a target="_blank" href="https://github.com/Shivashree23">
        <BsGithub />
      </a>
      <a target="_blank" href="https://www.facebook.com/">
        <BsFacebook />
      </a>
      <a target="_blank" href="https://www.instagram.com/shivashreeee/">
        <BsInstagram />
      </a>
      <a target="_blank" href="https://x.com/i/flow/login?lang=en&mx=2">
        <BsTwitter />
      </a>
    </div>
  );
};

export default SocialsDiv;
