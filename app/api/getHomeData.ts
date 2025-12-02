export async function getHomeData(lang = "vi") {
  const url = `https://admin.coinjdg.com/wp-json/toan/v1/home?lang=${lang}`;

  const res = await fetch(url, {
    next: { revalidate: 30 }, 
  });

  if (!res.ok) throw new Error("Failed to fetch API");

  return res.json();
}
