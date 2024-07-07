import { useEffect, useState } from "react";
import {
  Form,
  Link,
  useFetcher,
  useLoaderData,
  useLocation,
  useParams,
} from "react-router-dom";
import socket from "../../socket";
import sendSvg from "../../assets/icons/send.svg";
import deleteSvg from "../../assets/icons/delete.svg";
import goBackSvg from "../../assets/icons/go-back.svg";
import styles from "./ChatPage.module.css";

const ChatPage = () => {
  const [messages, setMessages] = useState(useLoaderData());
  const params = useParams();
  const location = useLocation();
  const fetcher = useFetcher();
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.auth = { userId: params.user_id };
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, [params.user_id]);

  useEffect(() => {
    function onMessage(data) {
      setMessages([...messages, data]);
    }
    socket.on("message", onMessage);
    return () => {
      socket.off("message", onMessage);
    };
  }, [messages]);

  function sendMessage() {
    socket.emit("message", { content: message, to: params.friend_id });
    setMessage("");
  }

  function deleteFriend(e) {
    if (!confirm("Do you really want to delete the friend")) {
      e.preventDefault();
    }
  }

  return (
    <section className={`defaultSection ${styles.chatPage}`}>
      <div>
        <Link to={`/${params.user_id}/friends`} className="goBackBtn">
          <img src={goBackSvg} alt="Go back" title="Go back" />
        </Link>
        <h2>{location.state.friendName}</h2>
        <Form
          method="delete"
          className={styles.deleteFriendForm}
          onSubmit={deleteFriend}
        >
          <input type="hidden" value={params.friend_id} />
          <button type="submit">
            <img
              src={deleteSvg}
              alt="Delete the friend"
              title="Delete the friend"
            />
          </button>
        </Form>
      </div>
      <ul>
        {messages.length > 0 ? (
          <>
            {messages
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((message) => (
                <li
                  key={message._id}
                  className={
                    message.senderID === params.user_id
                      ? `${styles.userMsg}`
                      : `${styles.friendMsg}`
                  }
                >
                  {message.content}
                  <span>{new Date(message.date).toLocaleString()}</span>
                </li>
              ))}
          </>
        ) : (
          <p>There are no messages yet</p>
        )}
      </ul>
      <fetcher.Form
        method="post"
        onSubmit={sendMessage}
        className={`defaultForm ${styles.sendMessageForm}`}
      >
        <textarea
          name="message"
          required
          placeholder="Type your message here"
          maxLength="65"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <button type="submit">
          <img src={sendSvg} alt="Send the message" title="Send the message" />
        </button>
      </fetcher.Form>
    </section>
  );
};

export default ChatPage;
