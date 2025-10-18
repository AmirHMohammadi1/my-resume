'use client';

import { useEffect, useState } from 'react';

const codeSnippets = [
  `function greet() {\n  return "Hello, World!";\n}`,
  `const developer = {\n  name: "Amir",\n  skills: ["React", "Node.js"],\n  passion: "Coding"\n};`,
  `async function fetchData() {\n  const response = await fetch('/api/data');\n  return response.json();\n}`,
  `const App = () => {\n  return (\n    <div>\n      <h1>Welcome</h1>\n    </div>\n  );\n};`
];

const CodeAnimation = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
 
  useEffect(() => {
    const handleTyping = () => {
      const currentText = codeSnippets[currentSnippet];
      
      if (!isDeleting) {
        if (displayedCode.length < currentText.length) {
          setDisplayedCode(currentText.slice(0, displayedCode.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedCode.length > 0) {
          setDisplayedCode(currentText.slice(0, displayedCode.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayedCode, isDeleting, currentSnippet]);

  return (
    <div className="code-block max-w-md mx-auto">
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <pre className="text-green-400 font-mono text-sm">
        <code>{displayedCode}</code>
      </pre>
      <div className="w-2 h-4 bg-green-400 inline-block ml-1 animate-pulse"></div>
    </div>
  );
};

export default CodeAnimation;