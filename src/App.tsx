import { useState } from "react";
import axios from "axios";
import { TweetModal } from "./components/TweetModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleAddTweet = async (tweetContent: string) => {
    try {
      await axios.post("https://twitter.promdate.live/add-new-tweet", {
        tweetContent,
      });
    } catch (error) {
      console.log("failed", error);
    }
  };

  // useEffect(() => {
  //   // Set the body and html styles to make the content compact
  //   document.documentElement.style.margin = "0";
  //   document.documentElement.style.padding = "0";
  //   document.documentElement.style.display = "inline-block";
  //   document.documentElement.style.overflow = "hidden";
  //   document.body.style.margin = "0";
  //   document.body.style.padding = "0";
  //   document.body.style.display = "inline-block";
  //   document.body.style.overflow = "hidden";
  // }, []);

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => setShowModal(true)}
        className="p-2 bg-blue-600 rounded-lg text-white"
      >
        Add New Tweet
      </button>
      <TweetModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAddTweet}
      />
    </div>
  );
}

export default App;
