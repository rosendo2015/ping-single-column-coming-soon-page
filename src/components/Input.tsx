import type { InputHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const inputStyles = tv({
  slots: {
    root: "min-w-0",
    label: "sr-only",
    control: `min-h-14 w-full rounded-full border bg-white px-7 
      font-sans text-base font-light text-ping-ink 
      placeholder:text-ping-gray/75 focus-visible:outline-3 
      focus-visible:outline-offset-3 focus-visible:outline-none`,
    error: "mt-2 ml-7 block text-left text-xs italic text-ping-red",
  },
  variants: {
    state: {
      default: { control: "border-ping-blue-200" },
      error: { control: "border-ping-red" },
    },
    size: {
      medium: { control: "min-h-14 px-7" },
      large: { control: "min-h-16 px-8" },
    },
  },
  defaultVariants: {
    state: "default",
    size: "medium",
  },
});

type InputVariants = VariantProps<typeof inputStyles>;
type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  id: string;
  label: string;
  error?: string;
  size?: InputVariants["size"];
};

function Input({ id, label, error, size, className, ...props }: InputProps) {
  const styles = inputStyles({ state: error ? "error" : "default", size });

  return (
    <div className={styles.root()}>
      <label className={styles.label()} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.control({ className })}
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <span className={styles.error()} id={`${id}-error`}>
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;
