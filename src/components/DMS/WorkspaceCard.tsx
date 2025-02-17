import { cn } from "@/lib/utils";
import { Workspace } from "@/types/Workspace";
import { EllipsisIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface WorkspaceEntryProps {
  className?: string;
  workspace?: Workspace;
}

export const WorkspaceEntry = ({ className, workspace }: WorkspaceEntryProps) => {
  return (
    <div
      className={cn(
        "flex flex-row justify-between items-center w-full p-4 rounded-md shadow-md border",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <Label className="font-bold">
          {workspace?.name ? (
            workspace?.name
          ) : (
            <span className="font-thin">- No Name Provided -</span>
          )}
        </Label>
        <Label className="font-thin">
          {workspace?.description ? (
            workspace?.description
          ) : (
            <span className="font-thin">- No Description Provided -</span>
          )}
        </Label>
        <Label className="text-xs"> Created At : {workspace?.created_at}</Label>
      </div>
      <div>
        <Button variant="outline" size="icon" className="w-5 h-5 p-4">
          <EllipsisIcon />
        </Button>
      </div>
    </div>
  );
};
