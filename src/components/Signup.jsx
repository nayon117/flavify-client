import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import Modal from "./Modal";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="max-w-md bg-white shadow w-full flex justify-center items-center mx-auto my-12">
      <div className="modal-action flex flex-col justify-center mt-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body "
          method="dialog"
        >
          <h3 className="font-bold text-lg">Create A Account!</h3>

          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password")}
            />
            <label className="label mt-1">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {/* error text */}

          {/* login btn */}
          <div className="form-control mt-2">
            <input
              type="submit"
              value="Sign Up"
              className="btn bg-first text-white"
            />
          </div>
          <p className="text-center mt-2">
            Already have an account?
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="ml-2 text-second underline"
            >
              SignIn Now
            </button>
          </p>
        </form>

        {/* social btns */}
        <div className="text-center mb-5 space-x-3">
          <button className="btn btn-circle hover:bg-first hover:text-white">
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-first hover:text-white">
            <FaFacebook />
          </button>
          <button className="btn btn-circle hover:bg-first hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
      <Modal />
    </div>
  );
};
export default Signup;
