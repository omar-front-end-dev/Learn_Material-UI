import { Box } from "@mui/material";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Expense_List } from "../../components/Expense_List/Expense_List";

export const Home = () => {
  const [data, setData] = useState([])
  useEffect(() =>{
    axios.get('http://localhost:3000/transaction')
  .then(function (response) {
    setData(response.data)
  });
  }, [])


  
  return (
    <Box mt={"66px"}>
      <Expense_List data={data} setData={setData}/>
    </Box>
  );
};
