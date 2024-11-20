import { View } from "./View";
import { Text } from "./Text";

import { FaGithub, FaDiscord } from "react-icons/fa";

export default function Header() {
  return (
    <View
      as="header"
      direction="horizontal"
      className="fixed z-50 top-0 w-full border-b border-dashed border-gray-300 dark:border-gray-600"
      style={{ height: "var(--header-height)" }}
    >
      <View
        borderX
        direction="horizontal"
        className="container mx-auto border-none md:border-dashed px-4 md:px-8 p-4 flex justify-between items-center"
      >
        {/* Using invert for light mode is temporary */}
        <img src="/images/mach.svg" className="invert dark:invert-0" />

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Text
                as="a"
                href="/docs"
                color="text-gray-600"
                className="hover:text-gray-200 transition-colors cursor-pointer"
              >
                Docs
              </Text>
            </li>
            <li>
              <Text
                as="a"
                href="/project"
                color="text-gray-600"
                className="hover:text-gray-200 transition-colors cursor-pointer"
              >
                Project
              </Text>
            </li>
            <li>
              <Text
                as="a"
                href="/devlog"
                color="text-gray-600"
                className="hover:text-gray-200 transition-colors cursor-pointer"
              >
                Devlog
              </Text>
            </li>
            <li className="pt-1">
              <Text
                as="a"
                href="#"
                color="text-gray-600"
                className="hover:text-gray-200 trasition-colors cursor-pointer"
              >
                <FaGithub size={20} />
              </Text>
            </li>
            <li className="pt-1">
              <Text
                as="a"
                href="#"
                color="text-gray-600"
                className="hover:text-gray-200 trasition-colors cursor-pointer"
              >
                <FaDiscord size={20} />
              </Text>
            </li>
          </ul>
        </nav>
      </View>
    </View>
  );
}
