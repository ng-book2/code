
docker build -t angular2-rxjs-chat .
docker run -it --name rxjs-chat -v "$PWD":/data -w /data angular2-rxjs-chat

