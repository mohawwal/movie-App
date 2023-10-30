import Homes from "../homes/Homes";
import UpComing from "../up-coming/UpComing";
import Trending from "../Trending/Trending";
import { UpComeData, latestData } from "../../UpComeData";
import { useState } from "react";

export default function HomePage() {
  const [items, setItems] = useState(UpComeData);
  const [item, setItem] = useState(latestData);
  return (
    <div>
      <Homes />
      <UpComing items={items} title="Upcoming Movies" />
      <UpComing items={item} title="Latest Movies" />
      <Trending />
      <UpComing items={item} title="Recommended Movies" />
    </div>
  );
}
