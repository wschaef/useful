# Secretes and configuraion

## Kubernetes objects

### Secretes

Secretes are stored in *secretes*
https://kubernetes.io/docs/concepts/configuration/secret/

### Config-maps

Config-maps stores not sensitive data and are used to map configuration for pods

## How to assign the configuration to pods

In kubernetes the *secrets* and *config-maps* are mounted as a volume to a pod.

