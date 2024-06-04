import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className=""
            src="/images/AMBlackXLTrans.jpg"
            width={30}
            height={30}
            alt="logo"
          />
        </Link>
        <h1>Mills</h1>
      </div>

      <div>
        <Link
          href="https://mills-resume-portfolio.netlify.app/"
          className="text-[#B1C9E8] px-5 py-3 text-sm md:text-base bg-gray-900 flex items-center rounded-full text-center"
        >
          Check out my portfolio
        </Link>
      </div>
    </header>
  );
}

export default Header;
