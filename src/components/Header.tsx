import { View } from "./View";
import { Text } from "./Text";
import Button from "./Button";

import { FaGithub, FaDiscord } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "preact/hooks";
import gsap from "gsap";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: "power2.out",
        display: "block",
      });
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          if (menuRef.current) {
            gsap.set(menuRef.current, { display: "none" });
          }
        },
      });
    }
  }, [isMenuOpen]);

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
        <div className="relative w-full">
          {/* Header top section */}
          <div className="h-[var(--header-height)] flex items-center justify-between">
            <img
              src="/machengine.org/images/mach.svg"
              className="invert dark:invert-0"
            />

            <Button
              className="md:hidden text-gray-600 hover:text-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <View border className="p-1">
                <RiMenuFill size={24} />
              </View>
            </Button>

            {/* Desktop navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-6">
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
                <li>
                  <Text
                    as="a"
                    href="#"
                    color="text-gray-600"
                    className="hover:text-gray-200 transition-colors cursor-pointer"
                  >
                    <FaGithub size={20} />
                  </Text>
                </li>
                <li>
                  <Text
                    as="a"
                    href="#"
                    color="text-gray-600"
                    className="hover:text-gray-200 transition-colors cursor-pointer"
                  >
                    <FaDiscord size={20} />
                  </Text>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile navigation */}
          <nav
            ref={menuRef}
            className="md:hidden absolute w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
            style={{ display: "none", opacity: 0 }}
          >
            <ul className="flex flex-col space-y-4 py-4">
              <li>
                <Text
                  as="a"
                  href="/docs"
                  color="text-gray-600"
                  className="hover:text-gray-200 transition-colors cursor-pointer block px-4"
                >
                  Docs
                </Text>
              </li>
              <li>
                <Text
                  as="a"
                  href="/project"
                  color="text-gray-600"
                  className="hover:text-gray-200 transition-colors cursor-pointer block px-4"
                >
                  Project
                </Text>
              </li>
              <li>
                <Text
                  as="a"
                  href="/devlog"
                  color="text-gray-600"
                  className="hover:text-gray-200 transition-colors cursor-pointer block px-4"
                >
                  Devlog
                </Text>
              </li>
              <li>
                <View
                  bgColor="bg-transparent"
                  direction="horizontal"
                  className="p-2 justify-start items-center"
                >
                  <Text
                    as="a"
                    href="#"
                    color="text-gray-600"
                    className="hover:text-gray-200 transition-colors cursor-pointer block px-4"
                  >
                    <FaGithub size={20} />
                  </Text>
                  <Text
                    as="a"
                    href="#"
                    color="text-gray-600"
                    className="hover:text-gray-200 transition-colors cursor-pointer block px-4"
                  >
                    <FaDiscord size={20} />
                  </Text>
                </View>
              </li>
            </ul>
          </nav>
        </div>
      </View>
    </View>
  );
}
