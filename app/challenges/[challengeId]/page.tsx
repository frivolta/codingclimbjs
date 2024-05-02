import Markdown from "react-markdown";
import { getChallenges } from "@/lib/serverActions/getChallenge";
import { CodeEditor } from "@/components/modules/CodeEditor";
export default async function ExampleChallenge({
  params,
}: {
  params: { challengeId: string };
}) {
  const { description, initialCode, solution } = await getChallenges(
    params.challengeId
  );
  return (
    <div className="grid grid-cols-1 h-full xl:grid-cols-2 gap">
      <div className="h-full mt-3 py-3 px-6 xl:overflow-x-auto description-section">
        <Markdown>{description}</Markdown>
      </div>
      <div className="mt-4">
        <div className="px-6 py-3">
          <CodeEditor initialCode={initialCode} solution={solution} />
        </div>
      </div>
    </div>
  );
}
