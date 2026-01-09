package main

import (
	"time"

	"github.com/google/uuid"
)

type BouyState int8

const (
	StateIdle BouyState = iota
	StateActive
	StateCollecting
	StateDisabled
)

var StateMap = map[BouyState]string{
	StateIdle:       "idle",
	StateActive:     "active",
	StateCollecting: "collecting",
	StateDisabled:   "disabled",
}

type Bouy struct {
	ID       uuid.UUID
	Name     string
	Battery  int16
	State    BouyState
	Scanners []BScanner
	Data     []Sample
}

type BScanner struct {
	ID      uuid.UUID
	Battery int16
}

type Sample struct {
	Time          time.Time `json:"time"`
	OxygenContent float64   `json:"oxygen_content"`
	// All of the other fields that we're collecting go here
}

func (b *Bouy) GetState() string {
	return StateMap[b.State]
}
