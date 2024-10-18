import { useState } from "react";

type TweetModalType = {
  show: boolean;
  onClose: () => void;
  onAdd: (tweetContent: string) => Promise<void>;
};

export const TweetModal = ({ show, onClose, onAdd }: TweetModalType) => {
  const [tweetContent, setTweetContent] = useState("");

  const handleAddClick = () => {
    onAdd(tweetContent);
    setTweetContent("");
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add New Tweet</h3>
        <textarea
          value={tweetContent}
          onChange={(e) => setTweetContent(e.target.value)}
          placeholder="Enter your tweet here"
        />
        <button onClick={handleAddClick}>Add Now</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TweetModal;
