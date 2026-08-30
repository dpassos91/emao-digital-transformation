CREATE TABLE `trial_lesson_requests` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`contact_name` text NOT NULL,
	`phone` text NOT NULL,
	`email` text,
	`student_profile` text NOT NULL,
	`student_age` integer,
	`interest` text NOT NULL,
	`availability` text,
	`message` text,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
