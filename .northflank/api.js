{
  "name": "Container Library",
  "description": "northflank",
  "apiVersion": "v1.2",
  "spec": {
    "kind": "Workflow",
    "spec": {
      "type": "sequential",
      "steps": [
        {
          "ref": "project",
          "kind": "Project",
          "spec": {
            "name": "Northflank Code",
            "color": "#ffda1f",
            "networking": {
              "allowedIngressProjects": [],
              "hostAliases": {
                "enabled": false
              }
            },
            "region": "us-central"
          }
        },
        {
          "kind": "Workflow",
          "spec": {
            "context": {
              "projectId": "${refs.project.id}"
            },
            "type": "sequential",
            "steps": [
              {
                "kind": "Workflow",
                "spec": {
                  "type": "parallel",
                  "steps": [
                    {
                      "kind": "CombinedService",
                      "spec": {
                        "name": "Chrome 3",
                        "infrastructure": {
                          "architecture": "x86"
                        },
                        "billing": {
                          "buildPlan": "nf-compute-400-16",
                          "deploymentPlan": "nf-compute-400"
                        },
                        "deployment": {
                          "type": "deployment",
                          "instances": 0,
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 2048
                            },
                            "shmSize": 64
                          }
                        },
                        "ports": [
                          {
                            "name": "google",
                            "internalPort": 6080,
                            "protocol": "HTTP",
                            "public": true
                          }
                        ],
                        "loadBalancing": {
                          "mode": "leastConnection"
                        },
                        "buildSource": "git",
                        "disabledCI": true,
                        "vcsData": {
                          "projectUrl": "https://github.com/QuantumDevCoder/vnc-browsermain",
                          "projectType": "github",
                          "projectBranch": "main",
                          "accountLogin": "QuantumDevCoder"
                        },
                        "buildSettings": {
                          "dockerfile": {
                            "buildEngine": "buildkit",
                            "dockerFilePath": "/v/6.Dockerfile",
                            "dockerWorkDir": "/"
                          },
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 16384
                            }
                          }
                        }
                      }
                    },
                    {
                      "kind": "CombinedService",
                      "spec": {
                        "name": "Chrome 4",
                        "infrastructure": {
                          "architecture": "x86"
                        },
                        "billing": {
                          "buildPlan": "nf-compute-400-16",
                          "deploymentPlan": "nf-compute-400"
                        },
                        "deployment": {
                          "type": "deployment",
                          "instances": 0,
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 2048
                            },
                            "shmSize": 64
                          }
                        },
                        "ports": [
                          {
                            "name": "google",
                            "internalPort": 6080,
                            "protocol": "HTTP",
                            "public": true
                          }
                        ],
                        "loadBalancing": {
                          "mode": "leastConnection"
                        },
                        "buildSource": "git",
                        "disabledCI": true,
                        "vcsData": {
                          "projectUrl": "https://github.com/QuantumDevCoder/vnc-browsermain",
                          "projectType": "github",
                          "projectBranch": "main",
                          "accountLogin": "QuantumDevCoder"
                        },
                        "buildSettings": {
                          "dockerfile": {
                            "buildEngine": "buildkit",
                            "dockerFilePath": "/v/7.Dockerfile",
                            "dockerWorkDir": "/"
                          },
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 16384
                            }
                          }
                        }
                      }
                    },
                    {
                      "kind": "CombinedService",
                      "spec": {
                        "name": "Chrome 2",
                        "infrastructure": {
                          "architecture": "x86"
                        },
                        "billing": {
                          "buildPlan": "nf-compute-400-16",
                          "deploymentPlan": "nf-compute-400"
                        },
                        "deployment": {
                          "type": "deployment",
                          "instances": 0,
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 2048
                            },
                            "shmSize": 64
                          }
                        },
                        "ports": [
                          {
                            "name": "google",
                            "internalPort": 6080,
                            "protocol": "HTTP",
                            "public": true
                          }
                        ],
                        "loadBalancing": {
                          "mode": "leastConnection"
                        },
                        "buildSource": "git",
                        "disabledCI": true,
                        "vcsData": {
                          "projectUrl": "https://github.com/QuantumDevCoder/vnc-browsermain",
                          "projectType": "github",
                          "projectBranch": "main",
                          "accountLogin": "QuantumDevCoder"
                        },
                        "buildSettings": {
                          "dockerfile": {
                            "buildEngine": "buildkit",
                            "dockerFilePath": "/v/5.Dockerfile",
                            "dockerWorkDir": "/"
                          },
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 16384
                            }
                          }
                        }
                      }
                    },
                    {
                      "kind": "CombinedService",
                      "spec": {
                        "name": "Chrome 1",
                        "infrastructure": {
                          "architecture": "x86"
                        },
                        "billing": {
                          "buildPlan": "nf-compute-400-16",
                          "deploymentPlan": "nf-compute-400"
                        },
                        "deployment": {
                          "type": "deployment",
                          "instances": 0,
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 2048
                            },
                            "shmSize": 64
                          }
                        },
                        "ports": [
                          {
                            "name": "google",
                            "internalPort": 6080,
                            "protocol": "HTTP",
                            "public": true
                          }
                        ],
                        "loadBalancing": {
                          "mode": "leastConnection"
                        },
                        "buildSource": "git",
                        "disabledCI": true,
                        "vcsData": {
                          "projectUrl": "https://github.com/QuantumDevCoder/vnc-browsermain",
                          "projectType": "github",
                          "projectBranch": "main",
                          "accountLogin": "QuantumDevCoder"
                        },
                        "buildSettings": {
                          "dockerfile": {
                            "buildEngine": "buildkit",
                            "dockerFilePath": "/v/1.Dockerfile",
                            "dockerWorkDir": "/"
                          },
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 16384
                            }
                          }
                        }
                      }
                    },
                    {
                      "kind": "CombinedService",
                      "spec": {
                        "name": "Chrome 5",
                        "infrastructure": {
                          "architecture": "x86"
                        },
                        "billing": {
                          "buildPlan": "nf-compute-400-16",
                          "deploymentPlan": "nf-compute-400"
                        },
                        "deployment": {
                          "type": "deployment",
                          "instances": 0,
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 2048
                            },
                            "shmSize": 64
                          }
                        },
                        "ports": [
                          {
                            "name": "google",
                            "internalPort": 6080,
                            "protocol": "HTTP",
                            "public": true
                          }
                        ],
                        "loadBalancing": {
                          "mode": "leastConnection"
                        },
                        "buildSource": "git",
                        "disabledCI": true,
                        "vcsData": {
                          "projectUrl": "https://github.com/QuantumDevCoder/vnc-browsermain",
                          "projectType": "github",
                          "projectBranch": "main",
                          "accountLogin": "QuantumDevCoder"
                        },
                        "buildSettings": {
                          "dockerfile": {
                            "buildEngine": "buildkit",
                            "dockerFilePath": "/v/11.Dockerfile",
                            "dockerWorkDir": "/"
                          },
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 16384
                            }
                          }
                        }
                      }
                    },
                    {
                      "kind": "CombinedService",
                      "spec": {
                        "name": "Chrome 6",
                        "infrastructure": {
                          "architecture": "x86"
                        },
                        "billing": {
                          "buildPlan": "nf-compute-400-16",
                          "deploymentPlan": "nf-compute-400"
                        },
                        "deployment": {
                          "type": "deployment",
                          "instances": 0,
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 2048
                            },
                            "shmSize": 64
                          }
                        },
                        "ports": [
                          {
                            "name": "google",
                            "internalPort": 6080,
                            "protocol": "HTTP",
                            "public": true
                          }
                        ],
                        "loadBalancing": {
                          "mode": "leastConnection"
                        },
                        "buildSource": "git",
                        "disabledCI": true,
                        "vcsData": {
                          "projectUrl": "https://github.com/QuantumDevCoder/vnc-browsermain",
                          "projectType": "github",
                          "projectBranch": "main",
                          "accountLogin": "QuantumDevCoder"
                        },
                        "buildSettings": {
                          "dockerfile": {
                            "buildEngine": "buildkit",
                            "dockerFilePath": "/v/9.Dockerfile",
                            "dockerWorkDir": "/"
                          },
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 16384
                            }
                          }
                        }
                      }
                    },
                    {
                      "kind": "CombinedService",
                      "spec": {
                        "name": "Chrome 11",
                        "infrastructure": {
                          "architecture": "x86"
                        },
                        "billing": {
                          "buildPlan": "nf-compute-400-16",
                          "deploymentPlan": "nf-compute-400"
                        },
                        "deployment": {
                          "type": "deployment",
                          "instances": 0,
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 2048
                            },
                            "shmSize": 64
                          }
                        },
                        "ports": [
                          {
                            "name": "google",
                            "internalPort": 6080,
                            "protocol": "HTTP",
                            "public": true
                          }
                        ],
                        "loadBalancing": {
                          "mode": "leastConnection"
                        },
                        "buildSource": "git",
                        "disabledCI": true,
                        "vcsData": {
                          "projectUrl": "https://github.com/QuantumDevCoder/vnc-browsermain",
                          "projectType": "github",
                          "projectBranch": "main",
                          "accountLogin": "QuantumDevCoder"
                        },
                        "buildSettings": {
                          "dockerfile": {
                            "buildEngine": "buildkit",
                            "dockerFilePath": "/v/4.Dockerfile",
                            "dockerWorkDir": "/"
                          },
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 16384
                            }
                          }
                        }
                      }
                    },
                    {
                      "kind": "CombinedService",
                      "spec": {
                        "name": "Chrome 10",
                        "infrastructure": {
                          "architecture": "x86"
                        },
                        "billing": {
                          "buildPlan": "nf-compute-400-16",
                          "deploymentPlan": "nf-compute-400"
                        },
                        "deployment": {
                          "type": "deployment",
                          "instances": 0,
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 2048
                            },
                            "shmSize": 64
                          }
                        },
                        "ports": [
                          {
                            "name": "google",
                            "internalPort": 6080,
                            "protocol": "HTTP",
                            "public": true
                          }
                        ],
                        "loadBalancing": {
                          "mode": "leastConnection"
                        },
                        "buildSource": "git",
                        "disabledCI": true,
                        "vcsData": {
                          "projectUrl": "https://github.com/QuantumDevCoder/vnc-browsermain",
                          "projectType": "github",
                          "projectBranch": "main",
                          "accountLogin": "QuantumDevCoder"
                        },
                        "buildSettings": {
                          "dockerfile": {
                            "buildEngine": "buildkit",
                            "dockerFilePath": "/v/10.Dockerfile",
                            "dockerWorkDir": "/"
                          },
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 16384
                            }
                          }
                        }
                      }
                    },
                    {
                      "kind": "CombinedService",
                      "spec": {
                        "name": "Chrome 9",
                        "infrastructure": {
                          "architecture": "x86"
                        },
                        "billing": {
                          "buildPlan": "nf-compute-400-16",
                          "deploymentPlan": "nf-compute-400"
                        },
                        "deployment": {
                          "type": "deployment",
                          "instances": 0,
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 2048
                            },
                            "shmSize": 64
                          }
                        },
                        "ports": [
                          {
                            "name": "google",
                            "internalPort": 6080,
                            "protocol": "HTTP",
                            "public": true
                          }
                        ],
                        "loadBalancing": {
                          "mode": "leastConnection"
                        },
                        "buildSource": "git",
                        "disabledCI": true,
                        "vcsData": {
                          "projectUrl": "https://github.com/QuantumDevCoder/vnc-browsermain",
                          "projectType": "github",
                          "projectBranch": "main",
                          "accountLogin": "QuantumDevCoder"
                        },
                        "buildSettings": {
                          "dockerfile": {
                            "buildEngine": "buildkit",
                            "dockerFilePath": "/v/3.Dockerfile",
                            "dockerWorkDir": "/"
                          },
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 16384
                            }
                          }
                        }
                      }
                    },
                    {
                      "kind": "CombinedService",
                      "spec": {
                        "name": "Chrome 8",
                        "infrastructure": {
                          "architecture": "x86"
                        },
                        "billing": {
                          "buildPlan": "nf-compute-400-16",
                          "deploymentPlan": "nf-compute-400"
                        },
                        "deployment": {
                          "type": "deployment",
                          "instances": 0,
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 2048
                            },
                            "shmSize": 64
                          }
                        },
                        "ports": [
                          {
                            "name": "google",
                            "internalPort": 6080,
                            "protocol": "HTTP",
                            "public": true
                          }
                        ],
                        "loadBalancing": {
                          "mode": "leastConnection"
                        },
                        "buildSource": "git",
                        "disabledCI": true,
                        "vcsData": {
                          "projectUrl": "https://github.com/QuantumDevCoder/vnc-browsermain",
                          "projectType": "github",
                          "projectBranch": "main",
                          "accountLogin": "QuantumDevCoder"
                        },
                        "buildSettings": {
                          "dockerfile": {
                            "buildEngine": "buildkit",
                            "dockerFilePath": "/v/2.Dockerfile",
                            "dockerWorkDir": "/"
                          },
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 16384
                            }
                          }
                        }
                      }
                    },
                    {
                      "kind": "CombinedService",
                      "spec": {
                        "name": "Chrome 7",
                        "infrastructure": {
                          "architecture": "x86"
                        },
                        "billing": {
                          "buildPlan": "nf-compute-400-16",
                          "deploymentPlan": "nf-compute-400"
                        },
                        "deployment": {
                          "type": "deployment",
                          "instances": 0,
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 2048
                            },
                            "shmSize": 64
                          }
                        },
                        "ports": [
                          {
                            "name": "google",
                            "internalPort": 6080,
                            "protocol": "HTTP",
                            "public": true
                          }
                        ],
                        "loadBalancing": {
                          "mode": "leastConnection"
                        },
                        "buildSource": "git",
                        "disabledCI": true,
                        "vcsData": {
                          "projectUrl": "https://github.com/QuantumDevCoder/vnc-browsermain",
                          "projectType": "github",
                          "projectBranch": "main",
                          "accountLogin": "QuantumDevCoder"
                        },
                        "buildSettings": {
                          "dockerfile": {
                            "buildEngine": "buildkit",
                            "dockerFilePath": "/v/8.Dockerfile",
                            "dockerWorkDir": "/"
                          },
                          "storage": {
                            "ephemeralStorage": {
                              "storageSize": 16384
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              },
              {
                "kind": "Workflow",
                "spec": {
                  "type": "parallel",
                  "steps": [
                    {
                      "kind": "Volume",
                      "spec": {
                        "name": "Chrome 1",
                        "mounts": [
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.local/"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.cache/"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.config/google-chrome"
                          }
                        ],
                        "tags": [],
                        "spec": {
                          "accessMode": "ReadWriteMany",
                          "storageSize": 20480,
                          "storageClassName": "nf-multi-rw"
                        },
                        "attachedObjects": [
                          {
                            "id": "chrome-1",
                            "type": "service"
                          }
                        ]
                      }
                    },
                    {
                      "kind": "Volume",
                      "spec": {
                        "name": "Chrome 2",
                        "mounts": [
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.config/google-chrome"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.cache/"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.local/"
                          }
                        ],
                        "tags": [],
                        "spec": {
                          "accessMode": "ReadWriteMany",
                          "storageSize": 20480,
                          "storageClassName": "nf-multi-rw"
                        },
                        "attachedObjects": [
                          {
                            "id": "chrome-2",
                            "type": "service"
                          }
                        ]
                      }
                    },
                    {
                      "kind": "Volume",
                      "spec": {
                        "name": "Chrome 3",
                        "mounts": [
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.config/google-chrome"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.cache/"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.local/"
                          }
                        ],
                        "tags": [],
                        "spec": {
                          "accessMode": "ReadWriteMany",
                          "storageSize": 20480,
                          "storageClassName": "nf-multi-rw"
                        },
                        "attachedObjects": [
                          {
                            "id": "chrome-3",
                            "type": "service"
                          }
                        ]
                      }
                    },
                    {
                      "kind": "Volume",
                      "spec": {
                        "name": "Chrome 4",
                        "mounts": [
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.config/google-chrome"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.cache/"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.local/"
                          }
                        ],
                        "tags": [],
                        "spec": {
                          "accessMode": "ReadWriteMany",
                          "storageSize": 20480,
                          "storageClassName": "nf-multi-rw"
                        },
                        "attachedObjects": [
                          {
                            "id": "chrome-4",
                            "type": "service"
                          }
                        ]
                      }
                    },
                    {
                      "kind": "Volume",
                      "spec": {
                        "name": "Chrome 11",
                        "mounts": [
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.config/google-chrome"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.cache/"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.local/"
                          }
                        ],
                        "tags": [],
                        "spec": {
                          "accessMode": "ReadWriteMany",
                          "storageSize": 20480,
                          "storageClassName": "nf-multi-rw"
                        },
                        "attachedObjects": [
                          {
                            "id": "chrome-11",
                            "type": "service"
                          }
                        ]
                      }
                    },
                    {
                      "kind": "Volume",
                      "spec": {
                        "name": "Chrome 10",
                        "mounts": [
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.config/google-chrome"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.cache/"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.local/"
                          }
                        ],
                        "tags": [],
                        "spec": {
                          "accessMode": "ReadWriteMany",
                          "storageSize": 20480,
                          "storageClassName": "nf-multi-rw"
                        },
                        "attachedObjects": [
                          {
                            "id": "chrome-10",
                            "type": "service"
                          }
                        ]
                      }
                    },
                    {
                      "kind": "Volume",
                      "spec": {
                        "name": "Chrome 9",
                        "mounts": [
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.config/google-chrome"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.cache/"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.local/"
                          }
                        ],
                        "tags": [],
                        "spec": {
                          "accessMode": "ReadWriteMany",
                          "storageSize": 20480,
                          "storageClassName": "nf-multi-rw"
                        },
                        "attachedObjects": [
                          {
                            "id": "chrome-9",
                            "type": "service"
                          }
                        ]
                      }
                    },
                    {
                      "kind": "Volume",
                      "spec": {
                        "name": "Chrome 8",
                        "mounts": [
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.config/google-chrome"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.cache/"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.local/"
                          }
                        ],
                        "tags": [],
                        "spec": {
                          "accessMode": "ReadWriteMany",
                          "storageSize": 20480,
                          "storageClassName": "nf-multi-rw"
                        },
                        "attachedObjects": [
                          {
                            "id": "chrome-8",
                            "type": "service"
                          }
                        ]
                      }
                    },
                    {
                      "kind": "Volume",
                      "spec": {
                        "name": "Chrome 7",
                        "mounts": [
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.config/google-chrome"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.cache/"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.local/"
                          }
                        ],
                        "tags": [],
                        "spec": {
                          "accessMode": "ReadWriteMany",
                          "storageSize": 20480,
                          "storageClassName": "nf-multi-rw"
                        },
                        "attachedObjects": [
                          {
                            "id": "chrome-7",
                            "type": "service"
                          }
                        ]
                      }
                    },
                    {
                      "kind": "Volume",
                      "spec": {
                        "name": "Chrome 6",
                        "mounts": [
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.config/google-chrome"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.cache/"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.local/"
                          }
                        ],
                        "tags": [],
                        "spec": {
                          "accessMode": "ReadWriteMany",
                          "storageSize": 20480,
                          "storageClassName": "nf-multi-rw"
                        },
                        "attachedObjects": [
                          {
                            "id": "chrome-6",
                            "type": "service"
                          }
                        ]
                      }
                    },
                    {
                      "kind": "Volume",
                      "spec": {
                        "name": "Chrome 5",
                        "mounts": [
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.config/google-chrome"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.cache/"
                          },
                          {
                            "volumeMountPath": "",
                            "containerMountPath": "/root/.local/"
                          }
                        ],
                        "tags": [],
                        "spec": {
                          "accessMode": "ReadWriteMany",
                          "storageSize": 20480,
                          "storageClassName": "nf-multi-rw"
                        },
                        "attachedObjects": [
                          {
                            "id": "chrome-5",
                            "type": "service"
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
}
