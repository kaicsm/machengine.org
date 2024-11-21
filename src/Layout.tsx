import Header from "./components/Header";
import { View } from "./components/View";
import Checkerboard from "./components/Checkerboard";
import { JSX } from "preact";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export function Layout({ children }: LayoutProps) {
  return (
    <View as="div" direction="vertical" className="min-h-screen">
      {/* Header placeholder */}
      <div style={{ height: "var(--header-height)" }} />

      {/* Header */}
      <Header />

      {/* Main content */}
      <View
        borderX
        as="main"
        direction="vertical"
        className="flex-grow border-none sm:border-dashed container mx-auto min-h-screen relative"
      >
        {/* Checkerboard background */}
        <View className="absolute inset-0">
          <Checkerboard size={25} borderWidth={0.5} borderColor="#b8b8b833" />
        </View>

        {/* Content overlay */}
        <div className="relative z-10">{children}</div>
      </View>
    </View>
  );
}
