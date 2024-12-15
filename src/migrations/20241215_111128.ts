import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'user');
  ALTER TABLE "users" ADD COLUMN "role" "enum_users_role" DEFAULT 'user' NOT NULL;
  ALTER TABLE "_pages_v" ADD COLUMN "autosave" boolean;
  CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP INDEX IF EXISTS "_pages_v_autosave_idx";
  ALTER TABLE "users" DROP COLUMN IF EXISTS "role";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "autosave";
  DROP TYPE "public"."enum_users_role";`)
}
