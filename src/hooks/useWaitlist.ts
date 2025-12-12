"use client";

import { useState, type FormEvent } from "react";

type UseWaitlistReturn = {
  submitting: boolean;
  submitted: boolean;
  error: string | null;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
};

type WaitlistResponse = {
  ok?: boolean;
  error?: string;
};

export function useWaitlist(): UseWaitlistReturn {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const emailValue = formData.get("email");

    if (typeof emailValue !== "string" || emailValue.trim() === "") {
      setError("Please enter a valid email.");
      setSubmitting(false);
      return;
    }

    const email = emailValue.trim();

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data: WaitlistResponse | null = await res
        .json()
        .catch(() => null) as WaitlistResponse | null;

      if (!res.ok || !data?.ok) {
        setError(
          data?.error ??
            "Something went wrong. Please try again."
        );
        setSubmitted(false);
      } else {
        setSubmitted(true);
        setError(null);
        form.reset();
      }
    } catch (err) {
      console.error("useWaitlist error:", err);
      setError("Network error. Please try again.");
      setSubmitted(false);
    } finally {
      setSubmitting(false);
    }
  };

  return {
    submitting,
    submitted,
    error,
    handleSubmit,
  };
}
