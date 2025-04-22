-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 07 Sty 2024, 21:52
-- Wersja serwera: 10.4.14-MariaDB
-- Wersja PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `logistyka`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kursy`
--

CREATE TABLE `kursy` (
  `id` int(11) NOT NULL,
  `number` varchar(9) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `fromm` varchar(30) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `destination` varchar(30) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `pinned` tinyint(1) NOT NULL DEFAULT 0,
  `completed` tinyint(1) NOT NULL DEFAULT 0,
  `archivised` tinyint(1) NOT NULL DEFAULT 0,
  `deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `kursy`
--

INSERT INTO `kursy` (`id`, `number`, `fromm`, `destination`, `pinned`, `completed`, `archivised`, `deleted`) VALUES
(1, 'BeiAms998', 'Beijing', 'Amsterdam', 1, 0, 0, 0),
(2, 'AmsBei998', 'Amsterdam', 'Beijing', 0, 0, 0, 0),
(3, 'AmsSha998', 'Amsterdam', 'Shanghai', 0, 0, 0, 0),
(4, 'ShaAms998', 'Shanghai', 'Amsterdam', 0, 1, 0, 0),
(5, 'BeiGda998', 'Beijing', 'Gdańsk', 0, 0, 1, 0),
(6, 'GdaBei998', 'Gdańsk', 'Beijing', 0, 1, 1, 0);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `kursy`
--
ALTER TABLE `kursy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `kursy`
--
ALTER TABLE `kursy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
