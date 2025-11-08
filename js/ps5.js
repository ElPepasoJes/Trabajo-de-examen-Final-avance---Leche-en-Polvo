const GAMES_URL = "data/Ps5.json";

function GameCard({ game }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-60">
      <img
        src={game.image}
        alt={game.name}
        className="w-[208px] h-[260px] object-cover rounded-md"
      />
      <p className="font-bold mb-3">S/ {game.price}</p>
      <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full w-full">
        Agregar al carrito
      </button>
    </div>
  );
}

function GameGrid({ games }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
      {games.map((game, idx) => (
        <GameCard key={idx} game={game} />
      ))}
    </div>
  );
}

function App() {
  const [games, setGames] = React.useState([]);

  React.useEffect(() => {
    fetch(GAMES_URL)
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  }, []);

  return (
    <section className="text-center py-12 px-6">
      <h2 className="text-2xl font-semibold text-blue-800 mb-8">
        Juegos de PS5
      </h2>
      <GameGrid games={games} />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("moviesgrid"));

