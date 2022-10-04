import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { LoginAPI } from "../api/auth";

import {
  FormContainer,
  Title,
  Label,
  Input,
  Button,
  ErrorMsg,
} from "./FormStyle";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = useCallback(() => {
    console.log("hi");
    LoginAPI();
  }, []);

  console.log(errors);
  return (
    <FormContainer onSubmit={handleSubmit(onSubmitForm)}>
      <Title>로그인</Title>
      <Label htmlFor="id">아이디</Label>
      <Input
        id="id"
        type="email"
        {...register("id", { required: "아이디는 필수 입력사항입니다." })}
      />
      {errors.id && <ErrorMsg>{errors.id.message}</ErrorMsg>}
      <Label htmlFor="password">비밀번호</Label>
      <Input
        id="password"
        type="password"
        {...register("password", {
          required: true,
          minLength: { value: 8, message: "비밀번호는 8자리 이상입니다." },
        })}
      />
      {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
      <Button type="submit">로그인하기</Button>
    </FormContainer>
  );
}
