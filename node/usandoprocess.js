const anonimo = process.argv.indexOf("-a") != -1

if (anonimo){
    console.log("Anônimo")
}

process.stdin.on("data", (data) => {
    process.stdout.write(data)
})