"use client";

import { AlertDestructive } from "@/components/modules/AlertDestructive";

export default function Error({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="w-full flex content-center justify-center">
      <div className="max-w-3xl mt-16">
        <AlertDestructive
          title="Something went wrong"
          description={"We could not load your challenge"}
        />
      </div>
    </div>
  );
}
