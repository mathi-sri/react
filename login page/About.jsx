import React from "react";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import{yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().required("enter the firstname"),
  lastName: yup.string().required("enter the lastname"),
  email:yup.string().email().required("enter the valid email"),
  age: yup.number().transform((value, originalValue) => originalValue === "" ? undefined : value).integer("age must be a whole number")
  .positive("age must be positive")
  .required("enter the age"),
  password:yup.string().min(4,'minimum 4 char rquried').max(15,'enter only 15 char'),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "password must match").required("confirm your password"),
  gender: yup.string().required("Please select your gender"),
  dateofbirth:yup.date().transform((value, originalValue) =>
    originalValue === "" ? undefined : value).required("please select your date of birth"),
  terms:yup.boolean().oneOf([true],"you must accept the term and condition"),
  conuntry:yup.string().required("please select your country")
})


  const Form = () => {
    const{register,handleSubmit,formState:{errors,isValid,isDirty}}=useForm({resolver:yupResolver(schema),
      mode:'onBlur',
    });
    console.log(isValid)

   return (
    <div className="Form"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
      }}>
        <div style={{
            width: "400px",
    backgroundColor: "white",
    padding: "35px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
    textAlign: "center",
        }}>
      <h2 style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#333",
          }}> sign up</h2>
      <div className="input">
        <form onSubmit={handleSubmit((data)=>{
          console.log(data)
           alert("Registration successful!")
        })}>
  
          <input {...register('firstName')} placeholder="first Name..." />
          <p>{errors.firstName?.message}</p>
          <input {...register('lastName')} placeholder="last Name..." />
          <p>{errors.lastName?.message}</p>
          <input {...register('email')} placeholder="email..." />
          <p>{errors.email?.message}</p>
          <input {...register('age')} placeholder="age..." />
          <p>{errors.age?.message}</p>
          <input {...register('password')} type = "password" placeholder="password..." />
          <p>{errors.password?.message}</p>
          <input {...register("confirmPassword")}type="password"placeholder="confirm password..."/>
          <p>{errors.confirmPassword?.message}</p>
          <label>
                <input {...register("gender")} type="radio" value ="female"  />female
          </label>
          <label>
            <input {...register("gender")} type="radio" value ="male"  />male
          </label>
          <p>{errors.gender?.message}</p>
          <label >DOB: 
            <input {...register("dateofbirth")} type="date" />
          <p>{errors.dateofbirth?.message}</p>
          </label>
          <label>country:</label>
          <select {...register("conuntry")}>
            <option value="">select your country</option>
            <option value="india">India</option>
            <option value="china">China</option>
            <option value="thailand">Thailand</option>
            <option value="south korea">South korea</option>
            <option value="japan">Japan</option>
          </select>
          <p> {errors.conuntry?.message} </p>
          <label>
            <input {...register("term")} type="checkbox" />
          I accept the term and condition 
          </label>
          <p>{errors.terms?.message}</p>
          <input type="submit" id="submit" disabled={isDirty && !isValid} />
          </form>
      </div>

    </div>

    </div>

  );
};

export default Form;