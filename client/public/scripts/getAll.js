const getAllTelegraphs = async () => {
    const results = await fetch("http://localhost:3000/telegraphs");
    const data = await results.json()
    console.log(data)
}