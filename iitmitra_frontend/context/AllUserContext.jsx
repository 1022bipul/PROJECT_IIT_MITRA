import { createContext, useEffect, useState } from "react";

export const AllUserContext = createContext([]);

export const AllUserProvider = (props) => {
  const[oneUser,setOneUser]=useState();
  const [AllUser, setAllUser] = useState();
  const [loading, setLoading] = useState(false);

  const handleAllUserDetails = async () => {
    setLoading(true)

    try {
      const res =await fetch("http://localhost:3000/api/user/suggestion", {
        method: "Get",
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      console.log("AllUser");

      setAllUser(data);
      console.log("AllUser");

    //   console.log("all user for suggetion", data);
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    handleAllUserDetails();
    setLoading(false)
  }, []);

  return (
    <AllUserContext.Provider value={{loading, AllUser ,oneUser,setOneUser,setLoading}}>
      {props.children}
    </AllUserContext.Provider>
  );
};
