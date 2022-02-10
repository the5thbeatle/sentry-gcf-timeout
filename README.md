# sentry-gcf-timeout

### Running Instructions

To run the function wrapped by `Sentry.GCPFunction.wrapHttpFunction`:

```sh
# Start server in one shell
yarn watch:wrapped

# Send request in another
yarn request
```

To run the function not wrapped by `Sentry.GCPFunction.wrapHttpFunction`:

```sh
# Start server in one shell
yarn watch:unwrapped

# Send request in another
yarn request
```
