import { searchMemory } from "../retrieval/memorySearch"
import { CerebraEngine } from "../core/cerebraEngine"
import { captureKnowledge } from "../ingestion/knowledgeCapture"

export class NeuronAgent {

  engine = new CerebraEngine()

  start(){

  console.log("Neuron agent started")

  const discovery = {
    message: "agent observed new data pattern"
  }

  const knowledge = captureKnowledge(discovery)

  this.engine.storeMemory(knowledge)

  const results = searchMemory("agent discovery")

  console.log("Agent recalled memory:", results)

}
