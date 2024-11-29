const Main = ({ company, name, email, phone }) => {
  return (
    <>
      <div className="border border-gray-300 shadow-lg rounded-lg p-6 m-4 bg-white  transform hover:scale-105 transition-transform duration-300">
        <h1 className="font-bold text-2xl text-gray-800 mb-2">{name}</h1>
        <p className="text-xs text-gray-500 -mb-1">Company name:</p>
        <p className="text-lg text-gray-600 font-medium mb-1">{company.replace(/-/g, ' ')}</p>
        <p className="text-sm text-gray-500 mb-1">Email: {email}</p>
        <p className="text-sm text-gray-500">Phone: {phone}</p>
      </div>
    </>
  );
};
export default Main;
