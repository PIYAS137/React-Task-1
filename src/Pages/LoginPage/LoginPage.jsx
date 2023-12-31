import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/FirebaseContext";
import Swal from "sweetalert2";

const LoginPage = () => {

  const { FirebaseLogin } = useContext(AuthContext)
  const navigate = useNavigate('/')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    FirebaseLogin(data.email, data.pass)
      .then(res => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Log in ",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
      }).catch(err => {
        console.log(err);
      })
  }





  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-xl mx-auto">
      <h1 className=" text-3xl text-center font-bold">Login Here</h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Email</span>
        </label>
        <input {...register("email", { required: true })} placeholder="Enter your email" className="input input-bordered bg-gray-600" />
        {errors.email && <span className=" text-red-500">This field is required</span>}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Password</span>
        </label>
        <input {...register("pass", { required: true })} placeholder="Enter your password" className="input input-bordered bg-gray-600" />
        {errors.pass && <span className=" text-red-500">This field is required</span>}
        <label className="label ">
          <p>Dont have an account?<Link className=" font-semibold text-blue-400 hover:text-blue-300" to={'/signup'}> Create Account</Link> </p>
        </label>
      </div>
      <div className="form-control ">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  )
}

export default LoginPage