import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topbar = () => {
  return (
    <div className="Topbar  bg-white h-12 w-[100vw] flex items-center justify-center lg:justify-end ">
      <div className="lg:mr-56 mr-0 text-sm">
        <ul className="flex space-x-6 text-[#2C2D3F]">
          <li className="font-custom">
            <FontAwesomeIcon className="text-[#1a76d1]" icon={faPhone} />
            8981326623
          </li>
          <li className="font-custom hover:text-[#1a76d1] hover:cursor-pointer">
            <FontAwesomeIcon className="text-[#1a76d1]" icon={faEnvelope} />{" "}
            soumyajit.battacharya@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
