"use client";

import WishList from "@/components/WishList";
import { Wish } from "@/types/wish";

const WISHES: Wish[] = new Array(20).fill({
	id: 13,
	name: "Spiderman Remastered",
	image: "https://pub-809278cc55e943c291c7d96991db59df.r2.dev/IYm1CF0.jpg",
	link: "https://www.dlcompare.fr/jeux/100011767/acheter-marvels-spiderman-remastered",
	price: 25.41,
	currency: "EURO",
	userId: 1,
	purchased: true,
	createdAt: "2023-09-29T07:29:43.115Z",
	isPrivate: false,
	priceFormatted: "€25.41",
});

const Page = () => {
	return <WishList wishes={WISHES} canEdit={true} />;
};

export default Page;
