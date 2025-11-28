CREATE TABLE `contentCreators` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`bio` text,
	`profileImage` text,
	`portfolioUrl` text,
	`platforms` text,
	`contentTypes` text,
	`sampleWorks` text,
	`isActive` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contentCreators_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contentWriting` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text,
	`contentType` varchar(100),
	`sampleText` text,
	`clientName` varchar(255),
	`wordCount` int,
	`isActive` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contentWriting_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `models` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`age` int NOT NULL,
	`gender` enum('male','female') NOT NULL,
	`bio` text,
	`profileImage` text,
	`videoUrl` text,
	`height` int,
	`experience` text,
	`specialties` text,
	`isActive` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `models_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `serviceRequests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50),
	`service` varchar(100) NOT NULL,
	`message` text,
	`status` enum('pending','in_progress','completed','cancelled') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `serviceRequests_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `videoProductions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text,
	`videoUrl` text NOT NULL,
	`thumbnailUrl` text,
	`productionType` varchar(100),
	`clientName` varchar(255),
	`duration` int,
	`isActive` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `videoProductions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `voiceArtists` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`bio` text,
	`profileImage` text,
	`gender` enum('male','female') NOT NULL,
	`voiceType` varchar(100),
	`languages` text,
	`accents` text,
	`sampleAudios` text,
	`isActive` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `voiceArtists_id` PRIMARY KEY(`id`)
);
