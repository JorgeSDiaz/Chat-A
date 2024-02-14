import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import ErrorRulesMessage from "./ErrorRulesMessage";

// interface IFormInput {
//   email: string;
//   username: string;
//   password: string;
//   confirmPassword: string;
//   birthDate: Date;
// }

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const getCurrentDate = (): string => {
    const date: Date = new Date();
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    const day: number = date.getDate();

    return `${year}-${month < 10 ? "0" + month.toString() : month}-${day < 10 ? "0" + day.toString() : day}`
  }

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
  }

  const inputStyle: string = "block w-full bg-gray-100 hover:bg-gray-200 placeholder:text-zinc-500 rounded-md p-3 border ";
  const errorInputStyle: string = "border-red-500 focus:outline-red-500";

  const emailRules: string[] = ["Use of lowercase letters only", "Minimum one @ and one ."];
  const usernameRules: string[] = ["Use of lowercase and uppercase letters", "Use of numbers", "No special characters", "Minimum 5 characters", "Maximum 20 characters"];
  const passwordRules: string[] = ["Use minimum one special characters", "Minimum 8 characters", "Use minimum one lowercase letter", "Use minimum one uppercase letter", "Use minimum one number"]

  return (
    <div onSubmit={handleSubmit((data) => onSubmit(data))} className="bg-green-100 h-screen flex items-center justify-center">
      <div className="bg-white p-12 rounded-lg">
        <form className="w-72 mx-auto">
          <h1 className="block text-4xl mb-8 text-sky-950 font-bold">Chat-A Register</h1>
          <div className="flex flex-col gap-4">
            <div>
              <input
                type="email"
                placeholder="Email ⁕"
                className={`${inputStyle}` + `${errors.email ? errorInputStyle : ""}`}
                {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ })}
              />
              {errors.email?.type === "pattern" &&
                <ErrorRulesMessage title="Invalid email" rules={emailRules} />
              }
            </div>

            <div>
              <input
                type="text"
                placeholder="Username ⁕"
                className={`${inputStyle}` + `${errors.username ? errorInputStyle : ""}`}
                {...register("username", { required: true, minLength: 5, maxLength: 20, pattern: /^[a-zA-Z0-9]+$/ })}
              />
              {(errors.username?.type === "minLength" || errors.username?.type === "maxLength" || errors.username?.type === "pattern") &&
                <ErrorRulesMessage title="Invalid username" rules={usernameRules} />
              }
            </div>

            <div>
              <input
                type="date"
                placeholder="Date of Birth"
                max={getCurrentDate()}
                className={`${inputStyle}` + `${errors.birthDate ? errorInputStyle : ""}`}
                {...register("birthDate", { required: true })}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password ⁕"
                className={`${inputStyle}` + `${errors.password ? errorInputStyle : ""}`}
                {...register("password", {
                  required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~\\-]).{8,}$/
                })}
              />
              {
                (errors.password?.type === "minLength" || errors.password?.type === "pattern") &&
                <ErrorRulesMessage title="Invalid password" rules={passwordRules} />
              }
            </div>

            <div>

              <input
                type="password"
                placeholder="Confirm password ⁕"
                className={`${inputStyle}` + `${errors.confirmPassword ? errorInputStyle : ""}`}
                {...register("confirmPassword", { required: true, validate: (value) => value === watch("password") })}
              />
              {errors.confirmPassword?.type === "validate" &&
                <p className="text-xs text-red-500 font-bold mt-1">Passwords do not match</p>
              }
            </div>
          </div>
          <button className="bg-green-500 text-white font-bold block w-full rounded-md p-2 mt-7 hover:bg-green-600 disabled:bg-green-300" disabled={Object.keys(errors).length > 0}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
