import { nanoid } from "nanoid";
import moment from "moment";
const nowTime = moment().format("YYYY-MM-DD");

const dummy = [
  {
    id: nanoid(),
    text: "This is my first Note!!!!",
    date: nowTime,
  },
  {
    id: nanoid(),
    text: "AIKI LOVE U..",
    date: nowTime,
  },
  {
    id: nanoid(),
    text: "NOTE~!",
    date: nowTime,
  },
  {
    id: nanoid(),
    text: "XINNNI GOOD!",
    date: nowTime,
  },
  {
    id: nanoid(),
    text: "My name is HORANG",
    date: nowTime,
  },
  {
    id: nanoid(),
    text: "kt naga..",
    date: nowTime,
  },
  {
    id: nanoid(),
    text: "hello~!~!",
    date: nowTime,
  },
];

export { dummy };
