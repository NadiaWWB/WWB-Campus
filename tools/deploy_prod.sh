#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

export AWS_EB_PROFILE=personal
eb deploy wwb-campus-prod