import Image from "next/image"

interface CardProps {
	title: String,
	content:String,
	date:String

}

export default function Card({title,content,date}:CardProps){
	return(
		<div className="p-2">
			<Image src="https://picsum.photos/300/200?grayscale" width={300} height={200} className="min-w-full" alt="imagePlaceholder"/>
			<h2 className="text-6xl mt-8 hover:underline">{title}</h2>
			<p className="my-8">{content}</p>
			<p>{date}</p>
		</div>
	)
}