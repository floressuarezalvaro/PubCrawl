import React, { useState, useEffect } from "react";
import axios from "axios";

const PostContainer = () => {
  const [form, setForm] = useState({ title: "", text: "" });
  const [posts, setPosts] = useState([]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitPost = async (e) => {
    e.preventDefault();

    try {
      const newPost = await axios.post("/posts", form, {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });

      setPosts([...posts, newPost]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const source = axios.CancelToken.source();
    (async () => {
      try {
        const allPosts = await axios.get("/posts", {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        });
        setPosts(allPosts.data);
      } catch (err) {
        console.log(err);
      }
    })();

    return () => {
      source.cancel();
    };
  }, []);

  return <div className="container">{props.children}</div>;
};

export default PostContainer;
