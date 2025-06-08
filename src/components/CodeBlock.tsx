import React from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface CodeBlockProps {
  language: string;
  code: string;
  filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code, filename }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "Code has been copied to your clipboard"
    
  });
};
  return (
    <div className="rounded-lg overflow-hidden border border-border bg-code text-code-foreground my-6">
      {filename && (
        <div className="px-4 py-2 border-b border-border flex items-center justify-between bg-code">
          <span className="text-sm text-code-foreground/70 font-mono">{filename}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="text-code-foreground/70 hover:text-code-foreground hover:bg-white/10"
          >
            <Copy size={14} />
          </Button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto font-mono text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
