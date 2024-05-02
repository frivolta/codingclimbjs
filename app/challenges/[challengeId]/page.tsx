import Markdown from "react-markdown";
import { getChallenges } from "@/lib/serverActions/getChallenge";

export default async function ExampleChallenge({
  params,
}: {
  params: { challengeId: string };
}) {
  const { description } = await getChallenges(params.challengeId);
  return (
    <div className="grid grid-cols-1 h-full xl:grid-cols-2 gap">
      <div className="h-full xl:overflow-x-auto description-section">
        <Markdown>{description}</Markdown>
      </div>
      <div>code editor</div>
    </div>
  );
}
