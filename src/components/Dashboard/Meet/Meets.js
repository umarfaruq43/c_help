import React from "react";
import Meet from "./Meet";
import "./Meet.css";

const meetData = [
  {
    image: "user",
    name: "Oriyomi Oyindamola",
    title: "Class Rep",
    number: "07010602957",
    whatApplink: "https://wa.me/07010602957",
    telNumber: "tel:+2347010602957",
  },
  {
    image: "user",
    name: "Abdul Hakeem",
    title: "Class Rep",
    number: "07010602957",
    whatApplink: "https://wa.me/07010602957",
    telNumber: "tel:+2347010602957",
  },
  {
    image: "user",
    name: "Abdul Hakeem",
    title: "Class Rep",
    number: "07010602957",
    whatApplink: "https://wa.me/07010602957",
    telNumber: "tel:+2347010602957",
  },
];

const Meets = () => {
  return (
    <div className="met">
      {meetData.map((data) => (
        <Meet
          image={data.image}
          name={data.name}
          title={data.title}
          number={data.number}
        />
      ))}

      {/* <Meet />
      <Meet />
      <Meet /> */}
    </div>
  );
};

export default Meets;
