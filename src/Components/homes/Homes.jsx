import { useState } from "react";
import "./Home.css";
import { homeData } from "../../homeData";
import Home from "./Home";

export default function Homes() {
  const [items, setItems] = useState(homeData);
  return (
    <>
      <section className="home">
        <Home items={items} />
      </section>
      <div className="margin"></div>
    </>
  );
}
