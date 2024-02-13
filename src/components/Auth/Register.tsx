import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  email: string;
  username: string;
  password: string;
  verifyPassword: string;
  birthDate: Date;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  }

  return (
    <div onSubmit={handleSubmit((data) => onSubmit(data))} className="bg-green-100 h-screen flex items-center">
      <form className="w-72 mx-auto">
        <h1 className="block text-4xl mb-6 text-sky-950 font-bold">Chat-A Register</h1>
        <div className="flex flex-col gap-3">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="block w-full rounded-md p-2 border"
              {...register("email", { required: { value: true, message: "Email is required" } })}
            />
            {
              errors.email?.type === "required" && <span className="text-red-500 text-sm ml-2 font-semibold italic">{(errors.email.message)?.toString()}</span>
            }
          </div>

          <div>
            <input
              type="text"
              placeholder="Username"
              className="block w-full rounded-md p-2 border"
              {...register("username", { required: { value: true, message: "Username is required" } })}
            />
            {
              errors.username?.type === "required" && <span className="text-red-500 text-sm ml-2 font-semibold italic">{(errors.username.message)?.toString()}</span>
            }
          </div>

          <div>
            <input
              type="date"
              placeholder="Date of Birth"
              className="block w-full rounded-md p-2 border text-gray-400"
              {...register("birthDate", { required: { value: true, message: "Birthday is required" } })}
            />
            {
              errors.birthDate?.type === "required" && <span className="text-red-500 text-sm ml-2 font-semibold italic">{(errors.birthDate.message)?.toString()}</span>
            }
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="block w-full rounded-md p-2 border"
              {...register("password", { required: { value: true, message: "Password is required" } })}
            />
            {
              errors.password?.type === "required" && <span className="text-red-500 text-sm ml-2 font-semibold italic">{(errors.password.message)?.toString()}</span>
            }
          </div>

          <div>

            <input
              type="password"
              placeholder="Verify password"
              className="block w-full rounded-md p-2 border"
              {...register("verifyPassword")}
            />
          </div>
        </div>
        <button className="bg-green-500 text-white block w-full rounded-md p-2 mt-6">
          Register
        </button>
      </form>
    </div>
  );
}
