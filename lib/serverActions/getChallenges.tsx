"server only";

import { readFileSync, readdirSync } from "fs";
import path from "path";

const getChallengePaths = (challengeDir: string) => ({
  DESCRIPTION_MD: path.join(challengeDir, "description.md"),
});
export const getChallenges = async () => {
  const challengesDir = path.join(process.cwd(), "challenges");
  const { DESCRIPTION_MD } = getChallengePaths(challengesDir);

  const description = readFileSync(DESCRIPTION_MD);
  console.log(description);
};
