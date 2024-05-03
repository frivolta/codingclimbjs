import { NextRequest, NextResponse } from "next/server";

export interface SubmitRequest {
  sourceCode: string;
}
export interface SubmitResponse {
  evaluationCode: string;
}
export async function POST(req: NextRequest) {
  try {
    const { sourceCode } = await req.json();
    return NextResponse.json({ evaluationCode: sourceCode });
  } catch (e) {
    throw e;
  }
}
