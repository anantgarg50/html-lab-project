FROM centos
RUN yum install -y httpd
COPY ./test-project/ /var/www/html/
EXPOSE 80
CMD ["/usr/sbin/apachectl", "-D", "FOREGROUND"]
