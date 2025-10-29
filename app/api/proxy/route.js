export async function handler(request) {
  const { search, pathname } = new URL(request.url);
  const targetUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${pathname.replace(
    "/api/proxy",
    ""
  )}${search}`;

  // Copy headers except host
  const headers = {};
  request.headers.forEach((value, key) => {
    if (key.toLowerCase() !== "host") headers[key] = value;
  });

  const options = {
    method: request.method,
    headers,
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
        "Access-Control-Allow-Origin": "*", // optional (safe on server)
      },
    });
  } catch (error) {
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
