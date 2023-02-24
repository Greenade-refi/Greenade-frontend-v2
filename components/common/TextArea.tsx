import React, { FC } from "react";

type TextAreaDefaultProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type TextAreaProps = {
  label: string;
  startText?: string;
  subLabel?: string;
  fullWidth?: boolean;
} & TextAreaDefaultProps;

const TextArea: FC<TextAreaProps> = ({
  label,
  startText,
  subLabel,
  fullWidth = false,
  className,
  children,
  ...inputProps
}) => {
  const fullWidthStyle = fullWidth ? "w-full" : "";
  // const fullWidthStyle = "";

  const renderCustomInput = () => (
    <div className="flex flex-row w-full">
      <div className="flex items-center justify-center p-2 text-xs text-gray-400 bg-gray-100 border border-r-0 border-gray-200 rounded-l-lg md:text-md md:p-3 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-600">
        {startText}
      </div>
      <textarea
        rows={4}
        {...inputProps}
        className={`flex grow p-2 min-w-[10px] md:p-3 text-sm border dark:text-white dark:bg-gray-500 border-gray-200 dark:border-gray-800 placeholder:text-gray-400 rounded-r-lg focus:ring-1 focus:ring-brand-600 dark:focus:ring-brand-400 focus:outline-none ${fullWidthStyle} ${className}`}>
        {children}
      </textarea>
    </div>
  );

  const renderLabel = () => (
    <label
      htmlFor={inputProps.id ?? ""}
      className="font-medium text-gray-600 dark:text-gray-300 ">
      {label}{" "}
      {subLabel && (
        <span className="text-sm text-gray-400 dark:text-gray-600">
          ({subLabel})
        </span>
      )}
    </label>
  );

  return (
    <div className={`flex flex-col gap-2 text-sm gap ${fullWidthStyle}`}>
      {renderLabel()}
      {startText ? (
        renderCustomInput()
      ) : (
        <textarea
          rows={4}
          {...inputProps}
          className={`p-2 md:p-3 text-sm border dark:text-white dark:bg-gray-500 dark:border-gray-800  border-gray-200 placeholder:text-gray-400 rounded-lg focus:ring-1 focus:ring-brand-600 dark:focus:ring-brand-400 focus:outline-none ${fullWidthStyle} ${className}`}></textarea>
      )}
    </div>
  );
};

export default TextArea;
