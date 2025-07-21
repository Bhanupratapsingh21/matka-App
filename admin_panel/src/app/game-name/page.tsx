import GameList from "@/components/GameName";
const GameName = () => {
  return (
    <div>
      <main className="flex-1 p-6">
        <GameList />
      </main>
      <footer className="p-4 text-center text-sm text-gray-500 bg-white border-t ">
        2025 ©MH GAMES
      </footer>
    </div>
  );
};

export default GameName;
