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
import loginValidationSchema from "@/lib/schemas/login.schemas";

const RegisterForm = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <AppForm
        resolver={zodResolver(loginValidationSchema)}
        onSubmit={onSubmit}
      >
        <Card className="mx-auto max-w-sm w-[900px]">
          <CardHeader>
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>
              Enter your details below to create a new account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid gap-4">
              <div className="flex justify-between gap-2">
                <div className="grid gap-2">
                  <Label htmlFor="firstname">Firstname</Label>
                  <AppInput name="firstname" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastname">Lastname</Label>
                  <AppInput name="lastname" />
                </div>
              </div>
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
              <Link href={routes.LOGIN} className="underline">
                Register
              </Link>
            </div>
          </CardContent>
        </Card>
      </AppForm>
    </div>
  );
};

export default RegisterForm;
