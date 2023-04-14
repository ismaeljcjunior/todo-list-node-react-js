/*
  Warnings:

  - A unique constraint covering the columns `[id_tasks]` on the table `tasks` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `tasks` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `tasks_id_tasks_key` ON `tasks`(`id_tasks`);
