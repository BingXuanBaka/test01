import Linear from "../assets/Linear.svg";
import Prev from "../assets/Prev.svg";
import Next from "../assets/Next.svg";

import { IconButton } from "./IconButton";

export function Pager(props: {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="flex flex-row gap-4">
      <IconButton
        onClick={() => props.onPageChange(props.currentPage - 1)}
        disabled={props.currentPage <= 0}
      >
        <img src={Prev} />
      </IconButton>

      {props.pageCount <= 4 ? (
        [...Array(props.pageCount).keys()].map((value) => (
          <IconButton
            disabled={props.currentPage == value}
            onClick={() => props.onPageChange(value)}
          >
            {value + 1}
          </IconButton>
        ))
      ) : (
        <>
          <IconButton
            disabled={props.currentPage <= 0}
            onClick={() => props.onPageChange(0)}
          >
            1
          </IconButton>

          {props.currentPage <= 1 && (
            <IconButton
              disabled={props.currentPage == 1}
              onClick={() => props.onPageChange(1)}
            >
              2
            </IconButton>
          )}

          {props.currentPage > 1 && props.currentPage < props.pageCount - 2 && (
            <>
              <IconButton className="pointer-events-none"
              >
                <img src={Linear} />
              </IconButton>

              <IconButton disabled>
                {props.currentPage + 1}
              </IconButton>
            </>
          )}

          <IconButton className="pointer-events-none">
            <img src={Linear} />
          </IconButton>

          {props.currentPage >= props.pageCount - 2 && (
            <IconButton
              disabled={props.currentPage == props.pageCount - 2}
              onClick={()=>props.onPageChange(props.pageCount - 2)}
            >
              {props.pageCount - 1}
            </IconButton>
          )}

          <IconButton
            disabled={props.currentPage >= props.pageCount - 1}
            onClick={()=>props.onPageChange(props.pageCount - 1)}
          >
            {props.pageCount}
          </IconButton>
        </>
      )}

      <IconButton
        disabled={props.currentPage >= props.pageCount - 1}
        onClick={()=>props.onPageChange(props.currentPage + 1)}
      >
        <img src={Next} />
      </IconButton>
    </div>
  );
}
