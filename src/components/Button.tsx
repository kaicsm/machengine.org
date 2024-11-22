import { JSX } from "preact/jsx-runtime";

interface ButtonProps
  extends Omit<JSX.HTMLAttributes<HTMLButtonElement>, "size"> {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700";
      case "secondary":
        return "bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400";
      case "outline":
        return "border-2 border-blue-500 text-blue-500 hover:bg-blue-50 active:bg-blue-100";
      default:
        return "";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-2 py-1 text-sm";
      case "md":
        return "px-4 py-2";
      case "lg":
        return "px-6 py-3 text-lg";
      default:
        return "";
    }
  };

  return (
    <button
      {...props}
      class={`
        rounded-md 
        transition-all 
        duration-200 
        ease-in-out 
        focus:outline-none 
        focus:ring-1 
        focus:ring-offset-1 
        focus:ring-blue-500 
        ${getVariantClasses()} 
        ${getSizeClasses()}
        ${props.class || ""}
      `}
    >
      {props.children}
    </button>
  );
}
