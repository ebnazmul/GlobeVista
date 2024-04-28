import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContexts } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const {
    signInWithEmail,
    userInstantUpdate,
    setUserInstantUpdate,
    signInWithGoogle,
    signInWithGithub
  } = useContext(AuthContexts);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmail(email, password)
      .then(() => {
        toast.success("Login success");
        setUserInstantUpdate(!userInstantUpdate);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Successfully Logged!");
        setUserInstantUpdate(!userInstantUpdate);
        navigate("/");
      })
      .catch(() => toast.error("Something went wrong"));
  };

  const handleSignInGithub = () => {
    signInWithGithub()
      .then(() => {
        toast.success("Successfully Logged!");
        setUserInstantUpdate(!userInstantUpdate);
        navigate("/");
      })
      .catch(() => {
        toast.error("Something went wrong")
        // console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl text-center my-4">Login</h2>
        <div className="w-[320px] mx-auto border p-5 mb-40">
          <p className="mb-2">Email</p>
          <input
            className="border outline-none py-1 px-2 w-full"
            type="text"
            placeholder="Enter your email..."
            {...register("email")}
          />
          <p className="mb-2 mt-4">Password</p>
          <input
            className="border outline-none py-1 px-2 w-full"
            type="password"
            placeholder="Enter your password..."
            {...register("password")}
          />
          <p className="mt-4">
            Dont have an account?{" "}
            <Link to="/register">
              <span className="text-blue-800">Register</span>
            </Link>
          </p>
          <button
            type="submit"
            className="w-full bg-gray-300 text-gray-800 mt-5 px-1 py-2 rounded">
            Login
          </button>

          <div className="flex mt-4 justify-between items-center gap-1 *:rounded *:text-gray-800">
            <button
              type="button"
              onClick={handleSignInGoogle}
              className="w-full bg-blue-300 py-1">
              Google
            </button>
            <button onClick={handleSignInGithub} type="button" className="w-full bg-blue-300 py-1">
              Github
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
