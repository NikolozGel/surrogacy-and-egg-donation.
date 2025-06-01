import Image from "next/image";
import Logo from "../../public/assets/logo/logo.png";

export default function Navbar() {
  return (
    <div>
      <Image
        src={Logo}
        width={50}
        height={50}
        alt="logoImg"
        className="cursor-pointer"
      />
    </div>
  );
}
