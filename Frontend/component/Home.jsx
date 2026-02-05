const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-r from-blue-100 to-purple-200 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-2xl text-center">
        <h2 className="text-5xl font-extrabold text-blue-600 mb-6 drop-shadow-md">
          Welcome to Employee Management
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          A simple and powerful way to manage your employees effortlessly.
        </p>
      </div>
    </div>
  );
};

export default Home;
