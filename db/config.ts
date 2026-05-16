import { defineDb, defineTable, column } from 'astro:db';

const PetitionSignature = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    ward: column.text(),
    message: column.text({ optional: true }),
    signedAt: column.date({ default: new Date() }),
  },
});

const ContactSubmission = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    subject: column.text(),
    message: column.text(),
    submittedAt: column.date({ default: new Date() }),
  },
});

export default defineDb({
  tables: { PetitionSignature, ContactSubmission },
});
