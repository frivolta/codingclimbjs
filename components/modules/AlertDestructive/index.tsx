import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface AlertDestructiveProps {
  title?: string;
  description?: string;
  className?: string;
}
export function AlertDestructive({
  title,
  description,
  className,
}: AlertDestructiveProps) {
  return (
    <Alert variant="destructive" className={className}>
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>{title ?? "Error"}</AlertTitle>
      <AlertDescription>
        {description ?? "Something went wrong"}
      </AlertDescription>
    </Alert>
  );
}
