import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action flex flex-col justify-center mt-0">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body "
              method="dialog"
            >
              <h3 className="font-bold text-lg">Please login!</h3>

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
                  value="Login"
                  className="btn bg-first text-white"
                />
              </div>
              <p className="text-center mt-2">
                Do not have a account?
                <Link to="signup" className="ml-2 text-second underline">
                  Signup Now
                </Link>
              </p>
              <button
                htmlFor="my_modal_5"
                onClick={() =>
                  document.getElementById("my_modal_5").close()
                }
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>

            {/* social btns */}
            <div className="text-center  space-x-3">
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
        </div>
      </dialog>
    </div>
  );
};
export default Modal;
