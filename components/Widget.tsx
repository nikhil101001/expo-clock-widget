import { useEffect, useState } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import {
  FlexWidget,
  TextWidget,
  WidgetPreview,
} from "react-native-android-widget";

interface WidgetProps {
  time: string;
  colorScheme?: ColorSchemeName;
}

const renderWidget =
  ({ time, colorScheme }: WidgetProps) =>
  () => {
    return (
      <FlexWidget
        style={{
          height: "match_parent",
          width: "match_parent",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 16,
        }}
      >
        <TextWidget
          text={time.toUpperCase()}
          style={{
            fontSize: 24,
            fontFamily: "Inter",
            color: colorScheme === "dark" ? "#ffffff" : "#000000",
          }}
        />
      </FlexWidget>
    );
  };

const Widget = () => {
  const colorScheme = useColorScheme();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Get the current time in Spain (Europe/Madrid timezone)
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(currentTime);

  return (
    <WidgetPreview
      renderWidget={renderWidget({ time, colorScheme })}
      height={100}
      width={200}
    />
  );
};

export default Widget;
