worker_processes auto;

events { worker_connections 1024; }

http {

  include mime.types;
  sendfile on;

  server {
    listen 80;
    server_name www.ssafy-ssam.com ssafy-ssam.com;
    server_tokens off;
## 빌드 및 배포
1. 
Hadoop
Spring boot  
Vue2  
JAVA : openjdk version "1.8.0_192"  
InteliJ IDEA 2021.3.1  
VSCode 1.64.2  
Mongo:5.0.6   
jenkins:lts-jdk8


2. <br>nginx 파일  
```
    location / {
           return 301 https://$host$request_uri;
    }

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
  }

  server {
    listen 443 ssl;
    server_name www.ssafy-ssam.com ssafy-ssam.com;
    server_tokens off;

    location /api { # 이 부분은 api라는 uri로 통신 시 백엔드에 프록시 처리를 하기 위함
      proxy_pass         http://k6a403.p.ssafy.io:8081;
      proxy_redirect     off;
      proxy_set_header   Host $host;
      proxy_set_header   X-Real-IP $remote_addr;
      proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header   X-Forwarded-Host $server_name;
    }

    location / {
      root  /app/build;

      index index.html;
      try_files $uri $uri/ /index.html;
    }

   ssl_certificate /etc/letsencrypt/live/ssafy-ssam.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ssafy-ssam.com/privkey.pem;
    ssl_session_cache shared:le_nginx_SSL:10m;
    ssl_session_timeout 1440m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
  }
  server {
    listen 443 ssl;
    server_name k6a403.p.ssafy.io
    server_tokens off;

    location /api { # 이 부분은 api라는 uri로 통신 시 백엔드에 프록시 처리를 하기 위함
      proxy_pass         http://k6a403.p.ssafy.io:8081;
      proxy_redirect     off;
      proxy_set_header   Host $host;
      proxy_set_header   X-Real-IP $remote_addr;
      proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header   X-Forwarded-Host $server_name;
    }

    location / {
      root  /app/build;
      index index.html;
      try_files $uri $uri/ /index.html;
    }

   ssl_certificate /etc/letsencrypt/live/k6a403.p.ssafy.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/k6a403.p.ssafy.io/privkey.pem;
    ssl_session_cache shared:le_nginx_SSL:10m;
    ssl_session_timeout 1440m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
  }
3. 특이사항  
 SSL 발급받기
 ```
sudo apt-get update -y & sudo apt-get install letsencrypt -y
sudo letsencrypt certonly --standalone -d [도메인 네임]
 ```

4. DB 접속 정보  
mysql
사용 db : ssam
계정 : root / ssafya403hanlim
<br>

## 외부 서비스 정보
가비아 도메인 이용 