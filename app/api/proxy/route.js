export async function handler(request) {
  const url = new URL(request.url);
  const pathAfterProxy = url.pathname.replace(/^\/api\/proxy/, "");
  const targetUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL.replace(/\/$/, "")}${pathAfterProxy}${url.search}`;

  console.log("🔍 Proxying request to:", targetUrl); // 👈 This helps debug on Vercel logs

  const options = {
    method: request.method,
    headers: {
      "Content-Type": request.headers.get("content-type") || "application/json",
    },
    body:
      request.method !== "GET" && request.method !== "HEAD"
        ? await request.text()
        : undefined,
    cache: "no-store",
  };

  try {
    const response = await fetch(targetUrl, options);
    const contentType = response.headers.get("content-type") || "application/json";
    const data = await response.text();

    return new Response(data, {
      status: response.status,
      headers: {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("❌ Proxy Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
