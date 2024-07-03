export type Wish = {
	id: number;
	name: string;
	image?: string;
	link?: string;
	price: number;
	currency: string;
	userId: number;
	purchased: boolean;
	createdAt: Date;
	isPrivate: boolean;
	priceFormatted: string;
};
