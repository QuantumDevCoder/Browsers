#!/bin/bash
set -e

echo "Ready to start user.sh"

# ----------------------------
# Helper to run scripts
# ----------------------------
run_script() {
    local script=$1
    case "$script" in
        *.sh)
            if [ -x "$script" ]; then
                "$script"
            else
                bash "$script"
            fi
            ;;
        *.py)
            if [ -x "$script" ]; then
                "$script"
            else
                python3 "$script"
            fi
            ;;
        *)
            echo "Unknown file type: $script" >&2
            ;;
    esac
}

# ----------------------------
# Set up browser profile directory
# ----------------------------
case "$BROWSER" in
    google-chrome*|chrome*|chromium*)
        PROFILE_DIR="${PROFILE_DIR:-/browser-data/chrome}"
        ;;
    microsoft-edge*)
        PROFILE_DIR="${PROFILE_DIR:-/browser-data/edge}"
        ;;
    firefox*|firefox-esr*)
        PROFILE_DIR="${PROFILE_DIR:-/browser-data/firefox}"
        ;;
    opera*)
        PROFILE_DIR="${PROFILE_DIR:-/browser-data/opera}"
        ;;
    vivaldi*)
        PROFILE_DIR="${PROFILE_DIR:-/browser-data/vivaldi}"
        ;;
    brave*)
        PROFILE_DIR="${PROFILE_DIR:-/browser-data/brave}"
        ;;
    *)
        echo "Unknown browser: $BROWSER, defaulting to chromium"
        PROFILE_DIR="${PROFILE_DIR:-/browser-data/chrome}"
        BROWSER="chromium"
        ;;
esac

mkdir -p "$PROFILE_DIR"
echo "Browser profile directory: $PROFILE_DIR"

# ----------------------------
# Customization logic
# ----------------------------
if [ "$CUSTOMIZE" = "true" ]; then
    echo "Customization is enabled."

    mkdir -p /shell

    # Copy and run master.sh in background
    if [ -f /shell/master.sh ]; then
        echo "Running /shell/master.sh in background..."
        cp /shell/master.sh /shell/user_master.sh
        chmod +x /shell/user_master.sh
        /shell/user_master.sh &
        sleep 5
    else
        echo "Master entrypoint not found: /shell/master.sh" >&2
        exit 1
    fi

    # Run all custom scripts
    if [ -d "$CUSTOM_ENTRYPOINTS_DIR" ]; then
        echo "Found custom entrypoints in $CUSTOM_ENTRYPOINTS_DIR"
        for script in "$CUSTOM_ENTRYPOINTS_DIR"/*.{sh,py}; do
            [ -f "$script" ] && run_script "$script"
        done
    else
        echo "No custom entrypoints directory found: $CUSTOM_ENTRYPOINTS_DIR"
    fi

    echo "Customization completed. Container will remain running for services."
    wait  # Keep background processes alive

else
    echo "Customization disabled. Running /shell/master.sh in foreground..."
    if [ -f /shell/master.sh ]; then
        exec /shell/master.sh
    else
        echo "Master entrypoint not found: /shell/master.sh" >&2
        exit 1
    fi
fi
