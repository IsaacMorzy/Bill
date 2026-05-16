import type { APIRoute } from 'astro';
import { db, PetitionSignature } from 'astro:db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const ward = formData.get('ward')?.toString().trim();
    const message = formData.get('message')?.toString().trim() || null;

    // Validate required fields
    if (!name || !email || !ward) {
      return new Response(null, {
        status: 302,
        headers: { Location: '/petition?error=missing-fields' },
      });
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(null, {
        status: 302,
        headers: { Location: '/petition?error=invalid-email' },
      });
    }

    // Generate a simple UUID v4
    const id = crypto.randomUUID();

    await db.insert(PetitionSignature).values({
      id,
      name,
      email,
      ward,
      message,
      signedAt: new Date(),
    });

    return new Response(null, {
      status: 302,
      headers: { Location: '/petition?success=true' },
    });
  } catch (error) {
    console.error('Failed to record petition signature:', error);
    return new Response(null, {
      status: 302,
      headers: { Location: '/petition?error=server-error' },
    });
  }
};
