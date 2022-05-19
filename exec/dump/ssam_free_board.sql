-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: k6a403.p.ssafy.io    Database: ssam
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `free_board`
--

DROP TABLE IF EXISTS `free_board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `free_board` (
  `free_board_id` bigint NOT NULL AUTO_INCREMENT,
  `fb_content` varchar(255) DEFAULT NULL,
  `fb_title` varchar(255) DEFAULT NULL,
  `fb_update_time` datetime DEFAULT NULL,
  `fb_write_time` datetime DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`free_board_id`),
  KEY `FKs7yqjq5g35hi5k9cbiy33wfes` (`user_id`),
  CONSTRAINT `FKs7yqjq5g35hi5k9cbiy33wfes` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `free_board`
--

LOCK TABLES `free_board` WRITE;
/*!40000 ALTER TABLE `free_board` DISABLE KEYS */;
INSERT INTO `free_board` VALUES (2,'잘 지내봐요.','안녕하세요, 반갑습니다.','2022-05-19 15:52:50','2022-05-19 15:52:50',11),(4,'제발','올 해는 누가 이길까요','2022-05-19 16:57:24','2022-05-19 16:57:24',11),(6,'글 처음 써 봅니다.','게시글','2022-05-19 20:34:38','2022-05-19 20:34:38',13),(7,'올해 야구 우승은','히히 아무도 못해','2022-05-19 21:37:33','2022-05-19 21:37:33',11);
/*!40000 ALTER TABLE `free_board` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-20  0:30:45
