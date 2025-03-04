"use client";

import { Button } from "@nextui-org/react";
import { ChangeEventHandler, useState } from "react";

const useUploadImage = () => {
	const [image, setImage] = useState<File | null>(null);

	const handleFileUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
		const { files } = event.target;
		setImage(files?.item(0) || null);
	};

	const SelectImageComponent = (
		<Button as={"div"} color="primary" className="w-full">
			<label htmlFor="image" className="truncate">
				{image ? image.name : "image"}
			</label>
			<input
				id="image"
				hidden
				onChange={handleFileUpload}
				type="file"
				accept="image/png, image/jpeg, image/jpg"
			/>
		</Button>
	);

	return { image, SelectImageComponent };
};

export default useUploadImage;
