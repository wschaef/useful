DOCKERFILE_NAME=Dockerfile
IMAGE_NAME=change-me
docker rmi $(docker images -f dangling=true -q)
docker rmi -f $IMAGE_NAME
docker build -t $IMAGE_NAME -f ${DOCKERFILE_NAME} .
docker run -p 8000:8080 $IMAGE_NAME
