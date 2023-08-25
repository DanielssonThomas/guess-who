type GuessProps = {
  dbName: string;
  questionText: string;
  isGuessed: boolean;
  AnsweredResult: boolean | null;
  key: number;
};

const AllGuesses: GuessProps[] = [
  {
    dbName: "has_glasses",
    questionText: "Does the person wear glasses?",
    isGuessed: false,
    AnsweredResult: null,
    key: 1,
  },
  {
    dbName: "speaks_spanish",
    questionText: "Does the person speak spanish?",
    isGuessed: false,
    AnsweredResult: null,
    key: 2,
  },
  {
    dbName: "owns_console",
    questionText: "Does the person own a console?",
    isGuessed: false,
    AnsweredResult: null,
    key: 3,
  },
  {
    dbName: "likes_sports",
    questionText: "Does the person like sports?",
    isGuessed: false,
    AnsweredResult: null,
    key: 4,
  },
  {
    dbName: "has_drivers_licence",
    questionText: "Does the person have a drivers licence?",
    isGuessed: false,
    AnsweredResult: null,
    key: 5,
  },
  {
    dbName: "uses_mac",
    questionText: "Do you use a mac?",
    isGuessed: false,
    AnsweredResult: null,
    key: 6,
  },
  {
    dbName: "plays_instrument",
    questionText: "Does the person play an instrument?",
    isGuessed: false,
    AnsweredResult: null,
    key: 7,
  },
  {
    dbName: "drinks_coffee",
    questionText: "Does the person drink coffee?",
    isGuessed: false,
    AnsweredResult: null,
    key: 8,
  },
  {
    dbName: "watched_GOT",
    questionText: "Has the person watched Game of thrones?",
    isGuessed: false,
    AnsweredResult: null,
    key: 9,
  },
  {
    dbName: "was_at_way_out_west",
    questionText: "Was the person present at the 2023 way out west festival?",
    isGuessed: false,
    AnsweredResult: null,
    key: 10,
  },
];

export default AllGuesses;
