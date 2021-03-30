# Kubernetes


## Creating Pods
Launch a single instance:

kubectl run nginx --image=nginx:1.10.0
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
