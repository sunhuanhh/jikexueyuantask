-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2017-06-14 05:00:02
-- 服务器版本： 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(39, '精选', '内容1', 'images/1.jpg', '2017-06-13 00:00:00', 'jike'),
(40, '精选', '内容2', 'images/2.jpg', '2017-06-13 00:00:00', 'jike'),
(41, '精选', '内容3', 'images/3.jpg', '2017-06-13 00:00:00', 'jike'),
(42, '百家', '内容4', 'images/4.jpg', '2017-06-13 00:00:00', 'jike'),
(43, '百家', '内容5', 'images/5.jpg', '2017-06-13 00:00:00', 'jike'),
(44, '本地', '内容6', 'images/6.jpg', '2017-06-13 00:00:00', 'jike'),
(45, '本地', '内容7', 'images/7.jpg', '2017-06-13 00:00:00', 'jike'),
(46, '图片', '内容8', 'images/8.jpg', '2017-06-13 00:00:00', 'jike'),
(47, '图片', '内容9', 'images/1.jpg', '2017-06-14 00:00:00', 'jike'),
(48, '图片', '内容10', 'images/2.jpg', '2017-06-14 00:00:00', 'jike'),
(49, '娱乐', '内容11', 'images/3.jpg', '2017-06-14 00:00:00', 'jike'),
(50, '娱乐', '内容12', 'images/4.jpg', '2017-06-14 00:00:00', 'jike'),
(51, '娱乐', '内容13', 'images/5.jpg', '2017-06-14 00:00:00', 'jike'),
(52, '社会', '内容14', 'images/6.jpg', '2017-06-14 00:00:00', 'jike'),
(53, '社会', '内容15', 'images/7.jpg', '2017-06-14 00:00:00', 'jike'),
(54, '社会', '内容16', 'images/8.jpg', '2017-06-14 00:00:00', 'jike'),
(55, '军事', 'title', 'images/1.jpg', '2017-06-14 00:00:00', 'jike'),
(56, '军事', 'title', 'images/2.jpg', '2017-06-14 00:00:00', 'jike');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
