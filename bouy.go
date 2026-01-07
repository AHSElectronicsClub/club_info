package main

import (
	"time"

	"github.com/google/uuid"
)

type Bouy struct {
	ID       uuid.UUID
	Name     string
	Battery  int16
	Scanners []Scanner
}

type Scanner struct {
	ID      uuid.UUID
	Battery int16
	Data    []Measurement
}

type Measurement struct {
	Time          time.Time `json:"time"`
	OxygenContent float64   `json:"oxygen_content"`
	// All of the other data points will go here
}
