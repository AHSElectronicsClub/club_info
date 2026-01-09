package main

import (
	"bufio"
	"encoding/json"
	"log"
	"net"
)

func HandleConn(conn net.Conn) {
	defer conn.Close()

	reader := bufio.NewReader(conn)
	decoder := json.NewDecoder(reader)

	// do some sql magic to get the correct bouy based on the uuid from connection
	var bouy Bouy // This will be the bouy

	sample := Sample{}
	if err := decoder.Decode(&sample); err != nil {
		log.Println("error decoding payload")
	}
	bouy.Data = append(bouy.Data, sample)

	// Push data back to db from here
}
