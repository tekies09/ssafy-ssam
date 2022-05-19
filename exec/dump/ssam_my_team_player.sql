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
-- Table structure for table `my_team_player`
--

DROP TABLE IF EXISTS `my_team_player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `my_team_player` (
  `my_team_player_id` bigint NOT NULL AUTO_INCREMENT,
  `batting_order` varchar(255) DEFAULT NULL,
  `defense_position` varchar(255) DEFAULT NULL,
  `pitcher_or_hitter` varchar(255) DEFAULT NULL,
  `hitter_yearssid` bigint DEFAULT NULL,
  `my_team_id` bigint DEFAULT NULL,
  `pitcher_yearssid` bigint DEFAULT NULL,
  PRIMARY KEY (`my_team_player_id`),
  KEY `FKcbsy8ukmjwsnlu9vncdb1ieg5` (`hitter_yearssid`),
  KEY `FKlxmxgsf62694kci8e5gnvadul` (`my_team_id`),
  KEY `FKmkwymlv26sj0hotd3kgqms1ph` (`pitcher_yearssid`),
  CONSTRAINT `FKcbsy8ukmjwsnlu9vncdb1ieg5` FOREIGN KEY (`hitter_yearssid`) REFERENCES `hitter_years_status` (`hitter_yearssid`),
  CONSTRAINT `FKlxmxgsf62694kci8e5gnvadul` FOREIGN KEY (`my_team_id`) REFERENCES `my_team` (`my_team_id`),
  CONSTRAINT `FKmkwymlv26sj0hotd3kgqms1ph` FOREIGN KEY (`pitcher_yearssid`) REFERENCES `pitcher_years_status` (`pitcher_yearssid`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `my_team_player`
--

LOCK TABLES `my_team_player` WRITE;
/*!40000 ALTER TABLE `my_team_player` DISABLE KEYS */;
INSERT INTO `my_team_player` VALUES (1,'1','1B','Hitter',125,1,NULL),(2,'2','2B','Hitter',148,1,NULL),(3,'3','3B','Hitter',329,1,NULL),(4,'4','SS','Hitter',241,1,NULL),(5,'5','LF','Hitter',227,1,NULL),(6,'6','CF','Hitter',73,1,NULL),(7,'7','RF','Hitter',150,1,NULL),(8,'8','DH','Hitter',308,1,NULL),(9,'9','C','Hitter',224,1,NULL),(10,'10','P','Hitter',442,1,NULL),(15,'1','2B','Hitter',226,3,NULL),(16,'2','1B','Hitter',124,3,NULL),(17,'3','3B','Hitter',145,3,NULL),(18,'4','SS','Hitter',114,3,NULL),(19,'5','LF','Hitter',550,3,NULL),(20,'6','CF','Hitter',434,3,NULL),(21,'7','RF','Hitter',655,3,NULL),(22,'8','DH','Hitter',125,3,NULL),(23,'9','C','Hitter',124,3,NULL),(24,'10','P','Hitter',441,3,NULL),(25,'1','2B','Hitter',65,4,NULL),(26,'2','1B','Hitter',477,4,NULL),(27,'3','LF','Hitter',659,4,NULL),(28,'4','DH','Hitter',413,4,NULL),(29,'5','CF','Hitter',110,4,NULL),(30,'6','3B','Hitter',408,4,NULL),(31,'7','RF','Hitter',257,4,NULL),(32,'8','SS','Hitter',370,4,NULL),(33,'9','C','Hitter',608,4,NULL),(34,'10','P','Hitter',512,4,NULL),(65,'1','LF','Hitter',52,8,NULL),(66,'2','RF','Hitter',107,8,NULL),(67,'3','CF','Hitter',868,8,NULL),(68,'4','DH','Hitter',102,8,NULL),(69,'5','1B','Hitter',65,8,NULL),(70,'6','SS','Hitter',153,8,NULL),(71,'7','3B','Hitter',839,8,NULL),(72,'8','2B','Hitter',35,8,NULL),(73,'9','C','Hitter',26,8,NULL),(74,'10','P','Hitter',240,8,NULL);
/*!40000 ALTER TABLE `my_team_player` ENABLE KEYS */;
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
