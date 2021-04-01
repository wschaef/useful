# Kubernetes

## Overview
https://brennerm.github.io/posts/kubernetes-overview-diagrams.html

## Creating Pods from docker image
Launch a single instance:
```bash
kubectl run nginx --image=nginx:1.10.0
```

Get pods
```bash
kubectl get pods
```
Expose nginx
```bash
kubectl expose deployment nginx --port 80 --type LoadBalancer
```

List services
```bash
kubectl get services
```

Kubernetes cheat sheet
We just went over a lot and we know you’re probably a little overwhelmed. Fear not! We’ll be going over each of these concepts, over the next two lessons. And you can always come back to this demo -- if you need to watch it again.

To help out, here’s a Kubernetes command cheat sheet. http://kubernetes.io/docs/user-guide/kubectl-cheatsheet/

## Creating Pods with yaml file

Create the monolith pod
```bash
kubectl create -f pods/monolith.yaml
```
Examine pods
```bash
kubectl get pods
```
It may take a few seconds before the monolith pod is up and running as the monolith container image needs to be pulled from the Docker Hub before we can run it.

Use the kubectl describe command to get more information about the monolith pod.
```bash
kubectl describe pods monolith
```

## Interact with pods

Cloud shell 1: set up port-forwarding
```bash
kubectl port-forward monolith 10080:80
```
Open new Cloud Shell session 2
```bash
curl http://127.0.0.1:10080
curl http://127.0.0.1:10080/secure
```

Cloud shell 2 - log in
```bash
curl -u user http://127.0.0.1:10080/login
curl -H "Authorization: Bearer <token>" http://127.0.0.1:10080/secure
```

View logs
```bash
kubectl logs monolith
kubectl logs -f monolith
```
In Cloud Shell 3

```bash
curl http://127.0.0.1:10080
```
In Cloud Shell 2
Exit log watching (Ctrl-C)

You can use the kubectl exec command to run an interactive shell inside the monolith Pod. This can come in handy when you want to troubleshoot from within a container:
```bash
kubectl exec monolith --stdin --tty -c monolith /bin/sh
```
For example, once we have a shell into the monolith container we can test external connectivity using the ping command.
```bash
ping -c 3 google.com
```
When you’re done with the interactive shell be sure to logout.
```bash
exit
```

## Other

get a specific value from outputs
```bash
# show the whole response
kubectl get <resource> <resourcename> -o json

# get a specific part e.g. a value from response
kubectl get <resource> <resourcename> -o jsonpath='{<path inside the json starting with a .>}'
```

e.g. get external ip of a service
```bash
kubectl get services <name of service> -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
# and assign it to a variable
extIp=$(kubectl get services frontend -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
```
