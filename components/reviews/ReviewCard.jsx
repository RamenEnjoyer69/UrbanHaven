import { FaQuoteLeft } from "react-icons/fa6";
import { Avatar } from "../ui/avatar";

const ReviewCard = ({ feedback, user, profession }) => {
  return (
    <div className="flex flex-col bg-gray-200 rounded-3xl w-[500px] h-[300px] relative overflow-hidden shrink-0">
      <div className="p-8 z-10 backdrop-blur-2xl w-full h-full">
        <FaQuoteLeft size={30} className="text-purple-600" />
        <p className="mt-5 font-semibold text-[1.25rem] min-h-[200px]">
          {feedback}
        </p>

        <div className="absolute bottom-8 flex items-center">
          <img
            src="/images/profile.jpg"
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col ml-3">
            <p className="font-semibold">{user}</p>
            <p className="text-gray-600">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
