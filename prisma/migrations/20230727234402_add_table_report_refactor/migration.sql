-- AlterTable
ALTER TABLE "Report" ALTER COLUMN "messageId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "active" SET DEFAULT true;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;
