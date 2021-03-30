# Secretes and configuraion

## Kubernetes objects

### Secretes

Secretes are stored in *secretes*
https://kubernetes.io/docs/concepts/configuration/secret/

```bash
ls tls
# ca-key.pem  ca.pem  cert.pem  key.pem  ssl-extensions-x509.cnf
```
The cert.pem and key.pem files will be used to secure traffic on the monolith server and the ca.pem will be used by HTTP clients as the CA to trust. Since the certs being used by the monolith server where signed by the CA represented by ca.pem, HTTP clients that trust ca.pem will be able to validate the SSL connection to the monolith server.

Use kubectl
to create the tls-certs secret from the TLS certificates stored under the tls directory:
```bash
kubectl create secret generic tls-certs --from-file=tls/
```
kubectl will create a key for each file in the tls directory under the tls-certs secret bucket. Use the kubectl describe command to verify that:
```bash
kubectl describe secrets tls-certs
```

### Config-maps

Config-maps stores not sensitive data and are used to map configuration for pods
```bash
kubectl create configmap nginx-proxy-conf --from-file=nginx/proxy.conf
```
Use the kubectl describe configmap command to get more details about the nginx-proxy-conf configmap entry:

```bash
kubectl describe configmap nginx-proxy-conf
```

## How to assign the configuration to pods

In kubernetes the *secrets* and *config-maps* are mounted as a volume to a pod.

