import axios from "axios";

const sortById = async () => {
  const { data } = await axios.get("https://dummyjson.com/comments");
  const sortData = data.comments
    .map((comment) => {
      return comment.user;
    })
    .sort((user, another) => user.id - another.id);
  return sortData;
};

const filterByContent = async (substring) => {
  const { data } = await axios.get("https://dummyjson.com/comments");
  const filterData = data.comments.filter((comment) =>
    comment.body.includes(substring)
  );
  filterData.sort((user, another) => user.postId - another.postId);
  return filterData;
};

console.log("🚀 ~ sortById", await sortById());
console.log("🚀 ~ filterByContent", await filterByContent("You"));
