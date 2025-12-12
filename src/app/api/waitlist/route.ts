import { NextRequest, NextResponse } from "next/server";

const FORMSPREE_URL = "https://formspree.io/f/mpwvonlo";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json().catch(() => null) as { email?: string } | null;

    const rawEmail = body?.email ?? "";
    const email = rawEmail.trim();

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Email is required." },
        { status: 400 }
      );
    }

    // Simple email check (good enough for backend validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Forward to Formspree
    const formspreeRes = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = (await formspreeRes.json().catch(() => null)) as
      | { ok?: boolean; errors?: { message: string }[] }
      | null;

    if (!formspreeRes.ok) {
      const message =
        data?.errors?.[0]?.message ??
        "Something went wrong while subscribing. Please try again.";

      return NextResponse.json(
        { ok: false, error: message },
        { status: 502 } // upstream error
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error. Please try again." },
      { status: 500 }
    );
  }
}
