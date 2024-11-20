import { JSX } from "preact/jsx-runtime";

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class="px-4 py-2 border-2
      border-gray-300 bg-white hover:bg-gray-100 active:bg-gray-200
      dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:active:bg-gray-600"
    />
  );
}
