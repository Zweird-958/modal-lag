"use client";

import { ModalProps } from "@nextui-org/react";
import WishForm from "./WishForm";
import { Wish } from "@/types/wish";

type Props = {
	wish: Wish;
} & Pick<ModalProps, "isOpen" | "onOpenChange">;

const EditWishForm = ({ isOpen, onOpenChange, wish }: Props) => {
	return (
		<WishForm
			title={"wish.update.title"}
			submitText={"wish.update.submit"}
			onSubmit={() => console.log("submit")}
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			isLoading={false}
			wish={wish}
		/>
	);
};

export default EditWishForm;
