# RUN IN DOCKER CONTAINER FOR DEVELOPMENT
1. sudo docker build -f Dockerfile.prod -t portfolio-site:latest .
2. sudo docker run -it -p 80:80 --rm portfolio-site:latest