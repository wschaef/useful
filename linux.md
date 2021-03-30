## search in the history

```
CTRL-r and start typing
```

## curl

```bash
curl -H "Authorization: Bearer <token>" --cacert tls/ca.pem https://127.0.0.1:10443
```

* *-H* - set header e.g authZ
* *--cacert* point to public ca certificate, which is provided by the server
