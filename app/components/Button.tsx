import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  onClick?: MouseEventHandler;
  submitting?: boolean | false;
  type?: "button" | "submit";
  bgColor?: string;
  textColor?: string;
};

const Button = ({
  title,
  leftIcon,
  rightIcon,
  handleClick,
  submitting,
  type,
  bgColor,
  textColor,
}: Props) => (
  <button
    type={type || "button"}
    disabled={submitting || false}
    className={`flexCenter px-4 py-3 
        ${textColor ? textColor : "text-white"} 
        ${
          submitting ? "bg-black/50" : bgColor ? bgColor : "bg-primary-blue"
        } rounded-lg text-[18px] lg:text-[24px] px-[20px] py-[10px]  font-primary border-primary-blue border-[2px] hover:bg-primary-blue hover:text-white`}
    onClick={handleClick}
  >
    {leftIcon && (
      <Image src={leftIcon} width={14} height={14} alt="left icon" />
    )}
    {title}
    {rightIcon && (
      <Image src={rightIcon} width={14} height={14} alt="right icon" />
    )}
  </button>
);

export default Button;
