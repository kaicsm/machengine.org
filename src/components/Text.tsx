import { h, JSX } from "preact";
import type { Signal } from "@preact/signals";

type AllowedElements = keyof JSX.IntrinsicElements;
type MaybeSignal<T> = T | Signal<T>;

interface TextProps extends Omit<JSX.HTMLAttributes<HTMLElement>, "size"> {
  as?: AllowedElements;
  variant?: "heading" | "subheading" | "body" | "caption";
  size?: MaybeSignal<
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
  >;
  weight?: "light" | "normal" | "bold";
  align?: "left" | "center" | "right";
  color?: string;
  darkColor?: string;
  responsive?: boolean;
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
}

export function Text({
  as = "p",
  variant = "body",
  size = "base",
  weight = "normal",
  align = "left",
  color = "text-gray-800",
  darkColor = "dark:text-white",
  responsive = false,
  className = "",
  children,
  ...rest
}: TextProps) {
  const variantClasses = {
    heading: "font-extrabold text-gray-900 dark:text-gray-100",
    subheading: "font-semibold text-gray-800 dark:text-gray-200",
    body: "font-normal text-gray-700 dark:text-gray-300",
    caption: "font-light text-gray-500 dark:text-gray-400",
  } as const;

  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-3xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
  } as const;

  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    bold: "font-bold",
  } as const;

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  } as const;

  const responsiveClasses = responsive
    ? "sm:text-sm md:text-base lg:text-lg xl:text-xl"
    : "";

  const getValue = <T,>(value: MaybeSignal<T>): T => {
    return value instanceof Object && "value" in value ? value.value : value;
  };

  const sizeValue = getValue(size);

  return h(
    as,
    {
      ...rest,
      class: `${variantClasses[variant]} ${sizeClasses[sizeValue]} ${weightClasses[weight]} ${alignClasses[align]} ${color} ${darkColor} ${responsiveClasses} ${className}`,
    },
    children,
  );
}
