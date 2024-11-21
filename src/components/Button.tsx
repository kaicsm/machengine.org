import gsap from "gsap";
import { useRef, useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";

interface ButtonProps
  extends Omit<JSX.HTMLAttributes<HTMLButtonElement>, "size"> {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  animated?: boolean;
}

export default function Button({
  animated = false,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

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

  const handleMouseEnter = () => {
    if (animated) {
      const text = buttonRef.current?.querySelector(".button-content");
      const arrow = buttonRef.current?.querySelector(".button-arrow");

      setIsHovered(true);

      gsap.to(text!!, {
        x: 10,
        duration: 0.2,
        ease: "power1.out",
      });

      gsap.to(arrow!!, {
        opacity: 1,
        duration: 0.2,
        ease: "power1.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (animated) {
      const text = buttonRef.current?.querySelector(".button-content");
      const arrow = buttonRef.current?.querySelector(".button-arrow");

      setIsHovered(false);

      gsap.to(text!!, {
        x: 0,
        duration: 0.2,
        ease: "power1.out",
      });

      gsap.to(arrow!!, {
        opacity: 0,
        duration: 0.2,
        ease: "power1.out",
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={animated ? handleMouseEnter : undefined}
      onMouseLeave={animated ? handleMouseLeave : undefined}
      {...props}
      class={`
        relative 
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
      <span
        class={`button-content relative inline-block ${
          animated ? "can-animate" : ""
        }`}
      >
        <span class="button-text">{props.children}</span>
        {animated && (
          <span
            class="button-arrow ml-1 absolute opacity-0"
            style={{
              fontSize: isHovered ? "1.2em" : "1em",
              right: "-1.5em",
              top: "50%",
              transform: "translateY(-50%)",
              transition: "font-size 0.2s ease",
            }}
          >
            →
          </span>
        )}
      </span>
    </button>
  );
}
