#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

container_id=$(basename $(cat /proc/1/cpuset) | cut -c 1-12)
container_ip=$(cat /etc/hosts | grep $container_id | head -1 | awk '{print $1}')
echo "$container_ip $container_id $container_id.localdomain" >> /etc/hosts
/etc/init.d/sendmail start
