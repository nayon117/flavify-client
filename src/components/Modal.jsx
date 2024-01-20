import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action mt-0">
            <form className="card-body " method="dialog">
              <h3 className="font-bold text-lg">Please login!</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label mt-1">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-first text-white"
                />
              </div>
              <p className="text-center my-2">
                Do not have a account?{" "}
                <Link to="signup" className="ml-2 text-second underline">
                  Signup Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default Modal;
