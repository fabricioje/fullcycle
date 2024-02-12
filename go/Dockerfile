FROM golang:1.22.0-alpine3.19 as build

WORKDIR /app

COPY go.mod ./
COPY main.go ./

RUN go build -o /server



FROM scratch

WORKDIR /

COPY --from=build /server /server

EXPOSE 8080

ENTRYPOINT [ "/server" ]