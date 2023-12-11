import moment from "moment";
import { List } from "./components/List";
import { Pager } from "./components/Pager";
import { useState } from "react";

function App() {
  const tags = new Map<string, string[]>();
  tags.set("type", ["action", "adventure"]);
  tags.set("species", ["tiger", "wolf"]);

  const [currentPage, setCurrentPage] = useState(0)

  return (
    <>
      <List
        contents={[
          {
            title: "三相奇谈",
            description:
              "在一个人类和妖怪共同生活的世界，三个主角、三段不同的命运，交织在一起，冒险由此展开！跟随《三相奇谈》一起，探索这个奇妙的国度，聆听不同的故事。",
            tags: tags,
            updateDate: moment("20220615 0415", "YYYYMMDD hhmm").toDate(),
            hotRate: 578,
            likes: 123,
            imgSrc: "image4.png",
          },
          {
            title: "三相奇谈",
            description:
              "在一个人类和妖怪共同生活的世界，三个主角、三段不同的命运，交织在一起，冒险由此展开！跟随《三相奇谈》一起，探索这个奇妙的国度，聆听不同的故事。",
            tags: tags,
            updateDate: moment("20220615 0415", "YYYYMMDD hhmm").toDate(),
            hotRate: 578,
            likes: 123,
            imgSrc: "image4.png",
          },
          {
            title: "三相奇谈",
            description:
              "在一个人类和妖怪共同生活的世界，三个主角、三段不同的命运，交织在一起，冒险由此展开！跟随《三相奇谈》一起，探索这个奇妙的国度，聆听不同的故事。",
            tags: tags,
            updateDate: moment("20220615 0415", "YYYYMMDD hhmm").toDate(),
            hotRate: 578,
            likes: 123,
            imgSrc: "image4.png",
          },
          {
            title: "三相奇谈",
            description:
              "在一个人类和妖怪共同生活的世界，三个主角、三段不同的命运，交织在一起，冒险由此展开！跟随《三相奇谈》一起，探索这个奇妙的国度，聆听不同的故事。",
            tags: tags,
            updateDate: moment("20220615 0415", "YYYYMMDD hhmm").toDate(),
            hotRate: 578,
            likes: 123,
            imgSrc: "image4.png",
          },
          {
            title: "三相奇谈",
            description:
              "在一个人类和妖怪共同生活的世界，三个主角、三段不同的命运，交织在一起，冒险由此展开！跟随《三相奇谈》一起，探索这个奇妙的国度，聆听不同的故事。",
            tags: tags,
            updateDate: moment("20220615 0415", "YYYYMMDD hhmm").toDate(),
            hotRate: 578,
            likes: 123,
            imgSrc: "image4.png",
          },
          {
            title: "三相奇谈",
            description:
              "在一个人类和妖怪共同生活的世界，三个主角、三段不同的命运，交织在一起，冒险由此展开！跟随《三相奇谈》一起，探索这个奇妙的国度，聆听不同的故事。",
            tags: tags,
            updateDate: moment("20220615 0415", "YYYYMMDD hhmm").toDate(),
            hotRate: 578,
            likes: 123,
            imgSrc: "image4.png",
          },
          {
            title: "三相奇谈",
            description:
              "在一个人类和妖怪共同生活的世界，三个主角、三段不同的命运，交织在一起，冒险由此展开！跟随《三相奇谈》一起，探索这个奇妙的国度，聆听不同的故事。",
            tags: tags,
            updateDate: moment("20220615 0415", "YYYYMMDD hhmm").toDate(),
            hotRate: 578,
            likes: 123,
            imgSrc: "image4.png",
          },
          {
            title: "三相奇谈",
            description:
              "在一个人类和妖怪共同生活的世界，三个主角、三段不同的命运，交织在一起，冒险由此展开！跟随《三相奇谈》一起，探索这个奇妙的国度，聆听不同的故事。",
            tags: tags,
            updateDate: moment("20220615 0415", "YYYYMMDD hhmm").toDate(),
            hotRate: 578,
            likes: 123,
            imgSrc: "image4.png",
          },
          {
            title: "三相奇谈",
            description:
              "在一个人类和妖怪共同生活的世界，三个主角、三段不同的命运，交织在一起，冒险由此展开！跟随《三相奇谈》一起，探索这个奇妙的国度，聆听不同的故事。",
            tags: tags,
            updateDate: moment("20220615 0415", "YYYYMMDD hhmm").toDate(),
            hotRate: 578,
            likes: 123,
            imgSrc: "image4.png",
          },
        ]}
      />

      <Pager className="p-4 mx-auto w-min" currentPage={currentPage} pageCount={17} onPageChange={setCurrentPage} />
    </>
  );
}

export default App;
