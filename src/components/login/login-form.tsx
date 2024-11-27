"use client";

import React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { routes } from "@/routes";
import { Label } from "@/components/ui/label";
import AppInput from "@/components/form/app-input";
import AppForm from "@/components/form/app-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FieldValues, SubmitHandler } from "react-hook-form";
import loginValidationSchema from "@/schemas/login.schemas";

const LoginForm = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <AppForm
        resolver={zodResolver(loginValidationSchema)}
        onSubmit={onSubmit}
      >
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <AppInput name="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <AppInput name="password" type="password" />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href={routes.REGISTER} className="underline">
                Register
              </Link>
            </div>
          </CardContent>
        </Card>
      </AppForm>
    </div>
  );
};

export default LoginForm;
