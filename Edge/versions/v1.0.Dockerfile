# Use a minimal base image
FROM debian:stable-slim

# Build arguments
ARG DEF_VNC_SCREEN=0
ARG DEF_VNC_DISPLAY=0
ARG DEF_VNC_RESOLUTION=1920x1080
ARG DEF_VNC_PASSWORD=edgeadmin
ARG DEF_VNC_PORT=5900
ARG DEF_NOVNC_WEBSOCKIFY_PORT=6080
ARG DEF_STARTING_WEBSITE_URL=https://www.google.com
ARG DEF_LANG=en_US.UTF-8
ARG DEF_LC_ALL=C.UTF-8
ARG DEF_CUSTOMIZE=false
ARG DEF_CUSTOM_ENTRYPOINTS_DIR=/app/custom_entrypoints_scripts
ARG DEF_AUTO_START_BROWSER=true
ARG DEF_AUTO_START_XTERM=true
ARG DEF_DEBIAN_FRONTEND=noninteractive
ARG DEF_AUTO_START_WM=true
ARG DEF_AUTO_START_X11VNC=true
ARG DEF_AUTO_START_XVFB=true
ARG DEF_AUTO_START_NOVNC=true

# Optimized browser flags for performance
ARG DEF_BROWSER_OPTIONS=--no-sandbox \
    --disable-dev-shm-usage \
    --disable-gpu \
    --enable-features=VaapiVideoDecoder \
    --use-gl=swiftshader \
    --disable-software-rasterizer \
    --disable-extensions \
    --disable-background-networking \
    --disable-sync \
    --metrics-recording-only \
    --disable-default-apps \
    --mute-audio \
    --no-first-run \
    --disable-setuid-sandbox \
    --disable-accelerated-2d-canvas \
    --disable-accelerated-jpeg-decoding \
    --disable-accelerated-mjpeg-decode \
    --disable-accelerated-video-decode \
    --disable-background-timer-throttling \
    --disable-backgrounding-occluded-windows \
    --disable-breakpad \
    --disable-component-extensions-with-background-pages \
    --disable-features=TranslateUI,BlinkGenPropertyTrees \
    --disable-ipc-flooding-protection \
    --disable-renderer-backgrounding \
    --enable-features=NetworkService,NetworkServiceInProcess \
    --force-color-profile=srgb \
    --hide-scrollbars \
    --num-raster-threads=4 \
    --enable-zero-copy

# Optimized X11VNC options for better performance
ARG DEF_X11VNC_OPTIONS=-noxrecord -noxfixes -noxdamage -forever -shared -ncache 10

# Optimized Xvfb options
ARG DEF_XVFB_OPTIONS=-screen 0 1920x1080x24 +extension GLX +extension RANDR +extension RENDER -ac -nolisten tcp -dpi 96

ARG DEF_WM_OPTIONS=
ARG DEF_NOVNC_OPTIONS=
ARG DEF_XTERM_OPTIONS=

# Environment variables
ENV DISPLAY=:${DEF_VNC_DISPLAY}.${DEF_VNC_SCREEN} \
    VNC_SCREEN=${DEF_VNC_SCREEN} \
    VNC_DISPLAY=${DEF_VNC_DISPLAY} \
    VNC_RESOLUTION=${DEF_VNC_RESOLUTION} \
    VNC_PASSWORD=${DEF_VNC_PASSWORD} \
    VNC_PORT=${DEF_VNC_PORT} \
    NOVNC_WEBSOCKIFY_PORT=${DEF_NOVNC_WEBSOCKIFY_PORT} \
    STARTING_WEBSITE_URL=${DEF_STARTING_WEBSITE_URL} \
    LANG=${DEF_LANG} \
    LC_ALL=${DEF_LC_ALL} \
    CUSTOMIZE=${DEF_CUSTOMIZE} \
    CUSTOM_ENTRYPOINTS_DIR=${DEF_CUSTOM_ENTRYPOINTS_DIR} \
    AUTO_START_BROWSER=${DEF_AUTO_START_BROWSER} \
    AUTO_START_XTERM=${DEF_AUTO_START_XTERM} \
    DEBIAN_FRONTEND=${DEF_DEBIAN_FRONTEND} \
    AUTO_START_WM=${DEF_AUTO_START_WM} \
    AUTO_START_X11VNC=${DEF_AUTO_START_X11VNC} \
    AUTO_START_XVFB=${DEF_AUTO_START_XVFB} \
    AUTO_START_NOVNC=${DEF_AUTO_START_NOVNC} \
    BROWSER_OPTIONS="${DEF_BROWSER_OPTIONS}" \
    X11VNC_OPTIONS="${DEF_X11VNC_OPTIONS}" \
    XVFB_OPTIONS="${DEF_XVFB_OPTIONS}" \
    WM_OPTIONS=${DEF_WM_OPTIONS} \
    NOVNC_OPTIONS=${DEF_NOVNC_OPTIONS} \
    XTERM_OPTIONS=${DEF_XTERM_OPTIONS}

# Install system dependencies + Microsoft Edge with Mesa for software rendering
RUN set -e; \
    apt update && \
    apt install -qqy wget gnupg && \
    wget -q https://packages.microsoft.com/keys/microsoft.asc -O- \
        | gpg --dearmor -o /usr/share/keyrings/microsoft.gpg && \
    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/edge stable main" \
        > /etc/apt/sources.list.d/microsoft-edge.list && \
    apt update && \
    apt install -qqy \
        tini \
        supervisor \
        bash \
        xvfb \
        x11vnc \
        novnc \
        websockify \
        fluxbox \
        xterm \
        nano \
        microsoft-edge-stable \
        libgl1-mesa-dri \
        libgl1-mesa-glx \
        mesa-utils \
        libegl1-mesa \
        libgbm1 \
        fonts-liberation \
        fonts-noto \
        fonts-noto-color-emoji && \
    apt autoremove --purge -y && \
    apt clean && \
    rm -rf /var/lib/apt/lists/*

# Directories
RUN mkdir -p /etc/supervisor.d /app/conf.d ${DEF_CUSTOM_ENTRYPOINTS_DIR}
RUN mkdir -p /var/log/supervisor

# Create temp and cache directories with proper permissions
RUN mkdir -p /tmp/.X11-unix /tmp/.ICE-unix /dev/shm && \
    chmod 1777 /tmp/.X11-unix /tmp/.ICE-unix /dev/shm

# Copy configs
COPY supervisord.conf /etc/supervisor.d/supervisord.conf
COPY conf.d/ /app/conf.d/
COPY base_entrypoint.sh customizable_entrypoint.sh /usr/local/bin/
COPY browser_conf/edge.conf /app/conf.d/

# Permissions
RUN chmod +x /usr/local/bin/base_entrypoint.sh /usr/local/bin/customizable_entrypoint.sh

# Expose VNC + noVNC
EXPOSE ${VNC_PORT} ${NOVNC_WEBSOCKIFY_PORT}

# Entrypoint
ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["/usr/local/bin/customizable_entrypoint.sh"]
