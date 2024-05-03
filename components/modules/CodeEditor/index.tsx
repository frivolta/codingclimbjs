"use client";
import CodeMirror from "@uiw/react-codemirror";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { javascript } from "@codemirror/lang-javascript";
import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCodeEditor } from "./hooks/useCodeEditor";

interface CodeEditorProps {
  initialCode: string;
  solution: string;
}

export const CodeEditor: FC<CodeEditorProps> = ({ initialCode, solution }) => {
  const {
    code,
    setCode,
    handleResetCode,
    handleSendCode,
    handleSolution,
    isLoading,
    error,
    result,
  } = useCodeEditor({ initialCode, solution });
  return (
    <>
      <Button onClick={handleResetCode} disabled={isLoading}>
        Reset code
      </Button>
      <Button variant="secondary" onClick={handleSendCode} disabled={isLoading}>
        Send Code
      </Button>
      <Button onClick={handleSolution} disabled={isLoading}>
        Solution
      </Button>
      <CodeMirror
        value={code}
        height="500px"
        theme={okaidia}
        style={{ height: "100%", width: "100%", maxHeight: 500 }}
        extensions={[javascript({ jsx: true })]}
        onChange={(code) => {
          setCode(code);
        }}
        basicSetup={{
          lineNumbers: true,
          defaultKeymap: true,
          searchKeymap: true,
          historyKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
          syntaxHighlighting: true,
        }}
      />
      {!!result && <p>{result.evaluationCode}</p>}
      {!!error && <p>{error}</p>}
    </>
  );
};
