-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2019 at 06:38 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webservice`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_member`
--

CREATE TABLE `admin_member` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(70) NOT NULL,
  `phno` int(12) NOT NULL,
  `city` varchar(30) NOT NULL,
  `state` varchar(30) NOT NULL,
  `pincode` int(8) NOT NULL,
  `domain` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_member`
--

INSERT INTO `admin_member` (`id`, `firstname`, `lastname`, `email`, `phno`, `city`, `state`, `pincode`, `domain`) VALUES
(3, 'Chayan ', 'Bansal', 'cha@gmail.com', 2147483647, 'Chennai', 'Tamil Nadu', 603203, 'Student'),
(5, 'Kunal', 'Saikia', 'kunal@gmail.com', 2147483647, 'Guwahati', 'Assam', 213456, 'Writer');

-- --------------------------------------------------------

--
-- Table structure for table `book_now`
--

CREATE TABLE `book_now` (
  `id` int(11) NOT NULL,
  `Owner` varchar(40) NOT NULL,
  `Category` varchar(10) NOT NULL,
  `Number` int(10) NOT NULL,
  `date` varchar(10) NOT NULL,
  `Passengers` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book_now`
--

INSERT INTO `book_now` (`id`, `Owner`, `Category`, `Number`, `date`, `Passengers`) VALUES
(1, 'Chayan', 'train', 9077, '2019-04-17', 5);

-- --------------------------------------------------------

--
-- Table structure for table `online_shop`
--

CREATE TABLE `online_shop` (
  `id` int(11) NOT NULL,
  `item` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `online_shop`
--

INSERT INTO `online_shop` (`id`, `item`) VALUES
(2, 'mango'),
(4, 'Facewash');

-- --------------------------------------------------------

--
-- Table structure for table `photo_gallery`
--

CREATE TABLE `photo_gallery` (
  `id` int(11) NOT NULL,
  `imgname` varchar(50) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `photo_gallery`
--

INSERT INTO `photo_gallery` (`id`, `imgname`, `image`) VALUES
(2, 'apple', 'Capture.PNG'),
(4, 'galaxy', 'glacier_of_patagonia-wallpaper-3554x1999.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_member`
--
ALTER TABLE `admin_member`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_now`
--
ALTER TABLE `book_now`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `online_shop`
--
ALTER TABLE `online_shop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photo_gallery`
--
ALTER TABLE `photo_gallery`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_member`
--
ALTER TABLE `admin_member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `book_now`
--
ALTER TABLE `book_now`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `online_shop`
--
ALTER TABLE `online_shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `photo_gallery`
--
ALTER TABLE `photo_gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
