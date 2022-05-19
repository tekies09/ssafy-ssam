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
-- Table structure for table `battle_board`
--

DROP TABLE IF EXISTS `battle_board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `battle_board` (
  `battle_board_id` bigint NOT NULL AUTO_INCREMENT,
  `bb_title` varchar(255) DEFAULT NULL,
  `bb_update_time` datetime DEFAULT NULL,
  `bb_write_time` datetime DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `my_team_id` bigint DEFAULT NULL,
  PRIMARY KEY (`battle_board_id`),
  KEY `FKf5f8cpyue3106n24e11wbadt5` (`user_id`),
  KEY `FKfncga8exf0co47l8rqhcs8gl1` (`my_team_id`),
  CONSTRAINT `FKf5f8cpyue3106n24e11wbadt5` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKfncga8exf0co47l8rqhcs8gl1` FOREIGN KEY (`my_team_id`) REFERENCES `my_team` (`my_team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `battle_board`
--

LOCK TABLES `battle_board` WRITE;
/*!40000 ALTER TABLE `battle_board` DISABLE KEYS */;
INSERT INTO `battle_board` VALUES (1,'덤벼','2022-05-19 17:02:51','2022-05-19 17:02:51',11,1),(2,'으앙','2022-05-19 17:13:14','2022-05-19 17:13:14',2,3),(3,'이거 글이왜안써지지..','2022-05-19 17:21:22','2022-05-19 17:21:22',2,3),(4,'배틀 신청합니다.','2022-05-19 17:35:10','2022-05-19 17:35:10',3,4);
/*!40000 ALTER TABLE `battle_board` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-20  0:30:47
