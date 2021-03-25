## Install Docker on Ubuntu

Commands to run (on the VM Instance)
Install Docker
```bash
sudo apt-get install docker.io
```
Check Docker images
```bash
sudo docker images
```
Pull nginx image
```bash
sudo docker pull nginx:latest
sudo docker images
```
Verify the versions match
```bash
sudo dpkg -l | grep nginx
```
If your version of nginx from native package and Docker are different, you need to update the VM instance:
```bash
sudo apt-get update
sudo apt-get install nginx
```

## Running Images with Docker
Commands to run on the VM Instance
Run the first instance
```bash
sudo docker run -d nginx:latest
```
Check if it's up
```bash
sudo docker ps
```
Run a different version of nginx
```bash
sudo docker run -d nginx:1.9.3
```
Check how many instances are running
```bash
sudo docker ps
sudo ps aux | grep nginx
```

## Inspect Docker instancies
List all running container processes
```bash
sudo docker ps
```bash
For use in shell scripts you might want to just get a list of container IDs (-a stands for all instances, not just running, and -q is for "quiet" - show just the numeric ID):
```bash
sudo docker ps -aq
```
Inspect the container
You can use either CONTAINER ID or NAMES field, for example for a sudo docker ps output like this:
```bash
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
f86cf066c304        nginx:1.10.0        "nginx -g 'daemon off"   8 minutes ago       Up 8 minutes        80/tcp, 443/tcp     sharp_bartik
```
You can use either of the following commands:
```bash
sudo docker inspect f86cf066c304
```
or
```bash
sudo docker inspect sharp_bartik
```
Connect to the nginx using the internal IP
Get the internal IP address either copying from the full inspect file or by assigning it to a shell variable:
```bash
CN="sharp_bartik"
CIP=$(sudo docker inspect --format '{{ .NetworkSettings.IPAddress }}' $CN)
curl  http://$CIP
```
You can also get all instance IDs and their corresponding IP addresses by doing this:
```bash
sudo docker inspect -f '{{.Name}} - {{.NetworkSettings.IPAddress }}' $(sudo docker ps -aq)
```
Stop an instance
```bash
sudo docker stop <cid>
```
or 
```bash
sudo docker stop $(sudo docker ps -aq)
```
Verify no more instances running
```bash
sudo docker ps
```
Remove the docker containers from the system
```bash
sudo docker rm <cid>
```
or 
```bash
sudo docker rm $(sudo docker ps -aq)
```
