import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">login</button>
            </Link>
        </div>
    );
};

export default Home;