FROM ubuntu:latest
RUN apt-get update
CMD ["echo","hello from ubuntu container"]