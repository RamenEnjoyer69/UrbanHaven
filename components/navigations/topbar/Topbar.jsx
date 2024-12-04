import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavLink from "./Link";
import Link from "./Link";

const Topbar = () => {
  return (
    <div className="w-full h-16 bg-white grid grid-cols-3 items-center px-5 ">
      {/* <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-2xl font-bold items-center">
        UrbanHaven
      </div> */}

      <div className="text-[1.5rem] text-gray-600 font-semibold">
        <a href="/home">
          <img src="/images/logo_purple.png" alt="" className="h-10" />
        </a>
        {/* UrbanHaven */}
      </div>
      <div className="flex list-none gap-8 text-gray-600 items-center justify-center">
        <NavLink title="home" />
        <NavLink title="rent" />
        <NavLink title="favorite" />
        <NavLink title="about" />
      </div>

      <div className="flex justify-end ">
        <Avatar>
          <AvatarImage src="/images/profile.jpg" className="object-cover" />
          <AvatarFallback>User_69</AvatarFallback>
        </Avatar>

        <div className="ml-4 leading-none flex items-center">
          <p className="font-bold">User_69</p>
        </div>
      </div>
    </div>

    // <nav className="flex justify-center w-full fixed bg-transparent top-5 ">
    //   <div className="bg-white backdrop-blur-lg rounded-full min-w-[900px] h-14 z-50 px-5 flex items-center">
    //     <ul className="flex items-center">
    //       <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-2xl font-bold items-center">
    //         UrbanHaven
    //       </div>
    //       <li>
    //         <div>
    //           <a href=""></a>
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Topbar;
