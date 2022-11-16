import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Searcher from "./components/Searcher";
import UserCard from "./components/UserCard";
import getGithubUser from "./services/user";

export default function App() {
  const [inputUser, setInputUser] = useState("billgates");
  const [data, setData] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const gettinUser = async (user) => {
    const userResponse = await getGithubUser(user);

    if (inputUser === "billgates") {
      localStorage.setItem("octocat", JSON.stringify(userResponse));
    }
    if (userResponse.message == "algo fallo") {

      const { octocat } = localStorage;
      setData(JSON.parse(localStorage.octocat).data);
      setNotFound(true);

    } else {
      setData(userResponse.data);
      setNotFound(false)
    }
  };

  useEffect(() => {
    gettinUser(inputUser);
  }, [inputUser]);

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        borderRadius: "16px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher setInputUser={setInputUser} notFound={notFound} />
      <UserCard userState={data}></UserCard>
    </Container>
  );
}
