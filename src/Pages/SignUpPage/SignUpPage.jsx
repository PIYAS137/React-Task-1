import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";



const SignUpPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }





    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-xl mx-auto">
            <h1 className=" text-3xl text-center font-bold">Sign Up Here</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-white">Name</span>
                </label>
                <input {...register("name", { required: true })} placeholder="Enter your name" className="input input-bordered bg-gray-600" />
                {errors.name && <span className=" text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-white">Phoro URL</span>
                </label>
                <input {...register("photo", { required: true })} placeholder="Enter your photo url" className="input input-bordered bg-gray-600" />
                {errors.photo && <span className=" text-red-500">This field is required</span>}
            </div>
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

export default SignUpPage