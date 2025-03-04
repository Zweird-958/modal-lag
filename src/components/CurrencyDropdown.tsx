"use client";

import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownMenuProps,
	DropdownTrigger,
} from "@nextui-org/react";

type Props = {
	currency: string;
	currencies: string[];
} & Pick<DropdownMenuProps, "onSelectionChange">;

const CurrencyDropdown = ({
	onSelectionChange,
	currency,
	currencies,
}: Props) => (
	<Dropdown>
		<DropdownTrigger>
			<Button variant="bordered" size="lg" className="capitalize w-full">
				{currency}
			</Button>
		</DropdownTrigger>
		<DropdownMenu
			aria-label="Get currency"
			variant="flat"
			disallowEmptySelection
			selectionMode="single"
			selectedKeys={new Set([currency])}
			onSelectionChange={onSelectionChange}
		>
			{currencies.map((item) => (
				<DropdownItem key={item}>{item}</DropdownItem>
			))}
		</DropdownMenu>
	</Dropdown>
);

export default CurrencyDropdown;
