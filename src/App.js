import React from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Tabs from "./components/Tabs/Tabs";
import TodoContextProvider from "./context/TodoContext";
import Layout from "./layout/Layout";

function App() {
  
  //localStorage.setItem("todos", JSON.stringify([{id: "1", text: "mASDAS", completed: true}, {id: "2", text: "asdasd", completed: false}]))
  return (
    <TodoContextProvider>
      <Layout>
        <Header />
        <Form />
        <Tabs />
        <List />
      </Layout>
    </TodoContextProvider>
  );
}

export default App;