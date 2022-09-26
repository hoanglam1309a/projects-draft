import { CSSProperties } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface CodeEditorProps {
  code: string;
  style?: CSSProperties;
}

const CodeEditor = ({ code, style = {} }: CodeEditorProps) => {
  return (
    <SyntaxHighlighter language="javascript" style={docco} customStyle={style}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeEditor;
