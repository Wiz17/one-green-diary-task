import React, { useEffect, useState } from "react";
import { fetchUsersApi } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import UserCard from "../components/userCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../redux/reducers/apiDataFetch";

// Header Component
const Header = ({ search, setSearch }) => (
  <div className="md:flex items-center justify-between p-5">
    <h1 className="text-3xl font-bold text-gray-700">Users List</h1>
    <div className="w-full md:w-[80%] flex max-md:justify-between md:justify-end items-center max-md:mt-8">
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 rounded-lg px-5 py-2 w-[70%] md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Link
        to="/admin"
        className="inline-block h-10 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 md:ml-10"
      >
        Admin
      </Link>
    </div>
  </div>
);

// Cards Section Component
const CardsSection = ({ filteredUsers, navigate }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {filteredUsers.length > 0 ? (
      filteredUsers.map((user) => (
        <div
          key={user.id}
          onClick={() => navigate(`/user/${user.id}`)}
          className="cursor-pointer"
        >
          <UserCard
            company={user.company.name}
            name={user.name}
            email={user.email}
            phone={user.phone}
          />
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500">No users found.</p>
    )}
  </div>
);

const UserList = () => {
  const [search, setSearch] = useState(""); // Search input state
  const [filteredUsers, setFilteredUsers] = useState([]); // Filtered users for display
  const navigate = useNavigate();

  const { data, loading } = useSelector((state) => state.apiDataFetch);
  console.log(data)
  const dispatch = useDispatch();

  // Fetch and store users in Redux
  useEffect(() => {
    dispatch(addData());
  }, [dispatch]);

  // Update filtered users when Redux data or search changes
  useEffect(() => {
    if (data && data.length > 0) {
      const lowerCaseSearch = search.toLowerCase();
      const filtered = data.filter(
        (user) =>
          user.name.toLowerCase().includes(lowerCaseSearch) ||
          user.email.toLowerCase().includes(lowerCaseSearch)
      );
      setFilteredUsers(filtered);
    }
  }, [search, data]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {/* Header Section */}
      <Header search={search} setSearch={setSearch} />
      {/* Cards Section */}
      <CardsSection filteredUsers={filteredUsers} navigate={navigate} />
    </div>
  );
};

export default UserList;
