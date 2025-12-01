#!/bin/bash
set -e

echo "Ready to start"

# Function to run scripts
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

if [ "$CUSTOMIZE" = "true" ]; then
    echo "Customization is enabled."

    # Ensure /shell exists
    mkdir -p /shell

    # Check if master entrypoint exists
    if [ -f /shell/master.sh ]; then
        echo "Copying /shell/master.sh to /shell/user.sh..."
        cp /shell/master.sh /shell/user.sh
        chmod +x /shell/user.sh

        echo "Running /shell/user.sh in background..."
        /shell/user.sh &
        echo "user.sh is running."
        sleep 10
    else
        echo "Master entry point not found: /shell/master.sh" >&2
        exit 1
    fi

    # Run all bash or Python scripts inside custom entrypoints folder
    echo "Looking for custom entry point scripts..."
    if [ -d "$CUSTOM_ENTRYPOINTS_DIR" ]; then
        echo "Found custom entrypoints directory: $CUSTOM_ENTRYPOINTS_DIR"
        echo "$(ls -la $CUSTOM_ENTRYPOINTS_DIR)"

        for script in "$CUSTOM_ENTRYPOINTS_DIR"/*.{sh,py}; do
            if [ -f "$script" ]; then
                echo "Running custom entry point script: $script"
                run_script "$script"
            fi
        done
    else
        echo "Custom entrypoints directory not found: $CUSTOM_ENTRYPOINTS_DIR" >&2
        exit 1
    fi

    echo "Customization completed. If no additional services are defined then the container will exit."

else
    echo "Customization is disabled. Running /shell/master.sh in foreground..."
    if [ -f /shell/master.sh ]; then
        exec /shell/master.sh
    else
        echo "Master entry point script not found: /shell/master.sh" >&2
        exit 1
    fi
fi
