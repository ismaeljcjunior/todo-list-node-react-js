-- CreateTable
CREATE TABLE `tasks` (
    `id_tasks` INTEGER NOT NULL AUTO_INCREMENT,
    `task_name` VARCHAR(191) NOT NULL,
    `task_description` VARCHAR(191) NOT NULL,
    `task_status` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_tasks`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
