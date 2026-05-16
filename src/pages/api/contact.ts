import type { APIRoute } from 'astro';
import { db, ContactSubmission } from 'astro:db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const subject = formData.get('subject')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(null, {
        status: 302,
        headers: { Location: '/contact?error=missing-fields' },
      });
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(null, {
        status: 302,
        headers: { Location: '/contact?error=invalid-email' },
      });
    }

    const id = crypto.randomUUID();

    await db.insert(ContactSubmission).values({
      id,
      name,
      email,
      subject,
      message,
      submittedAt: new Date(),
    });

    return new Response(null, {
      status: 302,
      headers: { Location: '/contact?success=true' },
    });
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    return new Response(null, {
      status: 302,
      headers: { Location: '/contact?error=server-error' },
    });
  }
};
