import React, { useState } from "react";

const UserForm = () => {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [field, nestedField] = name.split(".");

    if (nestedField) {
      setUserData((prevData) => ({
        ...prevData,
        [field]: {
          ...prevData[field],
          [nestedField]: value,
        },
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submitted:", userData);
    //can send above data in backend
  };

  return (
    <>
      <div className="bg-zinc-200 p-5 text-xl">Admin Controller</div>
      <div className="p-5 w-[95%] sm:w-[80%] md:w-1/2 mx-auto">
        <div>Fill below form to add user:</div>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="username" className="block">
              Username:
            </label>
            <input
              required
              type="text"
              id="username"
              name="username"
              value={userData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="email" className="block">
              Email:
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold">Address:</h3>
            <div>
              <label htmlFor="address.street" className="block">
                Street:
              </label>
              <input
                required
                type="text"
                id="address.street"
                name="address.street"
                value={userData.address.street}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="address.suite" className="block">
                Suite:
              </label>
              <input
                required
                type="text"
                id="address.suite"
                name="address.suite"
                value={userData.address.suite}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="address.city" className="block">
                City:
              </label>
              <input
                required
                type="text"
                id="address.city"
                name="address.city"
                value={userData.address.city}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="address.zipcode" className="block">
                Zipcode:
              </label>
              <input
                required
                type="text"
                id="address.zipcode"
                name="address.zipcode"
                value={userData.address.zipcode}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="address.geo.lat" className="block">
                Latitude:
              </label>
              <input
                required
                type="text"
                id="address.geo.lat"
                name="address.geo.lat"
                value={userData.address.geo.lat}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="address.geo.lng" className="block">
                Longitude:
              </label>
              <input
                required
                type="text"
                id="address.geo.lng"
                name="address.geo.lng"
                value={userData.address.geo.lng}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block">
              Phone:
            </label>
            <input
              required
              type="text"
              id="phone"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="website" className="block">
              Website:
            </label>
            <input
              required
              type="text"
              id="website"
              name="website"
              value={userData.website}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold">Company:</h3>
            <div>
              <label htmlFor="company.name" className="block">
                Company Name:
              </label>
              <input
                required
                type="text"
                id="company.name"
                name="company.name"
                value={userData.company.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="company.catchPhrase" className="block">
                Catchphrase:
              </label>
              <input
                required
                type="text"
                id="company.catchPhrase"
                name="company.catchPhrase"
                value={userData.company.catchPhrase}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="company.bs" className="block">
                BS:
              </label>
              <input
                required
                type="text"
                id="company.bs"
                name="company.bs"
                value={userData.company.bs}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
