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
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-35 z-1 flex justify-center items-center">
      <div className="flex flex-col gap-y-2">
        <textarea
          value={tweetContent}
          onChange={(e) => setTweetContent(e.target.value)}
          placeholder="Enter your tweet here"
          className="rounded-lg p-2 min-w-64"
          rows={4}
        />
        <div className="self-end flex gap-x-2">
          <button
            onClick={handleAddClick}
            className="p-2 bg-blue-600 rounded-lg text-white"
          >
            Add Now
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-red-500 rounded-lg text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetModal;
