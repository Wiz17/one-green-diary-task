import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUsersApi } from "../api/userApi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadedData } from "../redux/reducers/apiDataFetch";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { data } = useSelector((state) => state.apiDataFetch);
  console.log(data);
  const dispatch = useDispatch();

  // Fetch and store users in Redux
  useEffect(() => {
    dispatch(loadedData());
  }, [dispatch]);
  useEffect(() => {
    const fetchUser = () => {
      try {
        const users = data;
        const userDetail = users.find((u) => u.id === parseInt(id));
        if (userDetail) {
          setUser(userDetail);
        } else {
          setError("User not found");
        }
      } catch (err) {
        console.error("Error fetching user:", err);
        setError("Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
          alt="Loading..."
          className="w-[10%]"
        />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  const { name, email, phone, website, company, address } = user;

  return (
    <>
      <div className="sm:flex">
        <div className="w-1/5 sm:bg-gray-50 sm:h-screen  pt-10 max-sm:mx-auto">
          <div className="w-20 h-20 bg-gray-200 rounded-[50%] flex justify-center items-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60px"
              height="60px"
              viewBox="0 0 24 24"
              fill="none"
              className=""
            >
              <path
                d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z"
                fill="#000000"
              />
            </svg>
          </div>
        </div>
        <div className="sm:w-4/5 max-sm:px-5 sm:px-10">
          <h1 className="text-5xl my-10 max-sm:text-center">{name}</h1>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Email:</strong> {email}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Phone:</strong> {phone}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Website:</strong>{" "}
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline"
            >
              {website}
            </a>
          </p>
          <div className="md:flex mt-4">
            <div className="bg-zinc-100 p-3 rounded-lg">
              <p className="text-xs">Company</p>
              <div>{company?.name.replace(/-/g, " ")}</div>
              <div className="italic">"{company?.bs}"</div>
            </div>
            <div className="bg-zinc-100 p-3 rounded-lg md:ml-5 max-md:mt-5">
              <p className="text-xs">Address</p>
              {address?.street}, {address?.suite}, {address?.city},{" "}
              {address?.zipcode}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetail;
