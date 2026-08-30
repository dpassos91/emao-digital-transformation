PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_trial_lesson_requests` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`contact_name` text NOT NULL,
	`phone` text NOT NULL,
	`email` text NOT NULL,
	`student_profile` text NOT NULL,
	`student_age` integer NOT NULL,
	`interest` text NOT NULL,
	`availability` text,
	`message` text,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_trial_lesson_requests`("id", "contact_name", "phone", "email", "student_profile", "student_age", "interest", "availability", "message", "status", "created_at") SELECT "id", "contact_name", "phone", "email", "student_profile", "student_age", "interest", "availability", "message", "status", "created_at" FROM `trial_lesson_requests`;--> statement-breakpoint
DROP TABLE `trial_lesson_requests`;--> statement-breakpoint
ALTER TABLE `__new_trial_lesson_requests` RENAME TO `trial_lesson_requests`;--> statement-breakpoint
PRAGMA foreign_keys=ON;