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
          <span className="px-4 py-2 rounded-xl border border-gray-700 peer-checked:border-gray-300 peer-checked:bg-primary peer-checked:text-foreground">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}
