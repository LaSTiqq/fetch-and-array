import axios from "axios";

const sortById = async () => {
  const { data } = await axios.get("https://dummyjson.com/comments");
  const newData = data.comments
    .map((comment) => {
      return comment.user;
    })
    .sort((user, another) => user.id - another.id);
  return newData;
};

console.log("🚀 ~ sortById", await sortById());
