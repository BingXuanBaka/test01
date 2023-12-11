import moment from "moment";
import AiFillFire from "../assets/AiFillFire.svg";
import AiFillHeart from "../assets/AiFillHeart.svg";
import { ListContent } from "../model/ListContent";

export function ListItem(props: {
  content: ListContent
}) {
  return (
    <div className="flex flex-row gap-2.5 max-md:flex-col">
      <img className="rounded-[5px] md:h-[151px]" src={props.content.imgSrc} />
      <div className="flex flex-col gap-1.5">
        <h2 className="text-2xl font-bold">{props.content.title}</h2>
        <div className="flex flex-row gap-3 text-sm text-gray-500 h-6 items-center max-md:hidden">
          <span>
            情报更新日：{moment(props.content.updateDate).format("YYYY/MM/DD hh:mm")}
          </span>

          <div className="flex flex-row items-center gap-1">
            <img src={AiFillFire} className="h-3.5 w-3.5" />
            <span>{props.content.hotRate}</span>
          </div>

          <button className="flex flex-row items-center gap-2 text-xs border-gray-200 border px-2 rounded-md h-6">
            <img src={AiFillHeart} className="h-3 w-3" />
            <span>{props.content.likes}</span>
          </button>
        </div>

        <div className="flex flex-row gap-2 text-sm text-gray-500 max-md:hidden">
          {[...props.content.tags].map((type) =>
            type[1].map((value, index) => (
              <div key={index} className="bg-gray-100 flex flex-row rounded-md p-2 h-5 items-center text-xs">
                {type[0]}:{value}
              </div>
            ))
          )}
        </div>

        <div>
          <p className="line-clamp-2 overflow-hidden text-base">{props.content.description}</p>
        </div>
      </div>
    </div>
  );
}
