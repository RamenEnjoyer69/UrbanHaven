import {
  BsApple,
  BsFacebook,
  BsGooglePlay,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTiktok,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black w-full h-auto min-h-96 px-[16%] py-14">
      <div className="flex flex-col px-4 space-y-10">
        <div className="flex gap-3">
          <a
            href=""
            className="grid place-items-center w-10 h-10 bg-gray-300 hover:bg-white transition-all ease-in-out dration-200 rounded-full"
          >
            <BsTiktok size={20} />
          </a>
          <a
            href=""
            className="grid place-items-center w-10 h-10 bg-gray-300 hover:bg-white transition-all ease-in-out dration-200 rounded-full"
          >
            <BsInstagram size={20} />
          </a>
          <a
            href=""
            className="grid place-items-center w-10 h-10 bg-gray-300 hover:bg-white transition-all ease-in-out dration-200 rounded-full"
          >
            <BsFacebook size={20} />
          </a>
          <a
            href=""
            className="grid place-items-center w-10 h-10 bg-gray-300 hover:bg-white transition-all ease-in-out dration-200 rounded-full"
          >
            <BsTwitterX size={20} />
          </a>
          <a
            href=""
            className="grid place-items-center w-10 h-10 bg-gray-300 hover:bg-white transition-all ease-in-out dration-200 rounded-full"
          >
            <BsLinkedin size={20} />
          </a>
          <a
            href=""
            className="grid place-items-center w-10 h-10 bg-gray-300 hover:bg-white transition-all ease-in-out dration-200 rounded-full"
          >
            <BsYoutube size={20} />
          </a>
          <a
            href=""
            className="grid place-items-center w-10 h-10 bg-gray-300 hover:bg-white transition-all ease-in-out dration-200 rounded-full"
          >
            <BsPinterest size={20} />
          </a>
        </div>

        <div className="flex w-full ">
          <ul className="flex text-white gap-5 font-semibold max-w-[100%] flex-wrap ">
            <li className="hover:underline ">
              <a href="">Terms and conditions</a>
            </li>
            <li className="hover:underline ">
              <a href="">Terms & fees</a>
            </li>
            <li className="hover:underline ">
              <a href="">Advertising</a>
            </li>
            <li className="hover:underline ">
              <a href="">Privacy and policy</a>
            </li>
            <li className="hover:underline ">
              <a href="">Help center</a>
            </li>
            <li className="hover:underline ">
              <a href="">Cancellation options</a>
            </li>
            <li className="hover:underline ">
              <a href="">Disabilities support</a>
            </li>
            <li className="hover:underline ">
              <a href="">Community forum</a>
            </li>
            <li className="hover:underline ">
              <a href="">Careers</a>
            </li>
            <li className="hover:underline ">
              <a href="">Investors</a>
            </li>
            <li className="hover:underline ">
              <a href="">Feedback</a>
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <p className="font-extrabold text-[1.25rem] text-white">
            Get the app
          </p>
          <div className="flex gap-5">
            <a
              href=""
              className="bg-white h-10 p-2 rounded-md flex justify-center items-center"
            >
              <BsApple size={20} className="mr-2" />

              <div className="flex flex-col leading-none">
                <p className="text-[0.5rem] font-semibold">Download on the </p>
                <p className="font-bold">App Store</p>
              </div>
            </a>
            <a
              href=""
              className="bg-white h-10 p-2 rounded-md flex items-center justify-center"
            >
              <BsGooglePlay size={20} className="mr-2" />

              <div className="flex flex-col leading-none">
                <p className="text-[0.5rem] font-semibold">GET IT ON</p>
                <p className="font-bold">Google Play</p>
              </div>
            </a>
          </div>
        </div>

        <div className="text-gray-400 text-sm">
          <p> &copy; 2024 E5 Y4 Team 5. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
