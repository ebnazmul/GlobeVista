import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContexts } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { signUpWithEmail, updateUserProfile } = useContext(AuthContexts);
  const navigate = useNavigate()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const {email, password, fullName, photoURL} = data;
    signUpWithEmail(email, password)
    .then(() => {
      updateUserProfile(fullName, photoURL)
    })
    .catch(err => console.log(err))
    navigate("/")
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl text-center my-4">Register</h2>
        <div className="w-[320px] mx-auto border p-5">
        <p className="mb-2">Full Name</p>
          <input
            className="border outline-none py-1 px-2 w-full"
            type="text"
            placeholder="Enter your full name..."
            {...register("fullName", {required: true})}
          />
          {errors.fullName && <p className="text-xs text-red-400">This field is required</p>}
          <p className="mb-2 mt-4">Email</p>
          <input
            className="border outline-none py-1 px-2 w-full"
            type="text"
            placeholder="Enter your email..."
            {...register("email", {required: true})}
          />
          {errors.email && <p className="text-xs text-red-400">This field is required</p>}
          <p className="mb-2 mt-4">Password</p>
          <input
            className="border outline-none py-1 px-2 w-full"
            type="password"
            placeholder="Enter your password..."
            {...register("password", {required: true})}
          />
          {errors.password && <p className="text-xs text-red-400">This field is required</p>}
          <p className="mb-2 mt-4">Photo URL</p>
          <input
            className="border outline-none py-1 px-2 w-full"
            type="password"
            placeholder="Enter your Photos URL..."
            {...register("photoURL", {required: true})}
          />
          {errors.photoURL && <p className="text-xs text-red-400">This field is required</p>}
          <p className="mt-4">Dont have an account? <Link to="/login"><span className="text-blue-800">Login</span></Link></p>
          <button
            type="submit"
            className="w-full bg-gray-300 mt-5 px-1 py-2 rounded">
            Register
          </button>

          <div className="flex mt-4 justify-between items-center gap-1 *:rounded">
            <button className="w-full bg-blue-300 py-1">Google</button>
            <button className="w-full bg-blue-300 py-1">Github</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
