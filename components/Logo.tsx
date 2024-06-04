import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="object-cover"
        height={40}
        width={40}
        alt="logo"
        src="/images/AMBlackXLTrans.jpg"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
