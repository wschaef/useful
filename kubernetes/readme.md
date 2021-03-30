# Kubernetes

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
