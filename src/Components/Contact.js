import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required("please enter valid data"),
    email: yup.string().email().required("please enter valid data"),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18)
      .required("please enter valid data"),
    address: yup.string().min(6).max(30).required(""),
    message: yup.string().min(4).max(50).required(""),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onClick=(data)=>{
    console.log(data)
  }

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onClick)}>
        <input
          type="text"
          name="name"
          placeholder="name.."
          {...register("name")}
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
        <input
          type="text"
          name="email"
          placeholder="email.."
          {...register("email")}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <input
          type="text"
          name="age"
          placeholder="age.."
          {...register("age")}
        />
        <p style={{ color: "red" }}>{errors.age?.message}</p>
        <input
          type="text"
          name="address"
          placeholder="address.."
          {...register("address")}
        />
        <p style={{ color: "red" }}>{errors.address?.message}</p>
        <input
          type="text"
          name="message"
          placeholder="message.."
          {...register("message")}
        />
        <p style={{ color: "red" }}>{errors.message?.message}</p>
        <button type="submit" className="btn1">Submit Data</button>
      </form>
    </div>
  );
};

export default Form;
