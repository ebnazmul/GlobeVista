import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center flex h-[50vh] items-center justify-center">
            <div className="space-y-1 border p-20">
            <h2 className="text-3xl">404!</h2>
            <p className="text-xl">Page not found!</p>
            <Link to="/"><button className="bg-gray-700 px-4 py-2 text-white rounded mt-4">Go Home</button></Link>
            </div>
        </div>
    );
};

export default Error;