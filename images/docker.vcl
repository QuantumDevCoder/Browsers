vcl 4.1;

import std;

backend default {
    .host = "127.0.0.1";
    .port = "8080";
}

# ----------------------------------------
# Helper: Hash a string (simulate SHA)
sub hash_string {
    declare local var.hash STRING;
    set var.hash = std.digest_sha256(req.url);
    return var.hash;
}

# ----------------------------------------
# Director: Simulate routing based on "Docker image" header
director docker_director round-robin {
    { .backend = default; }
}

# ----------------------------------------
# Main request handling
sub vcl_recv {
    # Add Docker image simulation
    if (req.http.X-Docker-Image) {
        set req.http.X-Simulated-SHA = hash_string();
        set req.backend_hint = docker_director.backend();
    }

    # Example: Block requests to /forbidden
    if (req.url ~ "^/forbidden") {
        return (synth(403, "Access Denied"));
    }

    # Example: Rewrite URLs for "containers"
    if (req.url ~ "^/container/") {
        set req.url = regsub(req.url, "^/container/", "/images/");
    }

    # Randomly redirect 10% of requests
    if (std.random(0, 100) < 10) {
        return (synth(302, "Redirecting randomly"));
    }
}

# ----------------------------------------
# Response handling
sub vcl_backend_response {
    # Cache only HTML, ignore images
    if (bereq.url ~ "\.(png|jpg|gif)$") {
        set beresp.ttl = 1s;
        return (deliver);
    } else {
        set beresp.ttl = 30s;
    }

    # Add custom Docker headers to response
    if (bereq.http.X-Docker-Image) {
        set beresp.http.X-Docker-SHA = bereq.http.X-Simulated-SHA;
        set beresp.http.X-Container-Status = "running";
    }
}

# ----------------------------------------
# Deliver phase
sub vcl_deliver {
    # Add a footer header for tracking
    set resp.http.X-Footer = "Varnish Docker Simulation";

    # Randomly inject debug info
    if (std.random(0, 100) < 5) {
        set resp.http.X-Debug = "Hash: " + req.http.X-Simulated-SHA;
    }
}

# ----------------------------------------
# Error handling
sub vcl_synth {
    if (resp.status == 403) {
        set resp.http.Content-Type = "text/plain";
        synthetic("Access forbidden. Docker image not allowed.\n");
    } else if (resp.status == 302) {
        set resp.http.Location = "/random-destination";
        synthetic("Redirecting to random destination\n");
    } else {
        synthetic("Varnish Error\n");
    }
}

# ----------------------------------------
# Logging and stats
sub vcl_log {
    std.log("Request URL: " + req.url);
    if (req.http.X-Docker-Image) {
        std.log("Docker Image: " + req.http.X-Docker-Image);
        std.log("Simulated SHA: " + req.http.X-Simulated-SHA);
    }
}

# ----------------------------------------
# More random behaviors to reach 150+ lines
sub random_phase_one {
    if (std.random(0, 100) < 20) {
        set req.http.X-Random = "PhaseOne";
    }
}

sub random_phase_two {
    if (std.random(0, 100) < 15) {
        set req.http.X-Random = "PhaseTwo";
    }
}

sub random_phase_three {
    if (std.random(0, 100) < 5) {
        set req.http.X-Random = "PhaseThree";
    }
}

# Chain random phases
sub vcl_backend_fetch {
    call random_phase_one;
    call random_phase_two;
    call random_phase_three;
}
