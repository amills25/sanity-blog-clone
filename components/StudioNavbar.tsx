import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#B1C9E8] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text=[#B1C9E8] mr-2" />
          Go To Website
        </Link>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border[#B1C9E8]">
          <h1 className="font-bold text-white">Check out my portfolio 👉</h1>
          <Link
            href="https://mills-resume-portfolio.netlify.app/"
            className="text-[#B1C9E8] font-bold ml-2"
          >
            Mills Portfolio
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
