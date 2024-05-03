import { useState } from "react";
import { SubmitRequest, SubmitResponse } from "@/app/api/challenges/route";
import axios from "axios";

interface UseCodeEditorProps {
  initialCode: string;
  solution: string;
}
export const useCodeEditor = ({
  initialCode,
  solution,
}: UseCodeEditorProps) => {
  const [code, setCode] = useState<string>(initialCode);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SubmitResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSendCode = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const submitBody: SubmitRequest = {
        sourceCode: code,
      };
      const resp = await axios.post<SubmitResponse>(
        "/api/challenges",
        submitBody
      );
      setResult(resp.data);
    } catch (e: any) {
      setError(e?.message ?? "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  const handleResetCode = () => {
    setCode(initialCode);
  };
  const handleSolution = () => {
    setCode(solution);
  };
  return {
    handleResetCode,
    handleSendCode,
    handleSolution,
    code,
    setCode,
    isLoading,
    result,
    error,
  };
};
