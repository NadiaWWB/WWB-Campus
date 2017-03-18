#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

# check for required env vars
: "${WWB_NGINX_SERVERNAME?Unset variable: WWB_NGINX_SERVERNAME}"

# we use basically this approach for runtime configuration:
# http://www.mricho.com/confd-and-docker-separating-config-and-code-for-containers/
confd -onetime -backend env

# send log output to stdout
nohup tail -f /wwb-data/runtime/logs/craft.log | tee /proc/1/fd/1 &
nohup tail -f /var/log/php-fpm/access_log.log | tee /proc/1/fd/1 &

# start nginx
service nginx start

# start sendmail
/usr/local/bin/sendmail_setup.sh

# start php-fpm in foreground
exec php-fpm --nodaemonize
