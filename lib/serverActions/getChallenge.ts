"use server";

import path from "path";
import fs from "fs/promises";

interface ChallengeData {
  description: string;
  initialCode: string;
  solution: string;
}

export async function getChallenges(
  challengeId: string
): Promise<ChallengeData> {
  try {
    const challengePath = path.join(
      process.cwd(),
      `/challenges/${challengeId}`
    );
    const descriptionPath = path.join(challengePath, "/description.md");
    const initialCodePath = path.join(challengePath, "/initialCode.js");
    const solutionCodePath = path.join(challengePath, "/solution.js");

    const description = await fs.readFile(descriptionPath, {
      encoding: "utf-8",
    });
    const initialCode = await fs.readFile(initialCodePath, {
      encoding: "utf-8",
    });
    const solution = await fs.readFile(solutionCodePath, {
      encoding: "utf-8",
    });

    return {
      description,
      initialCode,
      solution,
    };
  } catch (e) {
    throw e;
  }
}
