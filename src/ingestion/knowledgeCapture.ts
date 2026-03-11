export function captureKnowledge(data:any){

  const entry = {
    type: "agent_knowledge",
    timestamp: Date.now(),
    payload: data
  }

  console.log("Knowledge captured:", entry)

  return entry

}
