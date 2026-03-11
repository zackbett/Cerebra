import { CerebraEngine } from "../core/cerebraEngine"
import { captureKnowledge } from "../ingestion/knowledgeCapture"

export class NeuronAgent {

  engine = new CerebraEngine()

  start(){

    console.log("Neuron agent started")

    const discovery = {
      message: "example agent discovery"
    }

    const knowledge = captureKnowledge(discovery)

    console.log("Agent captured knowledge:", knowledge)

  }

}
