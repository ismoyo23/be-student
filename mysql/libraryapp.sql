-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2020 at 04:27 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `libraryapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `about` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `about`, `created_at`) VALUES
(1, '<p><strong>PERPUSTAKAAN SASANA PUSTAKA</strong></p><p><strong>SMKN 2 TRENGGALEK</strong></p><p><strong>VISI</strong></p><p>Terwujudunya perpustakaan sebagai wahana informasi dan sebagai pusat kegiatan pembelajaran.</p><p data-f-id=\"pbf\" style=\"text-align: center; font-size: 14px; margin-top: 30px; opacity: 0.65; font-family: sans-serif;\">Powered by <a href=\"https://www.froala.com/wysiwyg-editor?pb=1\" title=\"Froala Editor\">Froala Editor</a></p>', '2020-08-31 05:25:49');

-- --------------------------------------------------------

--
-- Table structure for table `absence`
--

CREATE TABLE `absence` (
  `id_absence` int(11) NOT NULL,
  `nik` int(11) NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `absence`
--

INSERT INTO `absence` (`id_absence`, `nik`, `date`, `created_at`, `update_at`) VALUES
(72, 9081992, '2020-11-10', '2020-11-10 02:08:46', '2020-11-10 02:08:46'),
(73, 213123, '2020-11-10', '2020-11-10 04:06:16', '2020-11-10 04:06:16'),
(74, 213123, '2020-11-10', '2020-11-10 04:06:43', '2020-11-10 04:06:43'),
(75, 20202019, '2020-11-10', '2020-11-10 04:06:58', '2020-11-10 04:06:58'),
(76, 9081992, '2020-11-12', '2020-11-12 01:31:25', '2020-11-12 01:31:25'),
(77, 20202019, '2020-11-12', '2020-11-12 02:38:26', '2020-11-12 02:38:26'),
(78, 18091989, '2020-11-12', '2020-11-12 07:19:44', '2020-11-12 07:19:44');

-- --------------------------------------------------------

--
-- Table structure for table `absencestudent`
--

CREATE TABLE `absencestudent` (
  `id_absence` int(11) NOT NULL,
  `nik` varchar(40) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_majors` int(11) NOT NULL,
  `letter` varchar(12) NOT NULL,
  `status` varchar(12) NOT NULL,
  `id_class` varchar(10) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `absencestudent`
--

INSERT INTO `absencestudent` (`id_absence`, `nik`, `id_user`, `id_majors`, `letter`, `status`, `id_class`, `date`) VALUES
(1, '0123213', 2, 2, 'A', 'Alva', '2', '2020-09-15 18:39:10');

-- --------------------------------------------------------

--
-- Table structure for table `absencetheacher`
--

CREATE TABLE `absencetheacher` (
  `id` int(11) NOT NULL,
  `nik` int(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `id_author` int(14) NOT NULL,
  `name_author` varchar(30) NOT NULL,
  `profile_author` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`id_author`, `name_author`, `profile_author`, `created_at`, `updated_at`) VALUES
(2, 'Mashasi Kisimoto', 'Welcome to the Harry Potter At Home hub where you’ll find all the latest magical treats to keep you occupied - including special contributions from Bloomsbury and Scholastic, nifty magical craft videos (teach your friends how to draw a Niffler!), fun articles, quizzes, puzzles and plenty more for first-time readers, as well as those already familiar with the wizarding world. We’re casting a Banishing Charm on boredom!', '2020-06-10 00:19:32', '2020-06-10 00:19:32'),
(4, 'Jesicca Milla', 'One of the problems we outlined in the Motivation for Hooks is that class lifecycle methods often contain unrelated logic, but related logic gets broken up into several methods. Here is a component that combines the counter and the friend status indicator logic from the previous examples:', '2020-07-05 10:59:01', '2020-07-05 10:59:01'),
(13, 'Raditiya dika', 'Welcome to the Harry Potter At Home hub where you’ll find all the latest magical treats to keep you occupied - including special contributions from Bloomsbury and Scholastic, nifty magical craft videos (teach your friends how to draw a Niffler!), fun articles, quizzes, puzzles and plenty more for first-time readers, as well as those already familiar with the wizarding world. We’re casting a Banishing Charm on boredom!', '2020-07-08 05:04:04', '2020-07-08 05:04:04'),
(15, 'setya', 'setya', '2020-07-09 08:25:12', '2020-07-09 08:25:12'),
(16, 'Ismoyo Setya', 'coba author', '2020-07-28 04:44:28', '2020-07-28 04:44:28'),
(20, 'Fiersa Besari', '', '2020-09-22 04:24:45', '2020-09-22 04:24:45');

-- --------------------------------------------------------

--
-- Table structure for table `book_detail`
--

CREATE TABLE `book_detail` (
  `id` varchar(40) NOT NULL,
  `no_call1` varchar(11) NOT NULL,
  `no_call2` varchar(11) NOT NULL,
  `no_call3` varchar(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `rak` varchar(14) NOT NULL,
  `image` varchar(100) NOT NULL,
  `pdf_name` varchar(100) DEFAULT NULL,
  `stok` int(15) NOT NULL,
  `id_genre` int(130) NOT NULL,
  `id_author` int(130) NOT NULL,
  `edition` varchar(20) NOT NULL,
  `ISBN` varchar(15) NOT NULL,
  `TraceContents` varchar(20) NOT NULL,
  `DiscriptionBook` varchar(80) NOT NULL,
  `year` varchar(5) NOT NULL,
  `publisher` varchar(90) NOT NULL,
  `bibiografi` varchar(100) NOT NULL,
  `Iindex` varchar(21) NOT NULL,
  `collation` varchar(12) NOT NULL,
  `note` text NOT NULL,
  `author2` varchar(13) NOT NULL,
  `number_investaris` varchar(67) NOT NULL,
  `info_1` varchar(50) NOT NULL,
  `info_2` varchar(65) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book_detail`
--

INSERT INTO `book_detail` (`id`, `no_call1`, `no_call2`, `no_call3`, `title`, `rak`, `image`, `pdf_name`, `stok`, `id_genre`, `id_author`, `edition`, `ISBN`, `TraceContents`, `DiscriptionBook`, `year`, `publisher`, `bibiografi`, `Iindex`, `collation`, `note`, `author2`, `number_investaris`, `info_1`, `info_2`, `created_at`, `updated_at`) VALUES
('1232123', '12', '23', '15', 'tenko@gmail.com', '13', 'src\\upload\\gambar.jpg', 'null', 13, 2, 2, 'kewrkw', '123', 'kfmld', 'irojgiorejor', '201', 'kldndfl', 'klfm', 'kldsfls', 'lwemf', 'ksdfldf', 'w;fmwef', '123dd', 'asd', 'asdf', '2020-11-21 02:03:11', '2020-11-21 02:03:11'),
('18827232', '32', '23', '23', 'Samehada', '12', 'src\\upload\\gambar.jpg', 'null', 12, 2, 2, 'sad', '1231', 'asdsa', 'sembranag', '2001', 'asds', 'asd', 'asd', 'sada', 'wkdla', 'emcsd', '12312', 'Info 1', 'Info 2', '2020-11-21 01:00:18', '2020-11-21 01:00:18'),
('23213213', '12', '12', '12', 'efsf', '23', 'src/upload/download (1).jpeg', 'null', 12, 9, 2, 'gsd', '9786022518396', 'dfg', 'dsfgdfsg', '201', 'fg', 'fdg', 'dfg', 'fg', 'fg', '213', '23123', 'info 1', 'info 2', '2020-11-12 01:35:09', '2020-11-12 01:35:09');

-- --------------------------------------------------------

--
-- Table structure for table `borrower`
--

CREATE TABLE `borrower` (
  `id_borrower` int(11) NOT NULL,
  `id_book` int(20) NOT NULL,
  `id_user` varchar(70) NOT NULL,
  `count` int(15) NOT NULL,
  `date` date NOT NULL,
  `status` varchar(14) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `borrower`
--

INSERT INTO `borrower` (`id_borrower`, `id_book`, `id_user`, `count`, `date`, `status`, `create_at`, `updated_at`) VALUES
(64, 80, '38', 1, '2020-08-28', 'Process', '2020-08-28 15:27:53', NULL),
(66, 91, '38', 4, '2020-08-28', 'Process', '2020-08-28 15:46:02', NULL),
(67, 81, '38', 4, '2020-08-28', 'Process', '2020-08-28 15:51:06', NULL);

--
-- Triggers `borrower`
--
DELIMITER $$
CREATE TRIGGER `book_stok_delete` AFTER DELETE ON `borrower` FOR EACH ROW BEGIN
 UPDATE book_detail
 SET stok = stok + OLD.count
 WHERE
 id = OLD.id_book;
 END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `book_stok_update` AFTER UPDATE ON `borrower` FOR EACH ROW BEGIN
	UPDATE book_detail SET stok = 	stok+NEW.count WHERE id=new.id_book;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `books_stok_insert` AFTER INSERT ON `borrower` FOR EACH ROW BEGIN
	UPDATE book_detail SET stok = 	stok-NEW.count WHERE id=new.id_book;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `id_class` int(11) NOT NULL,
  `name_class` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`id_class`, `name_class`) VALUES
(1, 'X'),
(2, 'XI'),
(3, 'XII');

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE `genre` (
  `id_genre` int(15) NOT NULL,
  `name_genre` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `genre`
--

INSERT INTO `genre` (`id_genre`, `name_genre`, `created_at`, `updated_at`) VALUES
(2, 'Romance', '2020-06-09 13:19:43', '2020-06-09 13:19:43'),
(6, 'Horror', '2020-06-11 07:24:13', '2020-06-11 07:24:13'),
(8, 'Comedy', '2020-07-05 08:50:35', '2020-07-05 08:50:35'),
(9, 'Crime & Gangsters', '2020-07-05 08:50:35', '2020-07-05 08:50:35'),
(10, 'Crisis', '2020-07-05 08:50:35', '2020-07-05 08:50:35'),
(18, 'EBooks', '2020-08-31 00:11:35', '2020-08-31 00:11:35'),
(19, 'Pelajaran', '2020-09-23 01:14:54', '2020-09-23 01:14:54');

-- --------------------------------------------------------

--
-- Table structure for table `letter`
--

CREATE TABLE `letter` (
  `id_letter` int(11) NOT NULL,
  `letter` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `letter`
--

INSERT INTO `letter` (`id_letter`, `letter`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'C');

-- --------------------------------------------------------

--
-- Table structure for table `majors`
--

CREATE TABLE `majors` (
  `id` int(11) NOT NULL,
  `name_majors` varchar(23) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `majors`
--

INSERT INTO `majors` (`id`, `name_majors`) VALUES
(1, 'RPL'),
(2, 'DPIB'),
(3, 'TPTU'),
(4, 'TB'),
(5, 'AKL');

-- --------------------------------------------------------

--
-- Table structure for table `report_borrow`
--

CREATE TABLE `report_borrow` (
  `id_report` int(11) NOT NULL,
  `id_user` int(30) NOT NULL,
  `date` date NOT NULL,
  `id_books` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `report_borrow`
--

INSERT INTO `report_borrow` (`id_report`, `id_user`, `date`, `id_books`) VALUES
(2, 38, '2020-08-28', 80),
(3, 38, '2020-08-28', 81),
(4, 38, '2020-08-28', 91),
(5, 38, '2020-08-28', 81),
(6, 47, '2020-10-05', 3),
(7, 47, '2020-10-06', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(100) NOT NULL,
  `name_user` varchar(40) NOT NULL,
  `class` varchar(40) NOT NULL,
  `image` varchar(90) DEFAULT NULL,
  `role` int(2) NOT NULL,
  `letter` varchar(12) NOT NULL,
  `majors` varchar(34) NOT NULL,
  `nik` varchar(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `name_user`, `class`, `image`, `role`, `letter`, `majors`, `nik`, `created_at`, `updated_at`) VALUES
(1, 'Ismoyo', 'X', NULL, 1, 'A', 'RPL', '09001343', '2020-10-18 03:41:37', '2020-10-18 03:41:37'),
(2, 'setya', 'X', NULL, 0, 'A', 'AKL', '0123213', '2020-10-18 03:41:37', '2020-10-18 03:41:37'),
(3, 'Tim Sim', '', NULL, 1, '', '', '20202019', '2020-10-22 03:14:15', '2020-10-22 03:14:15'),
(4, 'Ita Megawati', '', NULL, 1, '', '', '09081992', '2020-10-22 03:33:18', '2020-10-22 03:33:18'),
(5, 'Titis', '', NULL, 1, '', '', '18091989', '2020-10-22 03:34:05', '2020-10-22 03:34:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `absence`
--
ALTER TABLE `absence`
  ADD PRIMARY KEY (`id_absence`);

--
-- Indexes for table `absencestudent`
--
ALTER TABLE `absencestudent`
  ADD PRIMARY KEY (`id_absence`);

--
-- Indexes for table `absencetheacher`
--
ALTER TABLE `absencetheacher`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id_author`);

--
-- Indexes for table `book_detail`
--
ALTER TABLE `book_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_genre` (`id_genre`),
  ADD KEY `id_author` (`id_author`);

--
-- Indexes for table `borrower`
--
ALTER TABLE `borrower`
  ADD PRIMARY KEY (`id_borrower`);

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`id_class`);

--
-- Indexes for table `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id_genre`);

--
-- Indexes for table `letter`
--
ALTER TABLE `letter`
  ADD PRIMARY KEY (`id_letter`);

--
-- Indexes for table `majors`
--
ALTER TABLE `majors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_borrow`
--
ALTER TABLE `report_borrow`
  ADD PRIMARY KEY (`id_report`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `absence`
--
ALTER TABLE `absence`
  MODIFY `id_absence` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `absencestudent`
--
ALTER TABLE `absencestudent`
  MODIFY `id_absence` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `absencetheacher`
--
ALTER TABLE `absencetheacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `id_author` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `borrower`
--
ALTER TABLE `borrower`
  MODIFY `id_borrower` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `id_class` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `genre`
--
ALTER TABLE `genre`
  MODIFY `id_genre` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `letter`
--
ALTER TABLE `letter`
  MODIFY `id_letter` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `majors`
--
ALTER TABLE `majors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `report_borrow`
--
ALTER TABLE `report_borrow`
  MODIFY `id_report` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
