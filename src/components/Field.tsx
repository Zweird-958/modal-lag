import { Input, InputProps } from "@nextui-org/react";
import {
	Control,
	Controller,
	ControllerRenderProps,
	FieldErrors,
	FieldValues,
	Path,
} from "react-hook-form";

export type FormProps<TFieldValues extends FieldValues> = {
	name: Path<TFieldValues>;
	control: Control<TFieldValues>;
} & InputProps;

const Field = <TFieldValues extends FieldValues>({
	name,
	control,
	...props
}: FormProps<TFieldValues>) => {
	const handleErrorMessage = (
		field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>,
		error: FieldErrors<TFieldValues>
	) => "This field is required";

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState: { errors } }) => (
				<Input
					color="primary"
					variant="bordered"
					{...field}
					size="md"
					{...props}
					isInvalid={errors[name] && true}
					errorMessage={errors[name] && handleErrorMessage(field, errors)}
				/>
			)}
		/>
	);
};

export default Field;
