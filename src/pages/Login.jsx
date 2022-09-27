import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

import { FormContainer, Title, Label, Input, Button } from "./FormStyle";

export default function Login() {
  const { register, handleSubmit } = useForm();
  console.log(register);
  return (
    <FormContainer>
      <Title>로그인</Title>
      <Label htmlFor="id">아이디</Label>
      <Input id="id" />
      <Label htmlFor="password">비밀번호</Label>
      <Input id="password" />
      <Button>로그인하기</Button>
    </FormContainer>
  );
}
