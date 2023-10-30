import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HomeData } from "../../dummyData";

export default function SinglePage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = HomeData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      (
      <>
        <section className="singlePage">
          <div className="singleHeading">
            <h1>{item.name}</h1>
          </div>
        </section>
      </>
      )
    </>
  );
}
