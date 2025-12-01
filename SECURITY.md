# Security Policy
## Supported Versions
- Chrome, Firefox, Edge, Opera, Vivaldi
- Rebuilt on browser or Debian security updates

## Known Security Issues
- Google Services Unavailable For Google Play Services

## Security Practices
- Non-root user inside containers
- Network ports limited
- Secrets handled via ENV/ARG variables
- Containers isolated from host filesystem

## Dependencies
- Debian base
- Browsers as listed above
- X11VNC, Xvfb, Fluxbox, NoVNC
