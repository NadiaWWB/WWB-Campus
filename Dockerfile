FROM php:5.6.25-fpm
# as of 2016-08-24, production machines run PHP 5.5.9-1ubuntu4.19
# 5.6.25 seems to be the oldest tag on https://hub.docker.com/_/php/

# several things in this initial RUN block
# we use && here because of docker's line-caching logic:
# https://developer.atlassian.com/blog/2016/06/common-dockerfile-mistakes/
#
#  * install OS packages
#  * remove default nginx site
#  * install PHP extensions (https://github.com/docker-library/docs/tree/master/php#how-to-install-more-php-extensions)
#  * install newrelic PHP agent
#
# NOTE: the php5-memcached extension requires memcached to be installed, and
# by default puts its memcached.so file in a weird place, so we link it to the
# right place

ADD https://github.com/kelseyhightower/confd/releases/download/v0.11.0/confd-0.11.0-linux-amd64 /usr/local/bin/confd

RUN apt-get update && \
  apt-get install -y \
    git \
    libiconv-hook-dev \
    libmcrypt-dev \
    libpng-dev \
    mcrypt \
    nginx \
    memcached \
    php5-imagick \
    sendmail \
    unzip \
    wget \
  && rm /etc/nginx/sites-enabled/default \
  && docker-php-ext-install \
    mbstring \
    mysqli \
    pdo_mysql \
    mcrypt \
    gd \
  && apt-get install -y libmagickwand-dev --no-install-recommends \
  && pecl install imagick \
  && docker-php-ext-enable imagick \
  && apt-get install -y php5-memcached \
  && ln -s /usr/lib/php5/20131226/memcached.so /usr/local/lib/php/extensions/no-debug-non-zts-20131226/memcached.so \
  && ln -s /etc/php5/mods-available/memcached.ini /usr/local/etc/php/conf.d/memcached.ini \
  && chmod +x /usr/local/bin/confd \
  && chown -R www-data:www-data /var/www \
  && mkdir -p /etc/php-fpm.d/ \
  && mkdir -p /var/log/php-fpm/ \
  && touch /var/log/php-fpm/access_log.log \
  && mkdir -p /wwb-data/ \
  && chown -R www-data:www-data /wwb-data

# install craftcms
USER www-data
RUN git clone https://github.com/pixelandtonic/Craft-Release.git /var/www/craft && \
  cd /var/www/craft && \
  git reset --hard 4adefbf02beff042ac02bdf2106dd137609a2735 && \
  mkdir -p /wwb-data/runtime/logs && \
  touch /wwb-data/runtime/logs/craft.log

USER root
# add config file for php-fpm
# install startup script
# install custom logic and extensions
COPY ./docker-config/php-fpm.conf /usr/local/etc/php-fpm.d/www.conf
COPY ./docker-config/nginx.conf /etc/nginx/nginx.conf
COPY ./tools/wwb_init.sh /usr/local/bin
COPY ./tools/sendmail_setup.sh /usr/local/bin
COPY ./craft/app/ /var/www/craft/app
COPY ./craft/config/ /var/www/craft/config
COPY ./craft/plugins/ /var/www/craft/plugins
COPY ./craft/storage/ /var/www/craft/storage
COPY ./templates/ /var/www/templates
COPY ./html/ /var/www/html
COPY ./docker-config/confd /etc/confd
