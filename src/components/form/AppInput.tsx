import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input"; // Update the path to your Input component
import { FormControl, FormItem } from "@/components/ui/form"; // Add your specific Form components
import { cn } from "@/lib/utils";

const AppInput = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        control={control}
        name="username"
        render={({ field, fieldState: { error } }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder="shadcn"
                {...field}
                className={cn(error && "border-red-500")}
              />
            </FormControl>
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
          </FormItem>
        )}
      />
      <button
        type="submit"
        className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default AppInput;
