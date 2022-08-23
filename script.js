import axios from "axios";

const response = async () => {
  const { data } = await axios.get("https://dummyjson.com/comments");
  const newData = data.comments.map((user) => {
    return user.user;
  });
  console.log("🚀 ~ newData", newData);
};

response();