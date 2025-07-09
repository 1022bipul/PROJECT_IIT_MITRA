import { useState, useEffect } from "react";
import axios from "axios";

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get(`/api/comments/${postId}`)
      .then(res => setComments(res.data))
      .catch(console.error);
  }, [postId]);

  const addComment = (e) => {
    e.preventDefault();
    axios.post("/api/comments", { postId, text, userName: "Guest" })
      .then(res => {
        setComments([res.data, ...comments]);
        setText("");
      }).catch(console.error);
  };

  return (
    <div>
      <form onSubmit={addComment}>
        <textarea value={text} onChange={e => setText(e.target.value)} />
        <button type="submit">Post</button>
      </form>
      {comments.map(c => (
        <div key={c._id}>
          <strong>{c.userName}</strong>: {c.text}
        </div>
      ))}
    </div>
  );
}
