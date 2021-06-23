import db from "../db/connection.js";
import Post from "../models/post.js";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // products data that we want inserted into database
  const posts = [
    {
      name: "tim",
      comment: "hello",
    },
    {
      name: "talon",
      comment: "hallo",
    },
    {
      name: "gilda",
      comment: "just a regular",
    },
    {
      name: "will",
      comment: "i hear a little thing you say",
    },
  ];

  // insert products into database
  await Post.insertMany(posts);
  console.log("Created posts!");

  // close database connection. done.
  db.close();
};

insertData();
