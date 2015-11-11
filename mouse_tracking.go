package main

import (
  "github.com/gorilla/mux"
  "fmt"
  "net/http"
)

func main(){
  r := mux.NewRouter()
  r.HandleFunc("/", HomeHandler)
  http.ListenAndServe(":8000", r)
}

func HomeHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Add("Access-Control-Allow-Origin", "http://localhost:9090")
    w.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    fmt.Println("Test")
}
