"use client";

import { useKBar } from "kbar";
import { Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function KBarToggle() {
  const { query } = useKBar();

  const handleToggle = () => {
    query.toggle();
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleToggle}
            className="relative h-9 w-9 p-0 hover:bg-transparent hidden md:flex"
          >
            <Command className="h-4 w-4" />
            <span className="sr-only">Open command palette</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" sideOffset={5}>
          <div className="flex items-center gap-1">
            <span>Open command palette</span>
            <kbd className="ml-1 px-1.5 py-0.5 text-xs font-mono bg-muted text-muted-foreground rounded">
              ⌘K
            </kbd>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function KBarHint() {
  return (
    <div className="fixed bottom-4 right-4 z-40 bg-background/80 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg hidden md:block">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Press</span>
        <kbd className="px-1.5 py-0.5 text-xs font-mono bg-muted text-muted-foreground rounded border">
          ⌘K
        </kbd>
        <span>for commands</span>
      </div>
    </div>
  );
}
