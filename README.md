# RUN IN DOCKER CONTAINER
1. docker build -f Dockerfile.prod -t portfolio-site:latest .
2. docker run -it -p 80:80 --rm portfolio-site:latest