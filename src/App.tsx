import Button from "./components/Button";
import { Text } from "./components/Text";
import { View } from "./components/View";
import { Layout } from "./Layout";

export function App() {
  return (
    <Layout>
      {/* Notifications */}
      <View
        onClick={() =>
          (window.location.href =
            "https://devlog.hexops.com/2024/mach-v0.3-released/")
        }
        className="border-b border-dashed border-gray-300 dark:border-gray-600 justify-center items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
      >
        <Text size="sm">What's new in v0.3? →</Text>
      </View>

      {/* Content */}
      <View
        bgColor="bg-trasnsparent"
        className="justify-center items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20 mt-4 md:mt-6 lg:mt-8 xl:mt-10"
      >
        {/* Start */}
        <View
          bgColor="bg-trasnsparent"
          direction="horizontal"
          responsive
          className="justify-evenly items-center"
        >
          {/* Title */}
          <View
            as="section"
            bgColor="bg-transparent"
            className="w-full md:w-2/5 p-4 gap-4"
          >
            <Text variant="heading" weight="bold" size="8xl">
              Mach
            </Text>
            <Text variant="subheading" weight="bold" size="2xl">
              Zig game engine & graphics toolkit
            </Text>

            <Text>
              For building high-performance, truly cross-platform, robust &
              modular games, visualizations, and desktop/mobile GUI apps.
            </Text>

            <Button>Get started</Button>
          </View>

          {/* Video */}
          <View
            as="section"
            bgColor="bg-transparent"
            className="w-full md:w-2/6 p-4 rounded-none"
          >
            <video autoPlay muted loop>
              <source
                src="https://media.machengine.org/core/example/textured-cube.mp4"
                type="video/mp4"
              ></source>
            </video>
          </View>
        </View>

        {/* Zig expose */}
        <View
          borderY
          shadow
          direction="horizontal"
          className="w-full justify-center items-center p-4 gap-4"
        >
          <img src="/machengine.org/images/zig.png" width={50} />
          <Text weight="bold" size="2xl">
            Built with love, hard-work & Zig
          </Text>
        </View>
      </View>
    </Layout>
  );
}
