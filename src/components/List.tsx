import { ListContent } from "../model/ListContent";
import { ListItem } from "./ListItem";

export function List(props: { contents: ListContent[] }) {
  return (
    <div className="p-4 gap-8 grid grid-cols-2 md:flex md:flex-col">
      {props.contents.map((value, index) => (
        <ListItem content={value} key={index} />
      ))}
    </div>
  );
}
