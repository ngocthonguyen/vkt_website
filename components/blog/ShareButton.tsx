"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        /* fall through */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  }

  return (
    <Button
      onClick={handleShare}
      variant="ghost"
      size="sm"
      className="gap-2 ml-auto"
      aria-label="Chia sẻ bài viết"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Đã copy link
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4" />
          Chia sẻ
        </>
      )}
    </Button>
  );
}
