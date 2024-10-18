import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import { TweetModal } from "./components/TweetModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleAddTweet = async (tweetContent: string) => {
    try {
      await axios.post("/add-new-tweet", { tweetContent });
    } catch (error) {
      console.log("failed", error);
    }
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Add New Tweet</button>
      <TweetModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAddTweet}
      />
    </div>
  );
}

export default App;
