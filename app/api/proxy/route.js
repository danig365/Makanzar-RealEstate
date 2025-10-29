export async function GET(request) {
  const { search } = new URL(request.url);
  const targetUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${search}`;

  const response = await fetch(targetUrl, {
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  const data = await response.text();

  return new Response(data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
