import { AvatarComponent } from "@/types/component";
import Image from "next/image";

const Avatar: AvatarComponent = ({ title, imageUrl }) => {
  return (
    <Image
      src={imageUrl}
      alt={title}
      width={320}
      height={320}
      layout="fixed"
      className="w-full h-full"
    />
  );
};

export default Avatar;
