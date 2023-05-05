import React from "react";
import "../ChatBox/Chat_Box.css";
import chat_icon from "../Assets/KakaoTalk_logo 1.png";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

const Chat_Box = () => {
  const steps = [
    {
      id: "Greet",

      message: "Hello, Welcome to our shop",

      trigger: "Done",
    },

    {
      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",
    },

    {
      id: "waiting1",

      user: true,

      trigger: "Name",
    },

    {
      id: "Name",

      message: "Hi {previousValue}, Please select your issue",

      trigger: "issues",
    },

    {
      id: "issues",

      options: [
        {
          value: "React",

          label: "React",

          trigger: "React",
        },

        {
          value: "Angular",
          label: "Angular",
          trigger: "Angular",
        },
      ],
    },

    {
      id: "React",

      message:
        "Thanks for letting your React issue, Our team will resolve your issue ASAP",

      end: true,
    },

    {
      id: "Angular",

      message:
        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

      end: true,
    },
  ];
  return (
    <div className="container">
      <div className="chatbox">
        <div className="d-flex justify-content-center">
          {/* <img src={chat_icon} alt="talk" />
           */}
          <div className="chatbot">
            <Segment floated="center">
              <ChatBot steps={steps} />
            </Segment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat_Box;
