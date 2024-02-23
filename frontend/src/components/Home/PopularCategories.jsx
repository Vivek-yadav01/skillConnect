import React from "react";
import {
  MdElectricBolt,
  MdAccountBalance,
  MdOutlineAnimation,
  MdOutlineWebhook,
} from "react-icons/md";
import { FaDroplet, FaBrush } from "react-icons/fa6";
import { CgGirl } from "react-icons/cg";
import { GiPathTile } from "react-icons/gi";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact, FaHatCowboy } from "react-icons/fa";
import { GiArtificialIntelligence, GiBlacksmith } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { GiWoodPile } from "react-icons/gi";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Electricians",
      subTitle: "305 Open Positions",
      icon: <MdElectricBolt />,
    },
    {
      id: 2,
      title: "Plumber",
      subTitle: "500 Open Positions",
      icon: <FaDroplet />,
    },
    {
      id: 3,
      title: "Maid",
      subTitle: "2000+ Open Positions",
      icon: <CgGirl />,
    },
    {
      id: 4,
      title: "Tile Workers",
      subTitle: "100+ Open Postions",
      icon: <GiPathTile />,
    },
    {
      id: 5,
      title: "Painter",
      subTitle: "400 Open Positions",
      icon: <FaBrush />,
    },
    {
      id: 6,
      title: "Carpenter",
      subTitle: "867 Open Positions",
      icon: <GiWoodPile />,
    },
    {
      id: 7,
      title: "Chhotu (Helper)",
      subTitle: "50 Open Positions",
      icon: <FaHatCowboy />,
    },
    {
      id: 8,
      title: "Black Smith",
      subTitle: "80 Open Positions",
      icon: <GiBlacksmith />,
    },
  ];
  return (
    <div className="categories">
      <h3>POPULAR CATEGORIES</h3>
      <div className="banner">
        {categories.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="text">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;
