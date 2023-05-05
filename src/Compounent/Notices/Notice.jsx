import React, { useState } from "react";
import "./Notice.css";
import tumbnile from "../Assets/Background (2).png";

import Api from "../../client-config";
import jwt from "jsonwebtoken";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { logout } from "../../Redux/connection/actions";
import NewsModel from "./NewsModel";

const data = [
  {
    img: tumbnile,
    card_title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi pariatur maxime sed. Adipisci, atque?",
    card_disc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi pariatur maxime sed. Adipisci, atque? Fugiat saepe, error cupiditate at quidem nulla. Autem ipsam mollitia, optio itaque natus amet ipsa earum.",
    last_update: "Last updated 3 mins ago",
  },
  {
    img: tumbnile,
    card_title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi pariatur maxime sed. Adipisci, atque?",
    card_disc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi pariatur maxime sed. Adipisci, atque? Fugiat saepe, error cupiditate at quidem nulla. Autem ipsam mollitia, optio itaque natus amet ipsa earum.",
    last_update: "Last updated 3 mins ago",
  },
  {
    img: tumbnile,
    card_title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi pariatur maxime sed. Adipisci, atque?",
    card_disc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi pariatur maxime sed. Adipisci, atque? Fugiat saepe, error cupiditate at quidem nulla. Autem ipsam mollitia, optio itaque natus amet ipsa earum.",
    last_update: "Last updated 3 mins ago",
  },
  {
    img: tumbnile,
    card_title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi pariatur maxime sed. Adipisci, atque?",
    card_disc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi pariatur maxime sed. Adipisci, atque? Fugiat saepe, error cupiditate at quidem nulla. Autem ipsam mollitia, optio itaque natus amet ipsa earum.",
    last_update: "Last updated 3 mins ago",
  },
  {
    img: tumbnile,
    card_title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi pariatur maxime sed. Adipisci, atque?",
    card_disc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi pariatur maxime sed. Adipisci, atque? Fugiat saepe, error cupiditate at quidem nulla. Autem ipsam mollitia, optio itaque natus amet ipsa earum.",
    last_update: "Last updated 3 mins ago",
  },
  {
    img: tumbnile,
    card_title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi pariatur maxime sed. Adipisci, atque?",
    card_disc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi pariatur maxime sed. Adipisci, atque? Fugiat saepe, error cupiditate at quidem nulla. Autem ipsam mollitia, optio itaque natus amet ipsa earum.",
    last_update: "Last updated 3 mins ago",
  },
];

const Notice = () => {
  const [news, setNews] = useState([]);
  const dispatch = useDispatch();
  const getNewsHistory = async () => {
    try {
      let { userId } = jwt.decode(sessionStorage.token);
      let { data } = await Api.get("/news/getAllNews");
      setNews(data.data);
      console.log("data", data);
    } catch (error) {
      if (error.response.data.message == "Invalid token") {
        dispatch(logout());
      }
      console.error("error while get point history", error);
    }
  };

  useEffect(() => {
    getNewsHistory();
  }, []);
  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          {news.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="card text-white bg-dark">
                <img
                  src={item.imageBase64}
                  className="card-img img-fluid"
                  alt="card thumbnail"
                />
                <div className="card-body text-start">
                  <h4 className="card-title text-white">
                    {item.title.length >= 50
                      ? item.title.slice(0, 49) + "..."
                      : item.title}
                  </h4>
                  <p className="card-text text-light">
                    <p className="card-text text-light">
                      {item.description.length >= 100
                        ? item.description.slice(0, 99) + "..."
                        : item.description}
                    </p>
                  </p>
                  <p className="card-text text-light">
                    Date: <small>{item.createdAt.slice(0, 10)}</small>
                  </p>
                  <NewsModel />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notice;
