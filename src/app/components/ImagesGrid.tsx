import Card from "./Card"
import data from "../../../mock/dummyData"

export default function ImagesGrid(){
	console.log(data);
	return(
		<div className="grid grid-cols-3 gap-4">
			{data.map(element=><Card title={element.title} content={element.content} date={element.date}/>)}
			
		</div>
	)
}