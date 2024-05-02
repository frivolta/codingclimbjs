"use server";

import path from "path";
import fs from "fs/promises";

interface ChallengeData {
  description: string;
}

export async function getChallenges(
  challengeId: string
): Promise<ChallengeData> {
  try {
    const descriptionPath = path.join(
      process.cwd(),
      `/challenges/${challengeId}/description.md`
    );
    const description = await fs.readFile(descriptionPath, {
      encoding: "utf-8",
    });
    return {
      description,
    };
  } catch (e) {
    throw e;
  }
}
