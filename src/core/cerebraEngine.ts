import { ShelbyClient } from "../memory/shelbyClient"

export class CerebraEngine {

  shelby = new ShelbyClient()

  constructor(){
    console.log("Cerebra engine initialized")
  }

  storeMemory(entry:any){

    console.log("Storing memory:", entry)

    this.shelby.store(entry)

  }

}
