import { h, JSX } from "preact";

type AllowedElements = keyof JSX.IntrinsicElements;

interface ViewProps extends JSX.HTMLAttributes<HTMLElement> {
  as?: AllowedElements;
  children: JSX.Element | JSX.Element[];
  direction?: "vertical" | "horizontal";
  className?: string;
  border?: boolean;
  borderX?: boolean;
  borderY?: boolean;
  borderColor?: string;
  bgColor?: string;
  margin?: string;
  shadow?: boolean;
  responsive?: boolean;
}

export function View({
  as = "div",
  children,
  direction = "vertical",
  className = "",
  border = false,
  borderX = false,
  borderY = false,
  borderColor = "border-gray-300 dark:border-gray-600",
  bgColor = "bg-white dark:bg-gray-800",
  margin = "",
  shadow = false,
  responsive = false,
  ...rest
}: ViewProps) {
  const Tag = as as keyof JSX.IntrinsicElements;

  const getBorderClasses = () => {
    if (border) return `border ${borderColor}`;
    const classes = [];
    if (borderX) classes.push(`border-x ${borderColor}`);
    if (borderY) classes.push(`border-y ${borderColor}`);
    return classes.join(" ");
  };

  const shadowClass = shadow ? "shadow-md" : "";

  const getDirectionClasses = () => {
    if (!responsive) {
      return direction === "vertical" ? "flex-col" : "flex-row";
    }
    return direction === "vertical"
      ? "flex-row md:flex-col"
      : "flex-col md:flex-row";
  };

  return h(
    Tag,
    {
      ...rest,
      class: `flex ${getDirectionClasses()} ${margin} ${getBorderClasses()} ${bgColor} ${shadowClass} ${className}`,
    },
    children,
  );
}
