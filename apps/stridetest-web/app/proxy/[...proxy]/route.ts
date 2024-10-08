import { getAccessToken } from "@auth0/nextjs-auth0";
import { NextRequest, NextResponse } from "next/server";

async function getAuth0Token() {
  const { accessToken } = await getAccessToken();
  return accessToken;
}

const BACKEND_URL = process.env.BACKEND_URL;

export async function GET(req: NextRequest) {
  return handleRequest(req, "GET");
}

export async function POST(req: NextRequest) {
  return handleRequest(req, "POST");
}

export async function PUT(req: NextRequest) {
  return handleRequest(req, "PUT");
}

export async function DELETE(req: NextRequest) {
  return handleRequest(req, "DELETE");
}

// Handle all request methods dynamically
async function handleRequest(req: NextRequest, method: string) {
  console.log("BACKEND_URL", BACKEND_URL);

  const accessToken = await getAuth0Token();

  if (!accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const targetUrl = `${BACKEND_URL}${req.nextUrl.pathname.replace("/proxy", "")}`;

  let backendResponse;

  try {
    backendResponse = await fetch(targetUrl, {
      method,
      headers: {
        ...Object.fromEntries(req.headers),
        Authorization: `Bearer ${accessToken}`,
      },
      body: method !== "GET" ? await req.text() : undefined,
    });

    const backendData = await backendResponse.text();

    return new NextResponse(backendData, { status: backendResponse.status });
  } catch (error) {
    console.error("Error forwarding request:", error);
    return NextResponse.json(
      { error: "Error forwarding request" },
      { status: 500 },
    );
  }
}
