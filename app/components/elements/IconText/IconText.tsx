import { useState } from "react";

type Props = {
  text: string;
  icon?: JSX.Element;
  iconHover?: JSX.Element;
  className: string;
};

const IconText = ({ text, icon, iconHover, className }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const toggleHover = () => setIsHovered(!isHovered);

  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className={"flex flex-row items-center " + className}
    >
      {iconHover ? (isHovered ? iconHover : icon) : icon}
      <p className="font-regular bg-opacity-0 pl-2">{text}</p>
    </div>
  );
};

export default IconText;
