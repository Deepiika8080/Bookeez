"use client"
import { useEffect, useState } from "react";
import "./styles/layout.css";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";

const Home = () => {
  const [Client, SetClient] = useState(false)

  useEffect(() => {
    SetClient(true)
  }, [])
  
  if (!Client) return null;

  return (
    <div className="main flex">
      
      <Sidebar/>
      <div className="flex-grow ">
      <SearchBar/>
      </div>
    </div>
  );
}

export default Home;
