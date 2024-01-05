import House from "@/components/svg/House";
import Gift from "@/components/svg/Gift";
import Food from "@/components/svg/Food";
import Wine from "@/components/svg/Wine";
import Taxi from "@/components/svg/Taxi";
import TShirt from "@/components/svg/TShirt";

import moment from "moment";

export const getIcons = (iconName = "house", iconColor = "green") => {
  const icons = {
    house: <House color={iconColor} />,
    gift: <Gift color={iconColor} />,
    food: <Food color={iconColor} />,
    wine: <Wine color={iconColor} />,
    taxi: <Taxi color={iconColor} />,
    tshirt: <TShirt color={iconColor} />,
  };
  return icons[iconName];
};
export const thousandify = (num) => {
  return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

export const dayformat = (day) => {
  return moment(day).format("MMMM Do YYYY, h:mm:ss a");
};
