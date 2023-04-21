import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../UserContext";

const useUserDetails = () => {
//   const [user, setUsers] = useState({
//     isAuthenticated: false,
//     username: null,
//     email: null,
//     userId: null,
//   });

  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");

    if (storedToken) {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}userDetails`,
            {
              headers: {
                Authorization: `Bearer ${storedToken}`,
              },
            }
          );

          setUser({
            isAuthenticated: true,
            username: response.data.name,
            email: response.data.email,
            userId: response.data.userId,
          });
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };

      fetchUserDetails();
    }
  }, []);

};
export default useUserDetails;
