import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

// interface IFormInput {
//   email: string;
//   username: string;
//   password: string;
//   verifyPassword: string;
//   birthDate: Date;
// }

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
  }

  const errorInputStyle: string = "border-red-500 focus:outline-red-500";

  const emailRules: string[] = ["Use of lowercase letters only", "Minimum one @ and one ."];

  return (
    <div onSubmit={handleSubmit((data) => onSubmit(data))} className="bg-green-100 h-screen flex items-center">
      <form className="w-72 mx-auto">
        <h1 className="block text-4xl mb-6 text-sky-950 font-bold">Chat-A Register</h1>
        <div className="flex flex-col gap-3">
          <div>
            <input
              type="email"
              placeholder="Email ⁕"
              className={"block w-full rounded-md p-2 border " + `${errors.email ? errorInputStyle : ""}`}
              {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ })}
            />
            {errors.email?.type == "pattern" &&
              <div>
                <span className="text-red-500 text-xs font-bold italic">
                  <p>Invalid email format</p>
                  <ul className="list-disc list-inside">
                    {
                      emailRules.map((emailRule: string) => {
                        return <li className="ml-2">{emailRule}</li>
                      })
                    }
                  </ul>
                </span>
              </div>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Username ⁕"
              className={"block w-full rounded-md p-2 border " + `${errors.username ? errorInputStyle : ""}`}
              {...register("username", { required: true })}
            />
          </div>

          <div>
            <input
              type="date"
              placeholder="Date of Birth"
              className={"block w-full rounded-md p-2 text-gray-400 border " + `${errors.birthDate ? errorInputStyle : ""}`}
              {...register("birthDate", { required: true })}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password ⁕"
              className={"block w-full rounded-md p-2 border " + `${errors.password ? errorInputStyle : ""}`}
              {...register("password", { required: true })}
            />
          </div>

          <div>

            <input
              type="password"
              placeholder="Verify password ⁕"
              className={"block w-full rounded-md p-2 border " + `${errors.verifyPassword ? errorInputStyle : ""}`}
              {...register("verifyPassword", { required: true })}
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
