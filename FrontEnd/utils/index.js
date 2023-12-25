import House from "@/components/svg/House";
import Gift from "@/components/svg/Gift";
import Food from "@/components/svg/Food";
import Wine from "@/components/svg/Wine";
import Taxi from "@/components/svg/Taxi";
import TShirt from "@/components/svg/TShirt";

export const getIcons = (iconName = "house", iconColor = "red") => {
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

{
  /* 
                  <li>
                    <div>
                      <House color="#'0166FF'" />
                      <h1 className="ml-3">House</h1>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Gift />
                      <h1 className="ml-3">Gift</h1>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Food />
                      <h1 className="ml-3">Food</h1>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Wine />
                      <h1 className="ml-3">Drink</h1>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Taxi />
                      <h1 className="ml-3">Taxi</h1>
                    </div>
                  </li>
                  <li>
                    <div>
                      <TShirt />
                      <h1 className="ml-3">Shopping</h1>
                    </div>
                  </li> */
}
