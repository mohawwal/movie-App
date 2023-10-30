// import { useState } from "react";
// import { Home } from "../homes/Home";
// import "./trending.css";
// import { HomeData } from "../../dummyData";

// export default function Trending() {
//   const [items, setItems] = useState(HomeData);
//   return (
//     <>
//       <section className="trending">
//         <Home items={items} />
//       </section>
//     </>
//   );
// }

import { useState } from "react";
import { homeData } from "../../homeData";
import "./trending.css";
import Home from "../homes/Home";

export default function Trending() {
  const [items, setItems] = useState(homeData);
  return (
    <>
      <section className="trending">
        <Home items={items} />
      </section>
    </>
  );
}
