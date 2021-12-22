/* eslint-disable array-callback-return */
import "../feed/feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((item) => (
          <Post kay={item.id} post={item} />
          ))}
      </div>
    </div>
  );
}
