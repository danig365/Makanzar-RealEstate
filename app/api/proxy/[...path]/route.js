export async function handler(request, { params }) {
  const url = new URL(request.url);
  
  // Get the dynamic path segments
  const pathSegments = params.path || [];
  const apiPath = pathSegments.join('/');
  
  // Build the target URL
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL.replace(/\/$/, '');
  const targetUrl = `${baseUrl}/${apiPath}${url.search}`;

  console.log('🔍 Proxying request to:', targetUrl);
  console.log('📍 Original path:', url.pathname);
  console.log('📦 Params:', params);

  const options = {
    method: request.method,
    headers: {
      'Content-Type': request.headers.get('content-type') || 'application/json',
    },
  };

  // Add body for non-GET/HEAD requests
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    try {
      options.body = await request.text();
    } catch (error) {
      console.error('Error reading request body:', error);
    }
  }

  try {
    const response = await fetch(targetUrl, options);
    const contentType = response.headers.get('content-type') || 'application/json';
    
    let data;
    if (contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    return new Response(
      typeof data === 'string' ? data : JSON.stringify(data),
      {
        status: response.status,
        headers: {
          'Content-Type': contentType,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error) {
    console.error('❌ Proxy Error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Proxy request failed',
        message: error.message,
        target: targetUrl 
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const OPTIONS = async (request) => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
};