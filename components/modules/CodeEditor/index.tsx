"use client";
import CodeMirror from "@uiw/react-codemirror";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { javascript } from "@codemirror/lang-javascript";
import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
interface CodeEditorProps {
  initialCode: string;
  solution: string;
}

export const CodeEditor: FC<CodeEditorProps> = ({ initialCode, solution }) => {
  const [code, setCode] = useState<string>(initialCode);

  const _handleSendCode = () => {
    console.log(code);
  };
  const _handleResetCode = () => {
    setCode(initialCode);
  };
  const _handleSolution = () => {
    setCode(solution);
  };
  return (
    <>
      <Button onClick={_handleResetCode}>Reset code</Button>
      <Button variant="secondary" onClick={_handleSendCode}>
        Send Code
      </Button>
      <Button onClick={_handleSolution}>Solution</Button>
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
    </>
  );
};
