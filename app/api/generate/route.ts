import { NextResponse } from "next/server";
export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  let { prompt } = await req.json();

  const data = {
    model: "xlarge",
    prompt: prompt.trim(),
    max_tokens: 100,
    temperature: 0.5,
    k: 0,
    stop_sequences: [],
    return_likelihoods: "NONE",
  };

  const response = await fetch("https://api.cohere.ai/generate", {
    method: "POST",
    headers: {
      Authorization: `BEARER ${process.env.COHERE_API_KEY}`,
      "Content-Type": "application/json",
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.log({ err }));

  return NextResponse.json(response);
}
