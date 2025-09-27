"use client";

type RadioGroupOption<T extends string> = {
  label: string;
  value: T;
};

type RadioGroupProps<T extends string> = {
  name: string;
  options: RadioGroupOption<T>[];
  value: T;
  onChange: (value: T) => void;
};

export default function RadioGroup<T extends string>({
  name,
  options,
  value,
  onChange,
}: RadioGroupProps<T>) {
  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <label key={option.value} className="cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="peer hidden"
          />
          <span className="px-4 py-2 bg-tertiary text-foreground font-semibold rounded-xl border border-primary-border-color peer-checked:border-secondary-border-color peer-checked:bg-on-foreground peer-checked:text-secondary-text-color">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}
