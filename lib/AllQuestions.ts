type QuestionProps = {
  dbName: string;
  questionText: string;
  key: number;
};

const AllQuestions: QuestionProps[] = [
  {
    dbName: "has_glasses",
    questionText: "Do you wear glasses/lenses?",
    key: 1,
  },
  { dbName: "speaks_spanish", questionText: "Do you speak spanish?", key: 2 },
  { dbName: "owns_console", questionText: "Do you own a console?", key: 3 },
  { dbName: "likes_sports", questionText: "Do you like sports?", key: 4 },
  {
    dbName: "has_drivers_licence",
    questionText: "Do you have a drivers licence?",
    key: 5,
  },
  { dbName: "uses_mac", questionText: "Do you use a mac?", key: 6 },
  {
    dbName: "plays_instrument",
    questionText: "Do you play an instrument?",
    key: 7,
  },
  { dbName: "drinks_coffee", questionText: "Do you drink coffee?", key: 8 },
  {
    dbName: "watched_GOT",
    questionText: "Have you watched Game of Thrones?",
    key: 9,
  },
  {
    dbName: "was_at_way_out_west",
    questionText: "Were you present at the 2023 way out west festival?",
    key: 10,
  },
];

export default AllQuestions;
