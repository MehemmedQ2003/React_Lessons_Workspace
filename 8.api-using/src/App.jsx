import { useEffect } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:5174";

function App() {
  // ! Get all users
  // const getAllUsers = async() => {
  //   const response = await axios.get(`${BASE_URL}/users`);
  //   const data = response.data;
  //   console.log(data);
  // }

  // ! Get user by id
  // const getUserByID = async(userId) => {
  //   const response = await axios.get(`${BASE_URL}/users/${userId}`);
  //   const data = response.data;
  //   console.log(data);
  // }

  // ! Create user
  // const createUser = async(newUser) => {
  //   const response = await axios.post(`${BASE_URL}/users`, newUser)
  //   console.log(response.data);
  // }

  // ! Update user
  // const updateUser = async(userId, updatedUser) => {
  //   ? Put is used for updating user in database
  //   await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  // }

  // ! Delete user by id
  // const deleteUser = async(userId) => {
  //   const deleteResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
  //   console.log(deleteResponse);
  // }

  useEffect(() => {
    // getAllUsers()

    // getUserByID(6);

    // const newUsers = {
    //   "id": "7",
    //   "username": "nihad19",
    //   "name": "Nihad Ceferzade",
    //   "postId": 3
    // }
    // createUser(newUsers)

    // const updatedUser = {
    //   "id": "6",
    //   "username": "xazar19",
    //   "name": "Xazar Nesirov",
    //   "postId": 1
    // };
    // updateUser(6, updatedUser);

    // deleteUser(7);
  }, []);

  const getUserByID = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(response.data.postId);
  };


  const getPostById = async (postId) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
    console.log(response.data);
  };

  const getPost = async () => {
    const postId = await getUserByID(3);
    const postData = await getPostById(postId);
    console.log(postData);
  };

  useEffect(() => {
    // getUserByID(4);
    getPost();
  }, []);

  return (
    <>
      <h1>Axios</h1>
    </>
  );
}

export default App;
