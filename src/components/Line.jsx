import emojis from "../assets/emoji.json";

const Line = ({ search }) => {
  const filteredEmojis = emojis.filter((emoji) =>
    emoji.keywords.toLowerCase().includes(search.toLowerCase())
  );

  return filteredEmojis.map((emoji, index) => {
    return (
      <div className="line" key={index}>
        <span className="emoji">{emoji.symbol}</span>
        <span>{emoji.title}</span>
      </div>
    );
  });
};

export default Line;
