export default async function Home() {
  return (
    <div className="w-screen h-screen">
      <iframe
        src="https://coin.coinjdg.com/today/"
        title="Club de Leonardo AI Brasil"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allowFullScreen
      />
    </div>
  );
}
