"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

interface InpputProps {
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}

const AppInput = ({
  name,
  type = "text",
  required = true,
  placeholder = `Enter your ${name}`,
}: InpputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1">
      <Input
        {...register(name, { required })}
        type={type}
        placeholder={placeholder}
        className={errors[name] ? "border-red-500 focus:ring-red-500" : ""}
      />
      {errors[name] && (
        <p className="text-sm text-red-500">
          {(errors[name]?.message as string) || `${name} is required.`}
        </p>
      )}
    </div>
  );
};

export default AppInput;

// "use client";

// import { Input } from "@nextui-org/input";
// import { useFormContext } from "react-hook-form";

// interface InpputProps {
//   variant?: "flat" | "bordered" | "faded" | "underlined";
//   size?: "sm" | "md" | "lg";
//   required?: boolean;
//   type?: string;
//   label: string;
//   name: string;
// }

// const AppInput = ({
//   variant = "bordered",
//   size = "sm",
//   required = false,
//   type = "text",
//   label,
//   name,
// }: InpputProps) => {
//   const {
//     register,
//     formState: { errors },
//   } = useFormContext();

//   return (
//     <Input
//       {...register(name)}
//       errorMessage={errors[name] ? (errors[name].message as string) : ""}
//       isInvalid={!!errors[name]}
//       label={label}
//       required={required}
//       size={size}
//       type={type}
//       variant={variant}
//     />
//   );
// };

// export default AppInput;
