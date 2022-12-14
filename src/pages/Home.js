import React, { useEffect, useState } from "react";

import HomePageBarkItem from "../Components/HomePageBarkItem/HomePageBarkItem";
import Spinner from "../Components/UI/Spinner/Spinner";

const HomePage = ({ loggedInUser }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_REST_API}/readPost`
      );
      const data = await response.json();

      if (data.user[0]._id) {
        setIsLoading(false);
        setPosts(data.user);
      }
    };

    getUsers();
  });

  const addLikes = async (postId) => {
    await fetch(`${process.env.REACT_APP_REST_API}/updateLike/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <h2 className="padding-20">Latest Barks</h2>

      {isLoading && <Spinner />}

      {!isLoading && posts[0]._id && (
        <>
          {posts && (
            <>
              {posts.map((post) => (
                <HomePageBarkItem
                  key={post._id}
                  post={post}
                  loggedInUser={loggedInUser}
                  addLikes={addLikes}
                />
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export default HomePage;
